import * as exports from './exports.js';
import Icon from './food-placeholder.png'

const pageTwo = () => {
    const page = exports.createNamedElement('div', 'page');

    const title = exports.createNamedElement('h1');
        title.textContent = 'Menu'

    const locationPara = exports.createNamedElement('p');
        locationPara.textContent = '123 Main Street, Toronto (123) 456-7890';

    const menuSection = () => {
        const section = exports.createNamedElement('div', 'menu-section');
        return section;
    }

    const sectionTitle = (title) => {
        const titleText = exports.createNamedElement('h2', 'section-title');
            titleText.textContent = title;
        return titleText
    }

    const menuItem = (item, description, price, image) => {
        const itemContainer = exports.createNamedElement('div', 'item-container');
            const itemText = exports.createNamedElement('p');
                itemText.textContent = item;
            const itemDescription = exports.createNamedElement('p');
                itemDescription.textContent = description;
            const priceText = exports.createNamedElement('p');
                priceText.textContent = price;
            const menuImage = new Image();
                menuImage.src = image;
            itemContainer.append(itemText, priceText, itemDescription, menuImage);
        return itemContainer
    };

    const appetizersTitle = sectionTitle('appetizers');
    const appetizers = menuSection('appetizers');

        const cheeseAndCrackers = menuItem('Cheese and Crackers',
                                            `A lovely assortment of Local cheeses 
                                            and in-house baked crackers`, '$11', Icon);
        const nachos = menuItem('Cheesy Nachos', 
                                `Multigrain tortilla chips covered in our three 
                                blend cheese mix, lettuce and peppers`, '$8 ($4 to add chicken)', Icon);
        const charcuterie = menuItem('Charcuterie Board', 
                                    `A beautiful charcuterie board of locally 
                                    sourced meats and cheeses`, '$18', Icon);
        const potatoSkins = menuItem('Potato Skins',
                                    `Yukon gold potato skins baked then stuffed
                                    with cheese and bacon and then baked again`, '10$', Icon);

        appetizers.append(cheeseAndCrackers, nachos, charcuterie, potatoSkins);  

    const entreesTitle = sectionTitle('entrees');
    const entrees = menuSection('entrees');

        const chickenBroccoliRice = menuItem('Chicken rice and broccoli',
                                            `A nice healthy and lean meal of Chicken, 
                                            steamed Broccoli and Basmati Rice`, '$19', Icon);
        const sesameChicken = menuItem('Sesame Chicken', 
                                        `Barbecued chicken served over rice with veg
                                        and topped with our famous sesame chicken sauce`, '$23', Icon);
        const chickenParm = menuItem('Chicken Parm', 
                                    `Lightly battered chicken topped with asiago and homemade 
                                    marinara sauce and served with rigatoni`, '$27', Icon);

        entrees.append(chickenBroccoliRice, sesameChicken, chickenParm);

    const burgersTitle = sectionTitle('burgers');
    const burgers = menuSection('burgers');

        const cheeseburger = menuItem('Cheeseburger', `A fresh 1/3oz patty topped with cheddar 
                                                and your choice of toppings`, '$11', Icon);
        const turkeyBurger = menuItem('Turkey Burger', `Fresh ground locally sourced lean turkey
                                                topped with lettuce tomato and mayo`, '13', Icon);
        const blackBeanBurger = menuItem('Black Bean Burger', `Vegetarian friendly Black Bean patty 
                                                topped with your choice of vegetables`, '$11', Icon);

        burgers.append(cheeseburger, turkeyBurger, blackBeanBurger);

    const dessertsTitle = sectionTitle('desserts');
    const desserts = menuSection('desserts');

        const peanutButterBalls = menuItem("Oma's Peanut Butter Balls", `Crispy crunchy and sweet, if you 
                                                like peanut butter this is the dessert for you`, '8$', Icon);
        const iceCream = menuItem('Fresh Ice Cream', `A bowl of our home made ice cream 
                                        ask what flavours we have today`, '$7', Icon);
        const cake = menuItem('Vanilla Cake', `A slice of our not-too-sweet freshly baked
                                            vanilla cake loaded with real vanilla beans`, '$9', Icon);

        desserts.append(peanutButterBalls, iceCream, cake);




    page.append(title, appetizersTitle, appetizers, entreesTitle, 
                entrees, burgersTitle, burgers, dessertsTitle, desserts, locationPara);

    return page;
}

export { pageTwo }