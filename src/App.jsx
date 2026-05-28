import React from "react";

export default function App() {
const products = [
{
id: 1,
name: "Đèn Hắt Tường Trắng",
price: "104.000đ",
old: "208.000đ",
image:
"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
},
{
id: 2,
name: "Đèn Tường Decor",
price: "226.000đ",
old: "290.000đ",
image:
"https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
},
{
id: 3,
name: "Đèn Ngoại Thất",
price: "350.000đ",
old: "455.000đ",
image:
"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop",
},
];

return (
<div style={{ background: "#f5f5f5", minHeight: "100vh" }}>

```
  {/* TOP */}
  <div
    style={{
      background: "#000",
      color: "#fff",
      padding: "10px 30px",
      fontSize: "14px",
    }}
  >
    Hotline: 0935 351 095
  </div>

  {/* HEADER */}
  <div
    style={{
      background: "#fff",
      padding: "20px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    }}
  >
    <div>
      <h1 style={{ color: "#b8860b", margin: 0 }}>
        THÁI BẢO LIGHTING
      </h1>

      <p style={{ margin: 0 }}>
        Chuyên cung cấp đèn trang trí
      </p>
    </div>

    <input
      placeholder="Tìm kiếm sản phẩm..."
      style={{
        padding: "12px",
        width: "350px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    />
  </div>

  {/* MENU */}
  <div
    style={{
      background: "#111",
      color: "#fff",
      padding: "15px 30px",
      display: "flex",
      gap: "30px",
      fontWeight: "bold",
    }}
  >
    <div>ĐÈN TƯỜNG</div>
    <div>ĐÈN THẢ</div>
    <div>ĐÈN CHÙM</div>
    <div>ĐÈN NGOẠI THẤT</div>
    <div>TIN TỨC</div>
  </div>

  {/* CONTENT */}
  <div
    style={{
      maxWidth: "1400px",
      margin: "40px auto",
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      gap: "30px",
      padding: "0 20px",
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
          padding: "20px",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        SẢN PHẨM GIẢM GIÁ
      </div>

      {products.map((p) => (
        <div
          key={p.id}
          style={{
            display: "flex",
            gap: "15px",
            padding: "15px",
            borderBottom: "1px solid #eee",
          }}
        >
          <img
            src={p.image}
            alt=""
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          <div>
            <div style={{ fontWeight: "bold" }}>
              {p.name}
            </div>

            <div
              style={{
                textDecoration: "line-through",
                color: "#999",
                marginTop: "5px",
              }}
            >
              {p.old}
            </div>

            <div
              style={{
                color: "red",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              {p.price}
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
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            background: "#fff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={p.image}
            alt=""
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
            }}
          />

          <div style={{ padding: "20px" }}>
            <h3>{p.name}</h3>

            <div
              style={{
                textDecoration: "line-through",
                color: "#999",
              }}
            >
              {p.old}
            </div>

            <div
              style={{
                color: "red",
                fontSize: "30px",
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              {p.price}
            </div>

            <button
              style={{
                marginTop: "20px",
                width: "100%",
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
      marginTop: "50px",
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
          YOUTUBE
        </h2>

        <iframe
          width="100%"
          height="220"
          src="https://www.youtube.com/embed?listType=user_uploads&list=thaibao-lighting6754"
          title="youtube"
        ></iframe>
      </div>
    </div>
  </div>
</div>
```

);
}
