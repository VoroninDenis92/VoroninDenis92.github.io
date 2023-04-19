const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuBlock = document.querySelector('.menu__block'),
      menuOverlay = document.querySelector('.menu__over'),
      closeElem = document.querySelectorAll('.menu__close, .menu__link a');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

function closeNav() {
    menu.classList.remove('active');
}

closeElem.forEach(el => el.addEventListener('click', closeNav));

menu.addEventListener('click', (e) => {
    if (e.target != menuBlock) {
        closeNav();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && menu.classList.contains('active')) {
        closeNav();
    }
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});
