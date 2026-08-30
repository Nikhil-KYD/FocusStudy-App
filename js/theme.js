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

    if (theme === "night") {

        document.body.style.backgroundImage =
            "url('images/night.jpg')";

    }

    else if (theme === "coffee") {

        document.body.style.backgroundImage =
            "url('images/coffee.jpg')";

    }

    else if (theme === "forest") {

        document.body.style.backgroundImage =
            "url('images/forest.jpg')";

    }

    else if (theme === "sunset") {

        document.body.style.backgroundImage =
            "url('images/sunset.jpg')";

    }

    else if (theme === "winter") {

        document.body.style.backgroundImage =
            "url('images/winter.jpg')";

    }

    else if (theme === "sakura") {

        document.body.style.backgroundImage =
            "url('images/sakura.jpg')";

    }


    // Close menu after selecting

    themeMenu.style.display = "none";
}