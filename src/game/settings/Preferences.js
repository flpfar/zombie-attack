/* eslint no-underscore-dangle: 0 */

class Preferences {
  constructor() {
    this._playerName = 'Player';
    this._playerScore = 0;
  }

  get playerName() {
    return this._playerName;
  }

  set playerName(name) {
    if (name !== '' && name !== '[ Enter your name ]') {
      this._playerName = name;
    }
  }

  get playerScore() {
    return this._playerScore;
  }

  set playerScore(score) {
    this._playerScore = score;
  }
}

export default Preferences;