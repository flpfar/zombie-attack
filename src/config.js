import Phaser from 'phaser';
import gameSettings from './game-settings';
import MainScene from './scenes/MainScene';
import GameScene from './scenes/GameScene';

const config = {
  type: Phaser.AUTO,
  width: gameSettings.canvasWidth,
  height: gameSettings.canvasHeight,
  scene: [MainScene, GameScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
};

export default config;