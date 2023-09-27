const navbartoggle = document.querySelector('.navbar-toggle')
const navbartoggleIcon = document.querySelector('.navbar-toggle i')
const navcachée = document.querySelector('.nav__cachée')

navbartoggle.onclick = function () {
    navcachée.classList.toggle('open')
}