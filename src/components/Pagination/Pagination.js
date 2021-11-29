import React from "react";
import { EVENT } from "../../constants/constants";
import './Pagination.css'

export const Pagination = ({onClickNext, onClickPrev, children}) => {
  return <div>
      <button data-event={EVENT.PAGINATION} onClick={onClickPrev}>Назад</button>
      <span>{children}</span>
      <button data-event={EVENT.PAGINATION} onClick={onClickNext}>Вперед</button>
  </div>;
};
