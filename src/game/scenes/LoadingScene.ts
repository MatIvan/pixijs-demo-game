import { Size, Sprite, Text } from "pixi.js";
import AssetsLoader from "../AssetsLoader/AssetsLoader";
import { AbstractScene } from "./AbstractScene";
import GameLoader from "../GameLoader";

export class LoadingScene extends AbstractScene {
    private background: Sprite;
    private progressText: Text;

    constructor() {
        super({
            name: "LoadingScene"
        });
        this.build();
        GameLoader.onAssetsProgress = (progress) => { this.handlerAssetsProgress(progress) };
    }

    private handlerAssetsProgress(progress: number) {
        this.progressText.text = Math.round(progress * 100) + "%";
        this.progressText.pivot.x = this.progressText.width / 2;
        this.progressText.pivot.y = this.progressText.height / 2;
    }

    private build() {
        this.background = new Sprite(AssetsLoader.gameTextures.loadScreen.background);

        this.progressText = new Text({
            text: '0%',
            style: {
                fontFamily: "'Courier New', Courier, monospace'",
                fontSize: 24,
                fill: 0xff1010,
                align: 'center',
            }
        });
        this.progressText.pivot.x = this.progressText.width / 2;
        this.progressText.pivot.y = this.progressText.height / 2;
        this.progressText.x = this.background.width / 2;
        this.progressText.y = this.background.height / 2 + this.progressText.height;

        this.container.addChild(this.background);
        this.container.addChild(this.progressText);
    }

}
