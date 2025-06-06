import React, {useState} from 'react';
//style
import boardStyle from '../../assets/scss/Board.module.scss';

function Faq() {
  //리스트
  const [activeIndex, setActiveIndex] = useState(null);
  const faqList = [
    { f: "WebNity는 어떤 서비스를 제공하나요?", a: "WebNity는 영어를 포함한 80개국의 언어 회화, 비즈니스 커뮤니케이션, 문화 적응 교육 등 글로벌 기업 맞춤형 교육 콘텐츠를 제공합니다." },
    { f: "교육 대상은 누구인가요?", a: "임직원, 관리자, 해외 주재 예정자 등 기업 내 모든 직무 대상자를 위한 커리큘럼이 준비되어 있습니다." },
    { f: "수강 방식은 어떻게 되나요?", a: "전 과정은 PC 또는 모바일로 수강 가능한 온라인 방식이며, 라이브 강의와 녹화 강의가 병행됩니다." },
    { f: "우리 회사에 맞춘 맞춤형 커리큘럼도 가능한가요?", a: "가능합니다. 기업 요구에 따라 업종, 직무, 지역별 특성에 맞는 맞춤형 과정 설계가 제공됩니다." },
    { f: "외국어 외에 어떤 교육이 있나요?", a: "비즈니스 매너, 이메일 작성법, 프레젠테이션 스킬, 다문화 이해 등 실무에 바로 적용 가능한 커뮤니케이션 교육도 포함되어 있습니다." },
    { f: "교육 결과는 어떻게 확인하나요?", a: "관리자 페이지에서 개인별 수강 현황, 평가 결과, 학습 리포트를 실시간으로 확인할 수 있습니다." },
    { f: "이용 요금은 어떻게 되나요?", a: "인원수, 과정 구성, 커스터마이징 범위에 따라 상이하며, 기업 담당자 상담 후 맞춤 견적을 안내해 드립니다." },
  ];
  return (
    <div className={boardStyle.faq__wrap}>
      {faqList.map((item, index) => (
        <FaqItem
          key={index}
          f={item.f}
          a={item.a}
          isActive={activeIndex === index}
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        />
      ))}
    </div>
  );
}

// 문답 항목
const FaqItem = ({ f, a, isActive, onClick }) => {
  return (
    <div
      className={`${boardStyle.faq} ${isActive ? boardStyle.active : ''}`}
      onClick={onClick}
    >
      <div className={boardStyle.f}>{f}</div>
      <div className={boardStyle.a}>{a}</div>
    </div>
  );
};

export default Faq;