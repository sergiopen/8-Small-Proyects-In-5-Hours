let btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    createNotification();
});

function createNotification(){
    let messageNotif = document.createElement("div");
    messageNotif.textContent = "This is a message notification!";
    document.querySelector(".div-container").append(messageNotif);
    setTimeout(() =>{
        messageNotif.remove();
    }, 5000);
}