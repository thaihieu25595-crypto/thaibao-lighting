import React from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Đèn Hắt Tường Trắng",
      price: "104.000đ",
      oldPrice: "208.000đ",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Đèn Tường Decor",
      price: "226.000đ",
      oldPrice: "290.000đ",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Đèn Ngoại Thất",
      price: "350.000đ",
      oldPrice: "455.000đ",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Đèn Chùm Luxury",
      price: "1.250.000đ",
      oldPrice: "1.650.000đ",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: "Arial"
      }}
    >
      {/* TOPBAR */}
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "12px 30px",
          fontSize: "14px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        <div>🚚 Miễn phí vận chuyển đơn hàng lớn</div>
        <div>📞 Hotline: 0935 351 095</div>
      </div>

      {/* HEADER */}
      <div
        style={{
          background: "#fff",
          padding: "25px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "#b8860b",
              fontSize: "42px"
            }}
          >
            THÁI BẢO LIGHTING
          </h1>

          <p
            style={{
              marginTop: "5px",
              color: "#666"
            }}
          >
            Chuyên cung cấp đèn trang trí cao cấp
          </p>
        </div>

        <input
          placeholder="Tìm kiếm sản phẩm..."
          style={{
            width: "350px",
            padding: "14px",
            borderRadius: "10px",
            border: "1px solid #ccc"
          }}
        />

        <div>
          <div
            style={{
              color: "#666",
              fontSize: "14px"
            }}
          >
            Hỗ trợ khách hàng
          </div>

          <div
            style={{
              color: "red",
              fontSize: "28px",
              fontWeight: "bold"
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
          padding: "18px 30px",
          display: "flex",
          gap: "30px",
          fontWeight: "bold",
          flexWrap: "wrap"
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
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          alignItems: "center",
          padding: "60px",
          color: "#fff",
          position: "relative"
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            padding: "40px",
            borderRadius: "20px",
            maxWidth: "600px"
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              marginBottom: "20px"
            }}
          >
            Kiến tạo không gian sống đẹp
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.6
            }}
          >
            Hơn 500 mẫu đèn trang trí hiện đại và cao cấp.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "16px 40px",
              background: "#b8860b",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "18px"
            }}
          >
            MUA NGAY
          </button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "60px auto",
          padding: "0 20px"
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "40px"
          }}
        >
          Sản phẩm nổi bật
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px"
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              style={{
                background: "#fff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)"
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover"
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{item.name}</h3>

                <div
                  style={{
                    textDecoration: "line-through",
                    color: "#888",
                    marginTop: "10px"
                  }}
                >
                  {item.oldPrice}
                </div>

                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    fontSize: "32px",
                    marginTop: "5px"
                  }}
                >
                  {item.price}
                </div>

                <button
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    padding: "15px",
                    background: "#b8860b",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer"
                  }}
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO */}
      <div
        style={{
          background: "#fff",
          padding: "60px 20px"
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto"
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
              fontSize: "42px"
            }}
          >
            VIDEO GIỚI THIỆU
          </h2>

          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed?listType=user_uploads&list=thaibao-lighting6754"
            title="Thai Bao Lighting"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          background: "#000",
          color: "#fff",
          padding: "60px 30px",
          marginTop: "60px"
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "40px"
          }}
        >
          <div>
            <h2 style={{ color: "#b8860b" }}>
              THÁI BẢO LIGHTING
            </h2>

            <p>
              Chuyên cung cấp đèn trang trí và giải pháp chiếu sáng hiện đại.
            </p>

            <p>Hotline: 0935 351 095</p>

            <p>Facebook: Thái Bảo Lighting</p>
          </div>

          <div>
            <h2 style={{ color: "#b8860b" }}>
              HỖ TRỢ KHÁCH HÀNG
            </h2>

            <p>Hướng dẫn mua hàng</p>
            <p>Chính sách vận chuyển</p>
            <p>Chính sách bảo hành</p>
            <p>Chính sách đổi trả</p>
          </div>

          <div>
            <h2 style={{ color: "#b8860b" }}>
              DANH MỤC
            </h2>

            <p>Đèn tường</p>
            <p>Đèn thả</p>
            <p>Đèn chùm</p>
            <p>Đèn ngoại thất</p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "#888"
          }}
        >
          © 2026 THÁI BẢO LIGHTING
        </div>
      </div>
    </div>
  );
}

export default App;
