let burgerMenu = document.querySelector(".nav-toggle")
let burgerButton = document.querySelector("#nav-toggle")
let navWindow = document.querySelector(".site-navigation")
let header = document.querySelector('.main-header')

let downButton = document.querySelector("#arrow")

window.onscroll = function() {
    if (pageYOffset > 700) {
        header.classList.add('header--fixed')
    } else {
            header.classList.remove('header--fixed')
           }
    }

burgerButton.onclick = function() {
    burgerMenu.classList.toggle('active')
    navWindow.classList.toggle('site-navigation--active')
}

downButton.onclick = function() {
    window.scrollTo(0, 2800)
    }


