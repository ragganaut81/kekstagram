import {isEscapeKey} from './util.js';

const openModal = function (modal, closeBtn) {
  modal.classList.remove('hidden');
  const closeModal = function () {
    modal.classList.add('hidden');
  };
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  });
};

export {openModal};