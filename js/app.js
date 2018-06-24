var config = {
  apiKey: "AIzaSyD7m-SNXr4XUXFoX9AqQTjIUW0cqxkTNKg",
  authDomain: "easy-code-sn.firebaseapp.com",
  databaseURL: "https://easy-code-sn.firebaseio.com",
  projectId: "easy-code-sn",
  storageBucket: "easy-code-sn.appspot.com",
  messagingSenderId: "1075281073613"
};
firebase.initializeApp(config);

//Get elements
var uploader = document.getElementById('uploder');
var fileButton = document.getElementById('fileButton');

//Listen to file selection
fileButton.addEventListener('change', function(e) {
  //Get file
  var file = e.target.files[0];
  //Create a storage ref
  var storageRef = firebase.storage().ref('user_fotos/' + file.name);
  //Upload file
  var task= storageRef.put(file);
  //Update progress bar
});
