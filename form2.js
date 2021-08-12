firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
       if(user!=null){
         window.location.href="home.html";
       }
    }
    //  else {
    //   // No user is signed in.
    //   document.getElementById("userdiv").style.display = "none";
    //   document.getElementById("logindiv").style.display = "initial";
        
  
    // }
    // log.console(user)
  }); 
  
  function login(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("pass").value;
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage)
    });
  
  } 
  // function logout(){
  //   firebase.auth().signOut();
  // }
  
  