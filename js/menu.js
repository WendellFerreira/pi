const wfMenu = document.getElementById('wf-menu')
const menu = document.getElementById('menu-mobile')
const overlay = document.getElementById('overlay-menu')
const closeBtn = document.querySelector('.wf-fechar')

if (wfMenu && menu && overlay) {
  wfMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    document.body.classList.add('menu-open'); // <<< ADICIONA
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    document.body.classList.remove('menu-open'); // <<< REMOVE
  });

  menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    document.body.classList.remove('menu-open'); // <<< REMOVE
  });
}