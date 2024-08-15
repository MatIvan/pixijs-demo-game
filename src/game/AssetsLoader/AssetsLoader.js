//@ts-check
"use strict";

import { Assets } from 'pixi.js';
import manifest from "./manifest.json";

/**
 * @typedef {import('pixi.js').ProgressCallback | undefined} ProgressCallback
 * @typedef {import('pixi.js').Texture | undefined} Texture
 */

/**
 * @typedef {object} GameTextures
 * @property {object} loadScreen
 * @property {Texture} loadScreen.background
 * @property {object} gameScreen
 * @property {Texture} gameScreen.flowerTop
 */

class AssetsLoader {

    /**@type {GameTextures} */
    gameTextures;

    init() {
        return Assets.init({ manifest });
    }

    /**
     * @param {ProgressCallback} onProgress
     */
    loadLoadScreen(onProgress) {
        return Assets.loadBundle("LoadScreen", onProgress)
            .then((textures) => {
                this.gameTextures = {
                    ...this.gameTextures,
                    loadScreen: {
                        background: textures["LoadScreen-Background"]
                    }
                }
            });
    }

    /**
     * @param {ProgressCallback} onProgress
     */
    loadAssets(onProgress) {
        return Assets.loadBundle(manifest.bundles[1].name, onProgress)
            .then((textures) => {
                this.gameTextures = {
                    ...this.gameTextures,
                    gameScreen: {
                        flowerTop: textures["GameScreen-FlowerTop"]
                    }
                }
            });
    }
}

export default new AssetsLoader();
