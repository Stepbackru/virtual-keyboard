import buttons from '../data/buttons.js';

const activeButtons = () => {
  const textarea = document.querySelector('.keyboard__textarea');
  activeClickButton(textarea);
  addActiveClassOnPressKey();
  removeActiveClass(textarea);
};

const activeClickButton = (textarea) => {
  const tx = textarea;
  document.querySelector('.keyboard').addEventListener('click', (e) => {
    if (e.target.classList.contains('keyboard__key')) {
      tx.focus();
      tx.value += e.target.innerText;
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

const removeActiveClass = (textarea) => {
  const tx = textarea;
  document.addEventListener('keyup', (e) => {
    const button = buttons.find((item) => item.code === e.code);
    button.lineItem.classList.remove('keyboard__key-active');
    tx.focus();
  });
};

export default activeButtons;
