
let barStyle = `
/* Progress Bar */
.progress-bar {
    --clr-1: rgb(18, 134, 201);
    --clr-2: #111;
    position: relative;
    display: flex;
    align-items: center;
    background: var(--clr-2);
    width: 800px;
    height: 3em;
    border-radius: 1.5em;
}

.progress-bar::before {
    position: absolute;
    content: attr(data-label);
    left: 0.5em;
    bottom: 0.5em;
    top: 0.5em;
    padding-left: 1em;
    padding-top: 0.2em;
    color: white;
    width: calc(var(--width, 0) * 1%);
    max-width: calc(100% - 2em);
    min-width: 0.5em;
    background: var(--clr-1);
    border-radius: 1em;
    font-size: 1.2em;
}
`;

let styleElement = document.querySelector('head style');
if (styleElement) {
    styleElement.textContent += barStyle;
} else {
    styleElement = document.createElement('style');
    styleElement.textContent = barStyle;
    document.querySelector('head').appendChild(styleElement);
}

const progressBar = document.querySelectorAll('.progress-bar');

// Code to run the progress bar
/* progressBar.forEach(bar => {
    setInterval(() => {
        const computedStyle = getComputedStyle(bar);
        const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
        bar.style.setProperty('--width', width + 0.1);
    }, 5)
}); */
