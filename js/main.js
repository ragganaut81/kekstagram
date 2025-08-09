import {similarPosts} from './data.js';
import {renderPictures} from './pictures.js';
import {openModal} from './modal.js';
import {renderBigPicture} from './big-picture.js';

const picturesList = document.querySelector('.pictures');
const posts = similarPosts();
renderPictures(picturesList, posts);

const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

pictures.forEach((picture) => {
  picture.addEventListener('click', () => {
    openModal(bigPicture, bigPictureCancel);
    renderBigPicture(picture.id, posts, bigPicture);
  });
});


