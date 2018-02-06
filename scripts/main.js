// function that starts the 'to top' button.
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    // this or statement accomodates for safari OR chrome, firefox, ie, and opera.
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("button-to-top").style.display = "block";
    } else {
        document.getElementById("button-to-top").style.display = "none";
    }
}

// this function activates when the button is clicked
function topFunction() {
    document.body.scrollTop = 0;  // for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, ie, and opera
}

