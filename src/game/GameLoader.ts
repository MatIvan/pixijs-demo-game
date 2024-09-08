import { Application } from "pixi.js";
import { initDevtools } from '@pixi/devtools';
import type { ProgressCallback } from "pixi.js";
import AssetsLoader from "./AssetsLoader/AssetsLoader";
import ScenesManager from "./scenes/ScenesManager"
import { LoadingScene } from "./scenes/LoadingScene";

class GameLoader {
    app: Application;
    onAssetsProgress: ProgressCallback;

    constructor() {
        this.app = new Application();
    }

    init(): Promise<HTMLCanvasElement> {
        return initDevtools({ app: this.app })
            .then(() => {
                return this.app.init({
                    background: '#1099bb',
                    width: window.innerWidth,
                    height: window.innerHeight,
                    autoDensity: true,
                    resolution: window.devicePixelRatio ?? 1,
                    resizeTo: window
                })
            })
            .then(() => {
                ScenesManager.init(this.app.stage);
                this.app.ticker.add(() => {
                    ScenesManager.update(this.app.ticker.deltaMS);
                });
                return AssetsLoader.init()
                    .then(() => {
                        return Promise.resolve(this.app.canvas);
                    });
            });
    }

    load(): Promise<void> {
        return AssetsLoader.loadLoadScreen(this.handlerLoadScreenProgress)
            .then(() => {
                ScenesManager.add(new LoadingScene());
                return AssetsLoader.loadAssets((progress) => {
                    this.onAssetsProgress?.(progress);
                });
            });
    }

    private handlerLoadScreenProgress(progress: number) {
        console.log("handlerLoadScreenProgress... ", progress);
    }

}

export default new GameLoader();
