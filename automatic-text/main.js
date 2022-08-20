let text = document.querySelector(".automatic-txt");
const showTxt = "This is a incredible text :)";

let index = 0;

function updateText(){    

    document.body.innerText = showTxt.slice(0, index);

    index++;

    if(showTxt.length < index - 10){
        index = 0;
    }

    text.textContent = showTxt;
}

setInterval(updateText, 100);