import Home from "@/pages/Home.html";
import Packages from "@/pages/Packages.jsx";
import Code from "@/pages/Code.jsx";
import Bookmark from "@/pages/Bookmark.html";
import ReactDOM from "react-dom";
import "@/assets/scss/main.scss";

// html elements
const header = document.querySelector("header");
const aside = document.querySelector("aside");
const main = document.querySelector("main");
const menuButton = header.querySelector("button");

// state
const state = {
  touchPlace: null,
};

// functions
function setPage() {
  const asideLinks = aside.querySelectorAll("a");
  if (window.innerWidth < 768) Array.from(asideLinks).forEach(elem => elem.addEventListener("click", asideClose))
  const hash = location.hash;

  if (!hash) {
    location.hash = "#Home";
  }

  asideLinks.forEach((link) => {
    if (link.href === location.href) {
      link.classList.add("active");
      document.title = `Subcortex | ${hash.substring(1)}`;
      scrollTo(0, 0);
    } else {
      link.classList.remove("active");
    }
  });

  ReactDOM.unmountComponentAtNode(main);
  switch (hash) {
    case "#Home":
      main.innerHTML = Home;
      break;
    case "#Packages":
      ReactDOM.render(Packages, main);
      break;
    case "#Code":
      ReactDOM.render(Code, main);
      break;
    case "#Bookmark":
      main.innerHTML = Bookmark;
      break;
    default:
      main.innerHTML = Home;
  }
}

function asideOpen() {
  aside.style.animation = "aside 0.2s"
  aside.style.display = "block";
}

function asideClose() {
  if (aside.style.display !== "none") {
    aside.style.transform = "translateX(-100%)";
    // aside.style.webkitTransform = "translateX(-100%)";
    aside.style.marginRight = "-280px";
    setTimeout(() => {
      aside.style.display = "none";
      aside.style.transform = "";
      // aside.style.webkitTransform = "";
      aside.style.marginRight = "";
    }, 200);
  }
}

function toggleAside() {
  if (aside.style.display === "none") {
    asideOpen();
  } else {
    asideClose();
  }
}

// listeners
window.addEventListener("load", setPage);
window.addEventListener("hashchange", setPage);
window.addEventListener("touchstart", ({ targetTouches }) => {
  state.touchPlace = targetTouches[0].clientX;
});
window.addEventListener("touchmove", ({ targetTouches }) => {
  if (state.touchPlace) {
    const swipePlace = targetTouches[0].clientX;
    const swipePercent = (window.innerWidth * 20) / 100;
    if (
      swipePlace > state.touchPlace &&
      swipePlace - state.touchPlace > swipePercent
    )
      asideOpen();
    if (
      state.touchPlace > swipePlace &&
      state.touchPlace - swipePlace > swipePercent
    )
      asideClose();
  }
});
menuButton.addEventListener("click", toggleAside);
