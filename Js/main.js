import '../style.css';
import Masonry from 'masonry-layout';
import { images, cards } from './data';

const gallery = document.querySelector('#Gallery');
const cardsBox = document.querySelector('#Cards');
const photos = [...document.querySelectorAll('grid-item')]
const popupGallery = document.querySelector('#Popup')
const closeGBtn = document.querySelector('#GaleryClose')
const GalleryNext = document.querySelector('#Next')
const GalleryBack = document.querySelector('#Back')
let index = 0;

photos.forEach((item, i) => {
  item.addEventListener('click', () => {
      console.log('klik')
  })
})



window.onload = () => {
  const grid = document.querySelector('.grid-m');

  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: 10,
  });
};

const postImages = () => {
  images.map(image => {
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('grid-item');
    galleryItem.style.width = 'calc((100% - 20px) / 3)';
    galleryItem.style.marginBottom = '10px';
    galleryItem.innerHTML = `
        <img src="${image.url}" alt="" />`;

    gallery.appendChild(galleryItem);
  });
};

const postCards = () => {
  cards.map(card => {
    const cardBox = document.createElement('div');
    cardBox.classList.add('bg-white', 'p-[48px]');
    cardBox.style.borderRadius = '20px';

    cardBox.innerHTML = `
        <img  src="${card.url}" alt="" />
        <h3>${card.title}</h3>
        <p>
            ${card.text}
        </p>
        <div class="flex text-green">
        <a href="" class="text-green"
          >Dowiedz się wiecej<img src='/public/arrowRight.svg'</a>
          <div />`;
    cardsBox.appendChild(cardBox);
  });
};

postImages();
postCards();
