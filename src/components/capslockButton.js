import buttons from '../data/buttons.js';
import * as CONST from '../constants.js';

const capslockHandler = (e, itemsArr, capsPress) => {
  const items = itemsArr;
  if (e.code === CONST.CAPSLOCK_CODE) {
    for (let i = 0; i < items.length; i++) {
      if (buttons[i].type !== 'functional') {
        if (capsPress) {
          items[i].classList.add('key__content-shift');
        } else {
          items[i].classList.remove('key__content-shift');
        }
      }
    }
  }
};

export default capslockHandler;
