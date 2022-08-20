function createHearts(){
    let heartDiv = document.createElement("div");
    let rndPos = Math.floor(Math.random()*1500);
    heartDiv.classList.add("heart-div");
    heartDiv.innerHTML = "&#9829";
    heartDiv.style.left = rndPos + "px";
    document.querySelector(".div-container").append(heartDiv);
    setTimeout(() =>{
        heartDiv.remove();
    }, 8000)
}

createHearts();
setInterval(createHearts, 300);