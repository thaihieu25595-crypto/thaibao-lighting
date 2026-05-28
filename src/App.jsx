
import React from "react";

function App() {
  const products = [
    {
      name: "Đèn Hắt Tường Trắng TNT9",
      price: "104,000₫",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Đèn Tường Decor TNT2",
      price: "226,000₫",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Đèn Hắt Tường Đen TNT8",
      price: "104,000₫",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=800&auto=format&fit=crop",
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
  ];

  return (
    <div
      style={{
        fontFamily: "Tahoma, Arial, sans-serif",
        background: "#f5f5f5",
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
                letterSpacing: "1px",
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
          gap: "30px",
          padding: "20px 40px",
          fontSize: "20px",
          fontWeight: "700",
          overflowX: "auto",
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
        <div>ĐÈN SOI TRANH</div>

        <div
          style={{
            background: "#8d450e",
            padding: "8px 14px",
            borderRadius: "4px",
          }}
        >
          ĐÈN TRANG TRÍ
        </div>

        <div>ĐÈN NGHỆ THUẬT</div>
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
              fontSize: "72px",
              margin: 0,
            }}
          >
            Kiến trúc không gian sống đẹp
          </h2>

          <p
            style={{
              fontSize: "30px",
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

      {/* PRODUCT AREA */}
      <div
        style={{
          padding: "40px",
          display: "grid",
          gridTemplateColumns: "280px 1fr",
          gap: "30px",
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
              background: "#8d450e",
              color: "#fff",
              padding: "18px",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            DANH MỤC SẢN PHẨM
          </div>

          {[
            "Đèn trụ cổng",
            "Sản phẩm bán chạy",
            "Đèn âm trần",
            "Quạt trần đèn",
            "Đèn bàn",
            "Đèn trang trí",
            "Đèn tường",
            "Mâm-Ốp trần",
            "Đèn soi tranh",
            "Đèn chùm",
            "Đèn thả",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: "16px 18px",
                borderBottom: "1px solid #eee",
                fontSize: "18px",
                background: "#fff",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* PRODUCTS */}
        <div>
          <h2
            style={{
              fontSize: "40px",
              marginBottom: "30px",
            }}
          >
            Sản phẩm nổi bật
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
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
                  <h3
                    style={{
                      fontSize: "22px",
                      minHeight: "60px",
                    }}
                  >
                    {sp.name}
                  </h3>

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
                        cursor: "pointer",
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
                        cursor: "pointer",
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
