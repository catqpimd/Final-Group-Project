const pianoKeys = document.querySelectorAll(".piano-keys .key");
volumeSlider = document.querySelector(".volume-slider input");
KeysCheckbox = document.querySelector(".keys-checkbox input")

let allKeys = [];


pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const playTune = (key) => {
    let audio = new Audio(`notes/${key}.wav`);
    audio.volume = volumeSlider.value;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
        clickedKey.classList.add("active");
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }
};

const handleVolume = (e) => {
    document.querySelectorAll("audio").forEach(a => (a.volume = e.target.value)); //range slider value to volume
};


const showHideKeys = () => {
    //toggles hide class check box for the wasd
    pianoKeys.forEach(key => key.classList.toggle("hide"));

}

const pressedKey = (e) => {
    //will call playTune if key pressed is in allKeys
    if (allKeys.includes(e.key)) playTune(e.key);
};

KeysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
