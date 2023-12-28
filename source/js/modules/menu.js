const initMenu = () => {
  let menuBtn = document.querySelector('.header__icon-wrapper');
  let header = document.querySelector('.header');

  if (menuBtn && header) {
    menuBtn.addEventListener('click', () => {
      header.classList.toggle('header--menuOpened');
    });
  }
};

export {initMenu};
