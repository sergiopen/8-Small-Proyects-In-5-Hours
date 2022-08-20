let btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    let firstColor = Math.floor(Math.random() * 999) + 100;
    xd = document.body.style.backgroundColor = "#" + firstColor;
});