import Phaser from 'phaser';
import gameSettings from '../game-settings';
import Button from './elements/Button';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('gameOverScene');
  }

  create() {
    const text = this.add.bitmapText(0, 0, 'pixelFont', 'GAME OVER', 50);
    text.setPosition((gameSettings.canvasWidth / 4) + text.width / 4, 20);
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.spaceBar.on('down', () => {
      this.scene.start('gameScene');
    });

    this.restartButton = new Button(this, (gameSettings.canvasWidth / 4), 100, '#FFF', 'button', 'button-clicked', 'Play Again');
    this.restartButton.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: () => { this.scene.start('gameScene'); },
        callbackScope: this,
        loop: false,
      });
    });
  }
}

export default GameOverScene;