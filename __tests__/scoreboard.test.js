import ScoreBoard from '../src/game/api/ScoreBoard';

const mockToGetScores = () => {
  global.fetch = jest.fn(() => ({
    json: () => Promise.resolve({
      result: [
        { user: 'Player1', score: '120' },
        { user: 'Player2', score: '240' },
        { user: 'Player3', score: '1500' },
      ],
    }),
  }));
};

const mockToPostScore = () => {
  global.fetch = jest.fn(() => ({
    json: () => Promise.resolve({
      result: 'Leaderboard score created correctly.',
    }),
  }));
};

describe('ScoreBoard', () => {
  describe('getScores', () => {
    beforeAll(() => {
      mockToGetScores();
    });
    it('returns an object with all the scores from the api', async () => {
      const scoreBoard = new ScoreBoard();
      const scores = await scoreBoard.getScores();
      expect(scores.result[1]).toEqual({ user: 'Player2', score: '240' });
    });
  });

  describe('submitScore', () => {
    beforeAll(() => {
      mockToPostScore();
    });
    it('returns successful response when submitting to api whitout errors', async () => {
      const scoreBoard = new ScoreBoard();
      const scoreSubmission = await scoreBoard.submitScore('Player', 1200);
      expect(scoreSubmission.result).toEqual('Leaderboard score created correctly.');
    });
    it('returns an "Invalid Arguments" response when the arguments have the wrong type', async () => {
      const scoreBoard = new ScoreBoard();
      const scoreSubmission = await scoreBoard.submitScore(['Player'], '1200');
      expect(scoreSubmission.result).toEqual('Invalid arguments.');
    });
  });
});