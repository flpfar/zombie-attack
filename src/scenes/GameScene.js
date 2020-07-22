import Phaser from 'phaser';
import { createBackground } from './helpers/environment-creator';
import Player from './elements/Player';
import handleShots from './helpers/shots-handler';

class GameScene extends Phaser.Scene {
  constructor() {
    super('gameScene');
  }

  create() {
    createBackground(this);

    this.shot = this.add.sprite(50, 50, 'shot');
    // this.player = this.add.sprite(50, 100, 'player-move');
    this.zombie1 = this.add.sprite(150, 50, 'zombie1-die');
    // this.player.play('player-move_anim');
    this.zombie1.play('zombie1-die_anim');

    this.player = new Player(this);

    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.shots = this.add.group();
  }

  update() {
    this.player.moveManager();

    handleShots(this);
  }
}

export default GameScene;