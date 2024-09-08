import { Size, Sprite, Text } from "pixi.js";
import AssetsLoader from "../AssetsLoader/AssetsLoader";
import { AbstractScene } from "./AbstractScene";
import GameLoader from "../GameLoader";

export class LoadingScene extends AbstractScene {
    private background: Sprite;
    private progressText: Text;

    constructor() {
        super("LoadingScene");
        this.build();
        GameLoader.onAssetsProgress = (progress) => { this.handlerAssetsProgress(progress) };
    }

    private handlerAssetsProgress(progress: number) {
        this.progressText.text = Math.round(progress * 100) + "%";
    }

    private build() {
        this.background = new Sprite(AssetsLoader.gameTextures.loadScreen.background);
        this.background.anchor.set(0.5);

        this.progressText = new Text({
            text: '0%',
            style: {
                fontFamily: "'Courier New', Courier, monospace'",
                fontSize: 24,
                fill: 0xff1010,
            }
        });
        this.progressText.anchor.set(0.5);
        this.progressText.y = this.progressText.height;

        this.container.addChild(this.background);
        this.container.addChild(this.progressText);
    }

    override resize(size: Size): void {
        super.resize(size);
        this.container.position = {
            x: size.width / 2,
            y: size.height / 2
        }
    }
}
