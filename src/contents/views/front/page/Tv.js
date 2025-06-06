import React, {useState} from 'react';
//scss
import layoutStyle from '../assets/scss/Layout.module.scss';
import textStyle from '../assets/scss/Text.module.scss';
import boardStyle from '../assets/scss/Board.module.scss';
//components
import BoardSearch from '../components/board/Search';
import Tab from '../components/inc/Tab';
import Paging from '../components/inc/Paging';
//img
import ThumbTv from '../assets/img/@tv.jpg';
import ThumbTv2 from '../assets/img/@tv2.jpg';
function Tv() {
  //탭
  const [tabIndex, setTabIndex] = useState(0);
  const tabData = [
    { title: "전체"},
    { title: "학습"},
    { title: "기술"},
    { title: "AI튜터"},
    { title: "기타"}
  ];
  return (
    <div className={layoutStyle.container}>
      <h2 className={textStyle.pg_tit}>WebNity <span className={textStyle.point}>TV</span></h2>
      <Tab data={tabData} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <BoardSearch inputTxt='궁금한 점을 검색해보세요.'/>
      <section className={boardStyle.tv}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => {
          // 2줄째 항목: 인덱스 5,6,7,8
          const isSecondRow = idx >= 4 && idx <= 8;
          const img = isSecondRow ? ThumbTv2 : ThumbTv;
          return <TvItem key={idx} img={img} />;
        })}
      </section>
      <Paging/>
    </div>
  );
}

const TvItem = ({ img })  =>{
  return (
    <div className={boardStyle.item}>
      <div className={boardStyle.thumb}>
        <img src={img} alt='' />
      </div>
      <p className={boardStyle.tit}>WebNity의 기술 스토리 영상</p>
      <p className={boardStyle.info}><span className={boardStyle.txt}>조회수 6059회</span><span className={boardStyle.txt}>등록일 3일 전</span></p>
    </div>
  )
}

export default Tv;