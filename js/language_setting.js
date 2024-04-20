const allLeng = ['RU', "EN"];
const language_panel = document.querySelector('.language_block');
const language_panel_a = document.querySelector('.language_block_a');
const language_panel_a_btn = document.querySelectorAll('.land_btn');
const Lang_p = language_panel.querySelector('.language_block_p');
const RU = document.getElementById('RU');
const EN = document.getElementById('EN');

function Language(){   
    
    let hash = window.location.hash;
    hash = hash.substring(1);
    if(allLeng.includes(hash)){
        Lang_p.innerHTML = hash; 
        for (let key in Language_arrya){
         let elem = document.querySelector('.lng_'+key) ;
            if(elem){
                elem.innerHTML = Language_arrya[key][hash];
            }
        }  
    }   
    
}

Language();


language_panel.addEventListener('click', (e) => {
    language_panel_a.classList.toggle('active_p_language');
});


language_panel_a_btn.forEach((a) => {
    a.addEventListener('click', (e) => {
        location.href = a.href;
        location.reload();
    })
});




