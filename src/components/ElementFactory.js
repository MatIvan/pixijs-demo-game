//@ts-check
"use strict";

/**
 * @param {string=} className 
 * @returns {HTMLDivElement}
 */
function div(className) {
    const element = document.createElement("div");
    if (className) {
        element.className = className;
    }
    return element;
}

/**
 * @param {string} value 
 * @param {string=} className 
 * @returns {HTMLDivElement}
 */
function text(value, className) {
    const element = div(className);
    element.appendChild(document.createTextNode(value));
    return element;
}

/**
 * @param {string=} className 
 * @returns {HTMLDivElement}
 */
function verticalPanel(className) {
    const element = div("VerticalPanel");
    if (className) {
        element.classList.add(className);
    }
    return element;
}

const ElementFactory = {
    base: {
        div,
        text,
    },
    panels: {
        verticalPanel,
    }
}

export default ElementFactory;
