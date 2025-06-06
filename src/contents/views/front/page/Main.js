import React, {useState, useRef , useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//scss
import mainStyle from '../assets/scss/Main.module.scss';
import textStyle from '../assets/scss/Text.module.scss';
import btnStyle from '../assets/scss/Button.module.scss';
import '../assets/scss/main_slide.scss'
//img
import ImgMainVisual1 from '../assets/img/main_visual1.png'
import ImgMainVisual2 from '../assets/img/main_visual2.png'
import ImgPartner1 from '../assets/img/partner1.jpg';
import ImgPartner2 from '../assets/img/partner2.jpg';
import ImgPartner3 from '../assets/img/partner3.jpg';
import ImgPartner4 from '../assets/img/partner4.jpg';
import ImgPartner5 from '../assets/img/partner5.jpg';
import ImgPartner6 from '../assets/img/partner6.jpg';
import ImgPartner7 from '../assets/img/partner7.jpg';
import ImgPartner8 from '../assets/img/partner8.jpg';
import ImgProfile1 from '../assets/img/main_profile1.png';
import ImgProfile2 from '../assets/img/main_profile2.png';
import ImgProfile3 from '../assets/img/main_profile3.png';
import Imgfunction1 from '../assets/img/main_function1.jpg';
import Imgfunction2 from '../assets/img/main_function2.jpg';
import Imgfunction3 from '../assets/img/main_function3.jpg';
import Imgfunction4 from '../assets/img/main_function4.jpg';
import Imgfunction5 from '../assets/img/main_function5.jpg';
import ImgSkill1 from '../assets/img/skill1.png';
import ImgSkill2 from '../assets/img/skill2.png';
import ImgSkill3 from '../assets/img/skill3.png';
import ImgSkill4 from '../assets/img/skill4.png';
import btnPlay from '../assets/img/btn_play.png';
import btnPause from '../assets/img/btn_pause.png'
import Imgchart1 from '../assets/img/chart1.png'
import Imgchart2 from '../assets/img/chart2.png'
import Imgchart3 from '../assets/img/chart3.png'
import ImgB2b1 from '../assets/img/b2b1.png'
import ImgB2b2 from '../assets/img/b2b2.png'
import ImgB2b3 from '../assets/img/b2b3.png'
import ImgManager1 from '../assets/img/manager1.png'
import ImgManager2 from '../assets/img/manager2.png'
import ImgManager3 from '../assets/img/manager3.png'
//components
import Tab from '../components/inc/Tab';
import Review from '../components/main/Review';
import Faq from '../components/board/Faq'
function Main() {
  //메인 비주얼 슬라이드
  const [visualProgress, visualSetProgress] = useState(0);
  function visualUpdateProgress(swiper) {
    const visualRatio = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
    visualSetProgress(visualRatio);
  }
  const visualSwiperRef = useRef(null);
  const [visualIsPlaying, visualSetIsPlaying] = useState(true);
  //관리자들 슬라이드 navigation
  const managerPrevRef = useRef(null);
  const managerNextRef = useRef(null);
  const [managerSwiperInstance, managerSetSwiperInstance] = useState(null);
  useEffect(() => {
    if (
      managerSwiperInstance &&
      managerSwiperInstance.params &&
      managerPrevRef.current &&
      managerNextRef.current
    ) {
      managerSwiperInstance.params.navigation.prevEl = managerPrevRef.current;
      managerSwiperInstance.params.navigation.nextEl = managerNextRef.current;
      managerSwiperInstance.navigation.init();
      managerSwiperInstance.navigation.update();
    }
  }, [managerSwiperInstance]);
  //파트너 로고
  const partnerRows = [
    [ImgPartner1, ImgPartner2, ImgPartner3, ImgPartner4],
    [ImgPartner5, ImgPartner6, ImgPartner7, ImgPartner8],
    [ImgPartner4, ImgPartner3, ImgPartner2, ImgPartner1]
  ];
  //리뷰 내용
  const reviewSets = {
    0:[
      {
        profile: ImgProfile1,
        name: 'B기업 임직원',
        text: '“AI랑 외국어 공부를 한다는게 처음인데 믿기지 않았어요~ 실제로 해보니 정말 자연스럽고 좋았어요... 진짜 사람처럼 다양한 주제로 얘기할 수 있어서 지루할 틈이 없어요!! 강추강추”'
      },
      {
        profile: ImgProfile2,
        name: 'B기업 임직원',
        text: '“AI랑 외국어 공부를 한다는게 처음인데 믿기지 않았어요~ 실제로 해보니 정말 자연스럽고 좋았어요... 진짜 사람처럼 다양한 주제로 얘기할 수 있어서 지루할 틈이 없어요!! 강추강추”'
      },
      {
        profile: ImgProfile3,
        name: 'B기업 임직원',
        text: '“AI랑 외국어 공부를 한다는게 처음인데 믿기지 않았어요~ 실제로 해보니 정말 자연스럽고 좋았어요... 진짜 사람처럼 다양한 주제로 얘기할 수 있어서 지루할 틈이 없어요!! 강추강추”'
      },
    ],
    1:[
      {
        profile: ImgProfile1,
        name: '운영진',
        text: '“AI랑 외국어 공부를 한다는게 처음인데 믿기지 않았어요~ 실제로 해보니 정말 자연스럽고 좋았어요... 진짜 사람처럼 다양한 주제로 얘기할 수 있어서 지루할 틈이 없어요!! 강추강추”'
      },
      {
        profile: ImgProfile2,
        name: '운영진',
        text: '“AI랑 외국어 공부를 한다는게 처음인데 믿기지 않았어요~ 실제로 해보니 정말 자연스럽고 좋았어요... 진짜 사람처럼 다양한 주제로 얘기할 수 있어서 지루할 틈이 없어요!! 강추강추”'
      },
      {
        profile: ImgProfile3,
        name: '운영진',
        text: '“AI랑 외국어 공부를 한다는게 처음인데 믿기지 않았어요~ 실제로 해보니 정말 자연스럽고 좋았어요... 진짜 사람처럼 다양한 주제로 얘기할 수 있어서 지루할 틈이 없어요!! 강추강추”'
      },
    ]
  };
  //리뷰 탭
  const [reviewTabIndex, setReviewTabIndex] = useState(0);
  const reviewTabData = [
    { title: "직원의 한마디"},
    { title: "운영진의 한마디"}
  ];  
  const functionPagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const textList = [
        'AI튜터',
        '롤플레잉',
        '퀴즈',
        '토론',
        '단어장'
      ];
      return `
      <span class="${className} custom_bullet bullet_${index}">
        <span class="bullet_img"></span>
        <span class="swiper-tab-text">${textList[index]}</span>
      </span>
    `;
    },
  };
  //기능 슬라이드 navigation
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  //기술력 슬라이드
  const [progress, setProgress] = useState(0);
  function updateProgress(swiper) {
    const ratio = ((swiper.realIndex + 1) / swiper.slides.length) * 100;
    setProgress(ratio);
  }
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div className={mainStyle.container}>
      {/*메인 비주얼*/}
      <div className={`${mainStyle.main_visual} slide_type1 main_visual`}>
        <Swiper
          modules={[Autoplay,Pagination,Navigation]}
          navigation={true}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'fraction',
            el: '.custom-fraction',
            formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
            formatFractionTotal: (number) => number.toString().padStart(2, '0'),
          }}
          onSlideChange={(swiper) => visualUpdateProgress(swiper)}
          onSwiper={(swiper) => (visualSwiperRef.current = swiper)}
          className={mainStyle.skill_slide}
        >
          <SwiperSlide className={mainStyle.slide}>
            <div className={mainStyle.inner}>
              <div className={mainStyle.txt_area}>
                <p className={mainStyle.tit}>
                  미래를 이끄는 디지털 교육 <br/>
                  <b className={textStyle.point}>WebNity</b>와 함께하세요!
                </p>
                <p className={mainStyle.txt}>
                  WebNity의 AI 기반 글로벌 교육 플랫폼으로<br/>
                  임직원의 디지털 역량을 강화하고 글로벌 시장에서 앞서 나가세요.
                </p>
                <div className={`${btnStyle.btn__wrap} ${btnStyle.bottom}`}>
                  <button type='button' className={`${btnStyle.btn} ${btnStyle.l} ${btnStyle.white}`}>소개서 다운받기</button>
                  <Link to="/front/Inquiry" className={`${btnStyle.btn} ${btnStyle.l} ${btnStyle.point}`}>기업교육 도입문의</Link>
                </div>
              </div>
              <div className={mainStyle.img_area}>
                <img src={ImgMainVisual1} alt=''/>
              </div>
            </div>
          </SwiperSlide>   
          <SwiperSlide className={mainStyle.slide}>
            <div className={mainStyle.inner}>
              <div className={mainStyle.txt_area}>
                <p className={mainStyle.tit}>
                  글로벌 핀테크 리더를 위한 <br/>
                  커뮤니케이션 파트너, <b className={textStyle.point}>WebNity</b>
                </p>
                <p className={mainStyle.txt}>
                80개국 대상 맞춤형 언어 교육으로<br/>
                팀의 글로벌 소통 능력을 키우고
                사업 확장의 물꼬를 트세요.
                </p>
                <div className={`${btnStyle.btn__wrap} ${btnStyle.bottom}`}>
                  <button type='button' className={`${btnStyle.btn} ${btnStyle.l} ${btnStyle.white}`}>소개서 다운받기</button>
                  <Link to="/front/Inquiry" className={`${btnStyle.btn} ${btnStyle.l} ${btnStyle.point}`}>기업교육 도입문의</Link>
                </div>
              </div>
              <div className={mainStyle.img_area}>
                <img src={ImgMainVisual2} alt=''/>
              </div>
            </div>
          </SwiperSlide>           
          <div className="custom-pagination">
            <div className="custom-progress">
              <div className="bar" style={{ width: visualProgress + '%' }}></div>
            </div>
            <div className="custom-fraction"></div>
          </div>
          <button
            onClick={() => {
              if (!visualSwiperRef.current) return;
              if (visualIsPlaying) {
                visualSwiperRef.current.autoplay.stop();
              } else {
                visualSwiperRef.current.autoplay.start();
              }
              visualSetIsPlaying(!visualIsPlaying);
            }}
            className='btn_play'
          >
            {visualIsPlaying ? (
              <img src={btnPause} alt="멈춤" />
            ) : (
              <img src={btnPlay} alt="재생" />
            )}
          </button>
        </Swiper>
      </div>
      {/*관리자들*/}
      <div className={`${mainStyle.manager_sec} manager_sec`}>
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}><b className={textStyle.point}>관리자들은</b> 이렇게 <b className={textStyle.point}>관리</b>합니다.
          </p>
          <div className={mainStyle.manager_slide__wrap}> 
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,Pagination,Navigation]}
              navigation={{
                prevEl: managerPrevRef.current,
                nextEl: managerNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // navigation 요소를 강제로 주입
                swiper.params.navigation.prevEl = managerPrevRef.current;
                swiper.params.navigation.nextEl = managerNextRef.current;
              }}
              className={mainStyle.manager_slide}
              onSwiper={managerSetSwiperInstance}              
            >
              <SwiperSlide className={mainStyle.slide}>
                <img src={ImgManager1} alt=''/>
              </SwiperSlide>
              <SwiperSlide className={mainStyle.slide}>
                <img src={ImgManager2} alt=''/>
              </SwiperSlide>
              <SwiperSlide className={mainStyle.slide}>
                <img src={ImgManager3} alt=''/>
              </SwiperSlide>
            </Swiper>
            <div ref={managerPrevRef} className="custom-prev">〈</div>
            <div ref={managerNextRef} className="custom-next">〉</div>
          </div>
        </div>
      </div>
      {/* B2B 러닝 허브*/}
      <div className={mainStyle.b2b_sec}>
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}>기업을 위한 효율적인 <b className={textStyle.point}>WebNity B2B 러닝 허브</b>
          </p>
          <div className={mainStyle.contents}>
            <div className={mainStyle.item}>
              <img src={ImgB2b1} alt=''/>
              <p className={mainStyle.tit}>실시간 학습 현황 모니터링</p>
              <p className={mainStyle.txt}>임직원의 학습 참여율과 성과를<br/>실시간으로 확인할 수 있습니다.</p>
            </div>
            <div className={mainStyle.item}>
              <img src={ImgB2b2} alt=''/>
              <p className={mainStyle.tit}>AI 기반 성과 분석</p>
              <p className={mainStyle.txt}>발음, 유창성, 정확성까지!<br/>
                AI가 자동 분석한 학습 데이터를<br/> 
                통해 임직원의 성장을 한 눈에 <br/>
                파악해보세요.</p>
            </div>
            <div className={mainStyle.item}>
              <img src={ImgB2b3} alt=''/>
              <p className={mainStyle.tit}>원클릭으로 보고서 확인</p>
              <p className={mainStyle.txt}>임직원의 학습 데이터, 한눈에 정리된 보고서로 관리하세요.<br/>보고서를 간편하게 확인 및 다운로드 할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </div>
      {/* 혁신하는 이유 */}
      <div className={mainStyle.innovation_sec}>
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}><b className={textStyle.point}>WebNity</b>가 기업의 회화 교육을 <b className={textStyle.point}>혁신하는 이유</b>
          </p>
          <div className={mainStyle.video_area}>
          <iframe src="https://www.youtube.com/embed/b5DOQ7iOzO4?si=my6IIRmx6W9-MwxB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      {/* 차별화 */}
      <div className={mainStyle.distinction_sec}>
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}>왜 WebNity일까요?<br/>WebNity의<b className={textStyle.point}>차별화된 기술력</b>을 확인하세요
          </p>
          <div className={mainStyle.contents}>
            <div className={mainStyle.item}>
              <p className={mainStyle.tit}>효율</p>
              <div className={mainStyle.chart}>
                <img src={Imgchart1} alt=''/>
              </div>
              <ul className={mainStyle.list}>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.my}`}>WebNity</span>
                  <span className={`${mainStyle.txt} ${textStyle.point} ${mainStyle.point}`}>한 번의 구독으로 전 세계 80개국,40개 언어 옵션 선택 가능</span>
                </li>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.s}`}>S사</span>
                  <span className={mainStyle.txt}>영어 학습만 제공</span>
                </li>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.r}`}>R사</span>
                  <span className={mainStyle.txt}>영어 학습만 제공</span>
                </li>
              </ul>
            </div>
            <div className={mainStyle.item}>
              <p className={mainStyle.tit}>맞춤형</p>
              <div className={mainStyle.chart}>
                <img src={Imgchart2} alt=''/>
              </div>
              <ul className={mainStyle.list}>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.my}`}>WebNity</span>
                  <span className={`${mainStyle.txt} ${textStyle.point} ${mainStyle.point}`}>다양한 언어의 AI 튜터들이 있으며,고유 설정과 목소리 보유</span>
                </li>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.s}`}>S사</span>
                  <span className={mainStyle.txt}>AI 튜터의 목소리와 성별 선택 가능</span>
                </li>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.r}`}>R사</span>
                  <span className={mainStyle.txt}>맞춤 설정 없음</span>
                </li>
              </ul>
            </div>
            <div className={mainStyle.item}>
              <p className={mainStyle.tit}>기술</p>
              <div className={mainStyle.chart}>
                <img src={Imgchart3} alt=''/>
              </div>
              <ul className={mainStyle.list}>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.my}`}>WebNity</span>
                  <span className={`${mainStyle.txt} ${textStyle.point} ${mainStyle.point}`}>ChatGpt 음성 엔진 개발한 음성 기술 사용</span>
                </li>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.s}`}>S사</span>
                  <span className={mainStyle.txt}>구글 음성 엔진 기술 사용</span>
                </li>
                <li>
                  <span className={`${mainStyle.company} ${mainStyle.r}`}>R사</span>
                  <span className={mainStyle.txt}>-</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* 기술력 */}
      <div className={`${mainStyle.skill_sec} main_skill_sec slide_type1`}>
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}><b className={textStyle.point}>WebNity</b>의 차별화된 기술력으로 확인하세요!
          </p>
          <Swiper
            modules={[Autoplay,Pagination,Navigation]}
            navigation={true}
            slidesPerView={1.5}
            centeredSlides={true}
            spaceBetween={100}
            breakpoints={{
              1024: {
                spaceBetween: 100, // 1024px 이상일 때
              },
              0: {
                spaceBetween: 0,  // 0~1023px 이하일 때
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              type: 'fraction',
              el: '.custom-fraction',
              formatFractionCurrent: (number) => number.toString().padStart(2, '0'),
              formatFractionTotal: (number) => number.toString().padStart(2, '0'),
            }}
            onSlideChange={(swiper) => updateProgress(swiper)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className={mainStyle.skill_slide}
          >
            <SwiperSlide className={mainStyle.slide}>
              <div className={`txt_area ${mainStyle.txt_area} `}>
                <p className={mainStyle.tit}>WebNity는 전 세계 80개국, <br/>40개 언어 옵션을 제공합니다.</p>
                <p className={mainStyle.txt}>주요 외국어는 물론 기존 회화로는 접근이 어려웠던 <br/><b>특수 지역 언어학습 환경을 지원</b>합니다.</p>
              </div>
              <div className={mainStyle.img_area}>
                <img src={ImgSkill1} alt=''/>
              </div>
            </SwiperSlide>
            <SwiperSlide className={mainStyle.slide}>
              <div className={`txt_area ${mainStyle.txt_area} `}>
                <p className={mainStyle.tit}>고유의 프로필을 가진 총 400명의<br/> AI튜터가 배치되어 있습니다.</p>
                <p className={mainStyle.txt}><b>편안한 프리미엄 보이스와 함께 자연스러운 회화</b>를 제공합니다.<br/>나만의 AI튜터를 선택해 인공지능 회화의 새로운 경험을 만나보세요</p>
              </div>
              <div className={mainStyle.img_area}>
                <img src={ImgSkill2} alt=''/>
              </div>
            </SwiperSlide>
            <SwiperSlide className={mainStyle.slide}>
              <div className={`txt_area ${mainStyle.txt_area} `}>
                <p className={mainStyle.tit}>WebNity는 PC와 모바일 환경을<br/> 동시에 지원합니다.</p>
                <p className={mainStyle.txt}>인터넷 접속만 가능하다면 <b>어떤 디바이스로도 쉽게</b> 만날 수 있습니다<br/>핸즈프리 환경으로 전화 통화와 같은 자유로운 대화 경험을 제공합니다.</p>
              </div>
              <div className={mainStyle.img_area}>
                <img src={ImgSkill3} alt=''/>
              </div>
            </SwiperSlide>
            <SwiperSlide className={mainStyle.slide}>
              <div className={`txt_area ${mainStyle.txt_area} `}>
                <p className={mainStyle.tit}>대화 중에 모르는 단어가 나와도<br/> 당황할 필요 없습니다.</p>
                <p className={mainStyle.txt}>WebNity는 끊김 없는 대화를 위해 대화창에서 단어장 기능을 제공합니다.<br/>또한 <b>연결 대화문장 자동 제안으로 쉽게 말문이 트일 수 있도록</b> 도와드립니다.</p>
              </div>
              <div className={mainStyle.img_area}>
                <img src={ImgSkill4} alt=''/>
              </div>
            </SwiperSlide>
            <div className="custom-pagination">
              <div className="custom-progress">
                <div className="bar" style={{ width: progress + '%' }}></div>
              </div>
              <div className="custom-fraction"></div>
            </div>
            <button
              onClick={() => {
                if (!swiperRef.current) return;
                if (isPlaying) {
                  swiperRef.current.autoplay.stop();
                } else {
                  swiperRef.current.autoplay.start();
                }
                setIsPlaying(!isPlaying);
              }}
              className='btn_play'
            >
              {isPlaying ? (
                <img src={btnPause} alt="멈춤" />
              ) : (
                <img src={btnPlay} alt="재생" />
              )}
            </button>
          </Swiper>
        </div>
      </div>
      {/* 학습기능 */}
      <div className={`${mainStyle.function_sec} main_function_sec`}>
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}>WebNity는 <b className=  {textStyle.point}>이런 기능으로 학습</b>해요!
          </p>
          <div className={mainStyle.function_slide__wrap}> 
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,Pagination,Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                // navigation 요소를 강제로 주입
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              pagination={functionPagination}
              className={mainStyle.function_slide}
              onSwiper={setSwiperInstance}              
            >
              <SwiperSlide className={mainStyle.slide}>
                <div className={mainStyle.txt_area}>
                  <p className={mainStyle.tit}><b className={textStyle.point}>WebNity</b>의 400명 AI 튜터와 <br/>함께하는 <b className={textStyle.point}>맞춤형 학습</b></p>
                  <p className={mainStyle.txt}>WebNity는 각각 고유한 프로필과 개성을 가진 <b  className={textStyle.point}>400명의 AI 튜터와 함께 학습</b>할 수 있어, 단순한 기계적 답변이 아닌 다양한 표현과 말하는 스타일을 경험하며 자연스럽게 언어를 익힐 수 있습니다. <b>학습자의 목표와 수준에 맞춰 개별 튜터가 맞춤형 피드백을 제공</b>하여, 보다 효과적이고 몰입감 있는 언어 학습이 가능합니다.</p>
                </div>
                <img src={Imgfunction1} alt=''/>
              </SwiperSlide>
              <SwiperSlide className={mainStyle.slide}>
                <div className={mainStyle.txt_area}>
                  <p className={mainStyle.tit}><b className={textStyle.point}>WebNity</b>의 차별화된 <b className={textStyle.point}>롤플레잉 학습</b></p>
                  <p className={mainStyle.txt}>일반적인 언어 학습과 달리, WebNity는 <b className={textStyle.point}>원하는 상황을 직접 설정</b><b>하거나 여행, 비즈니스, 면접 등 다양한 시나리오를 선택해 AI와 실전 대화를 연습할 수 있어 더욱 유연한 학습 경험을 제공합니다.</b><br/> 각 회사별 롤플레잉, 주제, 퀴즈, 케이스 디스커션의 주제 설정 가능합니다.</p>
                </div>
                <img src={Imgfunction2} alt=''/>
              </SwiperSlide>
              <SwiperSlide className={mainStyle.slide}>
                <div className={mainStyle.txt_area}>
                  <p className={mainStyle.tit}>AI 튜터와 즐기는 <b className={textStyle.point}>대화형 퀴즈 학습, WebNity</b></p>
                  <p className={mainStyle.txt}>일반적인 언어 학습과 달리, WebNity는 <b className={textStyle.point}>실제 대화하듯 퀴즈를 풀어나가는 색다른 학습 경험을 제공</b>합니다. 관심 있는 주제를 선택하고,<b>대화형 퀴즈를 통해 더욱 재미있고 효과적으로 언어를 익힐 수 있습니다.</b></p>
                </div>
                <img src={Imgfunction3} alt=''/>
              </SwiperSlide>
              <SwiperSlide className={mainStyle.slide}>
                <div className={mainStyle.txt_area}>
                  <p className={mainStyle.tit}><b className={textStyle.point}>WebNity</b>의 차별화된 <b className={textStyle.point}>롤플레잉 학습</b></p>
                  <p className={mainStyle.txt}>일반적인 언어 학습과 달리, WebNity는 <b className={textStyle.point}>원하는 상황을 직접 설정</b><b>하거나 여행, 비즈니스, 면접 등 다양한 시나리오를 선택해 AI와 실전 대화를 연습할 수 있어 더욱 유연한 학습 경험을 제공합니다.</b><br/> 각 회사별 롤플레잉, 주제, 퀴즈, 케이스 디스커션의 주제 설정 가능합니다.</p>
                </div>
                <img src={Imgfunction4} alt=''/>
              </SwiperSlide>
              <SwiperSlide className={mainStyle.slide}>
                <div className={mainStyle.txt_area}>
                  <p className={mainStyle.tit}><b className={textStyle.point}>WebNity</b>의 차별화된 <b className={textStyle.point}>롤플레잉 학습</b></p>
                  <p className={mainStyle.txt}>일반적인 언어 학습과 달리, WebNity는 <b className={textStyle.point}>원하는 상황을 직접 설정</b><b>하거나 여행, 비즈니스, 면접 등 다양한 시나리오를 선택해 AI와 실전 대화를 연습할 수 있어 더욱 유연한 학습 경험을 제공합니다.</b><br/> 각 회사별 롤플레잉, 주제, 퀴즈, 케이스 디스커션의 주제 설정 가능합니다.</p>
                </div>
                <img src={Imgfunction5} alt=''/>
              </SwiperSlide>
            </Swiper>
            <div ref={prevRef} className="custom-prev">〈</div>
            <div ref={nextRef} className="custom-next">〉</div>
          </div>
        </div>
      </div>
      {/* 기업들의 목소리 */}
      <div className={mainStyle.review_sec}>
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}>기업 교육의 미래,<br/>WebNity로  <b className=  {textStyle.point}>성과를 실현한 기업들의 목소리</b>
          </p>
          <Tab data={reviewTabData} tabIndex={reviewTabIndex} setTabIndex={setReviewTabIndex} />
          {reviewTabIndex === 0 ? (
            <Review data={reviewSets[reviewTabIndex] || []} />
          ) : reviewTabIndex === 1 ? (
            <Review data={reviewSets[reviewTabIndex] || []} />
          ) : null }
        </div>
      </div>
      {/* 파트너 */}
      <div className={mainStyle.partner_sec}>
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}>많은 기업이 <b className={textStyle.point}> WebNity</b>와 함께합니다.</p>
          <div className={mainStyle.sliderContainer}>
            {partnerRows.map((partnerImages, rowIdx) => (
              <div
                key={rowIdx}
                className={`${mainStyle.sliderRow} ${
                  rowIdx === 1 ? mainStyle.right : mainStyle.left
                }`}
              >
                <ul className={mainStyle.partner_list}>
                  {/* 3배 복제 */}
                  {[...partnerImages, ...partnerImages, ...partnerImages].map((img, idx) => (
                    <li key={idx} className={mainStyle.item}>
                      <img src={img} alt={`파트너${idx + 1}`} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 자주 묻는 질문들 */}
      <div className={mainStyle.faq_sec}>        
        <div className={mainStyle.inner}>
          <p className={mainStyle.sub_tit}>자주 묻는 질문들</p>
          <Faq/>
        </div>
      </div>
    </div>
  );
};

export default Main;