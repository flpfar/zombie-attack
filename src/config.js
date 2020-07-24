import Phaser from 'phaser';
import gameSettings from './game-settings';
import MainScene from './scenes/MainScene';
import GameScene from './scenes/GameScene';
import GameOverScene from './scenes/GameOverScene';
import MenuScene from './scenes/MenuScene';
import CreditsScene from './scenes/CreditsScene';

const config = {
  type: Phaser.AUTO,
  width: gameSettings.canvasWidth,
  height: gameSettings.canvasHeight,
  scene: [MainScene, GameScene, GameOverScene, MenuScene, CreditsScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },
};

export default config;