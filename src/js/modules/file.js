export function isFile() {

const isSearch =  document.querySelector('.header__search-img');
const isSearchimg =  document.querySelector('.header__search-img-input');
if (isSearch) {
    isSearch.addEventListener("click", function(e) {
        isSearchimg.classList.toggle('_active');
    });
} else {
    isSearch.classList.remove('_active');
}
}