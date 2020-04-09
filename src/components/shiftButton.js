import buttons from '../data/buttons.js';
import * as CONST from '../constants.js';

export const activeShiftButton = (itemsArr) => {
  const items = itemsArr;
  document.querySelector('.keyboard').addEventListener('keydown', (e) => {
    if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (sessionStorage.getItem('lang') === 'ru')) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerText = `${buttons[i].altContent.ru.toUpperCase()}`;
        }
      }
    } else if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (sessionStorage.getItem('lang') === 'en')) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerText = `${buttons[i].altContent.en.toUpperCase()}`;
        }
      }
    }
  });
};

export const disableShiftButton = (itemsArr) => {
  const items = itemsArr;
  document.querySelector('.keyboard').addEventListener('keyup', (e) => {
    if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (sessionStorage.getItem('lang') === 'ru')) {
      for (let i = 0; i < items.length; i++) {
        items[i].innerText = `${buttons[i].content.ru}`;
      }
    } else if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (sessionStorage.getItem('lang') === 'en')) {
      for (let i = 0; i < items.length; i++) {
        items[i].innerText = `${buttons[i].content.en}`;
      }
    }
  });
};
