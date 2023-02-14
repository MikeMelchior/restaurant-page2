import * as exports from './exports.js';

const pageTwo = () => {
    const page = exports.createNamedElement('div', 'page');

    const title = exports.createNamedElement('h1');
        title.textContent = 'Menu'

    const locationPara = exports.createNamedElement('p');
        locationPara.textContent = '123 Main Street, Toronto (123) 456-7890';

    page.append(title, locationPara);

    return page;
}

export { pageTwo }