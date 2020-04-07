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
};

const textareaCreator = () => {
  const textarea = document.createElement('textarea');
  textarea.classList.add('keyboard__textarea');
  textarea.innerText = 'Привет! Видишь клавиаутуру? и я не вижу, а она есть! :D В общем, друг, были у меня тут проблемки, короновирус все дела в общем если что ты увидел здесь классный функционал и классно оценил, а пока ты смотришь я пишу как раз этот функционал :D';
  document.querySelector('.keyboard').append(textarea);
};

const linesCreator = () => {
  for (let i = 1; i <= 5; i++) {
    const keyboardLines = document.createElement('div');
    keyboardLines.classList.add('keyboard__line');
    keyboardLines.setAttribute('data-line', `${i}`);
    document.querySelector('.keyboard').append(keyboardLines);

    for (let j = 0; j < buttons.length; j++) {
      if (i === buttons[j].row) {
        const lineItem = document.createElement('div');
        lineItem.classList.add(`keyboard__key-${buttons[j].width}`);
        lineItem.innerHTML = `<span class="key__content">${buttons[j].content.ru}</span>`;
        keyboardLines.append(lineItem);
      }
    }
  }
};

export default init;
