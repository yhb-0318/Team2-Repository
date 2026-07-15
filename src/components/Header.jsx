import React, { useState, useRef } from "react";

const Header = () => {
  // 드롭다운 열림/닫힘 상태 관리
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 마우스가 나갔을 때 타이머를 저장할 Ref
  const leaveTimer = useRef(null);

  // 마우스가 들어왔을 때
  const handleMouseEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setIsDropdownOpen(true);
  };

  // 마우스가 나갔을 때 (0.1초 뒤에 닫히게 하여 클릭 이벤트를 보장)
  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 100); // 100ms 정도의 유예 시간을 줍니다.
  };

  return (
    // 1. 헤더 위쪽에 하얀 공간을 심기 위해 전체를 감싸는 부모 태그
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
          backgroundColor: isDropdownOpen ? "#ffffff" : "transparent",
          backdropFilter: isDropdownOpen
            ? "none"
            : "blur(40px) brightness(0.8)",
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          boxSizing: "border-box",
          borderBottom: isDropdownOpen
            ? "1px solid rgba(0, 0, 0, 0.1)"
            : "1px solid rgba(255, 255, 255, 0.8)",
          zIndex: 100000,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 로고 영역 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
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

        {/* 타이틀 명 */}
        <a
          href="/"
          style={{
            color: isDropdownOpen ? "#1e1e1e" : "#3b7aff",
            fontSize: "20.7px",
            fontWeight: "1000",
            width: "180px",
          }}
        >
          LIKELION SKU
        </a>

        {/* [중앙 영역] 상단 메인 메뉴 */}
        <div style={{ display: "flex", marginLeft: "20px" }}>
          <div style={{ width: "100px", textAlign: "center" }}>
            <a
              href="/project"
              style={{
                color: isDropdownOpen ? "#1e1e1e" : "#FFF",
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
              href="/team"
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
          }}
        >
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
          }}
        >
          <div style={{ display: "flex" }}>
            {/* 좌측 여백 정렬용 투명 공간 */}
            <div style={{ width: "252px" }} />

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
                href="/project?tab=14"
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
                href="/project?tab=13"
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
                href="/project?tab=12"
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
                href="/project?tab=11"
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
                href="/team?tab=14"
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
                href="/team?tab=13"
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
                href="/team?tab=12"
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
                href="/team?tab=11"
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
              <span
                style={{
                  color: "#555555",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                모집공고
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
