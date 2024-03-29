import React from "react";

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path} target={props.target}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h6 className='cards__item__minitext'>{props.minitext}</h6>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
