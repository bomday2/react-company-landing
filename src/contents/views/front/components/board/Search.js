import React from 'react';
import boardStyle from '../../assets/scss/Board.module.scss';
import btnStyle from '../../assets/scss/Button.module.scss';
function Search(props) {
  return (
    <div className={boardStyle.board_search}>
      <input type="text" className={boardStyle.input} placeholder={props.inputTxt}/><button type='button' className={`${btnStyle.btn} ${btnStyle.point} ${btnStyle.m}`}>검색</button>
    </div>
  );
}

export default Search;