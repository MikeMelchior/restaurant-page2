import * as exports from "./exports";
import { pageLoader } from "./page-load";
import { pageOne } from "./page-one";


const container = exports.createNamedElement('div', 'container');
document.body.appendChild(container);

pageLoader(pageOne());



