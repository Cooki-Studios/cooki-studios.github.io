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

function toggleMode() {
    var theme = document.body.classList.contains("dark");
    var elementsToToggle = document.querySelectorAll(".dark, .light");
  
    if (theme) {
      document.getElementById("modeIcon").innerText = '🌙';
    } else {
      document.getElementById("modeIcon").innerText = '☀️';
    }
  
    elementsToToggle.forEach(function(element) {
      element.classList.toggle("dark");
      element.classList.toggle("light");
    });
  }

function addNavLink(text, right, image, url, hidden, onclick, dropdown, mobile, alt, label) {
    if (mobile) {
        mobileNavLink = document.createElement("li");
        mobileNavLinkDiv = document.createElement("div");
        mobileNavLinkDiv.classList.add("dropdown");
        mobileNavLinkContentDiv = document.createElement("div");
        mobileNavLinkContentDiv.classList.add("dropdown-content");
        mobileNavLinkContent = document.createElement("a");

        if (url != null && url != false) {
            if (url+"/" == window.location.href) {
                mobileNavLinkContent.classList.add("active");
                mobileNavLinkContent.setAttribute("disabled");
            } else {
                mobileNavLinkContent.setAttribute("href", url);
            }

            if (alt != null && alt != false) {
                mobileNavLinkContent.alt = alt;  
            }

            if (label != null && label != false) {
                mobileNavLinkContent.ariaLabel = label;
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
            mobileNavLinkContentImg.style.width = "2rem";

            if (alt != null && alt != false) {
                mobileNavLinkContentImg.alt = alt;
            }

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
    } else {
        navLink = document.createElement("li");
        navLinkDiv = document.createElement("div");
        navLinkDiv.classList.add("dropdown");
        navLinkContentDiv = document.createElement("div");
        navLinkContentDiv.classList.add("dropdown-content");
        navLinkContent = document.createElement("a");

        if (url != null && url != false) {
            if (url+"/" == window.location.href) {
                navLinkContent.classList.add("active");
                navLinkContent.setAttribute("disabled");
            } else {
                navLinkContent.setAttribute("href", url);
            }

            if (alt != null && alt != false) {
                navLinkContent.alt = alt;
            }

            if (label != null && label != false) {
                navLinkContent.ariaLabel = label;
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
            navLinkContentImg.style.width = "2rem";

            if (alt != null && alt != false) {
                navLinkContentImg.alt = alt;
            }

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

                if (dropdown[i].label != null && dropdown[i].label != false) {
                    navLinkContentLink.ariaLabel = dropdown[i].label;
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

addNavLink("<img src='img/menu.svg'>", false, false, false, true, toggleMobileNav, false, false, false, "Open menu");
addNavLink("Home", false, false, "https://cookistudios.com");
addNavLink("Games", false, false, "https://cookistudios.com/games", false, false, [{"text":"Factorised", "url":"https://cookistudios.com/games/factorised"}]);
addNavLink("Tiles", false, false, "https://cookistudios.com/tiles", false, false, [{"text":"2D (BETA)","url":"https://cookistudios.com/tiles/2d/beta"},{"text":"3D (ALPHA)","url":"https://cookistudios.com/tiles/3d/alpha"}]);
addNavLink("Wallpapers (PRE-ALPHA)", false, false, "https://cookistudios.com/wallpapers?bg-color=151515&fill-style=ffa500");
addNavLink("Random Stuff", false, false, "https://cookistudios.com/random-stuff", false, false, [{"text":"Pixel Font", "url":"https://cookistudios.com/random-stuff/fonts/pixel/Cooki's%20Pixels.ttf"},{"text":"ChatGPT Cooki Clicker", "url":"https://cookistudios.com/random-stuff/gptcookiclick"}]);
addNavLink("<p id='modeIcon' class='white'>☀️</p>", true, false, false, false, toggleMode, [{"text":"<p class='white' onclick=>🖥</p>"}], false, "Switch Theme");
addNavLink(false, true, "https://cookistudios.com/img/WhatsNew.svg", "https://cookistudios.com/whats-new", false, false, false, false, "What's New?");

document.body.appendChild(nav);

addNavLink("Home", false, false, "https://cookistudios.com", false , false, false, true);
addNavLink("Games", false, false, "https://cookistudios.com/games", false, false , false, true);
addNavLink("Tiles", false, false, "https://cookistudios.com/tiles", false, false, false, true);
addNavLink("Wallpapers (PRE-ALPHA)", false, false, "https://cookistudios.com/wallpapers?bg-color=151515&fill-style=ffa500", false , false, false, true);
addNavLink("Random Stuff", false, false, "https://cookistudios.com/random-stuff", false, false, false, true);
addNavLink("<p id='modeIcon' class='white'>☀️</p>", true, false, false, false, toggleMode, false, true);
addNavLink(false, true, "https://cookistudios.com/img/WhatsNew.svg", "https://cookistudios.com/whats-new", false, false, false, true);

document.body.appendChild(mobileNav);
