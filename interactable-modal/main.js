let btnOpen = document.getElementById("btn-open");
let btnClose = document.getElementById("btn-close");

btnOpen.addEventListener("click", () =>{
    document.querySelector(".modal-container").classList.toggle("active");
    btnOpen.classList.remove("active");
});

btnClose.addEventListener("click", () =>{
    document.querySelector(".modal-container").classList.toggle("active");
    btnOpen.classList.add("active");
});