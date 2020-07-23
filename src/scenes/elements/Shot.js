import Phaser from 'phaser';

class Shot extends Phaser.GameObjects.Sprite {
  constructor(scene, playerPositionX, playerPositionY) {
    super(scene, playerPositionX + 10, playerPositionY - 100, 'shot');

    scene.add.existing(this);
    this.play('shot_anim');

    // physics
    scene.physics.world.enableBody(this);
    this.body.velocity.y = -250;

    // add to group
    scene.shots.add(this);
  }

  update() {
    if (this.y < 100) {
      this.destroy();
    }
  }
}

export default Shot;