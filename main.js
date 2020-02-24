const navLinks = document.querySelectorAll('.nav_link');
const closeBtns = document.querySelectorAll('.nav_link_close');


navLinks.forEach(elem=>elem.addEventListener('click',open));
closeBtns.forEach(elem=>elem.addEventListener('click',close));

function open(e){        
    e.target.classList.add('open');
    e.target.style = 'z-index: 10;'   
}
function close(e){ 
    e.target.parentElement.parentElement.classList.remove('open');  
    setTimeout(function(){
        e.target.parentElement.parentElement.style = 'z-index: 0;';   
    },500);  
 }
 