let buttonMobile = document.querySelector('.cabecalho-menu-mobile');

function toggleMenu(){
    let nav = document.querySelector('.cabecalho-menu');
    nav.classList.toggle('active')
}

buttonMobile.addEventListener('click', toggleMenu);