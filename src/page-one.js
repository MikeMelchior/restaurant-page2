import * as exports from './exports'

const pageOne = () => {
    const page = exports.createDiv('page-one');

    const paraOne = exports.createP();
    paraOne.textContent = 'Im am a paragraph';

    page.appendChild(paraOne);

    return page
}

export { pageOne }