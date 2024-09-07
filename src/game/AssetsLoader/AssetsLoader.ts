import { Assets, ProgressCallback, Texture } from 'pixi.js';

const manifest = {
    bundles: [
        {
            name: "LoadScreen",
            assets: [
                {
                    alias: "Background",
                    src: "assets/load-screen/black-loading.png"
                }
            ]
        },
        {
            name: "GameScreen",
            assets: [
                {
                    alias: "FlowerTop",
                    src: "assets/game-screen/flowerTop.png"
                }
            ]
        }
    ]
}

interface GameTextures {
    loadScreen: {
        background: Texture
    },
    gameScreen: {
        flowerTop: Texture
    }
}

class AssetsLoader {

    gameTextures: GameTextures;

    init(): Promise<void> {
        return Assets.init({ manifest });
    }

    loadLoadScreen(onProgress: ProgressCallback): Promise<void> {
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

    loadAssets(onProgress: ProgressCallback): Promise<void> {
        return Assets.loadBundle("GameScreen", onProgress)
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
