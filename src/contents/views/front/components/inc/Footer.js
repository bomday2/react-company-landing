import React from 'react';
import { Link } from 'react-router-dom';
import layoutStyle from '../../assets/scss/Layout.module.scss';
//img
import ImgGooglePlay from '../../assets/img/google_play.jpg';
function Footer(){
  return (
    <div className={layoutStyle.footer}>
      <div className={layoutStyle.inner}>
        <div className={layoutStyle.footer__link_area}>
          <Link to="" className={layoutStyle.footer__link}>이용약관</Link>
          <Link to="" className={layoutStyle.footer__link}>개인정보처리방침</Link>
        </div>
        <address className={layoutStyle.address}>
          <span className={layoutStyle.company_name}>(주)엘비엠</span>
          <span className={layoutStyle.ceo}>대표: 홍길동</span>
          <span>개인정보보호책임자 : help@lbm.co.kr</span><br/>
          <span>주소 : 서울특별시 용산구 한강대로 405 </span>
          <span>T.02-000-1234   F.02-258-1234</span>
          <span>사업자등록번호 : 123-45-47589</span>
        </address>
        <p className={layoutStyle.copy}>ⓒLBM Corp. All rights reserved.</p>
        <button type='button' className={layoutStyle.google_play}><img src={ImgGooglePlay} alt='google play'/></button>
      </div>
    </div>
  );
};

export default Footer;