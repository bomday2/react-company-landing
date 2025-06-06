import React from 'react';
//scss
import mainStyle from '../../assets/scss/Main.module.scss';
import textStyle from '../../assets/scss/Text.module.scss';
//img
import IconStar from '../../assets/img/star_on.svg';

function Review({data}) {

  const reviewStats = [
    { score: '4.8', label: '학습 효과 만족도' },
    { score: '4.8', label: '지원 및 관리 기능' },
    { score: '4.8', label: '평균 만족도' }
  ];  
  return (
    <>
      {/*평점*/}
      <div className={mainStyle.point_area}>
        {reviewStats.map((item, idx) => (
          <div key={idx} className={mainStyle.item}>
            <p className={mainStyle.num}>
              <b className={textStyle.point}>{item.score}</b>/5.0
            </p>
            <p className={mainStyle.txt}>{item.label}</p>
          </div>
        ))}
      </div>
      {/*리뷰*/}
      <div className={mainStyle.review_area}>
        {data.map((item, idx) => (
          <div key={idx} className={mainStyle.item}>
            <div className={mainStyle.profile}>
              <img src={item.profile} alt='' />
            </div>
            <div className={mainStyle.txt_area}>
              <p className={mainStyle.name}>{item.name}</p>
              <div className={mainStyle.star}>
                {Array(5).fill(0).map((_, i) => (
                  <img key={i} src={IconStar} alt='' />
                ))}
              </div>
              <p className={mainStyle.review}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Review;