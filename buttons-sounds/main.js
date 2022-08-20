const sounds = [
    "aggressive-roar",
    "bird-chirp",
    "classic-alarm",
    "gameover",
    "lion-roar"
];

sounds.forEach((sound)=>{
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerHTML = sound;

    btn.addEventListener("click", () =>{
        stopSounds();
        document.getElementById(sound).play();
    })

    document.body.appendChild(btn);
})

function stopSounds(){
    sounds.forEach((sound) =>{
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}