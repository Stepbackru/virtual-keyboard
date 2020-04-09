import buttons from '../data/buttons.js';

const langHandler = () => {
  langChangeOnPressKeys(setLangToSessionStorage, 'ControlLeft', 'ShiftLeft');
};

const langChangeOnPressKeys = (func, ...codes) => {
  const pressed = new Set();
  document.addEventListener('keydown', (e) => {
    pressed.add(e.code);

    for (let i = 0; i < codes.length; i++) {
      if (!pressed.has(codes[i])) {
        return;
      }
    }
    pressed.clear();

    func();
  });

  document.addEventListener('keyup', (e) => {
    pressed.delete(e.code);
  });
};

const setLangToSessionStorage = () => {
  const keysContent = [...document.querySelectorAll('.key__content')];
  if (sessionStorage.getItem('lang') === 'ru') {
    for (let i = 0; i < keysContent.length; i++) {
      if (buttons[i].type !== 'functional') {
        keysContent[i].innerText = `${buttons[i].content.en}`;
      }
    }
    sessionStorage.setItem('lang', 'en');
  } else if (sessionStorage.getItem('lang') === 'en') {
    for (let i = 0; i < keysContent.length; i++) {
      if (buttons[i].type !== 'functional') {
        keysContent[i].innerText = `${buttons[i].content.ru}`;
      }
    }
    sessionStorage.setItem('lang', 'ru');
  }
};

export default langHandler;
