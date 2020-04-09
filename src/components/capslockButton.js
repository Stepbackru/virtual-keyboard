import buttons from '../data/buttons.js';

const capslockHandler = (itemsArr, capsPress) => {
  const items = itemsArr;
  for (let i = 0; i < items.length; i++) {
    if (buttons[i].type !== 'functional') {
      if (capsPress) {
        items[i].classList.add('key__content-shift');
      } else {
        items[i].classList.remove('key__content-shift');
      }
    }
  }
};

export default capslockHandler;
