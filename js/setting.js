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
  
    

    $('.button_app a, .replay_menu a, .Menu a, .header-menu a').on('click', function() {

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


const header_menu_a = header_burger.querySelectorAll('.burgerA');
  
header_menu_a.forEach((a) => {
    a.addEventListener('click', RemuveClass)
})

    function RemuveClass(event){
        document.querySelector('.header-burger').classList.remove('active');
        document.querySelector('.header-menu').classList.remove('active');
        document.querySelector('.header-burger').classList.add('Exit');
        document.querySelector('.header-menu').classList.add('Exit');
        body_doc.setAttribute('style', 'overflow-x: hidden;');
    };


  


const Theme_box = document.querySelector('.ThemeCheckBox');
const HeaderDoc = document.querySelector('.header');
const mediaQuery = window.matchMedia('(max-width: 760px)');



function Header_background_1(e){
    if (e.matches){
        HeaderDoc.setAttribute('style', 'background-image: none')
    }else{
        HeaderDoc.setAttribute('style', 'background-image: url(../img/img_header1.jpg);')
    }
}

function Header_background_2(e){
    if (e.matches){
        HeaderDoc.setAttribute('style', 'background-image: none')
    }else{
        HeaderDoc.setAttribute('style', 'background-image: url(../img/img_header_white.jpg);')
    }
}


if (localStorage.getItem('darkMod') === 'dark_active' ){
    Theme_box.classList.add('ThemeCheckBox_active');
    document.body.classList.add('dark_active');
    mediaQuery.addListener(Header_background_1);
    Header_background_1(mediaQuery);
    
}else{
    mediaQuery.addListener(Header_background_2);
    Header_background_2(mediaQuery);  
}



Theme_box.onclick = function(){
    Theme_box.classList.toggle('ThemeCheckBox_active');
    const isDarc = document.body.classList.toggle('dark_active');

    if(isDarc){
        localStorage.setItem('darkMod', 'dark_active')
        mediaQuery.addListener(Header_background_1);
        Header_background_1(mediaQuery);
        
    }else{
        localStorage.setItem('darkMod', 'light')
        mediaQuery.addListener(Header_background_2);
        Header_background_2(mediaQuery);
    }

}

















