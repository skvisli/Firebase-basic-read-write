var mainText = document.getElementById("mainText");
var readFire = document.getElementById("readFire");

var email = "it2901a@gmail.com";
var password = "ViErBest";
var signedIn = false;
var userId;

//Read from Firebase
function read(){
  // if (signedInCheck()) {
  //   var firebaseRef = firebase.database().ref('users/' + userId + '/temperature');
  //   firebaseRef.once('value', function(datasnapshot){
  //   readFire.innerText = 'The temperature is ' + datasnapshot.val() + ' degrees';
  // });
  // }
  if (signedInCheck()) {
    var firebaseRef = firebase.database().ref('users/' + userId + '/temperature');
    firebaseRef.once('value').then((datasnapshot) => {
    readFire.innerText = 'The temperature is ' + datasnapshot.val() + ' degrees';
  }), (error) => {
    // TODO: Handle error
    console.console.log(error.code);
  }
  }
}

//Write to Firebase
function submit(){
  if (true) {
      var messageText = mainText.value;
      var firebaseRef = firebase.database().ref();
      firebaseRef.set({temperature:messageText}).then(successfull, failed);
    }
}

//Actions for the .set() promise successfull or failed
function successfull(){
  snackbar('Data saved')
}

function failed(){
  snackbar('Error, data not saved')
}

//Create a user in FIrebase
function create(){
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}

//Login to Firebase
function login(){
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
}

//Sign out of Firebase
function signOut(){
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    signedIn = false;
    snackbar("Logged out");
  }, function(error) {
    // An error happened.
  });
}

//Sets an observer on the global Auth object. Runs whenever the Auth objecct changes
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    userId = user.uid;
    console.log(user.uid)
    var providerData = user.providerData;
    signedIn = true;
    snackbar("Logged in as " + email);
    // ...
  } else {
    // User is signed out.

  }
});

//Checks is a user is signed in or not
function signedInCheck(){
  if (signedIn) {
    return true;
  }else {
    snackbar("You need to Log in first");
    return false;
  }
}




function snackbar(text) {
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var data = {message: text};
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
  }
