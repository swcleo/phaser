import Phaser from "phaser";

export default class Start extends Phaser.Scene {
  constructor() {
    super({ key: "Start" });
  }

  public preload(this: Phaser.Scene) {
    this.load.setBaseURL("http://labs.phaser.io");

    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("sky", "assets/skies/space3.png");
    this.load.image("logo", "assets/sprites/phaser3-logo.png");
    this.load.image("red", "assets/particles/red.png");
  }

  public create(this: Phaser.Scene) {
    this.add.image(400, 300, "sky");

    const particles = this.add.particles("red");

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0.3 },
      alpha: { start: 1, end: 0 },
      scaleX: { start: 1, end: 100 },
      blendMode: "ADD"
    });

    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
  }
}
