
import React from "react";

function App() {
  return (
    <div
      style={{
        fontFamily: "Tahoma, Arial, sans-serif",
        background: "#f5f5f5",
        width: "100%",
      }}
    >
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
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          gap: "20px",
        }}
      >
        {/* LOGO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            minWidth: "500px",
          }}
        >
          <img
            src="https://i.ibb.co/YTVmQgFZ/logo-thaibao.png"
            alt="THÁI BẢO-LIGHTING"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
            }}
          />

          <div>
            <h1
              style={{
                margin: 0,
                color: "#b67812",
                fontSize: "44px",
                fontWeight: "800",
                lineHeight: "50px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              THÁI BẢO-LIGHTING
            </h1>

            <p
              style={{
                margin: 0,
                color: "#555",
                fontSize: "24px",
              }}
            >
              Chuyên Cung Cấp Đèn Trang Trí
            </p>
          </div>
        </div>

        {/* SEARCH */}
        <div
          style={{
            flex: 1,
            maxWidth: "650px",
          }}
        >
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            style={{
              width: "100%",
              padding: "18px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "18px",
            }}
          />
        </div>

        {/* HOTLINE */}
        <div
          style={{
            textAlign: "right",
            minWidth: "220px",
          }}
        >
          <div
            style={{
              color: "#555",
              fontSize: "18px",
            }}
          >
            Hỗ trợ khách hàng
          </div>

          <div
            style={{
              color: "red",
              fontWeight: "900",
              fontSize: "38px",
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
          padding: "22px 40px",
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
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
          alt="banner"
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.45)",
            padding: "60px",
            borderRadius: "16px",
            color: "#fff",
            textAlign: "center",
            width: "70%",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "72px",
              lineHeight: "80px",
            }}
          >
            Kiến trúc không gian sống đẹp
          </h2>

          <p
            style={{
              fontSize: "30px",
              marginTop: "20px",
            }}
          >
            Hơn 500 mẫu đèn hiện đại và cao cấp
          </p>

          <button
            style={{
              marginTop: "20px",
              background: "#c58a11",
              border: "none",
              color: "#fff",
              padding: "20px 50px",
              borderRadius: "10px",
              fontSize: "24px",
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
