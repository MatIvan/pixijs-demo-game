import { Container, ContainerChild, Size } from "pixi.js";
import { Scene } from "../../interfaces";

export abstract class AbstractScene implements Scene {
    size: Size;

    private _container: ContainerChild;

    constructor(readonly name: string) {
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
    };
}