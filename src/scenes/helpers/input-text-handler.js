const testKeys = (e) => {
  if (
    e.key !== 'Backspace'
    && e.key !== 'Enter'
    && e.key !== 'Shift'
    && e.key !== 'Alt'
    && e.key !== 'Tab'
    && e.key !== 'Control'
    && e.key !== 'Dead'
  ) {
    return true;
  }
  return false;
};

const createInputField = (scene, x, y, placeholder) => {
  const inputField = scene.add.bitmapText(x, y, 'pixelFont', placeholder, 30);
  inputField.setOrigin(0.5);
  return inputField;
};

const handleInput = (scene, inputField, inputValue) => {
  scene.input.keyboard.on('keydown', (e) => {
    if (e.key === 'Backspace' && inputValue.length !== 0) {
      inputValue = inputValue.slice(0, inputValue.length - 1);
      inputField.setText(`${inputValue}`);
    } else if (testKeys(e) && inputValue.length <= 15) {
      inputValue += e.key;
      inputField.setText(`${inputValue}`);
    }
  });
};

export { createInputField, handleInput };
