import React, { useState } from "react";

const Header = () => {
  // 드롭다운 열림/닫힘 상태 관리
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    // 1. 헤더 위쪽에 하얀 공간을 심기 위해 전체를 감싸는 부모 태그
    // 💡 아래 본문 콘텐츠(main, div 등)가 헤더 위로 덮어쓰지 못하도록 zIndex를 확실하게 높였습니다.
    <div style={{ position: "relative", zIndex: 99999 }}>
      {/* 2. [위쪽 숨겨진 하얀 상자] 위로 스크롤 쭉 당기면 보이는 여백 */}
      <div
        style={{
          position: "fixed",
          top: "-20px",
          left: 0,
          width: "100%",
          height: "20px",
          backgroundColor: "#ffffff",
          zIndex: 99,
        }}
      />

      {/* 3. [메인 헤더 바] */}
      <div
        style={{
          position: "fixed",
          height: "78px",
          top: 0,
          left: 0,
          width: "100%",
          // 드롭다운 열리면 헤더 배경도 완전히 하얗게(#ffffff) 전환
          backgroundColor: isDropdownOpen ? "#ffffff" : "transparent",
          // 💡 평소 투명일 때 뒤의 본문 글씨가 헤더 메뉴와 겹쳐서 난잡해지는 것을 막기 위해 강력한 blur를 주거나,
          // 만약 본문 배경이 하얀색이라 메뉴(#FFF)가 안 보였던 거라면 본문 자체에 어두운 배경을 주셔야 합니다.
          backdropFilter: isDropdownOpen
            ? "none"
            : "blur(40px) brightness(0.8)",
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          boxSizing: "border-box",
          // 드롭다운 열리면 하단 선이 연한 검정/회색 톤으로 전환
          borderBottom: isDropdownOpen
            ? "1px solid rgba(0, 0, 0, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.8)",
          zIndex: 100000, // 💡 본문 글씨가 절대 위로 튀어나오지 못하게 zIndex 최상위 부여
        }}
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        {/* 로고 영역 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            width: "52px",
          }}
        >
          <a href="/">
            <img
              src="./img/likelionLogo.png"
              alt="logo"
              className="w-9 h-9"
              style={{ marginRight: "16px" }}
            />
          </a>
        </div>

        {/* 브랜드 타이틀 명 */}
        <a
          href="/"
          style={{
            color: isDropdownOpen ? "#1e1e1e" : "#3b7aff",
            fontSize: "20.7px",
            fontWeight: "1000",
            width: "180px",
            flexShrink: 0,
          }}
        >
          LIKELION SKU
        </a>

        {/* [중앙 영역] 상단 메인 메뉴 */}
        <div style={{ display: "flex", marginLeft: "20px" }}>
          <div style={{ width: "100px", textAlign: "center" }}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                color: isDropdownOpen ? "#1e1e1e" : "#FFF", // 💡 흰 배경 스크롤 시 이 부분이 겹침의 주원인입니다.
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              PROJECT
            </a>
          </div>
          <div
            style={{ width: "100px", textAlign: "center", marginLeft: "40px" }}
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                color: isDropdownOpen ? "#1e1e1e" : "#FFF",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              TEAM
            </a>
          </div>
          <div
            style={{ width: "100px", textAlign: "center", marginLeft: "40px" }}
          >
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                color: isDropdownOpen ? "#1e1e1e" : "#FFF",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              COMMUNITY
            </a>
          </div>
        </div>

        {/* 사진 및 버튼들 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            flexShrink: 0,
          }}
        >
          {/* 💡 해결 1: 드롭다운이 열린(isDropdownOpen === true) 상태에서만 인스타, 챗 아이콘이 나타납니다 */}
          {isDropdownOpen && (
            <div style={{ display: "flex", gap: "10px", marginRight: "16px" }}>
              <a href="https://www.instagram.com/likelion_sku">
                <img
                  src="./img/insta.png"
                  alt="instagram"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
              <a href="https://pf.kakao.com/_vxixlaxj">
                <img
                  src="./img/chat.png"
                  alt="chat"
                  style={{ width: "24px", height: "24px" }}
                />
              </a>
            </div>
          )}

          {/* CYBERCAMPUS 버튼 */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              // 💡 해결 2: 드롭다운이 열리면 좀 더 연한 파란색(#4b7bec)으로, 평소에는 진한 파란색(#2d5abc)으로 세팅합니다.
              backgroundColor: isDropdownOpen ? "#8eb7ff" : "#2d5abc",
              color: "white",
              padding: "8px 16px",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "13px",
              border: "none",
              marginRight: "16px",
            }}
          >
            <img
              src="./img/campus.png"
              alt="campus"
              style={{ width: "16px", height: "16px" }}
            />
            CYBERCAMPUS
          </button>

          {/* 구글 로그인 버튼 */}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "white",
              color: "#1e1e1e",
              padding: "8px 16px",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "13px",
              border: "1px solid #363636b5",
            }}
          >
            <img
              src="./img/googleLogin.png"
              alt="google"
              style={{ width: "16px", height: "16px" }}
            />
            구글계정으로 계속하기
          </button>
        </div>

        {/* 🔥 [메가 드롭다운 박스] */}
        <div
          style={{
            display: isDropdownOpen ? "block" : "none",
            position: "absolute",
            top: "78px",
            left: 0,
            width: "100%",
            backgroundColor: "#ffffff",
            padding: "25px 48px",
            boxSizing: "border-box",
            borderRadius: "0",
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "0px 15px 20px rgba(0, 0, 0, 0.05)",
            cursor: "default",
            zIndex: 99999, // 💡 드롭다운도 본문 글씨를 확실하게 덮도록 zIndex 상향
          }}
        >
          <div style={{ display: "flex" }}>
            {/* 좌측 여백 정렬용 투명 공간 */}
            <div style={{ width: "252px", flexShrink: 0 }} />

            {/* 1열: PROJECT 서브메뉴 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100px",
                textAlign: "center",
              }}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                14기
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                13기
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                12기
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                11기
              </a>
            </div>

            {/* 2열: TEAM 서브메뉴 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100px",
                textAlign: "center",
                marginLeft: "40px",
              }}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                14기
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                13기
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                12기
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                11기
              </a>
            </div>

            {/* 3열: COMMUNITY 서브메뉴 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                width: "100px",
                textAlign: "center",
                marginLeft: "40px",
              }}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                모집공고
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
