const bestSnacksListContainer = document.getElementById('ul2_home_page2');

function renderBestSnacks() {
  bestSnacksListContainer.innerHTML = '';

  bestSnacks.forEach(bestSnacks => {
    const listItem = document.createElement('li');
    listItem.classList.add('li1_home_page2');

    const image = document.createElement('img');
    image.src = bestSnacks.image;
    image.alt = bestSnacks.name;
    image.classList.add('img_ul1_home_page2');

    const name = document.createElement('p');
    name.textContent = bestSnacks.name;
    name.classList.add('p_ul1_home_page2');

    const starRatingDiv = document.createElement('div');
    starRatingDiv.classList.add('div_ul1_star_home_page2');

    for (let i = 0; i < bestSnacks.rating; i++) {
      const starImage = document.createElement('img');
      starImage.src = 'https://i.ibb.co/GQ31hr09/Star-1.png';
      starImage.classList.add('star_icon');
      starRatingDiv.appendChild(starImage);
    }

    const span = document.createElement('span');
    span.textContent = bestSnacks.span;
    span.classList.add('span_ul1_home_page2');
    starRatingDiv.appendChild(span);

    const price = document.createElement('p');
    price.textContent = bestSnacks.price;
    price.classList.add('h3_ul1_home_page2');

    const divCount = document.createElement('div');
    divCount.classList.add('div_count_ul1_home_page2');

    const buttonImageMinus = document.createElement('button');
    const imgMinus = document.createElement('img');
    imgMinus.src = bestSnacks.buttonImageMinus;
    imgMinus.alt = 'Minus';
    buttonImageMinus.appendChild(imgMinus);
    buttonImageMinus.classList.add('button_-_ul1_home_page2');

    const count = document.createElement('h4');
    count.textContent = bestSnacks.count;
    count.classList.add('h4_count_ul1_home_page2');

    const buttonImagePlus = document.createElement('button');
    const imgPlus = document.createElement('img');
    imgPlus.src = bestSnacks.buttonImagePlus;
    imgPlus.alt = 'Plus';
    buttonImagePlus.appendChild(imgPlus);
    buttonImagePlus.classList.add('button_plus_ul1_home_page2');

    divCount.appendChild(buttonImageMinus);
    divCount.appendChild(count);
    divCount.appendChild(buttonImagePlus);

    const button = document.createElement('button');
    button.textContent = bestSnacks.button;
    button.classList.add('button_add_ul1_home_page2');

    listItem.appendChild(image);
    listItem.appendChild(name);
    listItem.appendChild(starRatingDiv);
    listItem.appendChild(price);
    listItem.appendChild(divCount);
    listItem.appendChild(button);

    bestSnacksListContainer.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', renderBestSnacks);
