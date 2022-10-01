export function isHeader_Show() {
window.onscroll = function ShowHeader() {

    var header = document.querySelector('.header');

    if(window.pageYOffset > 50){
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}
}