import { galleryItems } from './gallery-items.js';
// Change code below this line


const ulHtml = document.querySelector(".gallery");
// ulHtml.addEventListener("click",startModal);

function makeGalery(elems){

  return elems.map( ({preview,original,description}) => 
   `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </li>`
   ).join("")

};
ulHtml.insertAdjacentHTML('beforeend',makeGalery(galleryItems))

// ====================Marcup====================

ulHtml.addEventListener('click', makeModalFn)

function makeModalFn(evt) {
    evt.preventDefault()
    if(!evt.target.classList.contains("gallery__image")){
          return
    }
   const urlImg = evt.target.dataset.source

   const instance = basicLightbox.create(`
  <img src="${urlImg}" width="800" height="600" >
`)
instance.show()

ulHtml.addEventListener('keydown',modalCloseFn)

function modalCloseFn(evt){
    if(evt.code === "Escape"){
       instance.close()
    };
 
};


};
