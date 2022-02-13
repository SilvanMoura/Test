let buttonMobile = document.querySelector('.cabecalho-menu-button-mobile');

function toggleMenu(){
    let navMobile = document.querySelector('.cabecalho-menu-mobile');
    navMobile.classList.toggle('active');
    buttonMobile.classList.toggle('checked');
}

buttonMobile.addEventListener('click', toggleMenu);