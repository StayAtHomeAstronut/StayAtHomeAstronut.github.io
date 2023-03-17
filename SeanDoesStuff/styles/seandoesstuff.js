var header = document.getElementsByTagName('header')[0];
header.style.backgroundColor = 'transparent';

// trigger this function every time the user scrolls
window.onscroll = function (event) {
    var scroll = window.pageYOffset;

/*    for (let i = 0; i<=1; i=i+0.1){
        header.style.opacity="i";
    }
*/
    if (scroll < 5) {
        // transparent
        header.style.backgroundColor = 'transparent';
    }
    else if (scroll >= 5){
        // color
        header.style.backgroundColor = 'var(--headline-color-on-white)';
        

    }
    
}
