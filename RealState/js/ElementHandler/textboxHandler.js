/* Handle all Events of all text box in this project */

const allTextBox = document.querySelectorAll('section .textbox input');

allTextBox.forEach(element => {
    element.addEventListener('input', function () {
        if (element.value.length > 0) {
            element.classList.add('has-content');
        } else {
            element.classList.remove('has-content');
        }
    })
});
