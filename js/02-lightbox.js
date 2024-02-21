import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulHtml = document.querySelector(".gallery")
ulHtml.addEventListener('click',crateModal)

function createMarcup(elemntsArr){
    
    const marcup = elemntsArr.map(({preview,original,description}) => {
        return ` <li class="gallery__item">
   <a 
     class="gallery__link" 
        href="${original}">
      <img 
         class="gallery__image" 
         src="${preview}" 
         alt="${description}" />
   </a>
</li> `
    }).join("")
   ulHtml.insertAdjacentHTML("beforeend",marcup)
};
createMarcup(galleryItems);

function crateModal(event){
    event.preventDefault()
    console.log()
    if(!event.target.classList.contains("gallery__image")){
        return
    };
    new SimpleLightbox('.gallery a', { 
        // captions :true,
        captionsData: "alt",
        captionDelay: 250
     });
   
};



