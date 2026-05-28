import React from "react";

export default function App() {
const products = [
{
id: 1,
name: "Đèn Hắt Tường Trắng",
price: "104.000đ",
oldPrice: "208.000đ",
image:
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
},
{
id: 2,
name: "Đèn Tường Decor",
price: "226.000đ",
oldPrice: "290.000đ",
image:
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
},
{
id: 3,
name: "Đèn Ngoại Thất",
price: "350.000đ",
oldPrice: "455.000đ",
image:
"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop",
},
];

return (
<div
style={{
background: "#f5f5f5",
minHeight: "100vh",
fontFamily: "Arial",
}}
>
{/* TOPBAR */}
<div
style={{
background: "#000",
color: "#fff",
padding: "12px 30px",
fontSize: "14px",
}}
>
Hotline & Zalo: 0935 351 095 </div>

```
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
    }}
  >
    <div>
      <h1
        style={{
          margin: 0,
          color: "#b8860b",
          fontSize: "42px",
        }}
      >
        THÁI BẢO LIGHTING
      </h1>

      <p
        style={{
          marginTop: "5px",
          color: "#666",
        }}
      >
        Chuyên cung cấp đèn trang trí
      </p>
    </div>

    <input
      placeholder="Tìm kiếm sản phẩm..."
      style={{
        width: "350px",
        padding: "14px",
        borderRadius: "10px",
        border: "1px solid #ccc",
      }}
    />
  </div>

  {/* MENU */}
  <div
    style={{
      background: "#111",
      color: "#fff",
      display: "flex",
      gap: "30px",
      padding: "18px 30px",
      fontWeight: "bold",
      flexWrap: "wrap",
    }}
  >
    <div>ĐÈN TƯỜNG</div>
    <div>ĐÈN THẢ</div>
    <div>ĐÈN CHÙM</div>
    <div>QUẠT TRẦN</div>
    <div>ĐÈN NGOẠI THẤT</div>
    <div>TIN TỨC</div>
  </div>

  {/* CONTENT */}
  <div
    style={{
      maxWidth: "1400px",
      margin: "40px auto",
      padding: "0 20px",
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      gap: "30px",
    }}
  >
    {/* SIDEBAR */}
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#b8860b",
          color: "#fff",
          padding: "18px",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        SẢN PHẨM GIẢM GIÁ
      </div>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "15px",
            padding: "15px",
            borderBottom: "1px solid #eee",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <div>
            <div
              style={{
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              {item.name}
            </div>

            <div
              style={{
                textDecoration: "line-through",
                color: "#888",
                fontSize: "14px",
              }}
            >
              {item.oldPrice}
            </div>

            <div
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* PRODUCTS */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: "25px",
      }}
    >
      {products.map((item) => (
        <div
          key={item.id}
          style={{
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: "280px",
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
              {item.oldPrice}
            </div>

            <div
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "30px",
                marginTop: "5px",
              }}
            >
              {item.price}
            </div>

            <button
              style={{
                width: "100%",
                marginTop: "20px",
                padding: "15px",
                background: "#b8860b",
                color: "#fff",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              THÊM VÀO GIỎ
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* FOOTER */}
  <div
    style={{
      background: "#000",
      color: "#fff",
      padding: "60px 30px",
      marginTop: "60px",
    }}
  >
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "40px",
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
      </div>

      <div>
        <h2 style={{ color: "#b8860b" }}>
          HỖ TRỢ
        </h2>

        <p>Hướng dẫn mua hàng</p>
        <p>Chính sách vận chuyển</p>
        <p>Chính sách bảo hành</p>
      </div>

      <div>
        <h2 style={{ color: "#b8860b" }}>
          VIDEO
        </h2>

        <iframe
          width="100%"
          height="220"
          src="https://www.youtube.com/embed?listType=user_uploads&list=thaibao-lighting6754"
          title="Thai Bao Lighting"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</div>
```

);
}
