let btn = document.getElementById("btn");
let nav = document.querySelector(".nav");

btn.addEventListener("click", () =>{
    if(btn.classList.contains("active")){
        nav.classList.remove("active");
        btn.classList.remove("active");
    }
    else{
        nav.classList.add("active");
        btn.classList.add("active");
    }
});