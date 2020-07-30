import Phaser from 'phaser';
import gameSettings from '../settings/game-settings';
import Button from '../elements/Button';
import * as inputTextHandler from '../helpers/input-text-handler';

class MenuScene extends Phaser.Scene {
  constructor() {
    super('menuScene');
    this.playerName = '';
  }

  create() {
    this.logo = this.add.image(gameSettings.canvasWidth / 2, 120, 'logo');

    // texts
    this.createText(gameSettings.canvasWidth / 2, 260, '- Player name -', 24);
    this.playerNameInput = inputTextHandler.createInputField(this, gameSettings.canvasWidth / 2, 290, '[ Enter your name ]');
    inputTextHandler.handleInput(this, this.playerNameInput, this.playerName);

    // buttons
    this.createButtons();
  }

  createButtons() {
    this.createStartButton();
    this.createInstructionsButton();
    this.createCreditsButton();
  }

  createStartButton() {
    this.startButton = new Button(this, (gameSettings.canvasWidth / 4), gameSettings.canvasHeight / 2 - 82, 'Play', 0.7);
    this.createClickEvent(this.startButton, () => {
      this.sys.game.globals.preferences.playerName = this.playerNameInput.text;
      this.scene.start('gameScene');
    });
  }

  createInstructionsButton() {
    this.instructionsButton = new Button(this, (gameSettings.canvasWidth / 4), gameSettings.canvasHeight / 2 - 54, 'Instructions', 0.5, 20);
    this.createClickEvent(this.instructionsButton, () => { this.scene.start('instructionsScene'); });
  }

  createCreditsButton() {
    this.creditsButton = new Button(this, (gameSettings.canvasWidth / 4), gameSettings.canvasHeight / 2 - 30, 'Credits', 0.5, 20);
    this.createClickEvent(this.creditsButton, () => { this.scene.start('creditsScene'); });
  }

  createClickEvent(button, functionToCall) {
    button.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: functionToCall,
        callbackScope: this,
        loop: false,
      });
    });
  }

  createText(x, y, text, size) {
    const newText = this.add.bitmapText(x, y, 'pixelFont', text, size);
    newText.setOrigin(0.5);
  }
}


export default MenuScene;