function redirectToRoomName() {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "index.html";
}

function logout() {
    console.log(name);
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}