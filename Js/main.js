import '../style.css';
import Masonry from 'masonry-layout';
import { images, cards } from './data';


const gallery = document.querySelector('#Gallery');
const cardsBox = document.querySelector('#Cards');
const photos = [...document.querySelectorAll('.photo')]
const popupGallery = document.querySelector('#Popup')
const closeGBtn = document.querySelector('#GaleryClose')
const imgIndex = document.querySelector('.index')
const galleryNext = document.querySelector('#Next')
const galleryBack = document.querySelector('#Back')
const image = document.querySelector('.image');
const searchBtn = document.querySelector('#Search')
const searchPop = document.querySelector('#SearchPop')
const shadow = document.querySelector('#Shadow')
const projectContainer = document.querySelector('#Projects')
const btnMore = document.querySelector('#More')
let sections = document.querySelectorAll('section')
let index = 0;
let isOpen = false



// functions


window.onscroll = () => {
  sections.forEach(sec => {
    let top =window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if(top >= offset && top < offset + height){
      sec.classList.add('show-animate')
    }else {
      sec.classList.remove('show-animate')
    }

  })
}


const openGallery = () => {
 projectContainer.style.height = 'auto';
 btnMore.style.display = 'none'
 shadow.style.display = 'none'
}


photos.forEach((item, i) => {
  item.addEventListener('click', () => {
    updateImage(i);
    popupGallery.classList.toggle('active')
  })
})

const updateImage = (i) =>{
  let path = `/img${i+1}.jpeg`
  image.src = path;
  imgIndex.textContent = `0${i}`
  index = i
}



window.onload = () => {
  const grid = document.querySelector('.grid-m');

  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    gutter: 10,
  });
};



// const postImages = () => {
//   images.map(image => {
//     const galleryItem = document.createElement('div');
//     galleryItem.classList.add('grid-item');
//     galleryItem.style.width = 'calc((100% - 20px) / 3)';
//     galleryItem.style.marginBottom = '10px';
//     galleryItem.innerHTML = `
//         <img src="${image.url}" alt="" />`;

//     gallery.appendChild(galleryItem);
//   });
// };

const postCards = () => {
  cards.map(card => {
    const cardBox = document.createElement('div');
    cardBox.classList.add( 'bg-white', 'p-5' ,'hover:scale-125', 'transition-transform', 'duration-300', 'animate');
    cardBox.style.borderRadius = '20px';

    cardBox.innerHTML = `
        <img  src="${card.url}" alt="" />
        <h3 class="my-[10px]">${card.title}</h3>
        <p>
            ${card.text}
        </p>
        <div class="text-green ">
        <a href="" class="text-green flex justify-start gap-2 "
          >Dowiedz się wiecej<img src='/arrowRight.svg'</a>
          <div />`;
    cardsBox.appendChild(cardBox);
  });
};


// Event Listeners

searchBtn.addEventListener('click' ,()=>{
  searchPop.classList.toggle('active-search')
})


closeGBtn.addEventListener('click' ,()=>{
  popupGallery.classList.toggle('active')
})


galleryBack.addEventListener('click', () => {
  if(index > 0){
      updateImage(index - 1);
  }
})


galleryNext.addEventListener('click', () => {
  if(index < images.length - 1){
      updateImage(index + 1);
  }
})

btnMore.addEventListener('click',()=>{
  openGallery()
})


// postImages();
postCards();
