
let textboxProperty = document.querySelectorAll('#property-section .inputs input[type=text]');
let textboxLoan = document.querySelectorAll('#loan-section .inputs-entry input[type=text]');
let textboxExpenses = document.querySelectorAll('#expenses-section .inputs input[type=text]');
let helpButtons = document.querySelectorAll('#expenses-section .inputs div ~ span:last-child');
let sections = document.querySelectorAll('section');
let topBar = document.querySelector('header.top-bar'); 
let allContentDiv = document.querySelector('body .all-content');
let msgDiv = document.querySelector('body div.message-window');
let msgDivBtn = document.getElementById('message-btn');

console.log(helpButtons);

textboxProperty.forEach(txtbox => {

    txtbox.addEventListener('input', function() {
        if (txtbox.value.length > 0) {
            txtbox.classList.add('active');
        } else {
            txtbox.classList.remove('active');
        };
    });

});

textboxLoan.forEach(txtbox => {

    txtbox.addEventListener('input', function() {
        if (txtbox.value.length > 0) {
            txtbox.classList.add('active');
        } else {
            txtbox.classList.remove('active');
        };
    });

});

textboxExpenses.forEach(txtbox => {

    txtbox.addEventListener('input', function() {
        if (txtbox.value.length > 0) {
            txtbox.classList.add('active');
        } else {
            txtbox.classList.remove('active');
        };
    });

});

helpButtons.forEach((txtbox, index) => {

    console.log(index);

    txtbox.addEventListener('click', function() {
        allContentDiv.classList.add('blur');
        msgDiv.classList.remove('hidden');
        let title = "Warning";
        let message = "If you see this message... there was an error.";

        if (index === 0) {
            title = "Mortgage";
            message = "This is a Mortgage Information Message.";
        } else if (index === 1) {
            title = "Energy";
            message = "This is a Energy Information Message.";
        } else if (index === 2) {
            title = "Water";
            message = "This is a Water Information Message.";
        } else if (index === 3) {
            title = "Trash";
            message = "This is a Trash Information Message.";
        } else if (index === 4) {
            title = "HOA";
            message = "This is a HOA Information Message.";
        } else if (index === 5) {
            title = "Tax";
            message = "This is a Tax Information Message.";
        } else if (index === 6) {
            title = "Vacancy";
            message = "This is a Vacancy Information Message.";
        }

        document.querySelector('body .message-window .msg-content h3').innerHTML = title;
        document.querySelector('body .message-window .msg-content p').innerHTML = message;

    });

});

msgDivBtn.addEventListener('click', function() {
    allContentDiv.classList.remove('blur');
    msgDiv.classList.add('hidden');
});

sections.forEach(sec => {
    window.onscroll = () => {
        let top = window.scrollY; // Top of the screen
        let height = sec.offsetHeight - 500; // Height of the section


        if (top >= height) {
            topBar.classList.add('active');
        } else {
            topBar.classList.remove('active');
        }

    }
});

/* window.onscroll = () => {
    let top = window.scrollY; // Top of the screen
    let offset = sec.offsetTop - 150; // Top location of the section
    let height = sec.offsetHeight; // Height of the section
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
    }
} */
