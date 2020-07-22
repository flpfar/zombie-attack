const createAnimations = (scene) => {
  scene.anims.create({
    key: 'shot_anim',
    frames: scene.anims.generateFrameNumbers('shot', {
      start: 0,
      end: 2,
    }),
    frameRate: 20,
    repeat: 0,
  });

  scene.anims.create({
    key: 'player-move_anim',
    frames: scene.anims.generateFrameNumbers('player-move', {
      start: 0,
      end: 1,
    }),
    frameRate: 10,
    repeat: -1,
  });

  scene.anims.create({
    key: 'zombie1-die_anim',
    frames: scene.anims.generateFrameNumbers('zombie1-die', {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: 1,
  });
};

export default createAnimations;
