import React from "react";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* TOPBAR */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "8px 40px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "25px",
          }}
        >
          <div>Thái Bảo Lighting - Đèn trang trí giá tốt</div>
          <div>Giới thiệu</div>
          <div>Liên hệ</div>
        </div>

        <div>📘 🎵 ▶</div>
      </div>

      {/* HEADER */}
      <div
        style={{
          background: "#fff",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          <div
            style={{
              width: "70px",
              height: "70px",
              background: "#d4a017",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          >
            💡
          </div>

          <div>
            <div
              style={{
                fontSize: "38px",
                fontWeight: "bold",
                color: "#c59b11",
                lineHeight: 1,
              }}
            >
              THÁI BẢO
            </div>

            <div
              style={{
                fontSize: "34px",
                fontWeight: "bold",
                color: "#c59b11",
                lineHeight: 1,
              }}
            >
              LIGHTING
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div
          style={{
            display: "flex",
            width: "520px",
            height: "48px",
          }}
        >
          <input
            placeholder="Tìm kiếm..."
            style={{
              flex: 1,
              border: "1px solid #b56b2d",
              paddingLeft: "15px",
              fontSize: "15px",
              outline: "none",
            }}
          />

          <button
            style={{
              width: "60px",
              border: "none",
              background: "#7a3e10",
              color: "#fff",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            🔍
          </button>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          {/* HOTLINE */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "red",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              ☎
            </div>

            <div>
              <div
                style={{
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                Chăm sóc khách hàng 24/7
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                0935.351.095
              </div>
            </div>
          </div>

          {/* CART */}
          <button
            style={{
              background: "#7a3e10",
              color: "#fff",
              border: "none",
              padding: "14px 24px",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          >
            GIỎ HÀNG 🛒
          </button>
        </div>
      </div>

      {/* MENU */}
      <div
        style={{
          background: "#181313",
          color: "#fff",
          display: "flex",
          gap: "28px",
          padding: "18px 40px",
          fontWeight: "bold",
          fontSize: "17px",
        }}
      >
        <div>🏠</div>
        <div>ÂM TRẦN</div>
        <div>ĐÈN TƯỜNG</div>
        <div>ĐÈN THẢ</div>
        <div>ĐÈN CHÙM</div>
        <div>MÂM-ỐP TRẦN</div>
        <div>ĐÈN BÀN</div>
        <div>QUẠT TRẦN ĐÈN</div>
        <div>ĐÈN NGOẠI THẤT</div>
        <div>TIN TỨC</div>
      </div>
    </div>
  );
}

export default App;
