import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-black text-[#bbbbbb] px-10 pt-20  pb-30 font-sans ">
        {/* 상단 링크 영역*/}
        <div class="pl-30 mx-auto flex gap-24 mb-20">
          <div>
            <h3 class="text-[#3061ca] font-bold mb-5">
              <a href="#">PROJECT</a>
            </h3>
            <ul class="space-y-6">
              <li>
                <a href="#">14기</a>
              </li>
              <li>
                <a href="#">13기</a>
              </li>
              <li>
                <a href="#">12기</a>
              </li>
              <li>
                <a href="#">11기</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-[#3061ca] font-bold mb-5">
              <a href="/team">TEAM</a>
            </h3>
            <ul class="space-y-6">
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
            <h3 class="text-[#3061ca] font-bold mb-5">
              {" "}
              <p>COMMUNITY</p>
            </h3>
            <ul class="space-y-6">
              <li>
                <p>모집공고</p>
              </li>
            </ul>
          </div>
        </div>

        {/*구분선*/}
        <hr class="border-[#1a1a1a] mx-auto mb-16" />

        {/* 하단 정보 영역 */}
        <div class="pl-30 mx-auto flex justify-between items-start">
          <div class="text-[#bbbbbb]">
            <h3 class="text-white font-bold mb-4">INFO</h3>
            <p class="text-xs pb-2">
              멋쟁이사자처럼 성결대학교 | 대표자 조승민
            </p>
            <p class="text-xs pb-2 ">
              실습실: 경기도 안양시 만안구 성결대학로 53(안양동) 성결관,
              성결대학교
            </p>
            <p class="text-xs ">
              동아리방: 경기도 안양시 만안구 성결대학로 53(안양동) 기념관 B11호
            </p>
          </div>

          <div class="w-[1px] h-10 bg-[#1a1a1a] self-center "></div>

          {/* 가운데 CONTACT */}
          <div class="flex flex-col items-center px-10 mr-100">
            <h3 class="text-white font-bold mb-5 ">CONTACT</h3>
            <div class="flex gap-4">
              <span class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <a href="https://www.instagram.com/likelion_sku">
                  <img
                    src="./img/instagram.png"
                    alt="instagram"
                    class="w-6 h-6"
                  ></img>
                </a>
              </span>
              <span class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <a href="https://pf.kakao.com/_vxixlaxj">
                  <img
                    src="./img/kakaotalk.png"
                    alt="kakaotalk"
                    class="w-6 h-6"
                  ></img>
                </a>
              </span>
              <span class="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <a href="mailto:sungkyul.univ@likelion.org">
                  <img src="./img/mail.png" alt="mail" class="w-6 h-6"></img>
                </a>
              </span>
            </div>
          </div>

          {/* 오른쪽 TOP & Copyright */}
          <div class="flex flex-col text-right">
            <a
              href="#"
              class="text-[#b0b0b0]  items-end text-sm font-semibold pr-2 mb-5"
            >
              TOP ▲
            </a>
            <p class="text-[#484848] font-semibold text-xs pt-2">
              SKU LIKELION 14th Edition
              <br />
              Copyright © 2026 SKU LIKELION. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
