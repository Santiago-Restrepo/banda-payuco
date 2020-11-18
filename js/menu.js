const $menu = document.querySelector('.navbar');
const $button = document.querySelector('.hamburguer__menu > img');

$button.addEventListener('click',hideshow);

function hideshow(){
    if($menu.classList.contains('is-active')){
        $menu.classList.remove('is-active');
        $button.setAttribute('src', '../images/menu.svg')
    }else{
        $menu.classList.add('is-active');
        $button.setAttribute('src', '../images/boton-eliminar.svg')
    }
}
