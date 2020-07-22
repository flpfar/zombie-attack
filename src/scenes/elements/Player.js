import Phaser from 'phaser';
import gameSettings from '../../game-settings';

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    const startPositionX = gameSettings.canvasWidth / 2;
    const startPositionY = gameSettings.canvasHeight - 75;
    super(scene, startPositionX, startPositionY, 'player-move');
    this.scene.add.existing(this);
    scene.physics.world.enableBody(this);
    this.body.setCollideWorldBounds(true);
    this.startPositionX = startPositionX;
    this.startPositionY = startPositionY;

    this.cursorKeys = scene.input.keyboard.createCursorKeys();
    this.spaceBar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  moveManager() {
    const leftKeyDown = this.cursorKeys.left.isDown;
    const rightKeyDown = this.cursorKeys.right.isDown;
    const upKeyDown = this.cursorKeys.up.isDown;
    const downKeyDown = this.cursorKeys.down.isDown;

    if (leftKeyDown || rightKeyDown || upKeyDown || downKeyDown) {
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
      this.anims.stop(null, false);
    }
  }
}

export default Player;