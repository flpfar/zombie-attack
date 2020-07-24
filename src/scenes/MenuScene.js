import Phaser from 'phaser';
import gameSettings from '../game-settings';
import Button from './elements/Button';
import * as inputTextHandler from './helpers/input-text-handler';

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
    this.startButton = new Button(this, (gameSettings.canvasWidth / 4), gameSettings.canvasHeight / 2 - 60, 'Play', 0.7);
    this.startButton.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: () => {
          this.sys.game.globals.preferences.playerName = this.playerNameInput.text;
          this.scene.start('gameScene');
        },
        callbackScope: this,
        loop: false,
      });
    });
    this.creditsButton = new Button(this, (gameSettings.canvasWidth / 4), gameSettings.canvasHeight / 2 - 30, 'Credits', 0.5, 20);
    this.creditsButton.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: () => { this.scene.start('creditsScene'); },
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