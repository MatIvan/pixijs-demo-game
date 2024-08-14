//@ts-check
"use strict";

import { Assets } from 'pixi.js';
import manifest from "./manifest.json";

/**
 * @typedef {import('pixi.js').ProgressCallback | undefined} ProgressCallback
 */

class AssetsLoader {

    init() {
        return Assets.init({ manifest });
    }

    /**
     * @param {ProgressCallback} onProgress
     */
    loadScreen(onProgress) {
        return Assets.loadBundle("load-screen", onProgress);
    }

    /**
     * @param {ProgressCallback} onProgress
     */
    assets(onProgress) {
        return Assets.loadBundle("game-screen", onProgress);
    }
}

export default new AssetsLoader();
