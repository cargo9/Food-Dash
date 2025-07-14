const dishesList = document.getElementById('ul_food_cards_home_menu');

function displayDishes() {
  dishes.forEach(dish => {
    const listItem = document.createElement('li');
    listItem.classList.add('li_food_card');

    const image = document.createElement('img');
    image.src = dish.image;
    image.alt = dish.name;
    image.classList.add('img_food_card_home_menu');

    const title = document.createElement('p');
    title.textContent = dish.name;
    title.classList.add('p_food_card_Pulao');

    const link = document.createElement('a');
    link.textContent = dish.link;
    link.classList.add('button_food_card_home_menu');

    listItem.appendChild(image);
    listItem.appendChild(title);
    listItem.appendChild(link);

    dishesList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', displayDishes);
