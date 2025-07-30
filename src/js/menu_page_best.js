// const bestDishesList = document.getElementById('ul1_home_page2');

const bestDishesListContainer = document.getElementById('ul1_home_page2'); 

// function abestDishesList() {
//   bestDishes.forEach(bestDish => {
//     const listPrice = document.createElement('li');
//     listPrice.classList.add('li1_home_page2');

//     const image = document.createElement('img');
//     image.src = bestDish.image;
//     image.alt = bestDish.name;
//     image.classList.add('img_ul1_home_page2');

//     const name = document.createElement('p');
//     name.textContent = bestDish.name;
//     name.classList.add('p_ul1_home_page2');

//     const div = document.createElement('div');
//     div.classList.add('div_ul1_star_home_page2');

//     const imageStar = document.createElement('img');
//     imageStar.src = bestDish.imageStar;
//     imageStar.classList.add('img_ul1_home_page2');

//     const span = document.createElement('span');
//     span.textContent = bestDish.span;
//     span.classList.add('span_ul1_home_page2');

//     const price = document.createElement('p');
//     price.textContent = bestDish.price;
//     price.classList.add('h3_ul1_home_page2');

//     const divCount = document.createElement('div');
//     divCount.classList.add('div_count_ul1_home_page2');

//     const buttonImageMinus = document.createElement('button');
//     buttonImageMinus.src = bestDish.buttonImageMinus;
//     buttonImageMinus.classList.add('button_-_ul1_home_page2');

//     const count = document.createElement('h4');
//     count.textContent = '00';
//     count.classList.add('h4_count_ul1_home_page2');

//     const buttonImagePlus = document.createElement('button');
//     buttonImagePlus.src = bestDish.buttonImagePlus;
//     buttonImagePlus.classList.add('button_plus_ul1_home_page2');

//     const button = document.createElement('button');
//     button.src = bestDish.button;
//     button.classList.add('button_add_ul1_home_page2');

//     listPrice.appendChild(image);
//     listPrice.appendChild(name);
//     div.appendChild(imageStar);
//     div.appendChild(span);
//     listPrice.appendChild(price);
//     divCount.appendChild(buttonImageMinus);
//     divCount.appendChild(count);
//     divCount.appendChild(buttonImagePlus);
//     listPrice.appendChild(button);

//     bestDishesList.appendChild(listPrice);
//   });
// }

function renderBestDishes() {
  bestDishesListContainer.innerHTML = '';

  bestDishes.forEach(bestDish => {
    const listItem = document.createElement('li');
    listItem.classList.add('li1_home_page2');

    const image = document.createElement('img');
    image.src = bestDish.image;
    image.alt = bestDish.name;
    image.classList.add('img_ul1_home_page2');

    const name = document.createElement('p');
    name.textContent = bestDish.name;
    name.classList.add('p_ul1_home_page2');

    const starRatingDiv = document.createElement('div');
    starRatingDiv.classList.add('div_ul1_star_home_page2');

    for (let i = 0; i < bestDish.rating; i++) {
      const starImage = document.createElement('img');
      starImage.src = 'https://i.ibb.co/GQ31hr09/Star-1.png';
      starImage.classList.add('star_icon');
      starRatingDiv.appendChild(starImage);
    }

    const span = document.createElement('span');
    span.textContent = bestDish.span;
    span.classList.add('span_ul1_home_page2');
    starRatingDiv.appendChild(span);

    const price = document.createElement('p');
    price.textContent = bestDish.price;
    price.classList.add('h3_ul1_home_page2');

    const divCount = document.createElement('div');
    divCount.classList.add('div_count_ul1_home_page2');

    const buttonImageMinus = document.createElement('button');
    const imgMinus = document.createElement('img');
    imgMinus.src = bestDish.buttonImageMinus;
    imgMinus.alt = 'Minus';
    buttonImageMinus.appendChild(imgMinus);
    buttonImageMinus.classList.add('button_-_ul1_home_page2');

    const count = document.createElement('h4');
    count.textContent = bestDish.count;
    count.classList.add('h4_count_ul1_home_page2');

    const buttonImagePlus = document.createElement('button');
    const imgPlus = document.createElement('img');
    imgPlus.src = bestDish.buttonImagePlus;
    imgPlus.alt = 'Plus';
    buttonImagePlus.appendChild(imgPlus);
    buttonImagePlus.classList.add('button_plus_ul1_home_page2');

    divCount.appendChild(buttonImageMinus);
    divCount.appendChild(count);
    divCount.appendChild(buttonImagePlus);

    const button = document.createElement('button');
    button.textContent = bestDish.button;
    button.classList.add('button_add_ul1_home_page2');

    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(starRatingDiv);
    listItem.appendChild(price);
    listItem.appendChild(divCount);
    listItem.appendChild(button);

    bestDishesListContainer.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', renderBestDishes);
// document.addEventListener('DOMContentLoaded', abestDishesList);
