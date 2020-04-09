import buttons from '../data/buttons.js';
import * as CONST from '../constants.js';

const shiftButtonHandler = () => {
  const keysContent = [...document.querySelectorAll('.key__content')];
  activeShiftButton(keysContent);
  disableShiftButton(keysContent);
};

const activeShiftButton = (keysContent) => {
  const items = keysContent;
  document.querySelector('.keyboard').addEventListener('keydown', (e) => {
    if (e.code === CONST.SHIFT_LEFT_CODE || CONST.SHIFT_RIGHT_CODE) {
      if (sessionStorage.getItem('lang') === 'ru') {
        for (let i = 0; i < keysContent.length; i++) {
          items[i].innerText = `${buttons[i].altContent.ru}`;
        }
      } else if (sessionStorage.getItem('lang') === 'en') {
        for (let i = 0; i < keysContent.length; i++) {
          items[i].innerText = `${buttons[i].altContent.en}`;
        }
      }
    }
  });
};

const disableShiftButton = (keysContent) => {
  const items = keysContent;
  document.querySelector('.keyboard').addEventListener('keyup', (e) => {
    if (e.code === CONST.SHIFT_LEFT_CODE || CONST.SHIFT_RIGHT_CODE) {
      if (sessionStorage.getItem('lang') === 'ru') {
        for (let i = 0; i < keysContent.length; i++) {
          items[i].innerText = `${buttons[i].content.ru}`;
        }
      } else if (sessionStorage.getItem('lang') === 'en') {
        for (let i = 0; i < keysContent.length; i++) {
          items[i].innerText = `${buttons[i].content.en}`;
        }
      }
    }
  });
};

export default shiftButtonHandler;
