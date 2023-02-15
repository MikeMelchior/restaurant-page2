import * as exports from './exports.js';
import Icon from './person.png'

const pageThree = () => {
    const page = exports.createNamedElement('div', 'page');

    const title = exports.createNamedElement('h1');
        title.textContent = 'Contact Us'

    const locationPara = exports.createNamedElement('p');
        locationPara.textContent = '123 Main Street, Toronto (123) 456-7890';

    const contactCard = (name, title, number, email, image) => {
        const card = exports.createNamedElement('div', 'card')
            const nameP = exports.createNamedElement('p');
                nameP.textContent = name;
            const titleP = exports.createNamedElement('p');
                titleP.textContent = title;
            const numberP = exports.createNamedElement('p');
                numberP.textContent = number;
            const emailP = exports.createNamedElement('p');
                emailP.textContent = email;
            const img = new Image()
                img.src = image;

            card.append(nameP, titleP, numberP, emailP, img);
        return card
    }

    const owner = contactCard('Martene', 'Owner', '(555) 555-5555', 'real-email@hellothere.com', Icon);
    const manager = contactCard('Mike', 'Manager', '(555) 123-4567', 'definitelyrealemail@real.com', Icon);
    const foodTester = contactCard('Loki', 'Food Tester', '(555) 555-BARK', 'lokipoki@dogmail.com', Icon);

    page.append(title, owner, manager, foodTester, locationPara);

    return page;
}

export { pageThree }