import { Application } from "pixi.js";
import AssetsLoader from "./AssetsLoader/AssetsLoader";

class GameLoader {
    app: Application;

    constructor() {
        this.app = new Application();
    }

    init(): Promise<void> {
        return this.app.init({
            background: '#1099bb',
            width: 800,
            height: 600
        })
            .then(() => {
                return AssetsLoader.init();
            });
    }

    load(): Promise<void> {
        return AssetsLoader.loadLoadScreen(this.onLoadScreenProgress)
            .then(() => {
                //TODO draw load screen
                return AssetsLoader.loadAssets(this.onAssetsProgress);
            });
    }

    get canvas(): HTMLCanvasElement {
        return this.app.canvas
    }

    onLoadScreenProgress(progress: number) {
        console.log("onLoadScreenProgress... ", progress);
    }

    onAssetsProgress(progress: number) {
        //TODO update load screen
        console.log("onAssetsProgress... ", progress);
    }
}

export default new GameLoader();
