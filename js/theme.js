const themeButton = document.getElementById("themeButton");
const themeMenu = document.getElementById("themeMenu");


// Open / close theme menu

themeButton.addEventListener("click", function () {

    if (themeMenu.style.display === "block") {

        themeMenu.style.display = "none";

    } else {

        themeMenu.style.display = "block";

    }

});


// Change theme

function changeTheme(theme) {

    if (theme === "Forest") {

        backgroundVideo.src = "video/poki.mp4";

    }

    else if (theme === "Bedroom") {

        document.body.style.backgroundImage =
            "url('images/BedRoomtheme.jpg')";

    }

    else if (theme === "Winter") {

        document.body.style.backgroundImage =
            "url('images/Winter.jpg')";

    }

    else if (theme === "Study room") {
            backgroundVideo.src = "video/cozyroom.mp4";
        

    }
    else if (theme === "Cat playing") {
            backgroundVideo.src = "video/chill.mp4";
    }


    // Close menu after selecting

    themeMenu.style.display = "none";
}

// =========================
// TIMER
// =========================

const timerButton = document.getElementById("timerButton");
const timerPanel = document.getElementById("timerPanel");
const closeTimer = document.getElementById("closeTimer");

const timerDisplay = document.getElementById("timerDisplay");
const startTimer = document.getElementById("startTimer");
const resetTimer = document.getElementById("resetTimer");

const presetButtons = document.querySelectorAll(".timer-presets button");


let timeLeft = 25 * 60;
let timerInterval = null;
let timerRunning = false;


// Open timer
timerButton.addEventListener("click", function () {

    if (timerPanel.style.display === "block") {
        timerPanel.style.display = "none";
    } else {
        timerPanel.style.display = "block";
    }

});


// Close timer
closeTimer.addEventListener("click", function () {

    timerPanel.style.display = "none";

});


// Update display
function updateTimerDisplay() {

    const minutes = Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

}


// Start timer
startTimer.addEventListener("click", function () {

    if (timerRunning) {

        clearInterval(timerInterval);

        timerRunning = false;

        startTimer.innerHTML = `
            <i data-lucide="play"></i>
            Start
        `;

        lucide.createIcons();

        return;
    }


    timerRunning = true;

    startTimer.innerHTML = `
        <i data-lucide="pause"></i>
        Pause
    `;

    lucide.createIcons();


    timerInterval = setInterval(function () {

        if (timeLeft > 0) {

            timeLeft--;

            updateTimerDisplay();

        } else {

            clearInterval(timerInterval);

            timerRunning = false;

            startTimer.innerHTML = `
                <i data-lucide="play"></i>
                Start
            `;

            lucide.createIcons();

        }

    }, 1000);

});


// Reset timer
resetTimer.addEventListener("click", function () {

    clearInterval(timerInterval);

    timerRunning = false;

    timeLeft = 25 * 60;

    updateTimerDisplay();

    startTimer.innerHTML = `
        <i data-lucide="play"></i>
        Start
    `;

    lucide.createIcons();

});


// Preset times
presetButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        clearInterval(timerInterval);

        timerRunning = false;

        const minutes = Number(button.dataset.time);

        timeLeft = minutes * 60;

        updateTimerDisplay();

        startTimer.innerHTML = `
            <i data-lucide="play"></i>
            Start
        `;

        lucide.createIcons();

    });

});


// Initial display
updateTimerDisplay();