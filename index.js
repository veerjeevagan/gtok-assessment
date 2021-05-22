(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyByvZFxU7JqSkjfox6a557oZhnsS321uPE",
        authDomain: "gtok-assessment.firebaseapp.com",
        databaseURL: "https://gtok-assessment-default-rtdb.firebaseio.com",
        projectId: "gtok-assessment",
        storageBucket: "gtok-assessment.appspot.com",
        messagingSenderId: "471018179393",
        appId: "1:471018179393:web:42ebfab692854b6b5cefc0",
        measurementId: "G-LN1CH1H0C2"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

    var push_to_firebase = function(data){
      alert("Thanks for sending a message. I'll try and get back to you as soon as possible.")
      var db = firebase.firestore();

      db.collection("messages").add({
          name: data["name"],
          email: data["email"],
          message: data["msg"],
          timestamp: Date.now()
      })
      .then(function(docRef) {
          console.log("Message sent, ID: ", docRef.id);
          location.reload();
      })
      .catch(function(error) {
          console.error("Message could not be sent: ", error);
      });
    }

    var contact_submit = function(){
      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var msg = document.getElementById("message");

      var data = {
        "name": name.value,
        "email": email.value,
        "msg": msg.value
      }
      push_to_firebase(data);

    }

    document.getElementById("submit_msg").addEventListener("click", contact_submit);
  })();