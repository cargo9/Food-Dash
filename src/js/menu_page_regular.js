const bestRegular = document.getElementById('ul3_home_page2');

function renderBestRegular() {
  bestRegular.innerHTML = '';

  bestRegular.forEach(bestRegular => {
    const listItem = document.createElement('li');
    listItem.classList.add('li1_home_page2');

    const image = document.createElement('img');
    image.src = bestRegular.image;
    image.alt = bestRegular.name;
    image.classList.add('img_ul1_home_page2');

    const name = document.createElement('p');
    name.textContent = bestRegular.name;
    name.classList.add('p_ul1_home_page2');

    const starRatingDiv = document.createElement('div');
    starRatingDiv.classList.add('div_ul1_star_home_page2');

    for (let i = 0; i < bestRegular.rating; i++) {
      const starImage = document.createElement('img');
      starImage.src = 'https://i.ibb.co/GQ31hr09/Star-1.png';
      starImage.classList.add('star_icon');
      starRatingDiv.appendChild(starImage);
    }

    const span = document.createElement('span');
    span.textContent = bestRegular.span;
    span.classList.add('span_ul1_home_page2');
    starRatingDiv.appendChild(span);

    const price = document.createElement('p');
    price.textContent = bestRegular.price;
    price.classList.add('h3_ul1_home_page2');

    const divCount = document.createElement('div');
    divCount.classList.add('div_count_ul1_home_page2');

    const buttonImageMinus = document.createElement('button');
    const imgMinus = document.createElement('img');
    imgMinus.src = bestRegular.buttonImageMinus;
    imgMinus.alt = 'Minus';
    buttonImageMinus.appendChild(imgMinus);
    buttonImageMinus.classList.add('button_-_ul1_home_page2');

    const count = document.createElement('h4');
    count.textContent = bestRegular.count;
    count.classList.add('h4_count_ul1_home_page2');

    const buttonImagePlus = document.createElement('button');
    const imgPlus = document.createElement('img');
    imgPlus.src = bestRegular.buttonImagePlus;
    imgPlus.alt = 'Plus';
    buttonImagePlus.appendChild(imgPlus);
    buttonImagePlus.classList.add('button_plus_ul1_home_page2');

    divCount.appendChild(buttonImageMinus);
    divCount.appendChild(count);
    divCount.appendChild(buttonImagePlus);

    const button = document.createElement('button');
    button.textContent = bestRegular.button;
    button.classList.add('button_add_ul1_home_page2');

    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(starRatingDiv);
    listItem.appendChild(price);
    listItem.appendChild(divCount);
    listItem.appendChild(button);

    bestRegular.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', renderBestRegular);
