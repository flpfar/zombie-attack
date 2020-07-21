class GameScene extends Phaser.Scene {
  constructor() {
    super('gameScene');
  }

  create() {
    this.background = this.add.tileSprite(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 'background');
    this.background.setOrigin(0, 0);
  }

  update() {
    this.background.tilePositionY -= 0.5;
  }
}

export default GameScene;