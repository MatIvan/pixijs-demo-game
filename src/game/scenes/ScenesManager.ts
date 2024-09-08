import { Container } from "pixi.js";
import type { Size } from "pixi.js";
import { Scene } from "../../interfaces";
import { DefaultScene } from "./DefaultScene";

const PROPS = {
    resizeTimeoutMs: 300,
}

class ScenesManager {
    private resizeTimerId: NodeJS.Timeout;
    private container: Container;
    private currentScene: Scene;
    private secenes: Map<string, Scene> = new Map<string, Scene>();

    private resize(size: Size) {
        clearTimeout(this.resizeTimerId);
        this.resizeTimerId = setTimeout(() => {
            clearTimeout(this.resizeTimerId);
            this.currentScene.resize(size);
        }, PROPS.resizeTimeoutMs);
    }

    init(container: Container) {
        this.container = container;
        this.currentScene = new DefaultScene();
        this.add(this.currentScene);
        window.addEventListener('resize', () => {
            this.resize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
    }

    add(scene: Scene) {
        if (this.secenes.has(scene.name)) {
            throw new Error(`Scene '${scene.name}' is allready exist.`);
        }
        this.secenes.set(scene.name, scene);
        this.select(scene.name);
    }

    select(sceneName: string) {
        const selectedScene = this.secenes.get(sceneName);
        if (!selectedScene) {
            throw new Error(`Unknown scene '${sceneName}'.`);
        }
        this.container.removeChild(this.currentScene.container);
        this.currentScene.stop();
        this.container.addChild(selectedScene.container);
        this.currentScene = selectedScene;
        this.currentScene.start();
        this.resize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    update(deltaMS: number) {
        this.currentScene.update(deltaMS);
    }
}

export default new ScenesManager();
