// шукаю список
const advertisingBanner = document.getElementById('ul_advertising_banner');
// роблю фенкцію показу карток

function displayBaners() {
  // перебераю кожен елемент списка
  banners.forEach(banner => {
    // створюю картку
    const bannerItem = document.createElement('li');
    bannerItem.classList.add('banner_item');

    const bannerImage = document.createElement('img');
    bannerImage.src = banner.image;
    bannerImage.classList.add('img_star_advertising_banner');

    const bannerText = document.createElement('p');
    bannerText.textContent = banner.name;
    bannerText.classList.add('p_Rajasthan_advertising_banner');
    // до картки додаємо картинку
    bannerItem.appendChild(bannerImage);
    // до картки додаємо текст
    bannerItem.appendChild(bannerText);
    // до списка додаємо картку
    advertisingBanner.appendChild(bannerItem);
  });
}
// додаємо слухач подій при завантаження DOM та показуємо картки
document.addEventListener('DOMContentLoaded', displayBaners);
