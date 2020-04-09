import buttons from '../data/buttons.js';
import * as CONST from '../constants.js';
import activeShiftButton from './shiftButton.js';
import capslockHandler from './capslockButton.js';

const activeButtons = () => {
  activeClickButton();
  addActiveClassOnPressKey();
  removeActiveClass();
};

const activeClickButton = () => {
  const textarea = document.querySelector('.keyboard__textarea');
  const keysContent = [...document.querySelectorAll('.key__content')];
  let capsPress = false;

  document.querySelector('.keyboard').addEventListener('click', (e) => {
    if (e.target.classList.contains('keyboard__key')) {
      switch (e.target.innerText) {
        case CONST.TAB:
          textarea.value += '\t';
          break;
        case CONST.CAPSLOCK:
          capsPress = !capsPress;
          capslockHandler(keysContent, capsPress);
          break;
        case CONST.SHIFT:
          activeShiftButton(keysContent);
          break;
        case CONST.ENTER:
          textarea.value += '\n';
          break;
        case CONST.BACKSPACE:
          textarea.value = textarea.value.slice(0, -1);
          break;
        case CONST.CTRL:
          break;
        case CONST.ALT:
          break;
        default:
          textarea.value += e.target.innerText;
      }
      textarea.focus();
    }
  });
};

const addActiveClassOnPressKey = () => {
  document.addEventListener('keydown', (e) => {
    const button = buttons.find((item) => item.code === e.code);
    if (button) {
      e.preventDefault();
      if ((e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) && (e.repeat)) {
        return null;
      }
      if ((e.code === CONST.CAPSLOCK_CODE) && (e.repeat)) {
        return null;
      }
      button.lineItem.classList.add('keyboard__key-active');
      button.lineItem.click();
    }
    return null;
  });
};

const removeActiveClass = () => {
  const keysContent = [...document.querySelectorAll('.key__content')];
  const lang = sessionStorage.getItem('lang');

  document.addEventListener('keyup', (e) => {
    const button = buttons.find((item) => item.code === e.code);
    if (e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) {
      button.lineItem.click();
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].type !== 'functional') {
          keysContent[i].innerText = buttons[i].content[lang];
        }
      }
    }
    if (button) {
      button.lineItem.classList.remove('keyboard__key-active');
    }
  });
};

// const setPositionCursor = () => {
//   textarea.selectionStart -= 1;
// };

export default activeButtons;
