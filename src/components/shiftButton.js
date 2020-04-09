import buttons from '../data/buttons.js';

const activeShiftButton = (itemsArr) => {
  const items = itemsArr;
  const lang = sessionStorage.getItem('lang');
  for (let i = 0; i < items.length; i++) {
    if (buttons[i].type !== 'functional') {
      items[i].innerText = buttons[i].altContent[lang];
      items[i].classList.toggle('key__content-shift');
    }
  }
};

export default activeShiftButton;
