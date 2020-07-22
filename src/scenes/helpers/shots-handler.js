import Phaser from 'phaser';
import Shot from '../elements/Shot';

const shoot = (scene) => new Shot(scene, scene.player.x, scene.player.y);

const handleShots = (scene) => {
  if (Phaser.Input.Keyboard.JustDown(scene.spaceBar)) {
    if (scene.player.active) {
      shoot(scene);
    }
  }

  for (let i = 0; i < scene.shots.getChildren().length; i += 1) {
    const shot = scene.shots.getChildren()[i];
    shot.update();
  }
};

export default handleShots;
