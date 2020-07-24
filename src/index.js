import Phaser from 'phaser';
import config from './config';
import Preferences from './Preferences';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const preferences = new Preferences();
    this.globals = { preferences };
  }
}

window.game = new Game();