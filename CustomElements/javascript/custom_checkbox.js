

let cssCheckbox = `
.checkbox-style {
    --clr-1: rgb(248, 88, 88);
    --clr-2: rgb(42, 161, 42);
    --clr-3: #fff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4em;
    height: 2em;
}

.checkbox-style.switch-btn label input {
    display: none;
}

.checkbox-style.switch-btn label span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: var(--clr-1);
    box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
    border-radius: 1.1em;
    border: 0.1em solid black;
    cursor: pointer;
    transition: 0.5s;
}

.checkbox-style.switch-btn label span::before {
    position: absolute;
    content: '';
    width: 2em;
    height: 2em;
    border-radius: 50%;
    top: -0.15em;
    left: -0.15em;
    background: var(--clr-3);
    box-shadow: inset 5px 5px 5px rgba(255,255,255,0.2),
                inset -5px -5px 10px rgba(255,255,255,0.2),
                inset -5px -5px 15px rgba(0,0,0,0.2);
    border: 0.1em solid black;
    transition: 0.5s;
}

.checkbox-style.switch-btn label input:checked ~ span {
    background: var(--clr-2);
    transition: 0.5s;
}

.checkbox-style.switch-btn label input:checked ~ span::before {
    transform: translateX(2.1em);
    transition: 0.5s;
}
`;

let checkboxList = document.querySelectorAll('.checkbox-style');

checkboxList.forEach(checkbox => {

    if (checkbox.textContent === "switch_btn"){
        checkbox.classList.add('switch-btn');
        checkbox.innerHTML = "<label></label>";
        let label = checkbox.firstChild;
        if (checkbox.dataset.id && checkbox.dataset.class) {
            label.innerHTML += `<input type="checkbox" class="${checkbox.dataset.class}" id="${checkbox.dataset.id}"></input>`;
        } else if (checkbox.dataset.id) {
            label.innerHTML += `<input type="checkbox" id="${checkbox.dataset.id}"></input>`;
        } else if (checkbox.dataset.class) {
            label.innerHTML += `<input type="checkbox" class="${checkbox.dataset.class}"></input>`;
        } else {
            label.innerHTML += `<input type="checkbox"></input>`;
        }

        label.innerHTML += `<span></span>`;
        
    };

});

let styleElementCheckbox = document.querySelector('head style');
if (styleElementCheckbox) {
    styleElementCheckbox.textContent += cssCheckbox;
} else {
    styleElementCheckbox = document.createElement('style');
    styleElementCheckbox.textContent = cssCheckbox;
    document.querySelector('head').appendChild(styleElementCheckbox);
}
