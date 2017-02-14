var mainText = document.getElementById("mainText");
var submitButton = document.getElementById("submitButton");
var readFire = document.getElementById("readFire");

var firebaseReadRef = firebase.database().ref().child("Text")

firebaseReadRef.on('value', function(datasnapshot){
  readFire.innerText = datasnapshot.val();
});

function submit(){

  var firebaseRef = firebase.database().ref();
  var messageText = mainText.value;

  firebaseRef.push().set(messageText);
}
