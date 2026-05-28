
import React from "react";

const menuStyle = {
  color: "#fff",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  height: "56px",
  fontWeight: "700",
};

const socialStyle = (bg) => ({
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  background: bg,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textDecoration: "none",
  fontSize: "24px",
  fontWeight: "700",
});

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
    padding: "18px 40px",
    gap: "30px",
  }}
>
  {/* LOGO */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "18px",
      minWidth: "420px",
    }}
  >
    <img
      src="https://i.ibb.co/YTVmQgFZ/logo-thaibao.png"
      alt="THÁI BẢO-LIGHTING"
      style={{
        width: "85px",
        height: "85px",
        objectFit: "contain",
      }}
    />

    <div>
      <div
        style={{
          fontSize: "28px",
          fontWeight: "800",
          color: "#b67812",
          lineHeight: "34px",
          letterSpacing: "1px",
          whiteSpace: "nowrap",
        }}
      >
        THÁI BẢO-LIGHTING
      </div>

      <div
        style={{
          color: "#555",
          fontSize: "16px",
          marginTop: "4px",
        }}
      >
        Chuyên Cung Cấp Đèn Trang Trí
      </div>
    </div>
  </div>

  {/* SEARCH */}
  <div
    style={{
      flex: 1,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <input
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      style={{
        width: "100%",
        maxWidth: "520px",
        padding: "15px 18px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        fontSize: "16px",
        outline: "none",
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
        color: "#666",
        fontSize: "15px",
      }}
    >
      Hỗ trợ khách hàng
    </div>

    <div
      style={{
        color: "red",
        fontSize: "24px",
        fontWeight: "800",
        marginTop: "4px",
        whiteSpace: "nowrap",
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
        <a href="/" style={menuStyle}>🏠</a>
        <a href="/am-tran" style={menuStyle}>ÂM TRẦN ▼</a>
        <a href="/den-tuong" style={menuStyle}>ĐÈN TƯỜNG ▼</a>
        <a href="/den-tha" style={menuStyle}>ĐÈN THẢ ▼</a>
        <a href="/den-chum" style={menuStyle}>ĐÈN CHÙM ▼</a>
        <a href="/mam-op-tran" style={menuStyle}>MÂM-ỐP TRẦN ▼</a>
        <a href="/den-ban" style={menuStyle}>ĐÈN BÀN ▼</a>
        <a href="/quat-tran-den" style={menuStyle}>QUẠT TRẦN ĐÈN ▼</a>
        <a href="/den-soi-tranh" style={menuStyle}>ĐÈN SOI TRANH ▼</a>

        <a
          href="/den-trang-tri"
          style={{
            ...menuStyle,
            background: "#8d450e",
            padding: "0 16px",
          }}
        >
          ĐÈN TRANG TRÍ ▼
        </a>

        <a href="/den-nghe-thuat" style={menuStyle}>
          ĐÈN NGHỆ THUẬT
        </a>

        <a href="/tin-tuc" style={menuStyle}>
          TIN TỨC
        </a>
      </div>

      {/* BANNER */}
      <div style={{ position: "relative" }}>
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

          <div
            style={{
              padding: "18px 20px",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            📘 CATALOGUE ĐÈN TRANG TRÍ
          </div>

          {denTrangTri.map((item, index) => (
            <a
              key={index}
              href="#"
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

          <div
            style={{
              padding: "18px 20px",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            💡 CATALOGUE THIẾT BỊ CHIẾU SÁNG
          </div>

          {chieuSang.map((item, index) => (
            <a
              key={index}
              href="#"
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

          <div
            style={{
              padding: "18px 20px",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            🔧 DỤNG CỤ & LINH KIỆN
          </div>

          {linhKien.map((item, index) => (
            <a
              key={index}
              href="#"
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

                <div style={{ padding: "20px" }}>
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

      {/* FOOTER */}
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "60px 40px",
          marginTop: "60px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "60px",
          }}
        >
          <div>
            <h2
              style={{
                color: "yellow",
                marginBottom: "30px",
                fontSize: "32px",
              }}
            >
              HỖ TRỢ KHÁCH HÀNG
            </h2>

            {[
              "Hướng dẫn mua hàng",
              "Chính sách thanh toán",
              "Chính sách bảo hành",
              "Chính sách vận chuyển",
              "Chính sách đổi trả",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "15px 0",
                  borderBottom: "1px solid #333",
                  fontSize: "20px",
                }}
              >
                › {item}
              </div>
            ))}
          </div>

          <div>
            <h2
              style={{
                color: "yellow",
                marginBottom: "30px",
                fontSize: "32px",
              }}
            >
              CHUYÊN MỤC
            </h2>

            {[
              "Tin tức",
              "Khuyến mãi",
              "Lắp đặt thực tế",
              "Hướng dẫn sử dụng",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "15px 0",
                  borderBottom: "1px solid #333",
                  fontSize: "20px",
                }}
              >
                › {item}
              </div>
            ))}
          </div>

          <div>
            <h2
              style={{
                color: "yellow",
                marginBottom: "30px",
                fontSize: "32px",
              }}
            >
              VIDEO
            </h2>

            <iframe
              width="100%"
              height="260"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
              style={{
                borderRadius: "10px",
                border: "none",
              }}
            ></iframe>

            <div
              style={{
                marginTop: "20px",
                fontSize: "24px",
                fontWeight: "700",
              }}
            >
              THÁI BẢO-LIGHTING - Đèn Trang Trí Giá Tốt
            </div>

            <div
              style={{
                display: "flex",
                gap: "18px",
                marginTop: "25px",
              }}
            >
              <a href="https://facebook.com" style={socialStyle("#1877f2")}>
                f
              </a>

              <a href="https://youtube.com" style={socialStyle("red")}>
                ▶
              </a>

              <a href="https://tiktok.com" style={socialStyle("#111")}>
                ♪
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CALL + ZALO */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          zIndex: 9999,
        }}
      >
        <a
          href="tel:0935351095"
          style={{
            width: "78px",
            height: "78px",
            borderRadius: "50%",
            background: "#ff1200",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "38px",
            textDecoration: "none",
          }}
        >
          📞
        </a>

        <a
          href="https://zalo.me/0935351095"
          target="_blank"
          rel="noreferrer"
          style={{
            width: "78px",
            height: "78px",
            borderRadius: "50%",
            background: "#7CFC00",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#0b63ff",
            fontSize: "24px",
            fontWeight: "800",
            textDecoration: "none",
          }}
        >
          Zalo
        </a>
      </div>
    </div>
  );
}

export default App;
