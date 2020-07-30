import Phaser from 'phaser';
import './assets/styles/style.css';
import config from './game/settings/config';
import Preferences from './game/settings/Preferences';
import ScoreBoard from './game/api/ScoreBoard';


class Game extends Phaser.Game {
  constructor() {
    super(config);
    const preferences = new Preferences();
    const scoreBoard = new ScoreBoard();
    this.globals = { preferences, scoreBoard };
  }
}

window.game = new Game();