import Phaser from 'phaser';
import { createBackground } from '../helpers/environment-creator';

class GameScene extends Phaser.Scene {
  constructor() {
    super('gameScene');
  }

  create() {
    createBackground(this);
  }

  update() {
    this.background.tilePositionY -= 0.5;
  }
}

export default GameScene;