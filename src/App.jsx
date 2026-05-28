import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial", background: "#f5f5f5" }}>
      
      {/* TOP BAR */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "10px 40px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
        }}
      >
        <div>THÁI BẢO-LIGHTING - Đèn trang trí cao cấp</div>

        <div>Hotline: 0935 351 095</div>
      </div>

      {/* HEADER */}
      <div
        style={{
          background: "#fff",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img
            src="https://i.imgur.com/2w6XK9v.png"
            alt="logo"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "42px",
                color: "#b67812",
                fontWeight: "900",
              }}
            >
              THÁI BẢO-LIGHTING
            </h1>

            <p
              style={{
                margin: 0,
                color: "#555",
                fontSize: "22px",
              }}
            >
              Chuyên Cung Cấp Đèn Trang Trí
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div style={{ flex: 1, maxWidth: "600px" }}>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>

        {/* HOTLINE */}
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#666" }}>
            Hỗ trợ khách hàng
          </div>

          <div
            style={{
              color: "red",
              fontSize: "36px",
              fontWeight: "900",
            }}
          >
            0935 351 095
          </div>
        </div>
      </div>

      {/* MENU */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          display: "flex",
          gap: "40px",
          padding: "20px 40px",
          fontWeight: "700",
          fontSize: "22px",
        }}
      >
        <div>ĐÈN TƯỜNG</div>
        <div>ĐÈN THẢ</div>
        <div>ĐÈN CHÙM</div>
        <div>QUẠT TRẦN</div>
        <div>ĐÈN NGOẠI THẤT</div>
        <div>TIN TỨC</div>
      </div>

      {/* BANNER */}
      <div
        style={{
          position: "relative",
        }}
      >
        <img
  src="https://i.postimg.cc/Vk9J0w6X/logo-thaibao.png"
  alt="THÁI BẢO-LIGHTING"
  style={{
    width: "120px",
    height: "120px",
    objectFit: "contain",
  }}
/>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.45)",
            padding: "50px",
            borderRadius: "12px",
            textAlign: "center",
            color: "#fff",
            width: "70%",
          }}
        >
          <h2
            style={{
              fontSize: "70px",
              margin: 0,
            }}
          >
            Kiến trúc không gian sống đẹp
          </h2>

          <p
            style={{
              fontSize: "32px",
            }}
          >
            Hơn 500 mẫu đèn hiện đại và cao cấp
          </p>

          <button
            style={{
              background: "#c58a11",
              border: "none",
              color: "#fff",
              padding: "18px 45px",
              fontSize: "24px",
              borderRadius: "10px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            MUA NGAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
