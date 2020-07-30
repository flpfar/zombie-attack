import Phaser from 'phaser';
import gameSettings from '../settings/game-settings';

class Zombie extends Phaser.GameObjects.Sprite {
  constructor(scene, zombie) {
    const startPositionX = Phaser.Math.Between(25, gameSettings.canvasWidth - 25);
    const startPositionY = -Phaser.Math.Between(100, 200);
    super(scene, startPositionX, startPositionY, `${zombie}-move`);

    this.zombie = zombie;
    this.scene.add.existing(this);

    // physics
    scene.physics.world.enableBody(this);
    if (zombie === 'zombie2') {
      this.body.setSize(40, 70);
    } else {
      this.body.setSize(70, 70);
    }

    // add to group
    scene.zombies.add(this);

    this.anims.play(`${zombie}-move_anim`, true);
    this.isDead = false;
    this.move();
  }

  update() {
    if (this.y > gameSettings.canvasHeight) {
      if (this.scene.player.alpha === 1) {
        this.scene.score.enemyPass();
      }
      this.resetPos();
    }
  }

  resetPos() {
    this.y = -75;
    const randomX = Phaser.Math.Between(25, gameSettings.canvasWidth - 25);
    this.x = randomX;
  }

  move() {
    const randomY = Phaser.Math.Between(100, 150);
    this.body.velocity.y = randomY;
  }

  revive() {
    this.isDead = false;
    this.anims.stop(null, false);
    this.anims.play(`${this.zombie}-move_anim`, true);
    this.resetPos();
    this.move();
  }

  die() {
    this.isDead = true;
    this.anims.stop(null, false);
    this.anims.play(`${this.zombie}-die_anim`, true);
    this.body.velocity.y = 0;

    this.scene.time.addEvent({
      delay: 2000,
      callback: this.revive,
      callbackScope: this,
      loop: false,
    });
  }
}

export default Zombie;