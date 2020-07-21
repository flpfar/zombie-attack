const createBackground = (scene) => {
  scene.background = scene.add.tileSprite(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 'background');
  scene.background.setOrigin(0, 0);
}

export { createBackground };