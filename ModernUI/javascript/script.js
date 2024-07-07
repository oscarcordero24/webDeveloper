
let textboxProperty = document.querySelectorAll('#property-section .inputs input[type=text]');
let textboxloan = document.querySelectorAll('#loan-section .inputs-entry input[type=text]');

console.log(textboxloan)

textboxProperty.forEach(txtbox => {

    txtbox.addEventListener('input', function() {
        if (txtbox.value.length > 0) {
            txtbox.classList.add('active');
        } else {
            txtbox.classList.remove('active');
        };
    });

});

textboxloan.forEach(txtbox => {

    txtbox.addEventListener('input', function() {
        if (txtbox.value.length > 0) {
            txtbox.classList.add('active');
        } else {
            txtbox.classList.remove('active');
        };
    });

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
