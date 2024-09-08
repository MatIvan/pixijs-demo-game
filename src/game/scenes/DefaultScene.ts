import { Container, ContainerChild, Size } from "pixi.js";
import { AbstractScene } from "./AbstractScene";

export interface SceneOptions {
    name: string,
    size: Size,
}

export class DefaultScene extends AbstractScene {
    constructor() {
        super({
            name: "DefaultScene",
        });
    }
}
