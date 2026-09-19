// ========================================
// AMBIENT ELEMENTS
// ========================================

const ambientButton = document.getElementById("ambientButton");
const ambientPanel = document.getElementById("ambientPanel");
const closeAmbient = document.getElementById("closeAmbient");

const ambientVolume = document.getElementById("ambientVolume");


// ========================================
// CHECK HTML ELEMENTS
// ========================================

console.log("Ambient JS loaded");

console.log("Ambient button:", ambientButton);
console.log("Ambient panel:", ambientPanel);


// ========================================
// OPEN / CLOSE AMBIENT PANEL
// ========================================

ambientButton.addEventListener("click", function () {

    console.log("Ambient button clicked");

    if (ambientPanel.style.display === "block") {

        ambientPanel.style.display = "none";

    } else {

        ambientPanel.style.display = "block";

    }

});


// ========================================
// CLOSE AMBIENT PANEL
// ========================================

closeAmbient.addEventListener("click", function () {

    ambientPanel.style.display = "none";

});


// ========================================
// AUDIO
// ========================================

const sounds = {

    rain: new Audio("audio/rain.mp3"),

    fire: new Audio("audio/fire.mp3"),

    forest: new Audio("audio/forest.mp3"),

    ocean: new Audio("audio/ocean.mp3")

};


// ========================================
// AUDIO SETTINGS
// ========================================

Object.values(sounds).forEach(function (sound) {

    sound.loop = true;

    sound.volume = 0.5;

});


// ========================================
// SOUND BUTTONS
// ========================================

const soundButtons =
    document.querySelectorAll(".sound-button");


soundButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const soundName = button.dataset.sound;

        const sound = sounds[soundName];

        const status =
            button.querySelector(".sound-status");


        // -------------------------------
        // PLAY
        // -------------------------------

        if (sound.paused) {

            sound.play();

            status.textContent = "ON";

        }

        // -------------------------------
        // PAUSE
        // -------------------------------

        else {

            sound.pause();

            status.textContent = "OFF";

        }

    });

});


// ========================================
// VOLUME
// ========================================

ambientVolume.addEventListener("input", function () {

    const volume = ambientVolume.value;


    Object.values(sounds).forEach(function (sound) {

        sound.volume = volume;

    });

});