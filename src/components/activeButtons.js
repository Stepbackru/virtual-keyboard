import buttons from '../data/buttons.js';
import * as CONST from '../constants.js';
import * as SHIFT from './shiftButton.js';
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
          SHIFT.activeShiftButton(keysContent);
          SHIFT.disableShiftButton(keysContent);
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
    e.preventDefault();
    const button = buttons.find((item) => item.code === e.code);
    button.lineItem.classList.add('keyboard__key-active');
    button.lineItem.click();
  });
};

const removeActiveClass = () => {
  document.addEventListener('keyup', (e) => {
    const button = buttons.find((item) => item.code === e.code);
    button.lineItem.classList.remove('keyboard__key-active');
  });
};

// const setPositionCursor = () => {
//   textarea.selectionStart -= 1;
// };

export default activeButtons;
