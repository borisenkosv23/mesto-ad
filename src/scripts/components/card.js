const getCardTemplate = () =>
  document.getElementById('card-template').content.querySelector('.card').cloneNode(true);

export const deleteCard = (cardEl) => cardEl.remove();

export const updateLikeState = (likeBtn, likeCount, likes) => {
  likeBtn.classList.toggle('card__like-button_is-active');
  likeCount.textContent = likes.length;
};

export const createCardElement = (data, userId, { onImage, onLike, onDelete }) => {
  const card = getCardTemplate();

  const img = card.querySelector('.card__image');
  const title = card.querySelector('.card__title');
  const likeBtn = card.querySelector('.card__like-button');
  const likeCount = card.querySelector('.card__like-count');
  const deleteBtn = card.querySelector('.card__control-button_type_delete');

  img.src = data.link;
  img.alt = data.name;
  title.textContent = data.name;
  likeCount.textContent = data.likes.length;

  if (data.likes.some((u) => u._id === userId)) {
    likeBtn.classList.add('card__like-button_is-active');
  }

  img.addEventListener('click', () => onImage(data.name, data.link));
  likeBtn.addEventListener('click', () => onLike(card, data, likeBtn, likeCount));

  if (data.owner._id === userId) {
    deleteBtn.addEventListener('click', () => onDelete(card, data._id));
  } else {
    deleteBtn.remove();
  }

  return card;
};
