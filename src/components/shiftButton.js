import buttons from '../data/buttons.js';
import * as CONST from '../constants.js';

export const activeShiftButton = (itemsArr, capsPress) => {
  const items = itemsArr;
  document.addEventListener('keydown', (e) => {
    if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (sessionStorage.getItem('lang') === 'ru')) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerHTML = `<span class="key__content">${capsPress ? buttons[i].altContent.ru.toUpperCase() : buttons[i].altContent.ru}</span>`;
        }
      }
    } else if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (sessionStorage.getItem('lang') === 'en')) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerHTML = `<span class="key__content">${capsPress ? buttons[i].altContent.en.toUpperCase() : buttons[i].altContent.en}</span>`;
        }
      }
    }
  });
};

export const disableShiftButton = (itemsArr, capsPress) => {
  const items = itemsArr;
  document.addEventListener('keyup', (e) => {
    if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (sessionStorage.getItem('lang') === 'ru')) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerHTML = `<span class="key__content">${capsPress ? buttons[i].content.ru.toUpperCase() : buttons[i].content.ru}</span>`;
        }
      }
    } else if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (sessionStorage.getItem('lang') === 'en')) {
      for (let i = 0; i < items.length; i++) {
        if (buttons[i].type !== 'functional') {
          items[i].innerHTML = `<span class="key__content">${capsPress ? buttons[i].content.en.toUpperCase() : buttons[i].content.en}</span>`;
        }
      }
    }
  });
};
