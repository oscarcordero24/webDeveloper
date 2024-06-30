/* Handle all Events of all increment textbox in this project */

const allIncrementTextBox = document.querySelectorAll('section .textbox-increment input'),
      spanAdd = document.querySelectorAll('section .textbox-increment .inc-dec-button span')[0],
      spanSub = document.querySelectorAll('section .textbox-increment .inc-dec-button span')[1];

const incrementTxtbox = document.querySelector('section .textbox-increment input'),
      downPaymentValue = allIncrementTextBox[0];

let percentage = incrementTxtbox.value.length > 0 ? incrementTxtbox.value : 0;

allIncrementTextBox.forEach(element => {
    element.addEventListener('input', function () {
        if (element.value.length > 0) {
            element.classList.add('has-content');
        } else {
            element.classList.remove('has-content');
        }
    })
});

spanAdd.addEventListener('click', function() {
    if (incrementTxtbox.value.length > 0) {
        percentage = parseInt(incrementTxtbox.value);
        percentage += 1;
        incrementTxtbox.value = percentage + "%";
    } else {
        percentage += 1;
        incrementTxtbox.value = percentage + "%";
        downPaymentValue.classList.add('has-content');
    }
})

spanSub.addEventListener('click', function() {

    let txtboxValue = parseInt(incrementTxtbox.value.split('%')[0]);
    if (incrementTxtbox.value.length > 0 && txtboxValue > 0) {
        percentage = parseInt(incrementTxtbox.value.split('%')[0]);
        console.log(percentage);
        percentage -= 1;
        incrementTxtbox.value = percentage + "%";
    } else if (incrementTxtbox.value.length > 0 && txtboxValue <= 0) {
        percentage = 0;
        incrementTxtbox.value = percentage + "%";
        downPaymentValue.classList.add('has-content');
    }

})

