import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
//scss
import layoutStyle from '../../assets/scss/Layout.module.scss';
// img
import IconBar from '../../assets/img/icon_bar.png';
import BtnClose from '../../assets/img/btn_close.png';
//components
import Weather from '../inc/Weather';

function Header() {
  const location = useLocation();
  const pathName = location.pathname;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prev => !prev);
  };

  // 페이지 이동 시 gnb 닫기
  useEffect(() => {
    setIsActive(false);
  }, [pathName]);

  return (
    <div className={layoutStyle.header}>
      <h1 className={layoutStyle.logo}>
        <Link to="front/">WebNity</Link>
      </h1>
      <div className={`${layoutStyle.gnb__wrap} ${isActive ? layoutStyle.active : ''}`}>
        <button type="button"
          className={layoutStyle.gnb__close}
          onClick={handleClick}
        >
          <img src={BtnClose} alt="" />
        </button>
        <nav className={layoutStyle.gnb}>
          <Link
            to="/front"
            className={`${layoutStyle.gnb_menu} ${pathName.includes("/Main") ? layoutStyle.active : ''}`}
          >
            홈
          </Link>
          <Link
            to="/front/Tv"
            className={`${layoutStyle.gnb_menu} ${pathName.includes("/Tv") ? layoutStyle.active : ''}`}
          >
            영상
          </Link>
          <Link
            to="/front/Faq"
            className={`${layoutStyle.gnb_menu} ${pathName.includes("/Faq") ? layoutStyle.active : ''}`}
          >
            자주 묻는 질문
          </Link>
        </nav>
        <i className={layoutStyle.gnb__bg}></i>
      </div>
      <Weather/>
      <button className={layoutStyle.menu_bar} onClick={handleClick}>
        <img src={IconBar} alt="menu" />
      </button>
    </div>
  );
}

export default Header;
