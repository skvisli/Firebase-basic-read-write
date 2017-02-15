var mainText = document.getElementById("mainText");
var submitButton = document.getElementById("submitButton");
var readFire = document.getElementById("readFire");

//Read from Firebase
var firebaseReadRef = firebase.database().ref("Text")

firebaseReadRef.on('value', function(datasnapshot){
  readFire.innerText = datasnapshot.val();
});

//Write to Firebase
function submit(){

  var firebaseRef = firebase.database().ref('temperature');
  var messageText = mainText.value;

  firebaseRef.set(messageText);
}
