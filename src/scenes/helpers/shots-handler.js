import Phaser from 'phaser';
import Shot from '../elements/Shot';

const shoot = (scene) => new Shot(scene, scene.player.x, scene.player.y);

const handleShots = (scene) => {
  if (Phaser.Input.Keyboard.JustDown(scene.spaceBar)) {
    if (!scene.player.isDead) {
      shoot(scene);
    }
  }
};

export default handleShots;
