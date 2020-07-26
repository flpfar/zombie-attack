# Zombie Attack

> You are a survivor in a zombie apocalypse. Kill as much zombies as you can and beat others' survivors scores!

![zombie-attack](https://user-images.githubusercontent.com/15898299/88477841-a6ee7980-cf19-11ea-8b06-b1b0c687c426.png)

This is a shooter game where all you have to do is kill zombies. Also, be careful to not be touched by them... they are hungry for brains!

## Built With

- Javascript ES6
- Phaser3
- Webpack
- Babel
- Jest

## Live Demo

[Zombie Attack](https://zombie-attack.netlify.app/)

## About the Game

### Mechanics

The player starts at the bottom of the screen and has the ability to move up, down, left, right, and shoot. In order to do so, all commands available are from the keyboard - Arrows for moving and Spacebar for shooting.

As the game starts, zombies start appearing from the top of the screen running towards the bottom in a vertical line with a random speed.

When the player shoots, the bullet follows a vertical path in a single speed towards the top of the screen. If it hits a zombie, both the zombie and the bullet are destroyed.

If the player is hit by a zombie he loses one life and will be revived if the life counter is greater than zero, else the game is over.

The main goal of the game is to get the highest score. This is how the score works:

- +20 points for each zombie killed
- -20 points for each shot missed
- -40 points for each zombie that crosses the bottom
- -100 points for each life lost

More zombies will be created each 400 points.

The player has 3 lives that are subtracted by 1 each time he is touched by a zombie. When it reaches 0, GAME OVER.

### Scenes

- Main - Preload the assets and starts the "Menu" scene.
- Menu - Shows the game logo, gets the player name and has the buttons "Play Game", "Instructions" and "Credits".
- Instructions - How to play and how the score works.
- Credits - Yeah, I did it!
- Game - The game itself. It has only one level and shows score and lives, besides player and zombies.
- GameOver - Shows player's score and top 5 scores, besides buttons "Menu" and "Play Again" (which can be triggered with Spacebar).

### Development Steps

- Think about the game mechanics
- Find assets (Backgrounds, Character Sprites, Buttons, etc)
- Setup the development environment with Phaser
- Load assets in the project
- Create the game scene with the first logics and physics
- Create the score system
- Refactor the code and continuous improvements to the project
- Create the menu and additional screens
- Connect the score system with the API

## Getting Started

### Setup & Run

- Clone this repository with: `git clone https://github.com/flpfar/zombie-attack.git`
- Navigate to the project folder `cd zombie-attack`
- Run `npm install`
- Run `npm start`. It will build the project and automatically open your browser in the game page.
- Have fun!
- (Optional) Run `npm run build` to create the `dist` folder for deployment.

### Tests

- Run `npm test`
- (Optional) Run `npm test -- --verbose` to check test details

## Potential Features

- Scoreboard button in MenuScene
- Powerful bullets bonus
- Soundtrack
- Random background each game
- Mobile compatibility

## 👤 Author

**Felipe Rosa**

- Github: [@flpfar](https://github.com/flpfar)
- Twitter: [@flpfar](https://twitter.com/flpfar)
- Linkedin: [Felipe Augusto Rosa](https://www.linkedin.com/in/felipe-augusto-rosa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/flpfar/zombie-attack/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Characters assets by [Eric Siegfried](http://tangosource.com/blog/open-sourcing-top-down-zombie-game/) (Tango Source)
- Button assets by [StumpyStrust](https://opengameart.org/content/ui-button) (Open Game Art)

## 📝 License

This project is [MIT](LICENSE) licensed.