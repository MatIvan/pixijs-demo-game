import type { ContainerChild, Size } from "pixi.js";

export interface Scene {
    get name(): string;
    get container(): ContainerChild;
    start: () => void,
    stop: () => void,
    update: (deltaMS: number) => void,
    resize: (size: Size) => void,
}
