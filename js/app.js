function move() {
  var elem = document.getElementById("myBar");
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1  + '%';
    }
  }
}

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
  task.on('state_changed',

  function progess(snapshot){
    var percentage = (snapshot.bytesTransferred /
    snapshot.totalBytes) * 100;
    uploder.value= percentage;
  },

  function error (err) {

  },

  function complete () {

  }
);
});
