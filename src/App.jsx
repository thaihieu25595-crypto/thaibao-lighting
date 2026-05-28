import React from "react";

const products = [
  {
    id: 1,
    name: "Đèn Hắt Tường Trắng TNT9",
    price: "104.000đ",
    old: "198.000đ",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Đèn Tường Decor TNT2",
    price: "226.000đ",
    old: "280.000đ",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Đèn Hắt Tường Đen TNT8",
    price: "104.000đ",
    old: "198.000đ",
    image:
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Đèn Ngoại Thất Luxury",
    price: "369.000đ",
    old: "457.000đ",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  },
];

function App() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        fontFamily: "Arial",
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
        <div>THÁI BẢO LIGHTING - Đèn trang trí cao cấp</div>
        <div>Hotline: 0935 351 095</div>
      </div>

      {/* HEADER */}
      <div
        style={{
          background: "#fff",
          padding: "20px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "48px",
              color: "#9c5a1a",
              fontWeight: "bold",
            }}
          >
            THÁI BẢO LIGHTING
          </h1>

          <div
            style={{
              color: "#666",
              marginTop: "5px",
            }}
          >
            Cung cấp đèn trang trí chuyên nghiệp
          </div>
        </div>

        <input
          placeholder="Tìm kiếm..."
          style={{
            width: "400px",
            padding: "14px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />

        <div>
          <div style={{ color: "#666" }}>Hỗ trợ khách hàng</div>

          <div
            style={{
              color: "red",
              fontWeight: "bold",
              fontSize: "24px",
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
          padding: "18px 40px",
          display: "flex",
          gap: "35px",
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        <div>ĐÈN TƯỜNG</div>
        <div>ĐÈN THẢ</div>
        <div>ĐÈN CHÙM</div>
        <div>QUẠT TRẦN</div>
        <div>ĐÈN NGOẠI THẤT</div>
        <div>TIN TỨC</div>
      </div>

      {/* MAIN */}
      <div
        style={{
          display: "flex",
          padding: "30px",
          gap: "30px",
        }}
      >
        {/* SIDEBAR */}
        <div
          style={{
            width: "280px",
            background: "#fff",
            border: "1px solid #ddd",
          }}
        >
          <div
            style={{
              background: "#7a3e10",
              color: "#fff",
              padding: "15px",
              fontWeight: "bold",
              fontSize: "22px",
            }}
          >
            DANH MỤC
          </div>

          {[
            "Đèn tường",
            "Đèn thả",
            "Đèn chùm",
            "Đèn bàn",
            "Đèn trang trí",
            "Quạt trần",
            "Đèn ngoại thất",
            "Đèn LED",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "14px 18px",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div style={{ flex: 1 }}>
          {/* HERO */}
          <div
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop)",
              height: "420px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                display: "flex",
                alignItems: "center",
                padding: "60px",
              }}
            >
              <div style={{ color: "#fff", maxWidth: "600px" }}>
                <h1
                  style={{
                    fontSize: "60px",
                    marginBottom: "20px",
                  }}
                >
                  Kiến tạo không gian sống đẹp
                </h1>

                <p
                  style={{
                    fontSize: "24px",
                  }}
                >
                  Hơn 500 mẫu đèn hiện đại và cao cấp.
                </p>

                <button
                  style={{
                    marginTop: "30px",
                    background: "#c48b11",
                    border: "none",
                    padding: "16px 40px",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    fontSize: "18px",
                  }}
                >
                  MUA NGAY
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCTS */}
          <h2
            style={{
              marginTop: "40px",
              marginBottom: "30px",
              fontSize: "38px",
            }}
          >
            Sản phẩm nổi bật
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
              gap: "25px",
            }}
          >
            {products.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "#fff",
                  border: "1px solid #ddd",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                  }}
                />

                <div style={{ padding: "20px" }}>
                  <h3>{item.name}</h3>

                  <div
                    style={{
                      textDecoration: "line-through",
                      color: "#999",
                    }}
                  >
                    {item.old}
                  </div>

                  <div
                    style={{
                      color: "#c40000",
                      fontSize: "34px",
                      fontWeight: "bold",
                      margin: "10px 0",
                    }}
                  >
                    {item.price}
                  </div>

                  <button
                    style={{
                      width: "100%",
                      background: "#7a3e10",
                      color: "#fff",
                      border: "none",
                      padding: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    THÊM VÀO GIỎ
                  </button>
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
          marginTop: "50px",
          padding: "50px 40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "40px",
          }}
        >
          <div>
            <h2 style={{ color: "#c48b11" }}>THÁI BẢO LIGHTING</h2>
            <p>Hotline: 0935 351 095</p>
            <p>Facebook: Thái Bảo Lighting</p>
          </div>

          <div>
            <h2 style={{ color: "#c48b11" }}>HỖ TRỢ</h2>
            <p>Hướng dẫn mua hàng</p>
            <p>Chính sách bảo hành</p>
            <p>Chính sách đổi trả</p>
          </div>

          <div>
            <h2 style={{ color: "#c48b11" }}>VIDEO</h2>

            <iframe
              width="100%"
              height="200"
              src="https://www.youtube.com/embed?listType=user_uploads&list=thaibao-lighting6754"
              title="YouTube"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
