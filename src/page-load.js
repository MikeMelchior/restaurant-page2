const pageLoader = (page) => {
    const container = document.querySelector('.container');
    container.innerHTML = '';

    container.appendChild(page);
}

export { pageLoader }