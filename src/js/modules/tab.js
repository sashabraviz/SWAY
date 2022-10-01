export function istab() {

document.querySelectorAll('.nav__tab-link').forEach((item) => 
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#','');

    document.querySelectorAll('.nav__tab-link').forEach(
        (child) => child.classList.remove('.nav__tab-link--active')
    );

    document.querySelectorAll('.check__tab-body-conteiner').forEach(
        (child) => child.classList.remove('__active')
    );

    item.classList.add('__active');
    document.getElementById(id).classList.add('__active');
  })
); 

document.querySelector('.nav__tab-link').click();
}