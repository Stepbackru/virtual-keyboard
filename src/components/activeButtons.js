import buttons from '../data/buttons.js';

const activeButtons = () => {
  const lineItems = [...document.querySelectorAll('.keyboard__key')];
  addActiveClassOnPressKey(lineItems);
  removeActiveClass(lineItems);
  activeClickButton();
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
    for (let i = 0; i < buttons.length; i++) {
      if (e.code === buttons[i].code) {
        buttons[i].lineItem.classList.add('keyboard__key-active');
      }
    }
  });
};

const removeActiveClass = () => {
  document.addEventListener('keyup', (e) => {
    for (let i = 0; i < buttons.length; i++) {
      if (e.code === buttons[i].code) {
        buttons[i].lineItem.classList.remove('keyboard__key-active');
      }
    }
  });
};

export default activeButtons;
