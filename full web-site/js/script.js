const main = document.getElementById("main");
const banner = document.querySelector(".banner");
const mainSections = document.querySelectorAll(".main-style-section");

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function(){
    preloader.classList.add("preloader-finished");
});


// fixed navbar
const navbar = document.querySelector('.main-nav');
const topLink  = document.querySelector('.top-link');
//fixed navbar
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-main-nav');
    }
    else {
        navbar.classList.remove('fixed-main-nav');
    }

    if (scrollHeight > navHeight) {
        topLink.classList.add("show-link");
    }
    else {
        topLink.classList.remove('show-link');
    }
});

// search button
const searchContent = document.querySelector(".search-content");
const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle('active-search-bar');
});

banner.addEventListener("click", () => {
    searchBar.classList.remove('active-search-bar');
});

// footer copyright

const date = document.getElementById("date");
date.innerHTML =  new Date().getFullYear();
