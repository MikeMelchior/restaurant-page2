import * as exports from "./exports";
import { pageLoader } from "./page-load";
import { pageOne } from "./page-one";
import { pageTwo } from "./page-two";
import { pageThree } from "./page-three";
import './styles.css';

const background = exports.createNamedElement('div', 'background');
document.body.appendChild(background);

const container = exports.createNamedElement('div', 'container');

document.body.appendChild(container);

const buttonContainer = () => {
    const container = exports.createNamedElement('div', 'button-container');
        const homeButton = exports.createNamedElement('button', 'home-button');
            homeButton.textContent = 'HOME'
            homeButton.classList.add('active')
        const menuButton = exports.createNamedElement('button', 'menu-button');
            menuButton.textContent = 'MENU'
        const contactButton = exports.createNamedElement('button', 'contact-button');
            contactButton.textContent = 'CONTACT'
    container.append(homeButton, menuButton, contactButton);
    return container;
}

document.body.insertBefore(buttonContainer(), document.body.firstChild)


const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('click', () => {
    pageLoader(pageOne());
    homeButton.classList.add('active');
    menuButton.classList.remove('active');
    contactButton.classList.remove('active');
})

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', () => {
    pageLoader(pageTwo());
    homeButton.classList.remove('active');
    menuButton.classList.add('active');
    contactButton.classList.remove('active');
})

const contactButton = document.querySelector('.contact-button');
contactButton.addEventListener('click', () => {
    pageLoader(pageThree());
    homeButton.classList.remove('active');
    menuButton.classList.remove('active');
    contactButton.classList.add('active');
})


document.addEventListener('DOMContentLoaded', () => {pageLoader(pageOne())})



