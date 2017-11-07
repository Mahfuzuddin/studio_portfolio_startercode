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
 
  
var Projects = database.ref("Projects");

Projects.on('value', function(snapshot) {
 $('.project1').empty();
 var Projects = snapshot.val();
console.log(Projects);
for (var key in Projects){
 var div = $('<div class="col-sm-4 portfolio-item">');
 var thumbnail = $('<div class="thumbnail text-center">');
 var name = $('<h4 class="text-center">');
 name.text(Projects[key].name);
 var image = $('<img src="" class="img-responsive">');
 image.attr("src", Projects[key].image_url);

 thumbnail.append(name);
 thumbnail.append(image);
 div.append(thumbnail);
 $('.project1').append(div);
}});