import Phaser from 'phaser';

class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, fontColor, key1, key2, text) {
    super(scene);
    this.scene = scene;
    this.x = x;
    this.y = y;
    const button = this.scene.add.image(x, y, key1).setInteractive();
    const buttonText = this.scene.add.bitmapText(x, y, 'pixelFont', text, 30);
    Phaser.Display.Align.In.Center(buttonText, button);
    this.add(button);
    this.add(buttonText);
    this.button = button;
    button.on('pointerdown', () => {
      button.setTexture(key2);
    });
    button.on('pointerup', () => {
      button.setTexture(key1);
    });
    this.scene.add.existing(this);
  }
}

export default Button;