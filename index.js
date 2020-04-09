import init from './src/components/init.js';
import activeButtons from './src/components/activeButtons.js';
import langHandler from './src/components/langHandler.js';
import shiftButtonHandler from './src/components/shiftButton.js';

window.onload = () => {
  init();
  activeButtons();
  langHandler();
  shiftButtonHandler();
};
