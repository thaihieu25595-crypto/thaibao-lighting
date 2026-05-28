
import React from "react";

function App() {
  const products = [
    {
      name: "Đèn Hắt Tường TNT9",
      price: "104,000₫",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Đèn Decor TNT2",
      price: "226,000₫",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Đèn Chùm Luxury",
      price: "1,250,000₫",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Đèn Thả Hiện Đại",
      price: "860,000₫",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Đèn Ngoại Thất",
      price: "540,000₫",
      image:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Đèn Phòng Ngủ",
      price: "940,000₫",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const denTrangTri = [
    "EUROTO LIGHTING",
    "NAM LONG LIGHTING",
    "PTH LIGHTING HOME",
    "ANRORA LIGHT",
    "355 LIGHTING",
    "SANO LIGHTING",
    "VERONIA LIGHTING",
    "HUFA LIGHTING",
  ];

  const chieuSang = [
    "PANASONIC",
    "GS LIGHTING",
    "VINALED LIGHTING",
    "ANFACO LIGHTING",
    "HUFA LIGHTING",
    "ACUMEN LIGHTING",
    "MINH ĐỨC",
    "KINGLED LIGHTING",
    "MPE LIGHTING",
    "KHAPHACO LIGHTING",
    "PARAGON LIGHTING",
    "ENA LIGHTING",
    "TLC LIGHTING",
    "DUHAL LIGHTING",
    "PHILIPS",
    "RẠNG ĐÔNG LIGHTING",
  ];

  const linhKien = [
    "Ổ CẮM ĐIỆN",
    "APTOMAT",
    "DÂY ĐIỆN",
    "CÔNG TẮC",
    "PHÍCH CẮM",
    "BÓNG LED",
    "ĐUI ĐÈN",
    "NGUỒN LED",
  ];

  return (
    <div
      style={{
        fontFamily: "Tahoma, Arial, sans-serif",
        background: "#f5f5f5",
      }}
    >
      {/* TOP */}
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
                fontSize: "42px",
                fontWeight: "800",
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
        <div
          style={{
            flex: 1,
            maxWidth: "600px",
          }}
        >
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            style={{
              width: "100%",
              padding: "16px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              fontSize: "16px",
            }}
          />
        </div>

        {/* HOTLINE */}
        <div
          style={{
            textAlign: "right",
          }}
        >
          <div
            style={{
              color: "#555",
              fontSize: "16px",
            }}
          >
            Hỗ trợ khách hàng
          </div>

          <div
            style={{
              color: "red",
              fontWeight: "900",
              fontSize: "34px",
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
          alignItems: "center",
          gap: "28px",
          padding: "0 40px",
          fontWeight: "700",
          fontSize: "18px",
          overflowX: "auto",
          height: "56px",
          whiteSpace: "nowrap",
        }}
      >
        <div>🏠</div>
        <div>ÂM TRẦN ▼</div>
        <div>ĐÈN TƯỜNG ▼</div>
        <div>ĐÈN THẢ ▼</div>
        <div>ĐÈN CHÙM ▼</div>
        <div>MÂM-ỐP TRẦN ▼</div>
        <div>ĐÈN BÀN ▼</div>
        <div>QUẠT TRẦN ĐÈN ▼</div>
        <div>ĐÈN SOI TRANH ▼</div>

        <div
          style={{
            background: "#8d450e",
            padding: "18px 16px",
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          ĐÈN TRANG TRÍ ▼
        </div>

        <div>ĐÈN NGHỆ THUẬT</div>
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
            height: "650px",
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
            padding: "50px",
            borderRadius: "12px",
            textAlign: "center",
            color: "#fff",
            width: "70%",
          }}
        >
          <h2
            style={{
              fontSize: "60px",
              margin: 0,
            }}
          >
            Kiến trúc không gian sống đẹp
          </h2>

          <p
            style={{
              fontSize: "28px",
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
              padding: "18px 45px",
              fontSize: "20px",
              borderRadius: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            MUA NGAY
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "340px 1fr",
          gap: "30px",
          padding: "40px",
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
          }}
        >
          <div
            style={{
              background: "#7a3708",
              color: "#fff",
              padding: "18px 20px",
              fontSize: "20px",
              fontWeight: "800",
            }}
          >
            DANH MỤC CATALOGUE
          </div>

          {/* ĐÈN TRANG TRÍ */}
          <div
            style={{
              padding: "18px 20px",
              borderBottom: "1px solid #eee",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            📘 CATALOGUE ĐÈN TRANG TRÍ
          </div>

          {denTrangTri.map((item, index) => (
            <a
              key={index}
              href={`/catalogue/${item
                .toLowerCase()
                .replaceAll(" ", "-")}.pdf`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                padding: "14px 30px",
                color: "#444",
                borderBottom: "1px solid #eee",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}

          {/* CHIẾU SÁNG */}
          <div
            style={{
              padding: "18px 20px",
              borderBottom: "1px solid #eee",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            💡 CATALOGUE THIẾT BỊ CHIẾU SÁNG
          </div>

          {chieuSang.map((item, index) => (
            <a
              key={index}
              href={`/catalogue/${item
                .toLowerCase()
                .replaceAll(" ", "-")}.pdf`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                padding: "14px 30px",
                color: "#444",
                borderBottom: "1px solid #eee",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}

          {/* LINH KIỆN */}
          <div
            style={{
              padding: "18px 20px",
              borderBottom: "1px solid #eee",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            🔧 DỤNG CỤ & LINH KIỆN
          </div>

          {linhKien.map((item, index) => (
            <a
              key={index}
              href={`/catalogue/${item
                .toLowerCase()
                .replaceAll(" ", "-")}.pdf`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                padding: "14px 30px",
                color: "#444",
                borderBottom: "1px solid #eee",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* PRODUCTS */}
        <div>
          <h2
            style={{
              fontSize: "38px",
              marginBottom: "25px",
            }}
          >
            Sản phẩm nổi bật
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "25px",
            }}
          >
            {products.map((sp, index) => (
              <div
                key={index}
                style={{
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={sp.image}
                  alt={sp.name}
                  style={{
                    width: "100%",
                    height: "320px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    padding: "20px",
                  }}
                >
                  <h3>{sp.name}</h3>

                  <div
                    style={{
                      color: "#c00",
                      fontWeight: "700",
                      fontSize: "30px",
                      marginBottom: "20px",
                    }}
                  >
                    {sp.price}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <button
                      style={{
                        flex: 1,
                        background: "#111",
                        color: "#fff",
                        border: "none",
                        padding: "14px",
                        borderRadius: "6px",
                        fontWeight: "700",
                      }}
                    >
                      🛒 GIỎ HÀNG
                    </button>

                    <button
                      style={{
                        flex: 1,
                        background: "#c58a11",
                        color: "#fff",
                        border: "none",
                        padding: "14px",
                        borderRadius: "6px",
                        fontWeight: "700",
                      }}
                    >
                      MUA NGAY
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
