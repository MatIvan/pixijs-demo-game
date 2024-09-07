import "./MainComponent.css";
import { text, verticalPanel } from "../ElementFactory";

interface MainComponentConfig {
    container: HTMLElement,
}

interface MainComponentView {
    root: HTMLDivElement,
}

export class MainComponent {
    view: MainComponentView;

    constructor(config: MainComponentConfig) {
        this.view = {
            root: verticalPanel(),
        }
        const head = text("Pixi.js demo project");
        this.view.root.appendChild(head);
        config.container.appendChild(this.view.root);
    }

}
