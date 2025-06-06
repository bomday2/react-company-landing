import React from 'react';
//scss
import layoutStyle from '../assets/scss/Layout.module.scss';
import textStyle from '../assets/scss/Text.module.scss';
import formStyle from '../assets/scss/Form.module.scss';
import btnStyle from '../assets/scss/Button.module.scss';
function Inquiry() {
  return (
    <div className={layoutStyle.container}>
      <h2 className={textStyle.pg_tit}>기업교육 <span className={textStyle.point}>도입문의</span></h2>
      <div className={textStyle.sub_tit}>
      도입 문의에는 비용이 들지 않습니다.<br/>언제든 문의 주시면 <span className={textStyle.point}>친절하게 상담</span>해 드리겠습니다.
      </div>
      <ul className={formStyle.input_sec}>
        <li className={`${formStyle.block} ${formStyle.col}`}>
          <p className={formStyle.tit_field}>성함<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='text'/>
          </div>
        </li>
        <li className={`${formStyle.block} ${formStyle.col}`}>
          <p className={formStyle.tit_field}>연락처<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='text'/>
          </div>
        </li>
        <li className={formStyle.block}>
          <p className={formStyle.tit_field}>회사 이메일 주소<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='text'/>
          </div>
        </li>
        <li className={formStyle.block}>
          <p className={formStyle.tit_field}>회사명<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='text'/>
          </div>
        </li>
        <li className={`${formStyle.block} ${formStyle.col}`}>
          <p className={formStyle.tit_field}>기업 유형<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='text'/>
          </div>
        </li>
        <li className={`${formStyle.block} ${formStyle.col}`}>
          <p className={formStyle.tit_field}>업무<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='text'/>
          </div>
        </li>
        <li className={formStyle.block}>
          <p className={formStyle.tit_field}>회사 홈페이지 주소<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='text'/>
          </div>
        </li>
        <li className={`${formStyle.block} ${formStyle.col}`}>
          <p className={formStyle.tit_field}>희망 교육 일정<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='date'/>
          </div>
        </li>
        <li className={`${formStyle.block} ${formStyle.col}`}>
          <p className={formStyle.tit_field}>학습 인원 수<i className={formStyle.icon_must}>*</i></p>
          <div className={formStyle.input_field}>
            <input type='number'/>
          </div>
        </li>
        <li className={formStyle.block}>
          <p className={formStyle.tit_field}>문의 사항</p>
          <div className={formStyle.input_field}>
            <textarea className={formStyle.textarea}/>
          </div>
        </li>
      </ul>
      <div className={`${btnStyle.btn__wrap} ${btnStyle.bottom}`}>
        <button type='button' className={`${btnStyle.btn} ${btnStyle.l} ${btnStyle.point}`}>문의하기</button>
      </div>
    </div>
  );
}

export default Inquiry;