import "./ElementFactory.css";

export function div(className?: string): HTMLDivElement {
    const element = document.createElement("div");
    element.className = className;
    return element;
}

export function text(value: string, className?: string): HTMLDivElement {
    const element = div(className);
    element.appendChild(document.createTextNode(value));
    return element;
}

export function verticalPanel(className?: string): HTMLDivElement {
    const element = div("VerticalPanel");
    element.classList.add(className);
    return element;
}
