$(document).ready(function(){
    
    const mobileMenuToggle = document.querySelector('.header__toggle-menu');
    const mobileMenu = document.querySelector('.header__nav');
    const overLay = document.querySelector('#overlay');

    mobileMenuToggle.addEventListener('click', function(){
        mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
        overLay.classList.toggle('active');
    })

    window.addEventListener('resize', function(){
        mobileMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        overLay.classList.remove('active');
    })

}) 