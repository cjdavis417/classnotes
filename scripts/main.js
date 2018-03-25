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


// ****** beginning of masonry.pkgd.js stuff ****** //

// adds masonry attribute and value to all articles
var article = document.getElementsByTagName('article');

for (var i = 0; i < article.length; i++) {
    article[i].classList.add('grid-item')
}

// initialize masonry
var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    //columnWidth: 200,
    gutter: 5,
    horizontalOrder: true,
    fitWidth: true,
    // originLeft: true,
    // origintTop: true
});


