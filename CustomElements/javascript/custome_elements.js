

let cssStyle = `
.textbox-style {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 3em;
    padding: 0 15px;
}

.textbox-style.google-style span.material-symbols-outlined {
    color: #8f8e8e;
    font-size: 1.3em;
    z-index: 1;
}

.textbox-style.google-style input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 1em;
    padding-left: 10px;
    z-index: 1;
}

.textbox-style.google-style span.background-box {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #c0bebe;
    border-radius: 1.5em;
    background: #fff;
}

.textbox-style.google-style input:hover ~ span.background-box {
    box-shadow: 0 1px 8px rgba(0,0,0,0.2);
}

/* Textbox Teams Style */
.textbox-style.teams-style {
    --clr: rgb(125, 30, 160);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 2.5em;
    border: 1px solid #c0bebe;
    border-radius: 0.5em;
    background: #fff;
    overflow: hidden;
}

.textbox-style.teams-style input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 1em;
    padding-left: 15px;
}

.textbox-style.teams-style input:focus ~ span,
.textbox-style.teams-style input:hover ~ span {
    position: absolute;
    content: '';
    height: 3px;
    width: 100%;
    bottom: 0;
    background-color: var(--clr);
}
`;


let textboxList = document.querySelectorAll('.textbox-style');

textboxList.forEach(textbox => {

    if (textbox.textContent === "google_style"){
        textbox.classList.add('google-style');
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
        
    } else if (textbox.textContent === "teams_style") {
        textbox.classList.add('teams-style');
        textbox.innerHTML = "";
        if (textbox.dataset.id && textbox.dataset.class && textbox.dataset.placeholder) {
            textbox.innerHTML += `<input type="text" class="${textbox.dataset.class}" id="${textbox.dataset.id}" placeholder="${textbox.dataset.placeholder}"></input>`;
        } else if (textbox.dataset.id) {
            textbox.innerHTML += `<input type="text" id="${textbox.dataset.id}" placeholder="Enter Text Here..."></input>`;
        } else if (textbox.dataset.class) {
            textbox.innerHTML += `<input type="text" class="${textbox.dataset.class}" placeholder="Enter Text Here..."></input>`;
        } else if (textbox.dataset.placeholder) {
            textbox.innerHTML += `<input type="text" placeholder="${textbox.dataset.placeholder}"></input>`;
        } else {
            textbox.innerHTML += `<input type="text" placeholder="Enter Text Here..."></input>`;
        }
        textbox.innerHTML += `<span></span>`;
    }

});

let styleElement = document.querySelector('head style');
if (styleElement) {
    styleElement.textContent += cssStyle;
} else {
    styleElement = document.createElement('style');
    styleElement.textContent = cssStyle;
    document.querySelector('head').appendChild(styleElement);
}

let headElement = document.querySelector('head');
let linkExist = false;
headElement.childNodes.forEach(child => {
    if (child.nodeName === "LINK") {
        if (child.href.includes('Material+Symbols+Outlined')) {
            linkExist = true;
        }
    };
});

if (!linkExist) {
    let newLink = document.createElement('link');
    newLink.rel = "stylesheet";
    newLink.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
    headElement.appendChild(newLink);
};
