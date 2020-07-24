import Phaser from 'phaser';
import config from './config';
import Preferences from './Preferences';
import ScoreBoard from './ScoreBoard';


class Game extends Phaser.Game {
  constructor() {
    super(config);
    const preferences = new Preferences();
    const scoreBoard = new ScoreBoard();
    this.globals = { preferences, scoreBoard };
  }
}

window.game = new Game();