let nav = document.querySelector('nav');
let logo = document.querySelector('.navbar-brand')
const navLinks = document.querySelectorAll('.nav-link')

window.addEventListener('scroll', function() {
    if (this.window.scrollY> 100) {
        nav.classList.add('bg-light', 'shadow');
        logo.classList.add('text-black')
        navLinks.forEach(navLink => {
            navLink.classList.remove('text-white')
            navLink.classList.add('text-black');
        });
    } else {
        nav.classList.remove('bg-light', 'shadow')
        logo.classList.remove('text-black')
        navLinks.forEach(navLink => {
            navLink.classList.remove('text-black')
            navLink.classList.add('text-white');
        });
    }
})

let flowers = [];

window.addEventListener('click', function(event) {
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
    const cart = this.document.querySelector('.cart');
    let order = this.document.querySelector(".order-now");
    order.href = "https://api.whatsapp.com/send?phone=77762090592&text=Здравствуйте!%20Хочу%20заказать%20у%20вас%20букет%20с%20таким%20содержимым:";
    if (flowers.length != 0) {
        cart.innerHTML = ""
    }
    let counter = {};
    for (let i = 0; i < flowers.length; i++) {
        let temp = flowers[i];
        if (counter[temp] != undefined) {
            ++counter[temp];
        } else {
            counter[temp] = 1;
        }
    }
    for (let flower in counter) {
        const paragraph = this.document.createElement('p')
        let order = this.document.querySelector(".order-now");
        order.href += `%20${flower}%20${counter[flower]}%20шт,`
        const node = this.document.createTextNode(`${flower} ${counter[flower]}`);
        paragraph.appendChild(node);
        cart.appendChild(paragraph);
    }
})