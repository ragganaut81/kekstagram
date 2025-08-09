import { COMMENT_SHOWN } from './data.js';
import { showButton } from './util.js';

const renderComments = function(comments, container, counter) {
  const commentsBlock = container.querySelector('.social__comments');
  const commentTemplate = commentsBlock.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();
  if (counter == 0) {
    commentsBlock.innerHTML = '';
  }
  for (let i = counter; i < (counter + COMMENT_SHOWN) && i < comments.length; i++) {
    const comment = commentTemplate.cloneNode(true);
    comment.setAttribute('id', comments[i].id);
    comment.querySelector('.social__picture').src = comments[i].avatar;
    comment.querySelector('.social__text').textContent = comments[i].message;
    comment.setAttribute('data-name', comments[i].name);
    commentFragment.appendChild(comment);
  }
  commentsBlock.appendChild(commentFragment);
};

const showMoreComments = function (container, comments) {
  const commentsLoader = container.querySelector('.comments-loader');
  let commentShownCount = COMMENT_SHOWN;
  renderCommentsCount(comments, container, commentShownCount);
  showButton(commentsLoader, (comments.length > commentShownCount));

  commentsLoader.addEventListener('click', () => {
    renderComments(comments, container, commentShownCount);
    commentShownCount += COMMENT_SHOWN;
    renderCommentsCount(comments, container, commentShownCount);
    showButton(commentsLoader, (comments.length > commentShownCount));
  });
};

function renderCommentsCount(comments, container, commentShownCount) {
  const count = (comments.length <= commentShownCount) ? comments.length : commentShownCount;
  container.querySelector('.social__comment-shown-count').textContent = count;
}

const renderBigPicture = function(pictureId, posts, container) {
  posts.forEach(({id, url, description, likes, avatar, comments}) => {
    if (pictureId == id) {
      container.querySelector('.big-picture__img img').src = url;
      container.querySelector('.big-picture__img img').alt = description;
      container.querySelector('.social__picture').src = avatar;
      container.querySelector('.social__caption').textContent = description;
      container.querySelector('.likes-count').textContent = likes;
      container.querySelector('.social__comment-total-count').textContent = comments.length;
      container.querySelector('.social__comment-shown-count').textContent = COMMENT_SHOWN;
      renderComments(comments, container, 0);
      showMoreComments(container, comments);
    }
  });
};

export {renderBigPicture};
