var mainText = document.getElementById("mainText");
var submitButton = document.getElementById("submitButton");
var readFire = document.getElementById("readFire");

//Read from Firebase
var firebaseReadRef = firebase.database().ref("temperature")

firebaseReadRef.on('value', function(datasnapshot){
  readFire.innerText = 'The temperature is ' + datasnapshot.val() + ' degrees';
});

//Write to Firebase
function submit(){

  var firebaseRef = firebase.database().ref('temperature');
  var messageText = mainText.value;

//Promise that either resolves or rejects
  firebaseRef.set(messageText).then(function successfull(){
      window.alert('Data saved');
  }, function failed(){
    window.alert('Error, data not saved');
  });
}
