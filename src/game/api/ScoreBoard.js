class ScoreBoard {
  constructor() {
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qp2XgNWuPWCENDXSsetv/scores/';
  }

  async getScores() {
    const response = await fetch(this.url, { mode: 'cors' });
    return response.json();
  }

  async submitScore(player, score) {
    if (typeof player !== 'string' || typeof score !== 'number') {
      return { result: 'Invalid arguments.' };
    }
    const scoreObject = { user: player, score };
    const response = await fetch(this.url, {
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(scoreObject),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }
}

export default ScoreBoard;