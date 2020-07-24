import Phaser from 'phaser';
import { createBackground } from './helpers/environment-creator';
import Player from './elements/Player';
import Zombie from './elements/Zombie';
import Shot from './elements/Shot';
import Score from './elements/Score';
import Life from './elements/Life';
import handleShots from './helpers/shots-handler';

class GameScene extends Phaser.Scene {
  constructor() {
    super('gameScene');
  }

  create() {
    createBackground(this);

    // create groups
    this.shots = this.add.group({
      classType: Shot,
      runChildUpdate: true,
    });

    this.zombies = this.add.group({
      classType: Zombie,
      runChildUpdate: true,
    });

    // create zombies and players
    this.zombie1 = new Zombie(this, 'zombie1');
    this.zombie2 = new Zombie(this, 'zombie2');
    this.zombie3 = new Zombie(this, 'zombie1');
    this.zombie4 = new Zombie(this, 'zombie2');
    this.player = new Player(this);

    // create score and life
    this.score = new Score(this);
    this.life = new Life(this);
    this.gameOver = false;

    // add keys and overlaps
    this.spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.physics.add.overlap(this.shots, this.zombies, this.hitEnemy, null, this);
    this.physics.add.overlap(this.player, this.zombies, this.hurtPlayer, null, this);
  }

  update() {
    this.player.moveManager();

    handleShots(this);
  }

  hurtPlayer(player, zombie) {
    if (player.isDead || zombie.isDead) return;
    player.die();
    this.score.hurtByEnemy();
    this.life.playerDie();
    if (this.gameOver) {
      this.time.addEvent({
        delay: 1800,
        callback: () => {
          const playerScore = this.score.score;
          const { playerName } = this.sys.game.globals.preferences;
          if (playerScore > 0) {
            this.sys.game.globals.scores.push({ user: playerName, score: playerScore });
            this.sys.game.globals.scoreBoard.submitScore(playerName, playerScore);
            this.sys.game.globals.preferences.playerScore = this.score.score;
          }
          this.scene.start('gameOverScene');
        },
        callbackScope: this,
        loop: false,
      });
    }
  }

  hitEnemy(shot, zombie) {
    if (zombie.isDead) return;
    shot.destroy();
    zombie.die();
    this.score.hitEnemy();
  }
}

export default GameScene;