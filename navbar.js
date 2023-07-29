const navRightDiv = document.createElement("div");
navRightDiv.classList.add("right");

const mobileNavRightDiv = document.createElement("div");
mobileNavRightDiv.classList.add("right");

var navLink;
var navLinkDiv;
var navLinkContent;
var navLinkContentDiv;
var navLinkContentLink;
var navLinkContentImg;

var mobileNavLink;
var mobileNavLinkDiv;
var mobileNavLinkContent;
var mobileNavLinkContentDiv;
var mobileNavLinkContentLink;
var mobileNavLinkContentImg;

console.log(window.location);

function addNavLink(text, right, image, url, hidden, onclick, dropdown, mobile) {
    if (mobile) {
        mobileNavLink = document.createElement("li");
        mobileNavLinkDiv = document.createElement("div");
        mobileNavLinkDiv.classList.add("dropdown");
        mobileNavLinkContentDiv = document.createElement("div");
        mobileNavLinkContentDiv.classList.add("dropdown-content");
        mobileNavLinkContent = document.createElement("a");

        if (url != null && url != false) {
            if (url == window.location.href+"/") {
                mobileNavLinkContent.classList.add("active");
            } else {
                mobileNavLinkContent.setAttribute("href", url);
            }
        }
        
        if (text != false) {
            mobileNavLinkContent.innerHTML = text;
        }

        if (image != false) {
            mobileNavLinkContentImg = document.createElement("img");
            mobileNavLinkContentImg.src = image;
            mobileNavLinkContentImg.style.margin = 0;
            mobileNavLinkContentImg.style.padding = 0;
            mobileNavLinkContentImg.style.height = "2rem";

            mobileNavLinkContent.appendChild(mobileNavLinkContentImg);
        }

        if (hidden) {
            mobileNavLinkContent.style.display = "none";
        }

        if (onclick != false) {
            mobileNavLinkContent.addEventListener("click",onclick);
        }

        if (right) {
            mobileNav.appendChild(mobileNavRightDiv);
            mobileNavRightDiv.appendChild(mobileNavLink);
        } else {
            mobileNav.appendChild(mobileNavLink);
        }

        mobileNavLink.appendChild(mobileNavLinkDiv);
        mobileNavLinkDiv.appendChild(mobileNavLinkContent);
        
        if (dropdown != undefined && dropdown != false) {
            for (let i = 0; i < dropdown.length; i++) {
                mobileNavLinkContentLink = document.createElement("a");
                mobileNavLinkContentLink.innerHTML = dropdown[i].text;
                if (dropdown[i].url != undefined) {
                    mobileNavLinkContentLink.setAttribute("href", dropdown[i].url);
                }
                mobileNavLinkDiv.appendChild(mobileNavLinkContentDiv);
                mobileNavLinkContentDiv.appendChild(mobileNavLinkContentLink);
            }
        }
    } else {
        navLink = document.createElement("li");
        navLinkDiv = document.createElement("div");
        navLinkDiv.classList.add("dropdown");
        navLinkContentDiv = document.createElement("div");
        navLinkContentDiv.classList.add("dropdown-content");
        navLinkContent = document.createElement("a");

        if (url != null && url != false) {
            if (url == window.location.href+"/") {
                navLinkContent.classList.add("active");
            } else {
                navLinkContent.setAttribute("href", url);
            }
        }
        
        if (text != false) {
            navLinkContent.innerHTML = text;
        }

        if (image != false) {
            navLinkContentImg = document.createElement("img");
            navLinkContentImg.src = image;
            navLinkContentImg.style.margin = 0;
            navLinkContentImg.style.padding = 0;
            navLinkContentImg.style.height = "2rem";

            navLinkContent.appendChild(navLinkContentImg);
        }

        if (hidden) {
            navLinkContent.style.display = "none";
        }

        if (onclick != false) {
            navLinkContent.addEventListener("click",onclick);
        }

        if (right) {
            nav.appendChild(navRightDiv);
            navRightDiv.appendChild(navLink);
        } else {
            nav.appendChild(navLink);
        }

        navLink.appendChild(navLinkDiv);
        navLinkDiv.appendChild(navLinkContent);

        if (dropdown != undefined && dropdown != false) {
            for (let i = 0; i < dropdown.length; i++) {
                navLinkContentLink = document.createElement("a");
                navLinkContentLink.innerHTML = dropdown[i].text;
                if (dropdown[i].url != undefined) {
                    navLinkContentLink.setAttribute("href", dropdown[i].url);
                }
                navLinkDiv.appendChild(navLinkContentDiv);
                navLinkContentDiv.appendChild(navLinkContentLink);
            }
        }
    }
}

var mobileNavOff = false;

function toggleMobileNav() {
    const mobileNav = document.getElementById("mobileNav");
    
    if (mobileNav.style.display == "block") {
        mobileNav.style.display = "none"
    } else {
        mobileNav.style.display = "block"
    }
}

const nav = document.createElement("ul");
const mobileNav = document.createElement("ul");
mobileNav.id = "mobileNav";

addNavLink("<img src='img/menu.svg'>", false, false, false, true, toggleMobileNav);
addNavLink("Home", false, false, "https://cooki-studios.github.io");
addNavLink("Games", false, false, "https://cooki-studios.github.io/games");
addNavLink("Tiles", false, false, "https://cooki-studios.github.io/tiles", false, false, [{"text":"2D (BETA)","url":"https://cooki-studios.github.io/tiles/2d/beta"},{"text":"3D (ALPHA)","url":"https://cooki-studios.github.io/tiles/3d/alpha"}]);
addNavLink("Wallpapers (PRE-ALPHA)", false, false, "https://cooki-studios.github.io/wallpapers?bg-color=151515&fill-style=ffa500");
addNavLink("Random Stuff", false, false, "https://cooki-studios.github.io/random-stuff", false, false, [{"text":"ChatGPT Cooki Clicker", "url":"https://cooki-studios.github.io/random-stuff/gptcookiclick"}]);
addNavLink("<p id='modeIcon' class='white'>☀️</p>", true, false, false, false, toggleMode, [{"text":"<p class='white' onclick=>🖥</p>"}]);
addNavLink(false, true, "https://cooki-studios.github.io/img/WhatsNew.svg", "https://cooki-studios.github.io/whats-new");

document.body.appendChild(nav);

addNavLink("Home", false, false, "https://cooki-studios.github.io", false , false, false, true);
addNavLink("Games", false, false, "https://cooki-studios.github.io/games", false, false , false, true);
addNavLink("Tiles", false, false, "https://cooki-studios.github.io/tiles", false, false, false, true);
addNavLink("Wallpapers (PRE-ALPHA)", false, false, "https://cooki-studios.github.io/wallpapers?bg-color=151515&fill-style=ffa500", false , false, false, true);
addNavLink("Random Stuff", false, false, "https://cooki-studios.github.io/random-stuff", false, false, false, true);
addNavLink("<p id='modeIcon' class='white'>☀️</p>", true, false, false, false, toggleMode, false, true);
addNavLink(false, true, "https://cooki-studios.github.io/img/WhatsNew.svg", "https://cooki-studios.github.io/whats-new", false, false, false, true);

document.body.appendChild(mobileNav);