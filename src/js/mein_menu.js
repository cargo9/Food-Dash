const priceDishesList = document.getElementById('ul_main_menu');

function displayPriceDishes() {
  priceDishes.forEach(priceDish => {
    const listPrice = document.createElement('li');
    listPrice.classList.add('food_card_Angoori');

    const image = document.createElement('img');
    image.src = priceDish.image;
    image.alt = priceDish.name;
    image.classList.add('img_potato_food_card');

    const span = document.createElement('span');
    span.textContent = priceDish.span;
    span.classList.add('p_food_card_Pulao');

    const name = document.createElement('p');
    name.textContent = priceDish.name;
    name.classList.add('p_Angoori_food_card');

    const stars = document.createElement('img');
    stars.src = priceDish.imageStar;
    stars.classList.add('star_png_food_card');

    const commentSpan = document.createElement('span');
    commentSpan.textContent = priceDish.commentSpan;
    commentSpan.classList.add('span_food_card');

    const price = document.createElement('p');
    price.textContent = priceDish.price;
    price.classList.add('prices_food_card_Angoori');

    const button = document.createElement('button');
    button.textContent = priceDish.button;
    button.classList.add('button_food_card_Angoori');

    listPrice.appendChild(image);
    listPrice.appendChild(span);
    listPrice.appendChild(name);
    listPrice.appendChild(stars);
    listPrice.appendChild(commentSpan);
    listPrice.appendChild(price);
    listPrice.appendChild(button);

    priceDishesList.appendChild(listPrice);
  });
}

document.addEventListener('DOMContentLoaded', displayPriceDishes);
