import { Application } from "pixi.js";
import AssetsLoader from "./AssetsLoader/AssetsLoader";
import ScenesManager from "./scenes/ScenesManager"

class GameLoader {
    app: Application;

    constructor() {
        this.app = new Application();
    }

    init(): Promise<HTMLCanvasElement> {
        return this.app.init({
            background: '#1099bb',
            width: window.innerWidth,
            height: window.innerHeight,
            autoDensity: true,
            resolution: window.devicePixelRatio ?? 1,
            resizeTo: window
        }).then(() => {
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
                //TODO draw load screen
                return AssetsLoader.loadAssets(this.handlerAssetsProgress);
            });
    }

    private handlerLoadScreenProgress(progress: number) {
        console.log("handlerLoadScreenProgress... ", progress);
    }

    private handlerAssetsProgress(progress: number) {
        //TODO update load screen
        console.log("handlerAssetsProgress... ", progress);
    }
}

export default new GameLoader();
