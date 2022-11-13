import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import cardTemp from "../template/cards.hbs"

const galaryDiv = document.querySelector('.gallery');

const createGalery = collection => 
    galaryDiv.insertAdjacentHTML('afterbegin', collection.map(cardTemp).join(''));
    
createGalery(galleryItems)
const lightbox = new SimpleLightbox('.gallery a', {captionsData:'alt',captionDelay:250});
const onImgClick = event => {
    event.preventDefault();
}
 
galaryDiv.addEventListener('click', onImgClick);