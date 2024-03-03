const btn = document.getElementById('menu-btn')
const menuNav = document.getElementById('menu');
btn.addEventListener('click', navToggle);


function navToggle()
{
    btn.classList.toggle('open');
    menuNav.classList.toggle('flex');
    menuNav.classList.toggle('hidden');
}