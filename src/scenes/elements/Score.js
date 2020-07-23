import Phaser from 'phaser';
import gameSettings from '../../game-settings';

class Score extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene);
    this.scene = scene;

    this.scoreLabel = this.scene.add.bitmapText(20, 20, 'pixelFont', 'SCORE: 000000', 20);
    this.score = 0;
  }

  enemyPass() {
    const newScore = this.score - gameSettings.scoreLossOnEnemyPass;
    this.score = (newScore > 0) ? newScore : 0;
    this.updateLabel();
  }

  hurtByEnemy() {
    const newScore = this.score - gameSettings.scoreLossOnHurt;
    this.score = (newScore > 0) ? newScore : 0;
    this.updateLabel();
  }

  hitEnemy() {
    this.score += gameSettings.scoreGainOnKill;
    this.updateLabel();
  }

  updateLabel() {
    this.scoreLabel.text = `SCORE: ${this.formatZeros()}`;
  }

  formatZeros() {
    let stringNumber = String(this.score);
    while (stringNumber.length < (6 || 2)) {
      stringNumber = `0${stringNumber}`;
    }
    return stringNumber;
  }
}

export default Score;