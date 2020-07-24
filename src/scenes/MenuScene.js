import Phaser from 'phaser';
import gameSettings from '../game-settings';
import Button from './elements/Button';

class MenuScene extends Phaser.Scene {
  constructor() {
    super('menuScene');
  }

  create() {
    this.logo = this.add.image(gameSettings.canvasWidth / 2, 120, 'logo');

    this.startButton = new Button(this, (gameSettings.canvasWidth / 4), gameSettings.canvasHeight / 2 - 50, 'Play', 0.6);
    this.startButton.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: () => { this.scene.start('gameScene'); },
        callbackScope: this,
        loop: false,
      });
    });

    this.creditsButton = new Button(this, (gameSettings.canvasWidth / 4), gameSettings.canvasHeight / 2 - 20, 'Credits', 0.4, 20);
    this.creditsButton.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: () => { this.scene.start('creditsScene'); },
        callbackScope: this,
        loop: false,
      });
    });
  }
}

export default MenuScene;