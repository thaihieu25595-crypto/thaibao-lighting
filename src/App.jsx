{/* HEADER */}
<header style={{ width: "100%", background: "#fff" }}>
  
  {/* TOP BAR */}
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
    <div>THÁI BẢO-LIGHTING - Đèn trang trí cao cấp</div>

    <div>Đường dây nóng: 0935 351 095</div>
  </div>

  {/* MAIN HEADER */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 40px",
      background: "#fff",
      gap: "20px",
    }}
  >
    {/* LOGO */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        minWidth: "320px",
      }}
    >
      <img
        src="https://i.imgur.com/2w6XK9v.png"
        alt="THÁI BẢO-LIGHTING"
        style={{
          width: "95px",
          height: "95px",
          objectFit: "contain",
        }}
      />

      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "52px",
            lineHeight: "50px",
            color: "#b67812",
            fontWeight: "900",
          }}
        >
          THÁI BẢO-LIGHTING
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "28px",
            color: "#555",
          }}
        >
          Chuyên Cung Cấp Đèn Trang Trí
        </p>
      </div>
    </div>

    {/* SEARCH */}
    <div style={{ flex: 1, maxWidth: "650px" }}>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        style={{
          width: "100%",
          padding: "18px",
          border: "2px solid #ccc",
          borderRadius: "8px",
          fontSize: "18px",
        }}
      />
    </div>

    {/* HOTLINE */}
    <div
      style={{
        textAlign: "right",
        minWidth: "230px",
      }}
    >
      <div
        style={{
          color: "#666",
          fontSize: "18px",
        }}
      >
        Hỗ trợ khách hàng
      </div>

      <div
        style={{
          color: "red",
          fontWeight: "900",
          fontSize: "42px",
        }}
      >
        0935 351 095
      </div>
    </div>
  </div>

  {/* MENU */}
  <nav
    style={{
      background: "#0f0f0f",
      color: "#fff",
      display: "flex",
      gap: "40px",
      padding: "22px 40px",
      fontWeight: "700",
      fontSize: "24px",
      overflowX: "auto",
    }}
  >
    <div>ĐÈN TƯỜNG</div>
    <div>ĐÈN THẢ</div>
    <div>ĐÈN CHÙM</div>
    <div>QUẠT TRẦN</div>
    <div>ĐÈN NGOẠI THẤT</div>
    <div>TIN TỨC</div>
  </nav>
</header>
