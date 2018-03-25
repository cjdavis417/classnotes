// this is the nav array
var navHeaders = [
    home = {
        name: 'Home',
        subheader: [
            home = {
                name: 'Home',
                href: 'index.html'
            }
        ]
     },
     html = {
         name: 'HTML',
         subheader: [
            forms = { 
                name: 'Forms',
                href: 'forms.html',
            }
        ]
     },
    css = {
        name: 'CSS',
        subheader: [
            selectors = {
                name: 'Selectors',
                href: 'selectors.html'
            },
            pseudoElements = {
                name: 'PseudoElements',
                href: 'pseudoElements.html'
            }
        ]
    },
    consol = {
        name: 'Console',
        subheader: [
            consolenotes = {
                name: 'Console',
                href: 'consolenotes.html'
            }
        ]
    },
    gitBasics = {
        name: 'Git Basics',
        subheader: [
            git = {
            name: 'Git Basics',
            href: 'gitbasics.html'
            }
        ]
    },
    gitHub = {
        name: 'GIT Hub',
        subheader: [
            github = {
                name: 'GIT Hub',
                href: 'github.html'
            }
        ]
    },
    ruby = {
        name: 'Ruby',
        subheader: [
            ruby = {
                name: 'Ruby',
                href: 'ruby.html'
            }
        ]
    },
    javascript = {
        name: 'JavaScript',
        subheader: [
            loops = {
                name: 'Loops',
                href: 'loops.html'
            },
            arrays = {
                name: 'Arrays',
                href: 'arrays.html',
            },
            objects = {
                name: 'Objects',
                href: 'objects.html'
            },
            helpful = {
                name: 'Helpful Objects',
                href: 'helpful.html'
            },
            codeConvert = {
                name: 'Code Converter',
                href: 'codeconverter.html'
            }
        ]
    },
    ajax = {
        name: 'AJax',
        subheader: [
            basics = {
                name: 'Basics',
                href: 'ajaxbasics.html'
            }
        ]
    }
]

var nav = document.getElementById('navigator');
var navUL = document.createElement('UL');

// loops through array and creates navigation
for (var i = 0; i < navHeaders.length; i++){

    if (navHeaders[i].subheader.length < 2 && navHeaders[i].name === navHeaders[i].subheader[0].name) {
        // creates li node
        var nodeLI = document.createElement('LI');
        //navUL.appendChild(nodeLI);
        
        // creates anchor and link
        var linkNode = document.createElement('A');
        var textNode = document.createTextNode(navHeaders[i].name);
        linkNode.appendChild(textNode);
        
        // adds link attribute
        linkNode.href = navHeaders[i].subheader[0].href;
        // // appends anchor to li
        nodeLI.appendChild(linkNode);
    } else {
        // creates li node
        var nodeLI = document.createElement('LI');

        //creates div, adds header text, and adds class
        var liDiv = document.createElement('DIV');
        var liDivText = document.createTextNode(navHeaders[i].name);
        liDiv.appendChild(liDivText);
        liDiv.classList.add('dropdown');

        // 2nd nested div and class
        var divContent = document.createElement('DIV');
        divContent.classList.add('dropdown-content');

        // builds links inside div dropdown
        for (var z = 0; z < navHeaders[i].subheader.length; z++) {
            var linkNode = document.createElement('A');
            var textNode = document.createTextNode(navHeaders[i].subheader[z].name);
            linkNode.appendChild(textNode);
            linkNode.href = navHeaders[i].subheader[z].href;
            divContent.appendChild(linkNode);
        }

        //appends div to li
        liDiv.appendChild(divContent);
        nodeLI.appendChild(liDiv);

    };

    // adds li to ul, and ul to nav
    navUL.appendChild(nodeLI);
    nav.appendChild(navUL);
};

