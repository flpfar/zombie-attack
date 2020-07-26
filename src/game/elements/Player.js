import Phaser from 'phaser';
import gameSettings from '../settings/game-settings';

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    const startPositionX = gameSettings.canvasWidth / 2;
    const startPositionY = gameSettings.canvasHeight - 75;
    super(scene, startPositionX, startPositionY, 'player-move');
    this.scene.add.existing(this);

    // physics
    scene.physics.world.enableBody(this);
    this.body.setCollideWorldBounds(true);
    this.body.setSize(40, 80);

    // set properties
    this.startPositionX = startPositionX;
    this.startPositionY = startPositionY;
    this.isDead = false;

    // key controls
    this.cursorKeys = scene.input.keyboard.createCursorKeys();
  }

  moveManager() {
    const leftKeyDown = this.cursorKeys.left.isDown;
    const rightKeyDown = this.cursorKeys.right.isDown;
    const upKeyDown = this.cursorKeys.up.isDown;
    const downKeyDown = this.cursorKeys.down.isDown;

    if ((leftKeyDown || rightKeyDown || upKeyDown || downKeyDown) && !this.isDead) {
      this.anims.play('player-move_anim', true);

      if (leftKeyDown) {
        this.body.setVelocityX(-gameSettings.playerSpeed);
      } else if (rightKeyDown) {
        this.body.setVelocityX(gameSettings.playerSpeed);
      }
      if (upKeyDown) {
        this.body.setVelocityY(-gameSettings.playerSpeed);
      } else if (downKeyDown) {
        this.body.setVelocityY(gameSettings.playerSpeed);
      }
    } else {
      this.body.setVelocity(0, 0);
      if (!this.isDead) {
        this.anims.stop(null, false);
      }
    }
  }

  resetPos() {
    this.x = this.startPositionX;
    this.y = gameSettings.canvasHeight + 200;
  }

  revive() {
    this.anims.play('player-move_anim', false);
    this.resetPos();

    this.alpha = 0.5;
    this.isDead = false;

    this.scene.tweens.add({
      targets: this,
      y: this.startPositionY,
      ease: 'Power1',
      duration: 1000,
      repeat: 0,
      onComplete: () => {
        this.body.enable = true;
        this.scene.time.addEvent({
          delay: 1500,
          callback: () => {
            this.alpha = 1;
          },
          callbackScope: this,
          loop: false,
        });
      },
      callbackScope: this,
    });
  }

  die() {
    this.isDead = true;
    this.body.enable = false;
    this.anims.play('player-die_anim', true);

    this.scene.time.addEvent({
      delay: 2000,
      callback: this.revive,
      callbackScope: this,
      loop: false,
    });
  }
}

export default Player;