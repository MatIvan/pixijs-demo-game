import { Container, ContainerChild, Size } from "pixi.js";
import { Scene } from "../../interfaces";

export interface SceneOptions {
    name: string,
}

export abstract class AbstractScene implements Scene {
    name: string;
    size: Size;

    private _container: ContainerChild;

    constructor(opt: SceneOptions) {
        this.name = opt.name;
        this._container = new Container();
    }

    get container(): ContainerChild {
        return this._container;
    }

    start(): void { };

    stop(): void { };

    update(deltaMS: number): void { };

    resize(size: Size): void {
        this.size = size;
        this.container.pivot.x = this.container.width / 2;
        this.container.pivot.y = this.container.height / 2;
        this.container.x = size.width / 2;
        this.container.y = size.height / 2;
    };
}