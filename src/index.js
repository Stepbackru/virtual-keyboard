import init from './components/init.js';
import activeButtons from './components/activeButtons.js';
import langHandler from './components/langHandler.js';

window.onload = () => {
  init();
  activeButtons();
  langHandler();
};
