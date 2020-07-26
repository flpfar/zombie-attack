import Phaser from 'phaser';
import gameSettings from '../settings/game-settings';

class Score extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene = scene;

    this.lifeIcon = this.scene.add.image(gameSettings.canvasWidth - 50, 18, 'life');
    this.lifeIcon.setOrigin(0, 0);

    this.life = gameSettings.startingLife;
    this.lifeLabel = this.scene.add.bitmapText(gameSettings.canvasWidth - 30, 20, 'pixelFont', String(this.life), 20);
  }

  playerDie() {
    this.life -= 1;
    this.updateLabel();
    if (this.life <= 0) {
      this.scene.gameOver = true;
    }
  }

  updateLabel() {
    this.lifeLabel.text = String(this.life);
  }
}

export default Score;