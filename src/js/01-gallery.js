// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

console.log(SimpleLightbox);
// Change code below this line
// const galleryContainer = document.querySelector('.gallery');
// const imageEl = document.querySelector('.gallery__image');

// galleryContainer.addEventListener('click', onGalleryItemClick);

// const galleryMarkup = createGalleryItemsMarkup(galleryItems);
// creatGalleryMarkup(galleryMarkup);

// function createGalleryItemsMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
// 		<div class="gallery__item">
//      <a class="gallery__link" href="${original}">
//       <img
//        class="gallery__image"
//        src="${preview}"
//        data-source="${original}"
//        alt="${description}"
//       />
//      </a>
//     </div>`;
//     })
//     .join('');
// }

// function creatGalleryMarkup(galleryMarkup) {
//   galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
// }

// function onGalleryItemClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }

//   const options = {
//     onShow: () => window.addEventListener('keydown', onEscClick),
//     onClose: () => window.removeEventListener('keydown', onEscClick),
//   };

//   const instance = basicLightbox.create(
//     `<img src="${e.target.dataset.source}">`,
//     options
//   );

//   instance.show();

//   function onEscClick(e) {
//     if (e.code === 'Escape') {
//       instance.close();
//     }
//   }
// }

console.log(galleryItems);
