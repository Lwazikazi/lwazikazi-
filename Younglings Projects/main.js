// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    authDomain:   apiKey: "AIzaSyBbg18qu-ztY2H0QM5kvbqipKoJ7j9PTXA",
    authDomain: "lwazi-website.firebaseapp.com",
    databaseURL: "https://lwazi-website.firebaseio.com",
    projectId: "lwazi-website",
    storageBucket: "lwazi-website.appspot.com",
    messagingSenderId: "288739161432",
    appId: "1:288739161432:web:7b2e9cf689c8676294a12d",
    measurementId: "G-1HS1LP9EGJ"
  }; 

  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(firstname, lastname, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstname: firstname,
      lastname: lastname,
      email:email,
      phone:phone,
      message:message
    });
  }