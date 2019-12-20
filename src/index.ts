import { Game } from "./Game";

const game = new Game({
  width: 800,
  height: 600
});

// @ts-ignore
window.game = game;
