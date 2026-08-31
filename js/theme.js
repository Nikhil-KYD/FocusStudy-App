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