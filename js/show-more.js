import {COMMENT_SHOWN} from './data.js';

const showMore = function () {
  const commentsLoader = container.querySelector('.comments-loader');
  let commentShownCount = COMMENT_SHOWN;
  if (comments.length > COMMENT_SHOWN) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

export {showMore}