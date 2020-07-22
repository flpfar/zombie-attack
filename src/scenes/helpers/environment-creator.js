import gameSettings from '../../game-settings';

const createBackground = (scene) => {
  scene.background = scene.add.tileSprite(0, 0, gameSettings.canvasWidth, gameSettings.canvasHeight, 'background');
  scene.background.setOrigin(0, 0);
};

const createMusic = () => {

};

export { createBackground, createMusic };