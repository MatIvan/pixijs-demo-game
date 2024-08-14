//@ts-check
"use strict";

import "./MainComponent.css";

import ElementFactory from "../ElementFactory";

/**
 * @typedef {object} MainComponentConfig
 * @property {HTMLElement} container
 */

/**
 * @typedef {object} MainComponentView
 * @property {HTMLDivElement} root
 */

export default class MainComponent {

    /**@type {MainComponentView} */
    view;

    /**
     * @param {MainComponentConfig} config
     */
    constructor(config) {
        this.view = {
            root: ElementFactory.panels.verticalPanel(),
        }
        const head = ElementFactory.base.text("Pixi.js demo project");
        this.view.root.appendChild(head);
        config.container.appendChild(this.view.root);
    }

}
