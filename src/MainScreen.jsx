import React, { useEffect, useRef, useState } from "react";

/* 스크롤로 화면에 들어오면 아래→위로 나타나고,
   화면 밖으로 나가면 다시 숨겨져서 재진입할 때마다 애니메이션이 다시 재생됨 */
function FadeInUp({ children }) {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 },
    );
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

/* 페이지 열리자마자 아래→위로 올라오는 효과 (Hero 전용, 스크롤 필요 없음) */
function FadeInOnLoad({ children, delay = 100 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
}

/* 스크롤로 화면에 들어올 때마다 한 글자씩 다시 타이핑됨. */
function TypingText({ text, boldWords = [] }) {
  const boxRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 },
    );
    if (boxRef.current) {
      observer.observe(boxRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setTyped("");
      return;
    }
    let index = 0;
    setTyped("");
    const timer = setInterval(() => {
      index = index + 1;
      setTyped(text.slice(0, index));
      if (index >= text.length) {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, [isVisible, text]);

  function renderTyped() {
    if (boldWords.length === 0) return typed;

    let parts = [typed];
    boldWords.forEach((word) => {
      const nextParts = [];
      parts.forEach((part) => {
        if (typeof part !== "string") {
          nextParts.push(part);
          return;
        }
        const split = part.split(word);
        split.forEach((chunk, i) => {
          if (i > 0) {
            nextParts.push(
              <strong key={`${word}-${i}-${chunk.length}`}>{word}</strong>,
            );
          }
          nextParts.push(chunk);
        });
      });
      parts = nextParts;
    });
    return parts;
  }

  return (
    <section className="bg-neutral-900 py-32 md:py-40 flex items-center justify-center">
      <h2
        ref={boxRef}
        className="text-xl md:text-2xl font-bold text-white text-center px-8"
      >
        {renderTyped()}
        <span className="animate-pulse">|</span>
      </h2>
    </section>
  );
}

/* Hero */
function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-neutral-950">
      <img
        src="/img/Main1.jpeg"
        alt="동아리 활동 사진"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/80" />

      <FadeInOnLoad>
        <div className="relative z-10 px-8 md:px-20 max-w-3xl">
          <h1 className="text-lg md:text-3xl font-bold text-white leading-tight mb-6">
            상상을 현실로 만드는
            <br />내 손 안에 <span className="text-blue-500">스쿠스쿠</span>
          </h1>
          <p className="text-white font-semibold mb-2">
            성결대학교 멋쟁이사자처럼은
          </p>
          <p className="text-neutral-300 mb-8">
            자신이 원하는 IT 서비스를 직접 구현하고 싶은 성결대학교 학생들이
            모인 동아리입니다.
          </p>
        </div>
      </FadeInOnLoad>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400">
        <span className="text-sm">Scroll down</span>
        <img
          src="/img/Mouse.png"
          alt="마우스 아이콘"
          className="w-5 h-6 object-contain animate-bounce"
        />
      </div>
    </section>
  );
}

