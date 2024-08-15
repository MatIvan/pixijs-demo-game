//@ts-check
"use strict";

import { Application } from "pixi.js";
import AssetsLoader from "./AssetsLoader/AssetsLoader";

class GameLoader {

    constructor() {
        this.app = new Application();
    }

    /**
     * @returns {Promise<void>}
     */
    init() {
        return this.app.init({
            background: '#1099bb',
            width: 800,
            height: 600
        })
            .then(() => {
                return AssetsLoader.init();
            });
    }

    /**
     * @returns {Promise<void>}
     */
    load() {
        return AssetsLoader.loadLoadScreen(this.onLoadScreenProgress)
            .then(() => {
                //draw load screen
                return AssetsLoader.loadAssets(this.onAssetsProgress);
            });
    }

    get canvas() {
        return this.app.canvas
    }

    /**
     * @param {number} progress
     */
    onLoadScreenProgress(progress) {
        console.log("onLoadScreenProgress... ", progress);
    }

    /**
     * @param {number} progress
     */
    onAssetsProgress(progress) {
        //update load screen
        console.log("onAssetsProgress... ", progress);
    }
}

export default new GameLoader();
