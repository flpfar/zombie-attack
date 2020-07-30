import Phaser from 'phaser';
import gameSettings from '../settings/game-settings';
import Button from '../elements/Button';

class CreditsScene extends Phaser.Scene {
  constructor() {
    super('creditsScene');
  }

  create() {
    this.logo = this.add.image(gameSettings.canvasWidth / 2, 120, 'logo');

    this.createText(gameSettings.canvasWidth / 2, 286, 'created by:', 26);
    this.createText(gameSettings.canvasWidth / 2 + 28, 320, 'FELIPE ROSA', 40);
    this.add.image(158, 300, 'author');

    this.mainMenuButton = new Button(this, (gameSettings.canvasWidth / 4), (gameSettings.canvasHeight / 2) - 30, 'Main Menu', 0.5, 24);
    this.mainMenuButton.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: () => { this.scene.start('menuScene'); },
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

export default CreditsScene;