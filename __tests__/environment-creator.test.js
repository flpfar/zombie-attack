import * as environmentCreator from '../src/game/helpers/environment-creator';

describe('Environment creator helper', () => {
  describe('createRandomZombie', () => {
    it('must return a string "zombie1" or "zombie2"', () => {
      const randomZombie = environmentCreator.createRandomZombie();
      expect(['zombie1', 'zombie2']).toContain(randomZombie);
    });
  });
});