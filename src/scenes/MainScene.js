import Phaser from 'phaser';
import backgroundImage from '../assets/images/background.jpg';
import shotSprite from '../assets/spritesheets/shot.png';
import playerDieSprite from '../assets/spritesheets/player-die.png';
import playerMoveSprite from '../assets/spritesheets/player-move.png';
import playerShotSprite from '../assets/spritesheets/player-shot.png';
import zombie1DieSprite from '../assets/spritesheets/zombie1-die.png';
import zombie1MoveSprite from '../assets/spritesheets/zombie1-move.png';
import zombie2DieSprite from '../assets/spritesheets/zombie2-die.png';
import zombie2MoveSprite from '../assets/spritesheets/zombie2-move.png';

import createAnimations from './helpers/animations-creator';

class MainScene extends Phaser.Scene {
  constructor() {
    super('mainScene');
  }

  preload() {
    this.load.image('background', backgroundImage);

    this.load.spritesheet('shot', shotSprite, { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-die', playerDieSprite, { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-move', playerMoveSprite, { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('player-shot', playerShotSprite, { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('zombie1-die', zombie1DieSprite, { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('zombie1-move', zombie1MoveSprite, { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('zombie2-die', zombie2DieSprite, { frameWidth: 100, frameHeight: 100 });
    this.load.spritesheet('zombie2-move', zombie2MoveSprite, { frameWidth: 100, frameHeight: 100 });
  }

  create() {
    this.scene.start('gameScene');
    createAnimations(this);
  }
}

export default MainScene;