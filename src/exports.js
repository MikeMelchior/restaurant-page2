const createDiv = (className) => {
    const element = document.createElement('div');
    if (className) { element.classList.add(className) }
    return element;
}

const createButton = (className) => {
    const element = document.createElement('button');
    if (className) { element.classList.add(className) }
    return element;
}

const createP = (className) => {
    const element = document.createElement('p');
    if (className) { element.classList.add(className) }
    return element;
}

const createNamedElement = (elementName, className) => {
    const element = document.createElement(elementName)
    if (className) { element.classList.add(className) }
    return element;
}

export { 
    createDiv,
    createButton,
    createP,
    createNamedElement
} 