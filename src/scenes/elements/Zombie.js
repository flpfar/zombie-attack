import Phaser from 'phaser';
import gameSettings from '../../game-settings';

class Zombie extends Phaser.GameObjects.Sprite {
  constructor(scene, zombie, score) {
    const startPositionX = Phaser.Math.Between(25, gameSettings.canvasWidth - 25);
    const startPositionY = -100;
    super(scene, startPositionX, startPositionY, zombie);
    this.scene.add.existing(this);

    // physics
    scene.physics.world.enableBody(this);
    this.body.velocity.y = 100 + (score / 10);

    // add to group
    scene.zombies.add(this);

    this.anims.play(`${zombie}_anim`, true);
  }

  update() {
    if (this.y > gameSettings.canvasHeight) {
      this.resetPos();
    }
  }

  resetPos() {
    this.y = 0;
    const randomX = Phaser.Math.Between(25, gameSettings.canvasWidth - 25);
    this.x = randomX;
  }
}

export default Zombie;