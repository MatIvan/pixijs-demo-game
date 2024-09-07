import { MainComponent } from "./components/main/MainComponent";
import GameLoader from "./game/GameLoader";

window.addEventListener("load", () => {
    const body = document.getElementsByTagName("body")[0];
    if (!body) {
        return;
    }

    const mainComponent = new MainComponent({
        container: body,
    })

    GameLoader.init()
        .then((canvas) => {
            mainComponent.view.root.appendChild(canvas);
            return GameLoader.load();
        })
        .then(() => {
            console.log("GameLoaded.");
        }).catch((err) => {
            console.error("GameLoader.init error:", err);
        });
});
