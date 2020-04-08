import buttons from '../data/buttons.js';

const activeButtons = () => {
  activeClickButton();
  addActiveClassOnPressKey();
  removeActiveClass();
};

const activeClickButton = () => {
  document.querySelector('.keyboard').addEventListener('click', (e) => {
    for (let i = 0; i < buttons.length; i++) {
      if (e.code === buttons[i].code && e.target.classList.contains('keyboard__key')) {
        e.click();
      }
    }
  });
};

const addActiveClassOnPressKey = () => {
  document.addEventListener('keydown', (e) => {
    iterationButtons(e, 'add', 'keyboard__key-active');
  });
};

const removeActiveClass = () => {
  document.addEventListener('keyup', (e) => {
    iterationButtons(e, 'remove', 'keyboard__key-active');
  });
};

const iterationButtons = (e, action, className) => {
  for (let i = 0; i < buttons.length; i++) {
    if (e.code === buttons[i].code) {
      if (action === 'add') {
        buttons[i].lineItem.classList.add(`${className}`);
      } else if (action === 'remove') {
        buttons[i].lineItem.classList.remove(`${className}`);
      }
    }
  }
};

export default activeButtons;
