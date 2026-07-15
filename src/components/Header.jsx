import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative z-[99999]">
      {/* 
        [메인 헤더 & 드롭다운 통합 컨테이너]
        transition 관련 클래스를 아예 지워버려서 마우스와 100% 동기화되게 만들었습니다!
      */}
      <div
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
        className={`fixed top-0 left-0 w-full z-[100000] ${
          isDropdownOpen
            ? "bg-white border-b border-neutral-200 shadow-md"
            : "bg-transparent backdrop-blur-md brightness-90 border-b border-white/80"
        }`}
      >
        {/* 1. 상단 실제 헤더 메뉴 바 (높이 78px) */}
        <div className="h-[78px] flex items-center px-12">
          {/* 로고 */}
          <div className="flex items-center w-[52px]">
            <a href="/">
              <img
                src="./img/likelionLogo.png"
                alt="logo"
                className="w-9 h-9 mr-4"
              />
            </a>
          </div>

          {/* 타이틀 명 */}
          <a
            href="/"
            className={`text-[20.7px] font-black w-[180px] ${
              isDropdownOpen ? "text-[#1e1e1e]" : "text-[#3b7aff]"
            }`}
          >
            LIKELION SKU
          </a>

          {/* 중앙 메인 메뉴 */}
          <div className="flex ml-5">
            <div className="w-[100px] text-center">
              <a
                href="/project"
                className={`text-base font-medium ${
                  isDropdownOpen ? "text-[#1e1e1e]" : "text-white"
                }`}
              >
                PROJECT
              </a>
            </div>
            <div className="w-[100px] text-center ml-10">
              <a
                href="/team"
                className={`text-base font-medium ${
                  isDropdownOpen ? "text-[#1e1e1e]" : "text-white"
                }`}
              >
                TEAM
              </a>
            </div>
            <div className="w-[100px] text-center ml-10">
              <a
                href="#"
                className={`text-base font-medium ${
                  isDropdownOpen ? "text-[#1e1e1e]" : "text-white"
                }`}
              >
                COMMUNITY
              </a>
            </div>
          </div>

          {/* 오른쪽 버튼 및 SNS */}
          <div className="flex items-center ml-auto">
            {isDropdownOpen && (
              <div className="flex gap-3 mr-4">
                <a
                  href="https://www.instagram.com/likelion_sku"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="./img/insta.png"
                    alt="instagram"
                    className="w-6 h-6"
                  />
                </a>
                <a
                  href="https://pf.kakao.com/_vxixlaxj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="./img/chat.png" alt="chat" className="w-6 h-6" />
                </a>
              </div>
            )}

            <button
              className={`flex items-center gap-2 text-white px-4 py-2 rounded-sm cursor-pointer text-xs border-none mr-4 ${
                isDropdownOpen ? "bg-[#8eb7ff]" : "bg-[#2d5abc]"
              }`}
            >
              <img src="./img/campus.png" alt="campus" className="w-4 h-4" />
              CYBERCAMPUS
            </button>

            <button className="flex items-center gap-2 bg-white text-[#1e1e1e] px-4 py-2 rounded-sm cursor-pointer text-xs border border-neutral-400">
              <img
                src="./img/googleLogin.png"
                alt="google"
                className="w-4 h-4"
              />
              구글계정으로 계속하기
            </button>
          </div>
        </div>

        {/* 2. 하단 메가 드롭다운 서브메뉴 바 */}
        {isDropdownOpen && (
          <div className="w-full bg-white px-12 py-6 border-t border-neutral-100">
            <div className="flex">
              {/* 왼쪽 간격 맞춤용 빈 공간 */}
              <div className="w-[252px]" />

              {/* PROJECT 서브 */}
              <div className="flex flex-col gap-4 w-[100px] text-center">
                <a
                  href="/project?tab=14"
                  className="text-neutral-500 hover:text-[#3b7aff] text-sm font-medium"
                >
                  14기
                </a>
                <a
                  href="/project?tab=13"
                  className="text-neutral-500 hover:text-[#3b7aff] text-sm font-medium"
                >
                  13기
                </a>
                <a
                  href="/project?tab=12"
                  className="text-neutral-500 hover:text-[#3b7aff] text-sm font-medium"
                >
                  12기
                </a>
                <a
                  href="/project?tab=11"
                  className="text-neutral-500 hover:text-[#3b7aff] text-sm font-medium"
                >
                  11기
                </a>
              </div>

              {/* TEAM 서브 */}
              <div className="flex flex-col gap-4 w-[100px] text-center ml-10">
                <a
                  href="/team?tab=14"
                  className="text-neutral-500 hover:text-[#3b7aff] text-sm font-medium"
                >
                  14기
                </a>
                <a
                  href="/team?tab=13"
                  className="text-neutral-500 hover:text-[#3b7aff] text-sm font-medium"
                >
                  13기
                </a>
                <a
                  href="/team?tab=12"
                  className="text-neutral-500 hover:text-[#3b7aff] text-sm font-medium"
                >
                  12기
                </a>
                <a
                  href="/team?tab=11"
                  className="text-neutral-500 hover:text-[#3b7aff] text-sm font-medium"
                >
                  11기
                </a>
              </div>

              {/* COMMUNITY 서브 */}
              <div className="flex flex-col gap-4 w-[100px] text-center ml-10">
                <span className="text-neutral-500 text-sm font-medium cursor-default">
                  모집공고
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
