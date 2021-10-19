var nav = document.getElementById('nav-shadow');

window.onscroll = function() {
    if (window.pageYOffset < 200) {
        nav.style.background = '#ffffff';
        nav.style.transition = '0.3s';
        nav.style.boxShadow = "0px 0px 0px 0px";
    } else {
        nav.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
        nav.style.transition = '0.5s';
    }
}