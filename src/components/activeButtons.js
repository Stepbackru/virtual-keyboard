import buttons from '../data/buttons.js';

const activeButtons = () => {
  // const lineItems = [...document.querySelectorAll('.keyboard__key')];
  // addActiveClassOnPressKey(lineItems);
  // removeActiveClass(lineItems);
  test();
};

const test = () => {
  document.querySelector('.keyboard').addEventListener('click', (e) => {
    for (let i = 0; i < buttons.length; i++) {
      if (e.code === buttons[i].code && e.target.classList.contains('keyboard__key')) {
        e.click();
      }
    }
  });
};
// const addActiveClassOnPressKey = (lineItems) => {
//   document.addEventListener('keydown', (e) => {
//     for (let i = 0; i < buttons.length; i++) {
//       for (let j = 0; j < lineItems.length; j++) {
//         if (e.code === buttons[i].code && buttons[i].content.ru === lineItems[j].innerText) {
//           lineItems[j].classList.add('keyboard__key-active');
//         }
//       }
//     }
//   });
// };

// const removeActiveClass = (lineItems) => {
//   document.addEventListener('keyup', (e) => {
//     for (let i = 0; i < buttons.length; i++) {
//       for (let j = 0; j < lineItems.length; j++) {
//         if (e.code === buttons[i].code && buttons[i].content.ru === lineItems[j].innerText) {
//           lineItems[j].classList.remove('keyboard__key-active');
//         }
//       }
//     }
//   });
// };

export default activeButtons;
