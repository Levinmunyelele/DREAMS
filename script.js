function toggleMenu() {
    var nav = document.querySelector('nav');
    var overlay = document.getElementById('overlay-menu');

    nav.classList.toggle('show');
    overlay.classList.toggle('show');

    if (nav.classList.contains('show')) {
        nav.querySelectorAll('a').forEach(function (el) {
            el.style.display = 'block';
        });
    } else {
        nav.querySelectorAll('a').forEach(function (el) {
            el.style.display = 'none';
        });
    }
}
