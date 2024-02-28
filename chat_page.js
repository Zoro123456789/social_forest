const firebaseConfig = {
      apiKey: "AIzaSyAUTVfmACaq5gh6oD6OCiDfcg6JOu3sDeQ",
      authDomain: "social-foresttttttt.firebaseapp.com",
      databaseURL: "https://social-foresttttttt-default-rtdb.firebaseio.com",
      projectId: "social-foresttttttt",
      storageBucket: "social-foresttttttt.appspot.com",
      messagingSenderId: "895169138395",
      appId: "1:895169138395:web:aef9d8c0035ec92d78c6fe",
      measurementId: "G-KBXNTQC92T"
    };
    
    
 firebase.initializeApp(firebaseConfig);

 user_name=localStorage.getItem("user_name");
 room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="chat_page.html";
}