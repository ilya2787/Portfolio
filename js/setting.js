const header_burger = document.querySelector('.header-menu');
const body_doc = document.querySelector('body');


$(document).ready(function () {
    $('.header-burger').click(function (event) { 
    $('.header-burger,.header-menu').toggleClass('active');

    if (header_burger.classList.contains('active')){
        body_doc.setAttribute('style', 'overflow: hidden;');
        document.querySelector('.header-burger').classList.remove('Exit');
        document.querySelector('.header-menu').classList.remove('Exit');
    }else{
        body_doc.setAttribute('style', 'overflow-x: hidden;');
        document.querySelector('.header-burger').classList.add('Exit');
        document.querySelector('.header-menu').classList.add('Exit');
    }
    });

    
    $('a').on('click', function() {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 1000,  
            easing: "linear" 
        });

        return false;
    });
    
});

const header_menu_a = header_burger.getElementsByTagName('a');
for (var i = 0; header_menu_a.length; i++) header_menu_a[i].addEventListener('click', RemuveClass);

function RemuveClass(event){
    document.querySelector('.header-burger').classList.remove('active');
    document.querySelector('.header-menu').classList.remove('active');
    document.querySelector('.header-burger').classList.add('Exit');
    document.querySelector('.header-menu').classList.add('Exit');
    body_doc.setAttribute('style', 'overflow-x: hidden;');
};










