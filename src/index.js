import * as exports from "./exports";
import { pageLoader } from "./page-load";
import { pageOne } from "./page-one";


const container = exports.createDiv('container');
container.textContent = 'hello'

// const someElement = exports.createNamedElement('div', 'another-div')
// container.appendChild(someElement);

document.body.appendChild(container);

pageLoader(pageOne())



