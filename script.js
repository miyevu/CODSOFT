function toggleMenu() {
    var menuIcon = document.querySelector('.checkbtn');
    var menuLines = document.querySelectorAll('.hamburger-lines');
    var menuList = document.querySelector('.nav-menu');

    menuIcon.classList.toggle('cross');
    menuLines[0].classList.toggle('cross-line-first');
    menuLines[2].classList.toggle('cross-line-last');
    menuLines[1].classList.toggle('hide-line');
    menuList.classList.toggle('show-menu');
}
