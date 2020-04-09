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
          textarea.value = `${textarea.value.substring(0, textarea.selectionStart)}\t${textarea.value.substring(textarea.selectionEnd)}`;
          setPositionCursor(textarea, textarea.selectionStart + 1);
          break;
        case CONST.ENTER:
          textarea.value = `${textarea.value.substring(0, textarea.selectionStart)}\n${textarea.value.substring(textarea.selectionEnd)}`;
          setPositionCursor(textarea, textarea.selectionStart + 1);
          break;
        case CONST.BACKSPACE:
          if (textarea.selectionStart !== textarea.selectionEnd) {
            textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}${textarea.value.slice(textarea.selectionEnd)}`;
            setPositionCursor(textarea, textarea.selectionStart);
          } else if (textarea.selectionStart !== 0) {
            textarea.value = `${textarea.value.slice(0, textarea.selectionStart - 1)}${textarea.value.slice(textarea.selectionEnd)}`;
            setPositionCursor(textarea, textarea.selectionEnd);
          } else {
            setPositionCursor(textarea, textarea.selectionEnd);
          }
          break;
        case CONST.DEL:
          if (textarea.selectionStart !== textarea.selectionEnd) {
            textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}${textarea.value.slice(textarea.selectionEnd)}`;
          } else if (textarea.selectionEnd !== textarea.value.length) {
            textarea.value = `${textarea.value.slice(0, textarea.selectionStart)}${textarea.value.slice(textarea.selectionStart + 1)}`;
          }
          setPositionCursor(textarea, textarea.selectionStart);
          break;
        case CONST.ARROWLEFT:
          setPositionCursor(textarea, textarea.selectionStart - 1);
          break;
        case CONST.ARROWDOWN:
          setPositionCursor(textarea, textarea.value.length);
          break;
        case CONST.ARROWRIGHT:
          setPositionCursor(textarea, textarea.selectionStart + 1);
          break;
        case CONST.CAPSLOCK:
          capsPress = !capsPress;
          capslockHandler(keysContent, capsPress);
          break;
        case CONST.SHIFT:
          activeShiftButton(keysContent);
          break;
        case CONST.CTRL:
          break;
        case CONST.ALT:
          break;
        case CONST.WIN:
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
  let langText = '';

  document.addEventListener('keyup', (e) => {
    const button = buttons.find((item) => item.code === e.code);
    if (e.code === CONST.SHIFT_LEFT_CODE || e.code === CONST.SHIFT_RIGHT_CODE) {
      button.lineItem.click();
      for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].type !== 'functional') {
          if (sessionStorage.getItem('lang') === 'ru') {
            langText = buttons[i].content.ru;
          } else {
            langText = buttons[i].content.en;
          }
          keysContent[i].innerText = langText;
        }
      }
    }
    if (button) {
      button.lineItem.classList.remove('keyboard__key-active');
    }
  });
};

const setPositionCursor = (textarea, position) => {
  const tx = textarea;
  tx.focus();
  tx.selectionStart = position;
  tx.selectionEnd = position;
};

export default activeButtons;
