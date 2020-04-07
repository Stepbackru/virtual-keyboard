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

  const ruKeyboardKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Up', 'Shift',
    'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'Left', 'Down', 'Right'];
  const anyKeys = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'Shift'];

  for (let i = 0; i < ruKeyboardKeys.length; i++) {
    const keyboardKey = document.createElement('div');
    keyboardKey.classList.add('keyboard__key');
    document.querySelector('.keyboard').append(keyboardKey);
    keyboardKey.innerText = ruKeyboardKeys[i];
    for (let j = 0; j < anyKeys.length; j++) {
      if (keyboardKey.innerText === anyKeys[j]) {
        keyboardKey.classList.add('keyboard__key-any');
      }
    }
  }
};

export default init;
