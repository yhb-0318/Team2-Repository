import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#f8f9fa",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #e9ecef",
        color: "#6c757d",
        fontSize: "14px",
      }}
    >
      <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
        sku-sku (스쿠스쿠)
      </p>
      <p style={{ margin: "5px 0" }}>성결대학교 대학 생활 가이드 플랫폼</p>
      <p style={{ fontSize: "12px", marginTop: "20px" }}>
        © 2026 sku-sku. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; // 에러를 없애주는 핵심 한 줄!
