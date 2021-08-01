const botton = document.querySelector(".menu-btn");
const menu = document.querySelector('.nav-menu')

botton.addEventListener('click',()=>{
                    menu.classList.toggle('show');
});


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay:500});
ScrollReveal().reveal('.cards-banner-one', {delay:500});
ScrollReveal().reveal('.cards-banner-two', {delay:500});