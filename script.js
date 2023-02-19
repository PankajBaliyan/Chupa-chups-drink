let IndexValue = 1;
let value;

// function is used to increase or decrease add to card number
function calculate(n) {
    IndexValue += n;
    if (IndexValue <= 0) {
        IndexValue = 1;
    }
    value = document.getElementById('TotalNumber');
    value.innerHTML = IndexValue;
}

function toggleLike() {
    let likedEle = document.getElementById("liked");
    if (likedEle.classList.contains('bi-heart')) {
        likedEle.classList.remove('bi-heart');
        likedEle.classList.add('bi-heart-fill');
    } else {
        likedEle.classList.remove('bi-heart-fill');
        likedEle.classList.add('bi-heart');
    }
}

// add to cart
let cartButtons = document.querySelectorAll('.cart-button');
let card_value = document.querySelector(".added");
let pqtplus = document.querySelector(".pqt-plus");
let pqtminus = document.querySelector(".pqt-minus");
let cartvalue = 0;

cartButtons.forEach(button => {
    button.addEventListener('click', cartClick);
});
function cartClick() {
    let button = this;
    button.classList.add('clicked');
    card_value.textContent = cartvalue += 1;
}

pqtplus.addEventListener('click', function () {
    if (card_value.nodeValue <= 0) {
        card_value.textContent = cartvalue += 1;
    }
});

pqtminus.addEventListener('click', function () {
    if (Number(card_value.innerText) - 1 >= 0) {
        card_value.textContent = cartvalue -= 1;
    }
});
