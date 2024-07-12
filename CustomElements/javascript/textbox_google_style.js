

let cssStyle = `
.textbox-google-style {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 3em;
    padding: 0 15px;
}

.textbox-google-style span.material-symbols-outlined {
    color: #8f8e8e;
    font-size: 1.3em;
    z-index: 1;
}

.textbox-google-style input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 1em;
    padding-left: 10px;
    z-index: 1;
}

.textbox-google-style span.background-box {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #c0bebe;
    border-radius: 1.5em;
    background: #fff;
}

.textbox-google-style input:hover ~ span.background-box {
    box-shadow: 0 1px 8px rgba(0,0,0,0.2);
}
`;


let textboxList = document.querySelectorAll('.textbox-google-style');

textboxList.forEach(textbox => {

    textbox.innerHTML = `<span class="material-symbols-outlined">search</span>`;

    if (textbox.dataset.id && textbox.dataset.class) {
        textbox.innerHTML += `<input type="text" class="${textbox.dataset.class}" id="${textbox.dataset.id}"></input>`;
    } else if (textbox.dataset.id) {
        textbox.innerHTML += `<input type="text" id="${textbox.dataset.id}"></input>`;
    } else if (textbox.dataset.class) {
        textbox.innerHTML += `<input type="text" class="${textbox.dataset.class}"></input>`;
    } else {
        textbox.innerHTML += `<input type="text"></input>`;
    }

    textbox.innerHTML += `<span class="background-box"></span>`;

});

let styleElement = document.querySelector('head style');
if (styleElement) {
    styleElement.textContent += cssStyle;
} else {
    styleElement = document.createElement('style');
    styleElement.textContent = cssStyle;
    document.querySelector('head').appendChild(styleElement);
}
