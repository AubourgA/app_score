export const title = (string, cl) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = string;
    h2.classList.add(`${cl}`,'title__h2');
    return h2;
}

