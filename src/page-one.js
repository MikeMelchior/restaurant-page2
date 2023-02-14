import * as exports from './exports'

const pageOne = () => {
    const page = exports.createNamedElement('div', ('page'));
    
    const paraOne = exports.createNamedElement('p');
    paraOne.textContent = 'Im a paragraph';

    page.appendChild(paraOne);

    return page
}

const pageTwo = () => {

}

export { pageOne }