/* 3가지 방향성 */
function Directions() {
  return (
    <section className="relative py-24 px-8 md:px-20 overflow-hidden">
      <img
        src="/img/Main2.jpeg"
        alt="배경"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/75" />

      <div className="relative z-10">
        <FadeInUp>
          <div className="text-center mb-14">
            <p className="text-neutral-400 text-sm mb-2">
              성결대학교 멋쟁이사자처럼의
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              3가지 방향성
              <br />
              <br />
            </h2>
          </div>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <FadeInUp>
            <div className="bg-blue-500 rounded-2xl p-8 h-full flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  자기주도성
                </h3>
                <p className="text-blue-50/90 text-xs">
                  나만의 커리어를 직접 설계하고,
                  <br />
                  만들어갈 수 있습니다.
                </p>
              </div>
              <img src="/img/Self.png" alt="" className="w-12 h-12 shrink-0" />
            </div>
          </FadeInUp>

          <FadeInUp>
            <div className="bg-blue-700 rounded-2xl p-8 h-full flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">협력성</h3>
                <p className="text-blue-50/90 text-xs">
                  동료들과 개발 고민을 함께 <br /> 협력하고 공유하며,
                  <br /> 성장할 수 있습니다
                </p>
              </div>
              <img
                src="/img/cooperation.png"
                alt=""
                className="w-18 h-8 shrink-0"
              />
            </div>
          </FadeInUp>

          <FadeInUp>
            <div className="bg-blue-950 rounded-2xl p-8 h-full flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">가능성</h3>
                <p className="text-blue-50/90 text-xs">
                  나만의 커리어를 직접 설계하고,
                  <br /> 만들어갈 수 있습니다
                </p>
              </div>
              <img
                src="/img/Possibility.png"
                alt=""
                className="w-13 h-13 shrink-0"
              />
            </div>
          </FadeInUp>
        </div>

        <FadeInUp>
          <div className="text-center text-sm md:text-base text-white font-light tracking-wide leading-loose mt-12">
            <br />
            <br />
            <span className="text-base md:text-lg font-bold">
              "내 아이디어를 내 손으로 실현한다."
            </span>
            라는 모토를 가지고,
            <br />
            실제 서비스를 구현하며 개발자의 꿈을 이루는데
            <br />
            한걸음 더 다가가고자 합니다.
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

/* 활동 소개 */
function ActivityItem({
  imageSrc,
  title,
  accent,
  desc,
  location,
  time,
  reverse,
}) {
  const image = (
    <FadeInUp>
      <img
        src={imageSrc}
        alt={accent}
        className="w-full aspect-video object-cover rounded-xl"
      />
    </FadeInUp>
  );

  const text = (
    <FadeInUp>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
        {title} <span className="text-blue-500">{accent}</span>
      </h3>
      <p className="text-neutral-400 mb-6 whitespace-pre-line">{desc}</p>
      <div className="flex items-center gap-2 text-sm text-neutral-400 mb-1">
        <img src="/img/place.png" alt="" className="w-3 h-4" />
        {location}
      </div>
      <div className="flex items-center gap-2 text-sm text-neutral-400">
        <img src="/img/date.png" alt="" className="w-3 h-3" />
        {time}
      </div>
    </FadeInUp>
  );

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center py-14">
      {reverse ? (
        <>
          {image}
          {text}
        </>
      ) : (
        <>
          {text}
          {image}
        </>
      )}
    </div>
  );
}

function Activities() {
  return (
    <section className="bg-[#1e1e1e]">
      <div className="px-8 md:px-20 max-w-6xl mx-auto">
        <FadeInUp>
          <p className="text-blue-400 font-semibold text-center pt-16 pb-2">
            @2026 PROGRAM info
          </p>
        </FadeInUp>
        <ActivityItem
          imageSrc="/img/Main3_3.png"
          title="함께 공부하는"
          accent="스터디"
          desc="공부하고 싶은 트랙을 함께 공부하며 지식을 습득할 수 있는 학습의 장이 마련됩니다."
          location="성결대학교 성결관"
          time="스터디별 상이 (스쿠스쿠 사이버캠퍼스 내 일정 참고)"
          reverse
        />
        <ActivityItem
          imageSrc="/img/Main3_2.png"
          title="세분화된 교육,"
          accent="정기세션"
          desc={
            "트랙별로 맞춤 교육을 제공합니다.\n매주 정기세션에서 아기사자들과 운영진이 함께 성장합니다."
          }
          location="성결대학교 성결관"
          time="매주 목요일 18시-21시"
        />
        <ActivityItem
          imageSrc="/img/Main3_3.png"
          title="서비스의 초석"
          accent="아이디어톤"
          desc="서비스 아이디어를 다듬고 실현 가능성을 테스트하는 시간입니다. 열정적인 토론과 발표로 아이디어의 깊이를 더합니다."
          location="성결대학교 성결관"
          time="스터디별 상이(스쿠스쿠 사이버캠퍼스 내 일정 참고)"
          reverse
        />
        <ActivityItem
          imageSrc="/img/Main3_4.png"
          title="상상을 현실로 만드는"
          accent="해커톤"
          desc={
            "주어진 시간 안에 팀을 이뤄 서비스를 기획/개발합니다.\n실전 감각을 익히고 팀워크를 높이는 경험을 제공합니다."
          }
          location="학교 강의실"
          time="학기당 1회"
        />
        <ActivityItem
          imageSrc="/img/Main3_5.png"
          title="하계"
          accent="MT"
          desc={
            "팀워크를 다지는 특별한 시간!\n친목과 소통을 통해 끈끈한 유대감을 형성합니다."
          }
          location="성결대학교 외부 장소"
          time="방학 중 진행"
          reverse
        />
      </div>
    </section>
  );
}

/* TRACKS */
const TRACKS_DATA = {
  frontend: {
    label: "프론트엔드",
    sub: "FRONT-END",
    icon: "/img/Main4_React.png",
    color: "bg-orange-700",
    textColor: "text-orange-500",
    steps: ["Javascript", "React", "Clone coding"],
  },
  backend: {
    label: "백엔드",
    sub: "BACK-END",
    icon: "/img/Main4_spring.png",
    color: "bg-teal-700",
    textColor: "text-teal-400",
    steps: [
      "Java를 활용한\n객체지향 개념",
      "Spring setting\n& Thymeleaf",
      "Spring\nAPI 통신",
      "DB Connection\n& JPA (MYSQL 사용)",
    ],
  },
  design: {
    label: "기획/디자인",
    sub: "PM / DESIGN",
    icon: "/img/Main4_figma.png",
    color: "bg-[#CF637E]",
    textColor: "text-[#CF637E]",
    steps: ["UX/UI 교육", "Figma 교육", "앱/웹 디자인", "포트폴리오"],
  },
};

function Tracks() {
  const [activeKey, setActiveKey] = useState(null);
  const wrapperRef = useRef(null);
  const active = activeKey ? TRACKS_DATA[activeKey] : null;

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setActiveKey(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section ref={wrapperRef} className="bg-neutral-900">
      <div className="text-center py-20 px-8">
        <p className="text-blue-500 font-semibold mb-3">TRACKS</p>
        <p className="text-neutral-300 text-sm md:text-base mb-2">
          멋쟁이사자처럼에서 각 트랙별로 세분화된 교육과 경험을 제공합니다.
        </p>
        {active && (
          <p className="text-neutral-300 text-sm md:text-base">
            상상을 현실로 만드는 시작,{" "}
            <span className={`font-bold ${active.textColor}`}>
              {active.label}
            </span>
            팀 커리큘럼을 소개합니다.
          </p>
        )}
      </div>

      <div
        className={`border-t border-white/10 transition-colors duration-300 ${
          active ? active.color : "bg-neutral-800"
        } py-4`}
      >
        {!active && (
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3">
            {Object.entries(TRACKS_DATA).map(([key, track]) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveKey(key)}
                className="flex items-center justify-center gap-3 py-6"
              >
                <img src={track.icon} alt="" className="w-6 h-6" />
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">
                    {track.label}
                  </p>
                  <p className="text-neutral-500 text-xs">{track.sub}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        {active && (
          <div className="max-w-5xl mx-auto px-8 flex items-center gap-10">
            <button
              type="button"
              onClick={() => setActiveKey(null)}
              className="flex items-center gap-3 shrink-0"
            >
              <img src={active.icon} alt="" className="w-6 h-6" />
              <div className="text-left">
                <p className="text-white text-sm font-semibold">
                  {active.label}
                </p>
                <p className="text-white/70 text-xs">{active.sub}</p>
              </div>
            </button>

            <div className="flex items-start flex-1">
              {active.steps.map((step, i) => (
                <div key={step} className="flex-1 flex flex-col items-center">
                  <p className="text-white text-xs md:text-sm text-center mb-3 whitespace-pre-line">
                    {step}
                  </p>
                  <div className="w-full flex items-center">
                    <div
                      className={`h-[2px] flex-1 bg-white/40 ${i === 0 ? "opacity-0" : ""}`}
                    />
                    <div className="w-3 h-3 rounded-full bg-white shrink-0" />
                    <div
                      className={`h-[2px] flex-1 bg-white/40 ${
                        i === active.steps.length - 1 ? "opacity-0" : ""
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* PROJECTS */
function Projects() {
  const projects = [
    {
      title: "새로운 안녕 올라 HOLA!",
      sub: "2024 신입생 오리앤테이션",
      thumb: "/img/hola.png",
      link: "https://welcome-hola.sku-sku.com/",
    },
    {
      title: "2024 총선거",
      sub: "입후보자 확인 및 투표 격려",
      thumb: "/img/2024총선거.png",
      link: "https://vote2024.sku-sku.com/main-election",
    },
    {
      title: "글LOVER",
      sub: "2023 글천절",
      thumb: "/img/글천절.png",
      link: "https://glover.sku-sku.com/",
    },
    {
      title: "파동",
      sub: "2023 영암체전",
      thumb: "/img/2023영암체전.png",
      link: "https://wave-renew.sku-sku.com/",
    },
    {
      title: "SKETCH VILLAGE",
      sub: "2023 동아리 페스티벌",
      thumb: "/img/39대동연sketch.png",
      link: "https://sketch39.sku-sku.com/",
    },
    {
      title: "졸업학점계산기",
      sub: "졸업요건 확인",
      thumb: "/img/졸업학점계산기.png",
      link: "https://gcc.sku-sku.com/",
    },
    {
      title: "POOL:US",
      sub: "2023 영암축전",
      thumb: "/img/2023영암축전poolus.png",
      link: "https://poolus.sku-sku.com/",
    },
    {
      title: "승부예측 : SOLVIT-FINAL",
      sub: "2025 영암체전 결승전 승부예측",
      thumb: "/img/2025영암체전.png",
      link: "https://solvit-final.sku-sku.com/",
    },
    {
      title: "나는 어떤 신데렐라일까?",
      sub: "2025 동아리 페스티벌 심리테스트",
      thumb: "/img/신데렐라.png",
      link: "https://cinderella.sku-sku.com/",
    },
    {
      title: "13TH SKU-SKU",
      sub: "성결대 멋쟁이사자처럼 13기 홈페이지 ",
      thumb: "/img/스쿠스쿠리뉴얼.png",
      link: "https://sku-sku.com/",
    },
    {
      title: "Page",
      sub: "2025 동아리 연합회 웹사이트",
      thumb: "/img/41대동연page.png",
      link: "https://page.sku-sku.com/",
    },
    {
      title: "12TH SKU-SKU",
      sub: "성결대 멋쟁이사자처럼 12기 홈페이지",
      thumb: "/img/12기스쿠스쿠.png",
      link: "https://legacy.sku-sku.com/",
    },
    {
      title: "퍼즐 물품 대여 서비스",
      sub: "동아리원들의 편의성 확대",
      thumb: "/img/퍼즐물품대여.png",
      link: "https://sku-sku.com/",
    },
    {
      title: "보궐 선거",
      sub: "입후보자 확인 및 투표 격려",
      thumb: "/img/2024보궐선거.png",
      link: "https://vote2024.sku-sku.com/by-election",
    },
  ];

  const loopProjects = [...projects, ...projects];
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const isPaused = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const dragDistance = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId;
    const speed = 0.6;

    function step() {
      if (!isPaused.current && !isDragging.current) {
        track.scrollLeft += speed;
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft -= track.scrollWidth / 2;
        }
      }
      rafId = requestAnimationFrame(step);
    }
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, []);

  function getClientX(e) {
    return e.touches ? e.touches[0].clientX : e.clientX;
  }

  function handleDragStart(e) {
    isDragging.current = true;
    dragDistance.current = 0;
    startX.current = getClientX(e);
    startScrollLeft.current = trackRef.current.scrollLeft;
  }

  function handleDragMove(e) {
    if (!isDragging.current) return;
    const delta = getClientX(e) - startX.current;
    dragDistance.current = Math.abs(delta);
    trackRef.current.scrollLeft = startScrollLeft.current - delta;
  }

  function handleDragEnd() {
    isDragging.current = false;
  }

  function handleCardClick(e) {
    if (dragDistance.current > 5) {
      e.preventDefault();
    }
  }

  return (
    <section className="bg-neutral-910 py-24 overflow-hidden">
      <style>{`
        .projects-track { scrollbar-width: none; }
        .projects-track::-webkit-scrollbar { display: none; }
      `}</style>

      <FadeInUp>
        <div className="text-center mb-12 px-8">
          <p className="text-blue-500 font-semibold mb-2">PROJECTS</p>
          <p className="text-neutral-400 text-sm">
            성결대학교 멋쟁이사자처럼과 함께한 프로젝트들을 소개합니다.
          </p>
        </div>
      </FadeInUp>

      <div
        ref={trackRef}
        className="projects-track flex gap-6 overflow-x-auto px-8 select-none cursor-grab active:cursor-grabbing"
        onMouseEnter={() => {
          isPaused.current = true;
        }}
        onMouseLeave={() => {
          isPaused.current = false;
          handleDragEnd();
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {loopProjects.map((p, i) => (
          <a
            key={`${p.title}-${i}`}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCardClick}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
            className="w-[300px] md:w-[420px] shrink-0 aspect-video rounded-xl overflow-hidden relative bg-neutral-900 border border-white/5 block"
          >
            <img
              src={p.thumb}
              alt={p.title}
              draggable={false}
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 pointer-events-none">
              <p className="text-white font-semibold">{p.title}</p>
              <p className="text-neutral-300 text-xs mt-1">{p.sub}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function MainScreen() {
  return (
    <div className="bg-neutral-900">
      <Hero />
      <Directions />
      <TypingText
        text="멋쟁이사자처럼 14기에서 진행되는 프로그램을 소개합니다."
        boldWords={["프로그램"]}
      />
      <Activities />
      <Tracks />
      <Projects />
    </div>
  );
}
