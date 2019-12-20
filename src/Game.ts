import Phaser from "phaser";
import Start from "./scenes/start";

interface IGameOptions {
  width: number;
  height: number;
}

export class Game extends Phaser.Game {
  constructor(optinos: IGameOptions) {
    super({
      type: Phaser.AUTO,
      width: optinos.width || 800,
      height: optinos.height || 600,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: [Start]
    });
  }
}
