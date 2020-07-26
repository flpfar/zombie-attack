import Phaser from 'phaser';
import gameSettings from '../settings/game-settings';
import Button from '../elements/Button';
import formatZeros from '../helpers/output-formatter';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('gameOverScene');
  }

  create() {
    this.createText(gameSettings.canvasWidth / 2, 80, '--= GAME OVER =--', 50);

    this.createText(gameSettings.canvasWidth / 2, 140, `YOUR SCORE: ${this.sys.game.globals.preferences.playerScore}`, 34);

    this.createScoreBoard();

    this.restartButton = new Button(this,
      (gameSettings.canvasWidth / 4), (gameSettings.canvasHeight / 2) - 60, 'Play Again', 0.8);

    this.restartButton.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: () => { this.scene.start('gameScene'); },
        callbackScope: this,
        loop: false,
      });
    });

    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.spaceBar.on('down', () => {
      this.scene.start('gameScene');
    });

    this.mainMenuButton = new Button(this, (gameSettings.canvasWidth / 4), (gameSettings.canvasHeight / 2) - 25, 'Main Menu', 0.5);

    this.mainMenuButton.button.on('pointerdown', () => {
      this.time.addEvent({
        delay: 300,
        callback: () => { this.scene.start('menuScene'); },
        callbackScope: this,
        loop: false,
      });
    });
  }

  createScoreBoard() {
    const scores = this.sys.game.globals.scores.sort((a, b) => b.score - a.score).slice(0, 5);
    let height = 200;
    this.createText(gameSettings.canvasWidth / 2 - 10, height, 'TOP 5 PLAYER', 24, 1);
    this.createText(gameSettings.canvasWidth / 2 + 10, height, 'SCORE', 24, 0);
    height += 10;
    scores.forEach(player => {
      height += 20;
      this.createText(gameSettings.canvasWidth / 2 - 10, height, player.user.toUpperCase(), 20, 1);
      this.createText(gameSettings.canvasWidth / 2 + 10, height, formatZeros(player.score), 20, 0);
    });
  }

  createText(x, y, text, size, origin = 0.5) {
    const newText = this.add.bitmapText(x, y, 'pixelFont', text, size);
    newText.setOrigin(origin, origin === 1 ? 0 : origin);
  }
}

export default GameOverScene;