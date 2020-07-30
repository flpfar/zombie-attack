const createAnimations = (scene) => {
  scene.anims.create({
    key: 'shot_anim',
    frames: scene.anims.generateFrameNumbers('shot', {
      start: 0,
      end: 1,
    }),
    frameRate: 10,
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
    key: 'player-die_anim',
    frames: scene.anims.generateFrameNumbers('player-die', {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: 0,
  });

  scene.anims.create({
    key: 'zombie1-move_anim',
    frames: scene.anims.generateFrameNumbers('zombie1-move', {
      start: 0,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: 'zombie1-die_anim',
    frames: scene.anims.generateFrameNumbers('zombie1-die', {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: 0,
  });

  scene.anims.create({
    key: 'zombie2-move_anim',
    frames: scene.anims.generateFrameNumbers('zombie2-move', {
      start: 0,
      end: 3,
    }),
    frameRate: 5,
    repeat: -1,
  });

  scene.anims.create({
    key: 'zombie2-die_anim',
    frames: scene.anims.generateFrameNumbers('zombie2-die', {
      start: 0,
      end: 3,
    }),
    frameRate: 10,
    repeat: 0,
  });
};

export default createAnimations;
