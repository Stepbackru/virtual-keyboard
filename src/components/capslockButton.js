import buttons from '../data/buttons.js';
import * as CONST from '../constants.js';

const capslockHandler = (itemsArr, capsPress) => {
  const items = itemsArr;
  document.addEventListener('keydown', (e) => {
    if ((e.code === CONST.CAPSLOCK_CODE) && (sessionStorage.getItem('lang') === 'ru') && (capsPress)) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerHTML = `<span class="key__content">${buttons[i].content.ru.toUpperCase()}</span>`;
        }
      }
    } else if ((e.code === CONST.CAPSLOCK_CODE) && (sessionStorage.getItem('lang') === 'en') && (capsPress)) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerHTML = `<span class="key__content">${buttons[i].content.en.toUpperCase()}</span>`;
        }
      }
    } else if ((e.code === CONST.CAPSLOCK_CODE) && (sessionStorage.getItem('lang') === 'ru') && (!capsPress)) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerHTML = `<span class="key__content">${buttons[i].content.ru}</span>`;
        }
      }
    } else if ((e.code === CONST.CAPSLOCK_CODE) && (sessionStorage.getItem('lang') === 'en') && (!capsPress)) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerHTML = `<span class="key__content">${buttons[i].content.en}</span>`;
        }
      }
    }
  });
};

export default capslockHandler;
