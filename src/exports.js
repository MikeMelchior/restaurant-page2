const createNamedElement = (elementName, className) => {
    const element = document.createElement(elementName)
    if (className) { element.classList.add(className) }
    return element;
}

export { 
    createNamedElement
} 