import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TEAM_DATA, GENERATIONS } from "./Data/TeamData";

export default function TeamScreen() {
  const [activeTab, setActiveTab] = useState(14);
  const [searchParams, setSearchParams] = useSearchParams();

  // 💡 [친숙한 탭 동기화] 주소창의 ?tab=14 값을 가져와 탭을 활성화합니다.
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      const parsedTab = parseInt(tabParam, 10);
      setActiveTab(parsedTab);
    } else {
      setActiveTab(14); // 기본값 14기
    }
  }, [searchParams]);

  // 💡 [수민님 코드] 클릭한 기수 번호에서 '기' 글자를 지우고 주소창에 넣어줍니다.
  const handleTabChange = (gen) => {
    const tabValue = String(gen).replace("기", "");
    setSearchParams({ tab: tabValue });
  };

  // 현재 기수의 데이터가 비어있는지 확인하는 직관적인 조건식
  const currentGenData = TEAM_DATA[activeTab] || {};
  const hasData =
    currentGenData["대표/부대표"] || currentGenData["프론트엔드팀"];

  return (
    <div className="bg-black pt-30 min-h-screen text-white font-sans selection:bg-neutral-800">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* 타이틀 */}
        <div className="mb-8">
          <div className="text-5xl font-normal text-[#3b79ff] mb-4">
            LIKELION
          </div>
          <h1 className="text-6xl font-extrabold text-white">TEAM</h1>
        </div>

        {/* 기수 선택 탭 메뉴 */}
        <div className="flex gap-8 mb-10 pb-4 border-b border-neutral-950">
          {GENERATIONS.map((gen) => (
            <button
              key={gen}
              onClick={() => handleTabChange(gen)}
              className={`text-lg py-2 cursor-pointer mb-[-17px] z-10 transition-all ${
                activeTab === gen
                  ? "text-white border-b-2 border-[#3b79ff]"
                  : "text-[#acacac] border-b-2 border-transparent"
              }`}
            >
              {gen}기
            </button>
          ))}
        </div>

        {/* 본문 영역 */}
        <div className="pt-15 space-y-8">
          {hasData ? (
            <>
              {/* 상단 파트 (대표/부대표, 기획/디자인팀) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. 대표/부대표 */}
                {currentGenData["대표/부대표"] && (
                  <div>
                    <h2 className="text-xl font-bold mb-3 pl-1">대표/부대표</h2>
                    <div className="bg-[#1b1b1b] rounded-xl py-7 px-10 border border-neutral-900 grid grid-cols-2 gap-12 items-center">
                      {currentGenData["대표/부대표"].map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-4"
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-28 h-28 object-cover"
                          />
                          <div className="whitespace-nowrap">
                            <div className="text-[15px] font-bold">
                              {member.name}{" "}
                              <span className="text-xs font-normal text-neutral-400 ml-1">
                                {member.role}
                              </span>
                            </div>
                            <div className="text-[11px] text-neutral-500 mt-1">
                              {member.detail}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. 기획/디자인팀 */}
                {currentGenData["기획/디자인팀"] && (
                  <div>
                    <h2 className="text-xl font-bold mb-3 pl-1">
                      기획/디자인팀
                    </h2>
                    <div className="bg-[#1b1b1b] rounded-xl py-7 px-10 border border-neutral-900 grid grid-cols-2 gap-12 items-center">
                      {currentGenData["기획/디자인팀"].map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-4"
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-28 h-28 object-cover"
                          />
                          <div className="whitespace-nowrap">
                            <div className="text-[15px] font-bold">
                              {member.name}{" "}
                              <span className="text-xs font-normal text-neutral-400 ml-1">
                                {member.role}
                              </span>
                            </div>
                            <div className="text-[11px] text-neutral-500 mt-1">
                              {member.detail}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 3. 프론트엔드팀 */}
              {currentGenData["프론트엔드팀"] && (
                <div className="pt-2">
                  <h2 className="text-xl font-bold mb-3 pl-1">프론트엔드팀</h2>
                  <div className="bg-[#1b1b1b] rounded-xl py-7 px-20 border border-neutral-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center">
                    {currentGenData["프론트엔드팀"].map((member) => (
                      <div key={member.id} className="flex items-center gap-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-28 h-28 object-cover"
                        />
                        <div className="whitespace-nowrap">
                          <div className="text-[15px] font-bold">
                            {member.name}{" "}
                            <span className="text-xs font-normal text-neutral-400 ml-1">
                              {member.role}
                            </span>
                          </div>
                          <div className="text-[11px] text-neutral-500 mt-1">
                            {member.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. 백엔드팀 */}
              {currentGenData["백엔드팀"] && (
                <div className="pt-2">
                  <h2 className="text-xl font-bold mb-3 pl-1">백엔드팀</h2>
                  <div className="bg-[#1b1b1b] rounded-xl py-7 px-20 border border-neutral-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center">
                    {currentGenData["백엔드팀"].map((member) => (
                      <div key={member.id} className="flex items-center gap-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-28 h-28 object-cover"
                        />
                        <div className="whitespace-nowrap">
                          <div className="text-[15px] font-bold">
                            {member.name}{" "}
                            <span className="text-xs font-normal text-neutral-400 ml-1">
                              {member.role}
                            </span>
                          </div>
                          <div className="text-[11px] text-neutral-500 mt-1">
                            {member.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-24 text-neutral-600 text-lg">
              {activeTab}기 팀 데이터가 존재하지 않습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
