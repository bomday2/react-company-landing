import React, {useState} from 'react';
//scss
import layoutStyle from '../assets/scss/Layout.module.scss';
import textStyle from '../assets/scss/Text.module.scss';
//components
import BoardSearch from '../components/board/Search';
import BoardFaq from '../components/board/Faq';
import Tab from '../components/inc/Tab';
function Faq () {
  //탭
  const [tabIndex, setTabIndex] = useState(0);
  const tabData = [
    { title: "전체"},
    { title: "수업"},
    { title: "결제/환불"},
    { title: "증명서류"},
    { title: "계정"},
    { title: "기타"}
  ];
  return (
    <div className={layoutStyle.container}>
      <h2 className={textStyle.pg_tit}>자주 묻는 <span className={textStyle.point}>질문</span></h2>
      <Tab data={tabData} tabIndex={tabIndex} setTabIndex={setTabIndex} />
      <BoardSearch inputTxt='궁금한 점을 검색해보세요.'/>
      <BoardFaq/>
    </div>
  );
};

export default Faq;