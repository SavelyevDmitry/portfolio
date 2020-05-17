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

    let containerEl = document.querySelector('#section-portfolio__projects-wrapper');
    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });

    const filterToggles = document.querySelectorAll('.section-portfolio__filters button'); // все кнопки-переключатели
    const portfolioBigCards = document.querySelectorAll('.section-portfolio__project '); // вс карточки  работ

    for (let i = 0; i < filterToggles.length; i++) {

        filterToggles[i].addEventListener('click', function () {
            if (i == 0) {

                for (let j = 0; j < 2; j++) {

                    portfolioBigCards[j].classList.add('section-portfolio__project--big')
                }

            } else {

                for (let j = 0; j < 2; j++) {
                    portfolioBigCards[j].classList.remove('section-portfolio__project--big')
                }
            }
        });
    }

}) 