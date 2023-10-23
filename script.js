// Get a reference to the 'nav' element and the logo with the class 'navbar-brand'
let nav = document.querySelector('nav');
let logo = document.querySelector('.navbar-brand');

// Get all elements with the class 'nav-link'
const navLinks = document.querySelectorAll('.nav-link');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Check if the vertical scroll position is greater than 100 pixels
    if (this.window.scrollY > 100) {
        // Add classes to the 'nav' and logo to change their styles
        nav.classList.add('bg-light', 'shadow');
        logo.classList.add('text-black');

        // Loop through each 'navLink' and update their styles
        navLinks.forEach(navLink => {
            navLink.classList.remove('text-white');
            navLink.classList.add('text-black');
        });
    } else {
        // If the scroll position is less than 100 pixels, remove added classes to reset styles
        nav.classList.remove('bg-light', 'shadow');
        logo.classList.remove('text-black');

        // Reset the styles of 'navLink' elements to their default
        navLinks.forEach(navLink => {
            navLink.classList.remove('text-black');
            navLink.classList.add('text-white');
        });
    }
});

// Initialize an empty 'flowers' array to store selected flowers
let flowers = [];

// Add a click event listener to the window
window.addEventListener('click', function(event) {
    // Check if the clicked element has a 'data-action' attribute with the value "flower-plus"
    if (event.target.dataset.action === "flower-plus") {
        const option = event.target.closest('.option');
        const flower = option.querySelector('.option-text').innerText;
        flowers.push(flower);
    } else if (event.target.dataset.action === "flower-minus") {
        const option = event.target.closest('.option');
        const flower = option.querySelector('.option-text').innerText;
        let index = flowers.indexOf(flower);
        if (index > -1) {
            flowers.splice(index, 1);
        }

    }

    // Get references to the 'cart' and 'order-now' elements
    const cart = this.document.querySelector('.cart');
    let order = this.document.querySelector(".order-now");
    order.href = "https://api.whatsapp.com/send?phone=77762090592&text=Здравствуйте!%20Хочу%20заказать%20у%20вас%20букет%20с%20таким%20содержимым:";

    // Clear the 'cart' content if 'flowers' array is not empty
    if (flowers.length != 0) {
        cart.innerHTML = ""
    }

    // Count the occurrences of each flower in the 'flowers' array
    let counter = {};
    for (let i = 0; i < flowers.length; i++) {
        let temp = flowers[i];
        if (counter[temp] != undefined) {
            ++counter[temp];
        } else {
            counter[temp] = 1;
        }
    }

    // Update the 'order-now' link and display selected flowers in the 'cart'
    for (let flower in counter) {
        const paragraph = this.document.createElement('p')
        let order = this.document.querySelector(".order-now");
        order.href += `%20${flower}%20${counter[flower]}%20шт,`
        const node = this.document.createTextNode(`${flower} ${counter[flower]}`);
        paragraph.appendChild(node);
        cart.appendChild(paragraph);
    }
});

// Function to validate the email input
function validateForm() {
    const email = document.querySelector("#email").value;
    document.getElementById("emailError").textContent = "";
    let isValid = true;

    // Check if the email is in a valid format using the isValidEmail function
    if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    }

    return isValid;
}

// Function to validate email format using a regular expression
function isValidEmail(email) {
    // Basic email validation
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}
