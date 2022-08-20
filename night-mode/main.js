let btn = document.getElementById("btn");

btn.addEventListener("click", () =>{
    btn.classList.add("active");
    if(document.querySelector("body").classList.contains("active")){
        btn.classList.toggle("active");
    }
    document.querySelector("body").classList.toggle("active");
});