import React from "react";

function App() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "Arial",
      }}
    >
      {/* TOPBAR */}
      <div
        style={{
          background: "#111",
          color: "#fff",
          padding: "8px 15px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
        }}
      >
        <div>Thái Bảo Lighting - Đèn trang trí giá tốt</div>

        <div>Hotline: 0935 351 095</div>
      </div>

      {/* HEADER */}
      <div
        style={{
          background: "#fff",
          padding: "20px 15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
            src="https://i.imgur.com/8Km9tLL.png"
            alt="logo"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />

          <div>
            <div
              style={{
                fontSize: "42px",
                fontWeight: "bold",
                color: "#b8860b",
                lineHeight: 1,
              }}
            >
              THÁI BẢO LIGHTING
            </div>

            <div
              style={{
                color: "#666",
                marginTop: "5px",
                fontSize: "18px",
              }}
            >
              Chuyên cung cấp đèn trang trí
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div
          style={{
            display: "flex",
            width: "500px",
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
              background: "#7a3e10",
              border: "none",
              color: "#fff",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            🔍
          </button>
        </div>

        {/* HOTLINE */}
        <div
          style={{
            textAlign: "right",
          }}
        >
          <div
            style={{
              color: "#777",
              fontSize: "14px",
            }}
          >
            Chăm sóc khách hàng
          </div>

          <div
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "32px",
            }}
          >
            0935 351 095
          </div>
        </div>
      </div>

      {/* MENU */}
      <div
        style={{
          background: "#181313",
          color: "#fff",
          display: "flex",
          gap: "30px",
          padding: "18px 15px",
          fontWeight: "bold",
          fontSize: "17px",
        }}
      >
        <div>🏠</div>
        <div>ÂM TRẦN</div>
        <div>ĐÈN TƯỜNG</div>
        <div>ĐÈN THẢ</div>
        <div>ĐÈN CHÙM</div>
        <div>MÂM ÁP TRẦN</div>
        <div>QUẠT TRẦN</div>
        <div>ĐÈN NGOẠI THẤT</div>
        <div>TIN TỨC</div>
      </div>

      {/* BANNER */}
      <div
        style={{
          width: "100%",
          height: "520px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            paddingLeft: "80px",
          }}
        >
          <div
            style={{
              color: "#fff",
              maxWidth: "600px",
            }}
          >
            <div
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                lineHeight: 1.1,
              }}
            >
              Kiến tạo không gian sống đẹp
            </div>

            <div
              style={{
                fontSize: "28px",
                marginTop: "20px",
              }}
            >
              Hơn 500 mẫu đèn hiện đại và cao cấp
            </div>

            <button
              style={{
                marginTop: "35px",
                background: "#c89211",
                color: "#fff",
                border: "none",
                padding: "18px 45px",
                fontSize: "18px",
                fontWeight: "bold",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              MUA NGAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
