import React, { useContext } from 'react';
import { currentUserContext } from '../contexts/CurrentUserContext.js';

export default function Card({ card, onCardDelete, onCardClick, onCardLike }) {
  const currentUser = useContext(currentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${isLiked && 'element__like-button_active'}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteCard () {
    onCardDelete(card)
  }

  return(
    <li className="element">
      {isOwn && (<button type="button" className='element__delete-button' onClick={handleDeleteCard}></button>)}
      <img src={card.link} alt={`карточка "${card.name}"`} className="element__photo" onClick={handleClick} />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
