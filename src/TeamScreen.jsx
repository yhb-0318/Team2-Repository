import React, { useState, useEffect } from "react";

const TEAM_DATA = {
  14: {
    "대표/부대표": [
      {
        id: 1,
        name: "조승민",
        role: "대표",
        detail: "미디어소프트웨어학과 21",
        image: "./img/14/조승민.png",
      },
      {
        id: 2,
        name: "홍민경",
        role: "부대표",
        detail: "컴퓨터공학과 23",
        image: "./img/14/홍민경.png",
      },
    ],
    "기획/디자인팀": [
      {
        id: 3,
        name: "노태경",
        role: "파트장",
        detail: "미디어소프트웨어학과 21",
        image: "./img/14/노태경.png",
      },
      {
        id: 4,
        name: "김지유",
        role: "운영진",
        detail: "컴퓨터공학과 24",
        image: "./img/14/김지유.png",
      },
    ],
    프론트엔드팀: [
      {
        id: 5,
        name: "구혜원",
        role: "파트장",
        detail: "미디어소프트웨어학과 22",
        image: "./img/14/구혜원.png",
      },
      {
        id: 6,
        name: "김민규",
        role: "운영진",
        detail: "컴퓨터공학과 23",
        image: "./img/14/김민규.png",
      },
      {
        id: 7,
        name: "김소은",
        role: "운영진",
        detail: "컴퓨터공학과 24",
        image: "./img/14/김소은.png",
      },
    ],
    백엔드팀: [
      {
        id: 8,
        name: "권오현",
        role: "파트장",
        detail: "컴퓨터공학과 23",
        image: "./img/14/권오현.png",
      },
      {
        id: 9,
        name: "윤준하",
        role: "운영진",
        detail: "미디어소프트웨어학과 21",
        image: "./img/14/윤준하.png",
      },
      {
        id: 10,
        name: "조준형",
        role: "운영진",
        detail: "컴퓨터공학과 23",
        image: "./img/14/조준형.png",
      },
    ],
  },
  13: {
    "대표/부대표": [
      {
        id: 11,
        name: "한민규",
        role: "대표",
        detail: "컴퓨터공학과 21",
        image: "./img/13/한민규.png",
      },
      {
        id: 12,
        name: "신민서",
        role: "부대표",
        detail: "미디어소프트웨어학과 22",
        image: "./img/13/신민서.png",
      },
    ],
    "기획/디자인팀": [
      {
        id: 13,
        name: "서민주",
        role: "파트장",
        detail: "관광학과 22",
        image: "./img/13/서민주.png",
      },
      {
        id: 14,
        name: "오한솔",
        role: "운영진",
        detail: "관광학과 22",
        image: "./img/13/오한솔.png",
      },
    ],
    프론트엔드팀: [
      {
        id: 15,
        name: "최유정",
        role: "파트장",
        detail: "미디어소프트웨어학과 21",
        image: "./img/13/최유정.png",
      },
      {
        id: 16,
        name: "이호연",
        role: "운영진",
        detail: "미디어소프트웨어학과 21",
        image: "./img/13/이호연.png",
      },
      {
        id: 17,
        name: "구혜원",
        role: "운영진",
        detail: "미디어소프트웨어학과 22",
        image: "./img/13/구혜원.png",
      },
    ],
    백엔드팀: [
      {
        id: 18,
        name: "박준범",
        role: "파트장",
        detail: "컴퓨터공학과 20",
        image: "./img/13/박준범.png",
      },
      {
        id: 19,
        name: "권오현",
        role: "운영진",
        detail: "컴퓨터공학과 23",
        image: "./img/13/권오현.png",
      },
      {
        id: 20,
        name: "노주희",
        role: "운영진",
        detail: "미디어소프트웨어학과 22",
        image: "./img/13/노주희.png",
      },
    ],
  },
  12: {},
  11: {},
};

const GENERATIONS = [14, 13, 12, 11];

export default function TeamScreen() {
  const [activeTab, setActiveTab] = useState(14);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabParam = parseInt(params.get("tab"), 10);

    if (GENERATIONS.includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [window.location.search]);

  const handleTabClick = (generation) => {
    setActiveTab(generation);
    const url = new URL(window.location.href);
    url.searchParams.set("tab", generation);
    window.history.pushState({}, "", url);
  };

  const currentGenData = TEAM_DATA[activeTab] || {};
  const partNames = Object.keys(currentGenData);

  return (
    <div className="bg-black pt-30 min-h-screen text-white font-sans selection:bg-neutral-800">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* 상단 타이틀 영역 */}
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
              onClick={() => handleTabClick(gen)}
              className={`text-lg py-2 cursor-pointer mb-[-17px] z-10 ${
                activeTab === gen
                  ? "text-white border-b-2 border-[#3b79ff]"
                  : "text-[#acacac] border-b-2 border-transparent "
              }`}
            >
              {gen}기
            </button>
          ))}
        </div>

        {/* 본문 파트별 리스트 */}
        <div className="pt-15 space-y-8">
          {partNames.length > 0 &&
          partNames.some((part) => currentGenData[part].length > 0) ? (
            <>
              {/* 상단 파트 레이아웃: 대표/부대표와 기획/디자인팀 1:1 배치 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["대표/부대표", "기획/디자인팀"].map((partName) => {
                  const members = currentGenData[partName] || [];
                  if (members.length === 0) return null;
                  return (
                    <div key={partName}>
                      <h2 className="text-xl font-bold mb-3 text-white pl-1">
                        {partName}
                      </h2>
                      <div className="bg-[#1b1b1b] rounded-xl py-7 px-10 border border-neutral-900 grid grid-cols-2 gap-12 items-center">
                        {members.map((member) => (
                          <div
                            key={member.id}
                            className="flex items-center gap-4"
                          >
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-28 h-28"
                            />
                            <div className="whitespace-nowrap ">
                              <div className="text-[15px] font-bold text-white">
                                {member.name}{" "}
                                <span className="text-xs font-normal text-neutral-400">
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
                  );
                })}
              </div>

              {/* 하단 파트 레이아웃: 프론트엔드와 백엔드 */}
              {["프론트엔드팀", "백엔드팀"].map((partName) => {
                const members = currentGenData[partName] || [];
                if (members.length === 0) return null;
                return (
                  <div key={partName} className="pt-2">
                    <h2 className="text-xl font-bold mb-3 text-white pl-1">
                      {partName}
                    </h2>

                    <div className="bg-[#1b1b1b] rounded-xl py-7 px-20 border border-neutral-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 items-center justify-start">
                      {members.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center gap-4"
                        >
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-28 h-28"
                          />
                          <div className="whitespace-nowrap">
                            <div className="text-[15px] font-bold text-white">
                              {member.name}{" "}
                              <span className="text-xs font-normal text-neutral-400 ml-1">
                                {member.role}
                              </span>
                            </div>
                            <div className="text-[11px] text-neutral-500 mt-1 ">
                              {member.detail}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
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
