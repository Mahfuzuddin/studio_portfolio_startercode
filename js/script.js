//Unit 1 Portfolio with Firebase
// Use Firebase to store the images links and info for your projects. 
// Use Jquery to dynamically display the information from firebse. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

 var config = {
    apiKey: "AIzaSyAqvdI7n-ZIUCfzszekIsw-r0WnkiLiagM",
    authDomain: "my-portfolio-6092.firebaseapp.com",
    databaseURL: "https://my-portfolio-6092.firebaseio.com",
    projectId: "my-portfolio-6092",
    storageBucket: "",
    messagingSenderId: "39267230178"
  };
  firebase.initializeApp(config);
  
 var database = firebase.database();
 var Name = database.ref('firstName');
 Name.on('value', function(snapshot){
  var name = snapshot.val();
  $('.name').html(name);
 });
 var Bio = database.ref('Bio');
 Bio.on('value', function(snapshot){
  var Bio = snapshot.val();
  $('.Bio').html(Bio);
 });