export function displayInPage(text) {
    if (typeof text !== 'string') {
        text = JSON.stringify(text);
    }

    if (typeof document !== 'undefined') {
        return document.body.innerHTML += `${text}<br>`;
    } else {
        console.log(text);
    }
}
