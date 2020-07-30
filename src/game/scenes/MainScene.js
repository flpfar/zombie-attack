import Phaser from 'phaser';
import backgroundImage from '../../assets/images/background.jpg';
import authorImage from '../../assets/images/author2.png';
import logoImage from '../../assets/images/logo.png';
import buttonImage from '../../assets/images/button.png';
import buttonClickedImage from '../../assets/images/button-clicked.png';
import buttonHoverImage from '../../assets/images/button-hover.png';
import lifeImage from '../../assets/images/life.png';
import shotSprite from '../../assets/spritesheets/shot2.png';
import playerDieSprite from '../../assets/spritesheets/player-die.png';
import playerMoveSprite from '../../assets/spritesheets/player-move.png';
import playerShotSprite from '../../assets/spritesheets/player-shot.png';
import zombie1DieSprite from '../../assets/spritesheets/zombie1-die.png';
import zombie1MoveSprite from '../../assets/spritesheets/zombie1-move.png';
import zombie2DieSprite from '../../assets/spritesheets/zombie2-die.png';
import zombie2MoveSprite from '../../assets/spritesheets/zombie2-move.png';
import pixelFontImage from '../../assets/font/font.png';
import pixelFontXML from '../../assets/font/font.xml';

import createAnimations from '../helpers/animations-creator';

class MainScene extends Phaser.Scene {
  constructor() {
    super('mainScene');
  }

  preload() {
    this.load.image('background', backgroundImage);
    this.load.image('author', authorImage);
    this.load.image('life', lifeImage);
    this.load.image('button', buttonImage);
    this.load.image('button-clicked', buttonClickedImage);
    this.load.image('button-hover', buttonHoverImage);
    this.load.image('logo', logoImage);

    this.load.bitmapFont('pixelFont', pixelFontImage, pixelFontXML);

    this.load.spritesheet('shot', shotSprite, { frameWidth: 8, frameHeight: 100 });
    this.load.spritesheet('player-die', playerDieSprite, { frameWidth: 100 });
    this.load.spritesheet('player-move', playerMoveSprite, { frameWidth: 100 });
    this.load.spritesheet('player-shot', playerShotSprite, { frameWidth: 100 });
    this.load.spritesheet('zombie1-die', zombie1DieSprite, { frameWidth: 100 });
    this.load.spritesheet('zombie1-move', zombie1MoveSprite, { frameWidth: 100 });
    this.load.spritesheet('zombie2-die', zombie2DieSprite, { frameWidth: 100 });
    this.load.spritesheet('zombie2-move', zombie2MoveSprite, { frameWidth: 100 });

    const scores = this.sys.game.globals.scoreBoard.getScores();
    scores.then((response) => { this.sys.game.globals.scores = response.result; });
  }

  create() {
    createAnimations(this);
    this.scene.start('menuScene');
  }
}

export default MainScene;