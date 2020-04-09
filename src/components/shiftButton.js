import buttons from '../data/buttons.js';
import * as CONST from '../constants.js';

export const activeShiftButton = (itemsArr) => {
  const items = itemsArr;
  document.addEventListener('keydown', (e) => {
    if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE)) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerText = `${(sessionStorage.getItem('lang') === 'ru') ? buttons[i].altContent.ru : buttons[i].altContent.en}`;
          items[i].classList.add('key__content-shift');
        }
      }
    }
  });
};

export const disableShiftButton = (itemsArr) => {
  const items = itemsArr;
  document.addEventListener('keyup', (e) => {
    if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE)) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerText = `${(sessionStorage.getItem('lang') === 'ru') ? buttons[i].content.ru : buttons[i].content.en}`;
          items[i].classList.remove('key__content-shift');
        }
      }
    }
  });
};
