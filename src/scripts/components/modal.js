const handleEsc = (evt) => {
  if (evt.key === 'Escape') {
    const opened = document.querySelector('.popup_is-opened');
    if (opened) closePopup(opened);
  }
};

export const openPopup = (popup) => {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keyup', handleEsc);
};

export const closePopup = (popup) => {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keyup', handleEsc);
};

export const initPopupClose = (popup) => {
  popup.querySelector('.popup__close').addEventListener('click', () => closePopup(popup));
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target === popup) closePopup(popup);
  });
};
