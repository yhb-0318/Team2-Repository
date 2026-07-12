import React, { useState } from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-black text-white px-10 pt-16 pb-10 font-sans text-sm">
        {/* 상단 링크 영역 */}
        <div class="max-w-6xl mx-auto flex gap-24 mb-12">
          <div>
            <h3 class="text-[#2b66ff] font-bold mb-5">PROJECT</h3>
            <ul class="space-y-3 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  14기
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  13기
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  12기
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  11기
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-[#2b66ff] font-bold mb-5">TEAM</h3>
            <ul class="space-y-3 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  14기
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  13기
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  12기
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  11기
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-[#2b66ff] font-bold mb-5">COMMUNITY</h3>
            <ul class="space-y-3 text-gray-400">
              <li>
                <a href="#" class="hover:text-white">
                  모집공고
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr class="border-[#1a1a1a] max-w-6xl mx-auto mb-10" />

        {/* 하단 정보 영역 */}
        <div class="max-w-6xl mx-auto flex justify-between items-start">
          {/* 왼쪽 INFO */}
          <div class="flex-1 text-gray-400 leading-relaxed">
            <h3 class="text-white font-bold mb-4 tracking-wider">INFO</h3>
            <p>멋쟁이사자처럼 성결대학교 | 대표자 조승민</p>
            <p>
              실습실: 경기도 안양시 만안구 성결대학로 53(안양동) 성결관,
              성결대학교
            </p>
            <p>
              동아리방: 경기도 안양시 만안구 성결대학로 53(안양동) 기념관 B11호
            </p>
          </div>

          {/* 가운데 CONTACT */}
          <div class="flex flex-col items-center px-10">
            <h3 class="text-white font-bold mb-4 tracking-wider">CONTACT</h3>
            <div class="flex gap-4">
              <span class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">
                이
              </span>
              <span class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">
                카
              </span>
              <span class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">
                메
              </span>
            </div>
          </div>

          {/* 오른쪽 TOP & Copyright */}
          <div class="flex flex-col items-end text-right">
            <a href="#" class="text-white font-bold mb-5">
              TOP ▲
            </a>
            <p class="text-gray-600 text-xs leading-normal">
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
