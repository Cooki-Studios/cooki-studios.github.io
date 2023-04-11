const nav = document.createElement("ul");
nav.id = "navbar";

var navLink;
var navLinkContent;
var navLinkContentImg;

function addNavLink(text, active, right, image, url) {
    navLink = document.createElement("li");
    navLinkContent = document.createElement("a");
    if (url != null) {
        navLinkContent.setAttribute("href", url);
    }
    
    if (text != false) {
        navLinkContent.innerText = text;
    }
    

    if (active) {
        navLinkContent.classList.add("active");
    }

    if (right) {
        navLink.style.cssFloat = "right";
    }

    if (image != false) {
        navLinkContentImg = document.createElement("img");
        navLinkContentImg.src = image;
        navLinkContentImg.style.margin = 0;
        navLinkContentImg.style.padding = 0;
        navLinkContentImg.style.height = "2rem";

        navLinkContent.appendChild(navLinkContentImg);
    }

    nav.appendChild(navLink);
    navLink.appendChild(navLinkContent);
}
