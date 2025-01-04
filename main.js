const logo = document.querySelector('.logo');
const header = document.querySelector('header');
const heroContent = document.querySelector('.hero-content');
const btn = document.querySelectorAll('.btn');

btn.forEach(btn => {
    btn.style.transform = 'translateY(150%)';
    btn.style.opacity = '0';
});
heroContent.style.transform = 'translateY(100%)';
heroContent.style.opacity = '0';
header.style.transform = 'translateY(-100%)';
logo.addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', () => {
    header.style.transform = 'translateY(0)';
    heroContent.style.transform = '';
    heroContent.style.opacity = '1';

    btn.forEach(btn => {
        btn.style.transition = '2s';
        btn.style.transform = 'translateY(0)';
        btn.style.opacity = '1';
    });
});
btn.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.transition = '0.5s';
    });
});



const about = document.querySelector('.about');

window.addEventListener('scroll', () => {
    const aboutPosition = about.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (aboutPosition < screenPosition) {
        about.style.opacity = '1';
        about.style.transform = 'translateY(0)';
    } else {
        about.style.opacity = '0';
        about.style.transform = 'translateY(100px)';
    }
});

// Add initial styles
about.style.opacity = '0';
about.style.transform = 'translateY(100px)';
about.style.transition = 'all 1s ease';

const contact = document.querySelector('.contact');

window.addEventListener('scroll', () => {
    const contactPosition = contact.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (contactPosition < screenPosition) {
        contact.style.opacity = '1';
        contact.style.transform = 'translateX(0)';
    } else {
        contact.style.opacity = '0';
        contact.style.transform = 'translateX(-100px)';
    }
});

// Add initial styles
contact.style.opacity = '0';
contact.style.transform = 'translateX(-100px)';
contact.style.transition = 'all 1s ease';

// Burger menu functionality
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    btn.forEach(btn => {
        if(nav.classList.contains('active')){
            btn.style.opacity = '0';
        }else{
            btn.style.opacity = '1';
        }
    });
    // Toggle body scroll when menu is active
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : 'auto';
    document.body.style.maxHeight = nav.classList.contains('active') ? '100vh' : 'auto';
    if(!nav.classList.contains('active')){
        document.body.style = '';
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
        btn.forEach(btn => {
            btn.style.opacity = '1';
        });
    }
});


