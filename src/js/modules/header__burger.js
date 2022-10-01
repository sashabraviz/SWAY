export function isBurger() {
const iconMenu =  document.querySelector('.header__burger');
const menuBody =  document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
 const navLinks = document.querySelectorAll('.nav__link[data-goto]');
if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
        navLink.addEventListener("click", onnavLinkClick);
    });

    function onnavLinkClick(e) {
        const navLink = e.target;
        if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
            const gotoBlock = document.querySelector(navLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                 document.body.classList.remove('_lock');
                 iconMenu.classList.remove('_active');
                 menuBody.classList.remove('_active');               
            }
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
}