import buttons from '../data/buttons.js';

const activeShiftButton = (itemsArr) => {
  const items = itemsArr;
  for (let i = 0; i < items.length; i++) {
    if (buttons[i].type !== 'functional') {
      items[i].innerText = `${(sessionStorage.getItem('lang') === 'ru') ? buttons[i].altContent.ru : buttons[i].altContent.en}`;
      items[i].classList.toggle('key__content-shift');
    }
  }
};

export default activeShiftButton;
