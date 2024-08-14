//@ts-check
"use strict";

import MainComponent from "./components/main/MainComponent";
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
        .then(() => {
            mainComponent.view.root.appendChild(GameLoader.canvas);
            return GameLoader.load();
        })
        .then(() => {
            console.log("GameLoaded.");
        })
        .catch(err => {
            window.alert(err);
        });

});
