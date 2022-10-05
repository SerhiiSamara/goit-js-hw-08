// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

//Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemsMarkup(galleryItems);
creatGalleryMarkup(galleryMarkup);

function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `		
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join('');
}

function creatGalleryMarkup(galleryMarkup) {
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
}

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
