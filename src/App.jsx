import React from "react";

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f5f5f5",
        width: "100%",
      }}
    >
      {/* TOP HEADER */}
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
        <div>THÁI BẢO-LIGHTING - Đèn trang trí giá tốt</div>

        <div>Hotline: 0935 351 095</div>
      </div>

      {/* MAIN HEADER */}
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
            gap: "15px",
            minWidth: "420px",
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
                fontSize: "52px",
                fontWeight: "900",
                lineHeight: "55px",
              }}
            >
              THÁI BẢO-LIGHTING
            </h1>

            <p
              style={{
                margin: 0,
                color: "#555",
                fontSize: "26px",
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
            maxWidth: "700px",
          }}
        >
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            style={{
              width: "100%",
              padding: "18px",
              borderRadius: "8px",
              border: "1px solid #ccc",
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
              fontSize: "40px",
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
          padding: "22px 40px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        <div>ĐÈN TƯỜNG</div>
        <div>ĐÈN THẢ</div>
        <div>ĐÈN CHÙM</div>
        <div>QUẠT TRẦN</div>
        <div>ĐÈN NGOẠI THẤT</div>
        <div>TIN TỨC</div>
      </div>

      {/* HERO */}
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
            width: "70%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "76px",
              marginBottom: "20px",
            }}
          >
            Kiến trúc không gian sống đẹp
          </h2>

          <p
            style={{
              fontSize: "32px",
              marginBottom: "35px",
            }}
          >
            Hơn 500 mẫu đèn hiện đại và cao cấp
          </p>

          <button
            style={{
              background: "#c58a11",
              color: "#fff",
              border: "none",
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
