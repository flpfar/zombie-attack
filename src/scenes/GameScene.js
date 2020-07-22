import Phaser from 'phaser';
import { createBackground } from './helpers/environment-creator';
import Player from './elements/Player';
import Zombie from './elements/Zombie';
import Shot from './elements/Shot';
import handleShots from './helpers/shots-handler';

class GameScene extends Phaser.Scene {
  constructor() {
    super('gameScene');
  }

  create() {
    createBackground(this);

    // this.player = this.add.sprite(50, 100, 'player-move');
    // this.zombieed = this.add.sprite(50, 50, 'zombie1-die');
    // this.player.play('player-move_anim');
    // this.zombie1.play('zombie1-die_anim');

    // create groups
    this.shots = this.add.group({
      classType: Shot,
      runChildUpdate: true,
    });

    this.zombies = this.add.group({
      classType: Zombie,
      runChildUpdate: true,
    });

    this.zombie1 = new Zombie(this, 'zombie1', 250);
    this.zombie2 = new Zombie(this, 'zombie2', 150);
    this.zombie3 = new Zombie(this, 'zombie1', 200);
    this.zombie4 = new Zombie(this, 'zombie2', 300);
    this.player = new Player(this);

    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.physics.add.overlap(this.shots, this.zombies, this.hitEnemy, null, this);
  }

  update() {
    this.player.moveManager();

    handleShots(this);
  }

  hitEnemy(shot, zombie) {
    shot.destroy();
    zombie.die();
  }
}

export default GameScene;