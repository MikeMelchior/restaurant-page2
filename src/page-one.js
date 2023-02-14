import * as exports from './exports'

const pageOne = () => {
    const page = exports.createNamedElement('div', 'page');
    
    const title = exports.createNamedElement('h1');
        title.textContent = "Martene's Cafe";

    const heroContainer = exports.createNamedElement('div', 'hero-container');
    
        const hero = exports.createNamedElement('p', 'hero');
            hero.textContent = "Martene doesn't miss, every time I eat here the food is delicious and the staff is courteous. It's a home run every time!"

        const customer = exports.createNamedElement('p');
            customer.textContent = '- Satisfied Customer';
        
        heroContainer.append(hero, customer);
    
    const hoursContainer = exports.createNamedElement('div', 'hours-container');

        const day = (day, hours) => {
            const dayContainer = exports.createNamedElement('div', 'day');
                const dayP = exports.createNamedElement('p');
                dayP.textContent = day;
                const hoursP = exports.createNamedElement('p');
                hoursP.textContent = hours;

                dayContainer.append(dayP, hoursP);
            return dayContainer;
        }
        
    hoursContainer.appendChild(day('Monday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Tuesday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Wednesday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Thursday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Friday', '7:00am - 7:00pm'))
    hoursContainer.appendChild(day('Saturday', '8:00am - 10:00pm'))
    hoursContainer.appendChild(day('Sunday', 'Closed'))

    const locationPara = exports.createNamedElement('p');
        locationPara.textContent = '123 Main Street, Toronto (123) 456-7890'

    
    page.append(title, heroContainer, hoursContainer, locationPara);

    return page
}

export { pageOne }