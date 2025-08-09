const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const picturesFragment = document.createDocumentFragment();

const renderPictures = (container, posts) => {
  posts.forEach(({id, url, description, likes, comments}) => {
    const picture = pictureTemplate.cloneNode(true);
    picture.setAttribute('id', id);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__img').alt = description;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.appendChild(picture);
  });

  container.appendChild(picturesFragment);
};

export {renderPictures};
