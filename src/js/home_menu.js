const dishes = [
  {
    image: '../img/food_card.png',
    name: 'Indian Vegetable Pulao',
    link: 'Order Now >',
  },
  {
    image: '../img/food_card.png',
    name: 'Paneer Bhuna Masala',
    link: 'Order Now >',
  },
  {
    image: '../img/food_card.png',
    name: 'Vermicelli Upma',
    link: 'Order Now >',
  },
];

const dishesList = document.getElementById('ul_food_cards_home_menu');

function displayDishes() {
 dishes.forEach(dish => {
 const listItem = document.createElement('li');
 listItem.classList.add('li_food_card'); 

const image = document.createElement('img');
 image.src = dish.image;
 image.alt = dish.name;

  const title = document.createElement('p');
 title.textContent = dish.name;

  const link = document.createElement('a');
 link.textContent = dish.link;

 
 listItem.appendChild(image);
 listItem.appendChild(title);
 listItem.appendChild(link);

 dishesList.appendChild(listItem);
 });
}

document.addEventListener('DOMContentLoaded', displayDishes);