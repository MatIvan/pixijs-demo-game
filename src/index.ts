import GameLoader from "./game/GameLoader";

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
        }).catch((err) => {
            console.error("GameLoader.init error:", err);
        });
});
