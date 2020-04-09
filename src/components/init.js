import buttons from '../data/buttons.js';

const init = () => {
  initKeyBoard();
};

const initKeyBoard = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.append(wrapper);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  document.querySelector('.wrapper').append(keyboard);

  textareaCreator();
  linesCreator();
  infoCreator();
};

const textareaCreator = () => {
  const textarea = document.createElement('textarea');
  textarea.classList.add('keyboard__textarea');
  document.querySelector('.keyboard').append(textarea);
  textarea.focus();
};

const linesCreator = () => {
  if (sessionStorage.getItem('lang') === null) {
    sessionStorage.setItem('lang', 'ru');
  }
  const lang = sessionStorage.getItem('lang');
  for (let i = 1; i <= 5; i++) {
    const keyboardLines = document.createElement('div');
    keyboardLines.classList.add('keyboard__line');
    keyboardLines.setAttribute('data-line', `${i}`);
    document.querySelector('.keyboard').append(keyboardLines);

    for (let j = 0; j < buttons.length; j++) {
      if (i === buttons[j].row) {
        const lineItem = document.createElement('button');
        lineItem.classList.add('keyboard__key');
        lineItem.classList.add(`keyboard__key-${buttons[j].width}`);
        lineItem.innerHTML = `<span class="key__content">${buttons[j].content[lang]}</span>`;
        keyboardLines.append(lineItem);
        buttons[j].lineItem = lineItem;
      }
    }
  }
};

const infoCreator = () => {
  const lang = sessionStorage.getItem('lang');
  const infoLang = document.createElement('p');
  const infoOS = document.createElement('p');
  infoLang.classList.add('info');
  infoOS.classList.add('info');
  infoLang.innerText = `${(lang === 'ru') ? 'Смена языка ввода Ctrl + Shift' : 'Change input language Ctrl + Shift'}`;
  infoOS.innerText = `${(lang === 'ru') ? 'Сделано в ОС Windows' : 'Developed in Windows OS'}`;
  document.querySelector('.keyboard').append(infoLang);
  document.querySelector('.keyboard').append(infoOS);
};

export default init;
