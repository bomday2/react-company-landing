/* eslint-disable */
import React from "react";
import { Link } from 'react-router-dom';
//scss
import boardStyle from '../../assets/scss/Board.module.scss';
//components
import IconPrev from '../../assets/img/icon_prev.png';
import IconFirst from '../../assets/img/icon_first.png';

function Paging() {
  return (
    <div className={boardStyle.paging}>
      <Link to="#" className={`${boardStyle.btn_first} ${boardStyle.btn}`}><img src={IconFirst} alt="first" /></Link>
      <Link to="#" className={`${boardStyle.btn_prev} ${boardStyle.btn}`}><img src={IconPrev} alt="prev" /></Link>
      <Link to="#" className={`${boardStyle.page} ${boardStyle.active}`}>1</Link>
      <Link to="#" className={boardStyle.page}>2</Link>
      <Link to="#" className={boardStyle.page}>3</Link>
      <Link to="#" className={boardStyle.page}>4</Link>
      <Link to="#" className={boardStyle.page}>5</Link>
      <Link to="#" className={`${boardStyle.btn_next} ${boardStyle.btn}`}><img src={IconPrev} alt="next" /></Link>
      <Link to="#" className={`${boardStyle.btn_last} ${boardStyle.btn}`}><img src={IconFirst} alt="end" /></Link>
    </div>
  );
} 

export default Paging;