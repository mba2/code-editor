    
// Initialize Firebase
    let config = {
        apiKey: "AIzaSyCXwp4swc8izbLAnIRm7C9QqfKkbgiaeiE",
        authDomain: "code-editor-5c1b3.firebaseapp.com",
        databaseURL: "https://code-editor-5c1b3.firebaseio.com",
        projectId: "code-editor-5c1b3",
        storageBucket: "code-editor-5c1b3.appspot.com",
        messagingSenderId: "76658150537"
      };
      firebase.initializeApp(config);
        
      var model__users = firebase.database().ref().child('users');
      // model__users.on('value', snap => console.log(snap.val()));
