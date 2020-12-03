'use strict';

{
    window.addEventListener('scroll',()=>{

        let scroll = window.pageYOffset;
        let menu = document.getElementById('scroll');
        console.log(window.scrollY);
        if (scroll>=900){
            menu.style.display="block";
            menu.style.transition="ease 0.5s";
            menu.style.opacity="0.8";
        } else {
            menu.style.display="none";
        }
        
    });
}