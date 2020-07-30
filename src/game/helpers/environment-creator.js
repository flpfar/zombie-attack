import gameSettings from '../settings/game-settings';

const createBackground = (scene) => {
  scene.background = scene.add.tileSprite(0, 0, gameSettings.canvasWidth, gameSettings.canvasHeight, 'background');
  scene.background.setOrigin(0, 0);
};

const createRandomZombie = () => `zombie${Math.floor(Math.random() * 2) + 1}`;

export { createBackground, createRandomZombie };