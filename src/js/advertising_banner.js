const advertisingBanner = document.getElementById('ul_advertising_banner');

function displayBaners() {
  banners.forEach(banner => {
    const bannerItem = document.createElement('li');
    bannerItem.classList.add('banner_item');

    const bannerImage = document.createElement('img');
    bannerImage.src = banner.image;
    bannerImage.classList.add('img_star_advertising_banner');

    const bannerText = document.createElement('p');
    bannerText.textContent = banner.name;
    bannerText.classList.add('p_Rajasthan_advertising_banner');

    bannerItem.appendChild(bannerImage);
    bannerItem.appendChild(bannerItem);

    advertisingBanner.appendChild(bannerItem);
  });
}

document.addEventListener('DOMContentLoaded', displayBaners);
