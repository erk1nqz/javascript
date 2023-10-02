var nav = document.querySelector('nav');
var logo = document.querySelector('.navbar-brand')
const navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', function() {
    if (this.window.scrollY> 100) {
        nav.classList.add('bg-light', 'shadow');
        logo.classList.add('text-black')
        navLinks.forEach(navLink => {
            navLink.classList.remove('text-white')
            navLink.classList.add('text-black');
        });
    } else {
        nav.classList.remove('bg-light', 'shadow')
        logo.classList.remove('text-black')
        navLinks.forEach(navLink => {
            navLink.classList.remove('text-black')
            navLink.classList.add('text-white');
        });
    }
})