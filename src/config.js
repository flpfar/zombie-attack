import Phaser from 'phaser';
import gameSettings from './game-settings';
import MainScene from './scenes/MainScene';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';
import MenuScene from './scenes/MenuScene';

const config = {
  type: Phaser.AUTO,
  width: gameSettings.canvasWidth,
  height: gameSettings.canvasHeight,
  scene: [MainScene, GameScene, GameOverScene, MenuScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
};

export default config;