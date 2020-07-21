import MainScene from './scenes/MainScene';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  width: CANVAS_WIDTH,
  height: CANVAS_HEIGHT,
  scene: [MainScene, GameScene]
};

export default config;