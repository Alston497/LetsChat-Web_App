function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log(firebase_message_id);
   console.log(message_data);
   name = message_data['name'];
   message = message_data['message'];
   like = message-data['like'];
   name_with_tag = "<h4> "+ name + "<img class =user_tick src ='tick.png' ></h4>";
   message_with_tag = "<h4> class='message_h4'>"+ message +"</h4>";
like_button = "<button class ='btn btn-warning' id ="+firebase_message_id+" value="+like+" onclick='updateLike(this.Id)'>";
Span_with_tag = "<span class= 'glyphicon glyphicon-thumbs-up'>Like; "+like+" </span></button><hr>"; 
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
   });});}
getData();

function addRoom() {
    
}