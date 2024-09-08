import GameLoader from "./game/GameLoader";
import { PlayScene } from "./game/scenes/PlayScene";
import ScenesManager from "./game/scenes/ScenesManager";

window.addEventListener("load", () => {
    const body = document.getElementsByTagName("body")[0];
    if (!body) {
        return;
    }
    GameLoader.init()
        .then((canvas) => {
            body.appendChild(canvas);
            return GameLoader.load();
        })
        .then(() => {
            console.log("GameLoaded.");
            ScenesManager.add(new PlayScene());
        }).catch((err) => {
            console.error("GameLoader.init error:", err);
        });
});
