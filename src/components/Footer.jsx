import React from "react";

const Footer = () => {
  // 클릭하면 위로 부드럽게 올라가는 기능 (디자인에 영향 없음!)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer>
      {/* 
        [주의] 원래 디자인하신 px-10 pt-20 pb-30, pl-30 등 
        모든 스타일 클래스명을 그대로 유지했습니다! 
      */}
      <footer className="bg-black text-[#bbbbbb] px-10 pt-20 pb-30 font-sans">
        {/* 상단 링크 영역 */}
        <div className="pl-30 mx-auto flex gap-24 mb-20">
          <div>
            <h3 className="text-[#3061ca] font-bold mb-5">
              <a href="/project">PROJECT</a>
            </h3>
            <ul className="space-y-6">
              <li>
                <a href="/project?tab=14">14기</a>
              </li>
              <li>
                <a href="/project?tab=13">13기</a>
              </li>
              <li>
                <a href="/project?tab=12">12기</a>
              </li>
              <li>
                <a href="/project?tab=11">11기</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#3061ca] font-bold mb-5">
              <a href="/team">TEAM</a>
            </h3>
            <ul className="space-y-6">
              <li>
                <a href="/team?tab=14">14기</a>
              </li>
              <li>
                <a href="/team?tab=13">13기</a>
              </li>
              <li>
                <a href="/team?tab=12">12기</a>
              </li>
              <li>
                <a href="/team?tab=11">11기</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#3061ca] font-bold mb-5">
              <p>COMMUNITY</p>
            </h3>
            <ul className="space-y-6">
              <li>
                <p>모집공고</p>
              </li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <hr className="border-[#1a1a1a] mx-auto mb-16" />

        {/* 하단 정보 영역 */}
        <div className="pl-30 mx-auto flex justify-between items-start">
          <div className="text-[#bbbbbb]">
            <h3 className="text-white font-bold mb-4">INFO</h3>
            <p className="text-xs pb-2">
              멋쟁이사자처럼 성결대학교 | 대표자 조승민
            </p>
            <p className="text-xs pb-2">
              실습실: 경기도 안양시 만안구 성결대학로 53(안양동) 성결관,
              성결대학교
            </p>
            <p className="text-xs">
              동아리방: 경기도 안양시 만안구 성결대학로 53(안양동) 기념관 B11호
            </p>
          </div>

          <div className="w-[1px] h-10 bg-[#1a1a1a] self-center"></div>

          {/* 가운데 CONTACT */}
          <div className="flex flex-col items-center px-10 mr-100">
            <h3 className="text-white font-bold mb-5">CONTACT</h3>
            <div className="flex gap-4">
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <a href="https://www.instagram.com/likelion_sku">
                  <img
                    src="./img/instagram.png"
                    alt="instagram"
                    className="w-6 h-6"
                  />
                </a>
              </span>
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <a href="https://pf.kakao.com/_vxixlaxj">
                  <img
                    src="./img/kakaotalk.png"
                    alt="kakaotalk"
                    className="w-6 h-6"
                  />
                </a>
              </span>
              <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <a href="mailto:sungkyul.univ@likelion.org">
                  <img src="./img/mail.png" alt="mail" className="w-6 h-6" />
                </a>
              </span>
            </div>
          </div>

          {/* 오른쪽 TOP & Copyright */}
          <div className="flex flex-col text-right">
            {/* 원래 디자인을 유지하며 클릭 시 맨 위로 부드럽게 올라가는 기능만 매칭했어요! */}
            <button
              onClick={scrollToTop}
              className="text-[#b0b0b0] items-end text-sm font-semibold pr-2 mb-5 cursor-pointer bg-transparent border-none text-right self-end"
            >
              TOP ▲
            </button>
            <p className="text-[#484848] font-semibold text-xs pt-2">
              SKU LIKELION 14th Edition
              <br />
              Copyright © 2026 SKU LIKELION. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
