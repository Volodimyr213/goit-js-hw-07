import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const ulHtml = document.querySelector(".gallery");
// ulHtml.addEventListener("click",startModal);

function makeGalery(elems){

  return elems.map( ({preview,original,description}) => 
   `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="large-image.jpg"
       alt="${description}"
     />
   </a>
 </li>`
   ).join("")

};
ulHtml.insertAdjacentHTML('beforeend',makeGalery(galleryItems))

// ====================Marcup====================

ulHtml.addEventListener('click', makeModal)

function makeModal(evt) {
    evt.preventDefault()
    if(!evt.target.classList.contains("gallery__image")){
          return
    }
    console.log(evt.target.dataset.source)
};