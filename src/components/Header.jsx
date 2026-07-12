import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        height: "60px",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(17, 17, 17, 0.8)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <img src="./img/likelionLogo.png" alt="logo" class="w-10 h-10" />
      <span style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "bold" }}>
        LIKELION SKU
      </span>
    </div>
  );
};

export default Header;
