import Phaser from 'phaser';
import gameSettings from '../settings/game-settings';
import Button from '../elements/Button';

class InstructionsScene extends Phaser.Scene {
  constructor() {
    super('instructionsScene');
  }

  create() {
    this.logo = this.add.image(gameSettings.canvasWidth / 2, 120, 'logo');

    this.createInstructions();

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

  createInstructions() {
    let height = 260;
    const scoreSystem = [
      `+ ${gameSettings.scoreGainOnKill} points for each zombie killed`,
      `- ${gameSettings.scoreLossOnMissedShot} points for each shot missed`,
      `- ${gameSettings.scoreLossOnEnemyPass} points for each zombie that crosses the bottom`,
    ];

    this.createText(gameSettings.canvasWidth / 2, height, 'GAME INSTRUCTIONS', 26);
    height += 26;
    this.createText(gameSettings.canvasWidth / 2, height, 'Use ARROWS to MOVE and SPACEBAR to SHOOT', 22);
    height += 20;
    this.createText(gameSettings.canvasWidth / 2, height, `The game is over when you lose ${gameSettings.startingLife} lives`, 22);
    height += 36;
    this.createText(gameSettings.canvasWidth / 2, height - 6, 'SCORE RULES', 26);

    scoreSystem.forEach(rule => {
      height += 20;
      this.createText(gameSettings.canvasWidth / 2, height, rule, 22);
    });
  }

  createText(x, y, text, size) {
    const newText = this.add.bitmapText(x, y, 'pixelFont', text, size);
    newText.setOrigin(0.5);
  }
}

export default InstructionsScene;