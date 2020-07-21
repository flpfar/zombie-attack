import backgroundImage from '../assets/images/background.jpg';

class MainScene extends Phaser.Scene {
  constructor() {
    super('mainScene');
  }

  preload() {
    this.load.image('background', backgroundImage);
  }

  create() {
    this.scene.start('gameScene');
  }

  update() {
  }
}

export default MainScene;