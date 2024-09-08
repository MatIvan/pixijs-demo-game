import { AbstractScene } from "./AbstractScene";
import { Size } from "pixi.js";

export class PlayScene extends AbstractScene {

    constructor() {
        super("PlayScene");
        this.build();
    }

    private build() {
    }

    override resize(size: Size): void {
        super.resize(size);
    }
}