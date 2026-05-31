import React, { useState } from "react";

const PRIMARY = "#c0392b";
const BROWN = "#7a3708";
const NAV_BG = "#111111";

const fmt = (n) => n.toLocaleString("vi-VN") + "₫";

const SECTIONS = [
  {
    id: "khuyen-mai",
    title: "🏷️ KHUYẾN MẠI TRONG THÁNG",
    products: [
      { id: 1, name: "Đèn Mâm Hiện Đại Vũ Mao 5 cánh", price: 803000, original: 995000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80" },
      { id: 2, name: "Đèn Thả Đơn Hồ Điệp TH55", price: 578000, original: 715000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80" },
      { id: 3, name: "Đèn Tường Led Tháp và Lọ Hoa", price: 338000, original: 419000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { id: 4, name: "Đèn Chùm Hoa Lily 8 tay CHĐ23", price: 2099000, original: 3630000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
      { id: 5, name: "Đèn Chùm Hoa Vân Môn CHĐ21-12", price: 1775000, original: 2300000, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80" },
      { id: 6, name: "Đèn Mâm Hiện Đại Hoa Sen 16 cánh", price: 2363000, original: 2925000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" },
    ],
  },
  {
    id: "den-tha",
    title: "💡 ĐÈN THẢ",
    products: [
      { id: 10, name: "Đèn Thả Hiện Đại TH70-2098", price: 1398000, original: 1800000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80" },
      { id: 11, name: "Đèn Thả Decor Gold Sóng BY5106", price: 2625000, original: 3400000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80" },
      { id: 12, name: "Đèn Thả Decor Xoắn BY5103", price: 2247000, original: 3200000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
      { id: 13, name: "Đèn Thả 5 Pha Lê Vuông THPL12", price: 2552000, original: 3160000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { id: 14, name: "Đèn Thả Nordic Tối Giản", price: 1250000, original: 1600000, img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400&q=80" },
      { id: 15, name: "Đèn Thả Giếng Trời Thông Tầng", price: 4500000, original: 5800000, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80" },
    ],
  },
  {
    id: "den-chum",
    title: "✨ ĐÈN CHÙM",
    products: [
      { id: 20, name: "Đèn Chùm Thông Tầng Pha Lê Crystal D1200", price: 45171000, original: 63200000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
      { id: 21, name: "Đèn Chùm Pha Lê Elip 10112-800", price: 3780000, original: 5000000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80" },
      { id: 22, name: "Đèn Chùm Crystal Versailles 48 bóng", price: 4850000, original: 6200000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" },
      { id: 23, name: "Đèn Chùm Pha Lê Elip 93031-L950", price: 4763000, original: 5900000, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80" },
      { id: 24, name: "Đèn Chùm Cổ Điển Châu Âu 12 tay", price: 6785000, original: 8800000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80" },
      { id: 25, name: "Đèn Chùm Hiện Đại Galaxy 8105-10", price: 2250000, original: 3920000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    ],
  },
  {
    id: "mam-op-tran",
    title: "🔆 ĐÈN MÂM – ỐP TRẦN",
    products: [
      { id: 30, name: "Đèn Mâm Hiện Đại Vuông OT24", price: 992000, original: 1230000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" },
      { id: 31, name: "Đèn Mâm Hiện Đại Tam Giác OT23", price: 1040000, original: 1290000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80" },
      { id: 32, name: "Đèn Ốp Trần Tròn Vỏ Sò A12", price: 404000, original: 540000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
      { id: 33, name: "Đèn Ốp Trần Hiện Đại Decor MHĐ45", price: 2249000, original: 2785000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80" },
      { id: 34, name: "Đèn Mâm Hiện Đại MHĐ32", price: 1250000, original: 1600000, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80" },
      { id: 35, name: "Đèn Ốp Trần Tròn Vân Sóng OT59", price: 404000, original: 481000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    ],
  },
  {
    id: "quat-tran",
    title: "💨 QUẠT TRẦN ĐÈN",
    products: [
      { id: 40, name: "Quạt Trần Kết Hợp Đèn Aurora 5 cánh", price: 3200000, original: 3800000, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
      { id: 41, name: "Đèn Quạt Ốp Trần Chữ Nhật FS-995", price: 3380000, original: 3880000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" },
      { id: 42, name: "Đèn Quạt Ốp Trần Vuông FS-995", price: 1980000, original: 2360000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80" },
      { id: 43, name: "Quạt Trần 5 Cánh Gỗ Walnut Cao Cấp", price: 5376000, original: 7314000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    ],
  },
  {
    id: "den-tuong",
    title: "🕯️ ĐÈN TƯỜNG",
    products: [
      { id: 50, name: "Đèn Tường Châu Âu 821", price: 756000, original: 1080000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { id: 51, name: "Đèn Tường Đồng TNT65", price: 1013000, original: 1254000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80" },
      { id: 52, name: "Đèn Hắt Tường TNT9 – 6W", price: 104000, original: 198000, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80" },
      { id: 53, name: "Đèn Tường Art Deco Gold", price: 890000, original: 1100000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
    ],
  },
  {
    id: "am-tran",
    title: "💫 ĐÈN ÂM TRẦN",
    products: [
      { id: 60, name: "Âm Trần Viền Vàng P110 – 9W", price: 55000, original: 79000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" },
      { id: 61, name: "Âm Trần Boss Viền Mạ Vàng Ø90 – 7W", price: 34000, original: 45000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80" },
      { id: 62, name: "AT3 Âm Trần Viền Mạ Vàng – 3 Chế độ", price: 38000, original: 50000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { id: 63, name: "AT18 Âm Trần SH P90-7W Viền Bạc", price: 49000, original: 63000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80" },
    ],
  },
];

const GALLERY = [
  { img: "https://images.unsplash.com/photo-1617325710236-4a36d46427c5?w=400&q=80", caption: "Biệt thự Thủ Đức – Đèn chùm pha lê" },
  { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80", caption: "Penthouse Q.7 – Đèn thả thông tầng" },
  { img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80", caption: "Khách sạn 5 sao Đà Lạt" },
  { img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", caption: "Villa Bình Dương – Quạt trần đèn" },
  { img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&q=80", caption: "Căn hộ Q.2 – Hệ đèn âm trần" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", caption: "Restaurant Sài Gòn – Đèn chùm cổ điển" },
];

const BLOG = [
  { title: "20+ mẫu đèn phòng khách cổ điển sang trọng", date: "25/05/2026", img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300&q=80" },
  { title: "Xu hướng đèn trang trí nội thất 2026: Hiện đại – Tối giản", date: "20/05/2026", img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=300&q=80" },
  { title: "Cách chọn đèn theo diện tích phòng khách", date: "15/05/2026", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80" },
  { title: "Top 7 mẫu đèn thả trần đẹp nhất cho nhà hàng 2026", date: "10/05/2026", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
];

function ProductCard({ product, onAddCart, isMobile }) {
  const discount = Math.round((1 - product.price / product.original) * 100);
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e8e8e8",
      borderRadius: "6px",
      overflow: "hidden",
      position: "relative",
      transition: "box-shadow 0.2s",
      cursor: "pointer",
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    >
      {/* Discount badge */}
      <div style={{
        position: "absolute", top: "10px", left: "10px",
        background: PRIMARY, color: "#fff",
        fontSize: "12px", fontWeight: "700",
        padding: "3px 7px", borderRadius: "3px", zIndex: 2
      }}>-{discount}%</div>

      {/* Image */}
      <div style={{ overflow: "hidden", height: isMobile ? "160px" : "220px" }}>
        <img src={product.img} alt={product.name} style={{
          width: "100%", height: "100%", objectFit: "cover",
          transition: "transform 0.3s"
        }}
          onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />
      </div>

      {/* Info */}
      <div style={{ padding: isMobile ? "10px" : "14px" }}>
        <div style={{
          fontSize: isMobile ? "13px" : "14px",
          fontWeight: "600", color: "#222",
          marginBottom: "8px", lineHeight: "1.4",
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden"
        }}>{product.name}</div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
          <span style={{ color: PRIMARY, fontSize: isMobile ? "15px" : "17px", fontWeight: "700" }}>{fmt(product.price)}</span>
          <span style={{ color: "#aaa", fontSize: "12px", textDecoration: "line-through" }}>{fmt(product.original)}</span>
        </div>

        <button
          onClick={() => onAddCart(product)}
          style={{
            width: "100%", background: BROWN, color: "#fff",
            border: "none", padding: isMobile ? "8px" : "10px",
            fontSize: "12px", fontWeight: "700",
            letterSpacing: "0.5px", cursor: "pointer",
            borderRadius: "4px", transition: "background 0.2s"
          }}
          onMouseEnter={e => e.target.style.background = "#9a4a0e"}
          onMouseLeave={e => e.target.style.background = BROWN}
        >
          🛒 THÊM VÀO GIỎ HÀNG
        </button>
      </div>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const addCart = (p) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === p.id);
      if (ex) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
    setToast(`Đã thêm "${p.name.substring(0, 30)}..." vào giỏ!`);
    setTimeout(() => setToast(null), 2500);
  };

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const navCategories = [
    { label: "TRANG CHỦ", href: "/" },
    { label: "ĐÈN THẢ", href: "#den-tha" },
    { label: "ĐÈN CHÙM", href: "#den-chum" },
    { label: "MÂM ỐP TRẦN", href: "#mam-op-tran" },
    { label: "ĐÈN TƯỜNG", href: "#den-tuong" },
    { label: "QUẠT TRẦN ĐÈN", href: "#quat-tran" },
    { label: "ĐÈN ÂM TRẦN", href: "#am-tran" },
    { label: "LIÊN HỆ", href: "#lien-he" },
  ];

  return (
    <div style={{ fontFamily: "'Roboto Condensed', 'Tahoma', sans-serif", background: "#f5f5f5", minHeight: "100vh" }}>

      {/* TOP BAR */}
      <div style={{ background: NAV_BG, color: "#ccc", padding: "7px 20px", fontSize: "13px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span>THÁI BẢO LIGHTING – Đèn trang trí giá tốt TP.HCM</span>
        {!isMobile && <span>📍 TP. Hồ Chí Minh &nbsp;|&nbsp; ⏰ 8:00 – 20:00</span>}
      </div>

      {/* HEADER */}
      <div style={{ background: "#fff", padding: isMobile ? "10px 16px" : "14px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <img src="https://i.ibb.co/YTVmQgFZ/logo-thaibao.png" alt="Logo" style={{ width: isMobile ? "50px" : "70px", height: isMobile ? "50px" : "70px", objectFit: "contain" }} />
          {!isMobile && (
            <div>
              <div style={{ fontSize: "22px", fontWeight: "800", color: BROWN, letterSpacing: "0.5px" }}>THÁI BẢO LIGHTING</div>
              <div style={{ fontSize: "13px", color: "#666" }}>Chiếu sáng chuyên nghiệp – Kiến tạo không gian sống</div>
            </div>
          )}
          {isMobile && <div style={{ fontSize: "16px", fontWeight: "800", color: BROWN }}>THÁI BẢO LIGHTING</div>}
        </div>

        {/* Search */}
        {!isMobile && (
          <div style={{ flex: 1, maxWidth: "480px", position: "relative" }}>
            <input type="text" placeholder="Tìm kiếm đèn trang trí..." style={{
              width: "100%", padding: "11px 44px 11px 16px",
              border: `2px solid ${BROWN}`, borderRadius: "4px",
              fontSize: "14px", outline: "none"
            }} />
            <span style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", color: BROWN, fontSize: "16px" }}>🔍</span>
          </div>
        )}

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "12px" : "20px", flexShrink: 0 }}>
          {!isMobile && (
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "12px", color: "#888" }}>Hotline tư vấn</div>
              <a href="tel:0935351095" style={{ fontSize: "20px", fontWeight: "800", color: PRIMARY, textDecoration: "none" }}>0935 351 095</a>
            </div>
          )}
          <button onClick={() => setCartOpen(true)} style={{
            position: "relative", background: BROWN, color: "#fff",
            border: "none", padding: isMobile ? "8px 12px" : "10px 16px",
            borderRadius: "4px", cursor: "pointer", fontSize: "14px", fontWeight: "700"
          }}>
            🛒 Giỏ hàng
            {cartCount > 0 && (
              <span style={{
                position: "absolute", top: "-8px", right: "-8px",
                background: PRIMARY, color: "#fff", borderRadius: "50%",
                width: "20px", height: "20px", fontSize: "11px",
                display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700"
              }}>{cartCount}</span>
            )}
          </button>
          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", fontSize: "22px", cursor: "pointer" }}>☰</button>
          )}
        </div>
      </div>

      {/* NAVIGATION */}
      <nav style={{ background: NAV_BG, position: "sticky", top: 0, zIndex: 100 }}>
        {!isMobile ? (
          <div style={{ display: "flex", alignItems: "center", padding: "0 40px", overflowX: "auto" }}>
            {navCategories.map(c => (
              <a key={c.label} href={c.href} style={{
                color: "#fff", textDecoration: "none", padding: "14px 18px",
                fontSize: "14px", fontWeight: "700", letterSpacing: "0.3px",
                whiteSpace: "nowrap", display: "block", transition: "background 0.2s"
              }}
                onMouseEnter={e => e.target.style.background = BROWN}
                onMouseLeave={e => e.target.style.background = "transparent"}
              >{c.label}</a>
            ))}
          </div>
        ) : (
          menuOpen && (
            <div style={{ padding: "10px 0" }}>
              {navCategories.map(c => (
                <a key={c.label} href={c.href} onClick={() => setMenuOpen(false)} style={{
                  display: "block", color: "#fff", textDecoration: "none",
                  padding: "12px 20px", fontSize: "14px", fontWeight: "700",
                  borderBottom: "1px solid #222"
                }}>{c.label}</a>
              ))}
            </div>
          )
        )}
      </nav>

      {/* BANNER */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80"
          alt="Banner"
          style={{ width: "100%", height: isMobile ? "200px" : "480px", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
          display: "flex", alignItems: "center", padding: isMobile ? "20px" : "60px"
        }}>
          <div style={{ color: "#fff", maxWidth: isMobile ? "280px" : "500px" }}>
            <div style={{ fontSize: isMobile ? "11px" : "13px", letterSpacing: "0.2em", color: "#f0c070", marginBottom: "12px", textTransform: "uppercase" }}>Thái Bảo Lighting – TP. Hồ Chí Minh</div>
            <h1 style={{ fontSize: isMobile ? "24px" : "52px", fontWeight: "800", lineHeight: 1.1, margin: "0 0 14px" }}>
              Đèn Trang Trí<br /><span style={{ color: "#f0c070" }}>Giá Tốt Nhất</span>
            </h1>
            <p style={{ fontSize: isMobile ? "13px" : "16px", color: "#ddd", marginBottom: "20px" }}>
              Hơn 500 mẫu đèn cao cấp · Giao hàng toàn quốc · Bảo hành chính hãng
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#khuyen-mai" style={{
                background: BROWN, color: "#fff", textDecoration: "none",
                padding: isMobile ? "10px 20px" : "14px 32px",
                fontSize: isMobile ? "13px" : "15px", fontWeight: "700",
                borderRadius: "4px", display: "inline-block"
              }}>Xem khuyến mãi</a>
              <a href="tel:0935351095" style={{
                background: "transparent", border: "2px solid #fff", color: "#fff",
                textDecoration: "none", padding: isMobile ? "8px 16px" : "12px 24px",
                fontSize: isMobile ? "13px" : "15px", fontWeight: "700",
                borderRadius: "4px", display: "inline-block"
              }}>📞 Tư vấn miễn phí</a>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCT SECTIONS */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "20px 12px" : "40px 24px" }}>
        {SECTIONS.map(section => (
          <div key={section.id} id={section.id} style={{ marginBottom: isMobile ? "32px" : "50px" }}>
            {/* Section header */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", gap: "16px" }}>
              <h2 style={{
                fontSize: isMobile ? "18px" : "24px", fontWeight: "800",
                color: BROWN, margin: 0, whiteSpace: "nowrap"
              }}>{section.title}</h2>
              <div style={{ flex: 1, height: "2px", background: `linear-gradient(90deg, ${BROWN}, transparent)` }} />
              <a href={`#${section.id}`} style={{
                color: BROWN, textDecoration: "none", fontSize: "13px",
                fontWeight: "600", border: `1px solid ${BROWN}`,
                padding: "5px 14px", borderRadius: "3px", whiteSpace: "nowrap"
              }}>Xem thêm »</a>
            </div>

            {/* Product grid */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill, minmax(210px, 1fr))",
              gap: isMobile ? "10px" : "18px"
            }}>
              {section.products.map(p => (
                <ProductCard key={p.id} product={p} onAddCart={addCart} isMobile={isMobile} />
              ))}
            </div>
          </div>
        ))}

        {/* INSTALLATION GALLERY */}
        <div style={{ marginBottom: isMobile ? "32px" : "50px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", gap: "16px" }}>
            <h2 style={{ fontSize: isMobile ? "18px" : "24px", fontWeight: "800", color: BROWN, margin: 0 }}>
              📸 HÌNH ẢNH LẮP ĐẶT THỰC TẾ
            </h2>
            <div style={{ flex: 1, height: "2px", background: `linear-gradient(90deg, ${BROWN}, transparent)` }} />
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
            gap: isMobile ? "8px" : "14px"
          }}>
            {GALLERY.map((g, i) => (
              <div key={i} style={{ position: "relative", borderRadius: "6px", overflow: "hidden", cursor: "pointer" }}>
                <img src={g.img} alt={g.caption} style={{ width: "100%", height: isMobile ? "120px" : "200px", objectFit: "cover", display: "block", transition: "transform 0.3s" }}
                  onMouseEnter={e => e.target.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.target.style.transform = "scale(1)"}
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                  padding: "20px 10px 10px",
                  color: "#fff", fontSize: isMobile ? "11px" : "13px", fontWeight: "600"
                }}>{g.caption}</div>
              </div>
            ))}
          </div>
        </div>

        {/* BLOG */}
        <div style={{ marginBottom: isMobile ? "32px" : "50px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "20px", gap: "16px" }}>
            <h2 style={{ fontSize: isMobile ? "18px" : "24px", fontWeight: "800", color: BROWN, margin: 0 }}>
              📰 TIN TỨC & KIẾN THỨC
            </h2>
            <div style={{ flex: 1, height: "2px", background: `linear-gradient(90deg, ${BROWN}, transparent)` }} />
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
            gap: isMobile ? "10px" : "18px"
          }}>
            {BLOG.map((b, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "6px", overflow: "hidden", border: "1px solid #eee", cursor: "pointer" }}>
                <img src={b.img} alt={b.title} style={{ width: "100%", height: isMobile ? "100px" : "160px", objectFit: "cover" }} />
                <div style={{ padding: isMobile ? "10px" : "14px" }}>
                  <div style={{ fontSize: "11px", color: "#999", marginBottom: "6px" }}>{b.date}</div>
                  <div style={{ fontSize: isMobile ? "12px" : "14px", fontWeight: "600", color: "#222", lineHeight: "1.4" }}>{b.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div id="lien-he" style={{ background: "#1a1a1a", color: "#ccc", padding: isMobile ? "30px 16px" : "50px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
          gap: isMobile ? "28px" : "50px",
          maxWidth: "1280px", margin: "0 auto"
        }}>
          <div>
            <h3 style={{ color: "#f0c070", fontSize: "18px", marginBottom: "16px", fontWeight: "800" }}>THÁI BẢO LIGHTING</h3>
            <p style={{ lineHeight: "1.8", fontSize: "14px" }}>Chuyên cung cấp đèn trang trí cao cấp tại TP. Hồ Chí Minh. Giao hàng toàn quốc, bảo hành chính hãng.</p>
            <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
              <a href="https://www.facebook.com/thaibao.lighting" style={{ width: "38px", height: "38px", background: "#1877f2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", fontWeight: "700" }}>f</a>
              <a href="https://www.youtube.com" style={{ width: "38px", height: "38px", background: "red", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}>▶</a>
              <a href="https://www.tiktok.com" style={{ width: "38px", height: "38px", background: "#222", borderRadius: "50%", border: "1px solid #444", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none" }}>♪</a>
            </div>
          </div>
          <div>
            <h3 style={{ color: "#f0c070", fontSize: "18px", marginBottom: "16px", fontWeight: "800" }}>DANH MỤC SẢN PHẨM</h3>
            {["Đèn Thả", "Đèn Chùm", "Mâm – Ốp Trần", "Đèn Tường", "Quạt Trần Đèn", "Đèn Âm Trần", "Đèn Bàn", "Thiết bị điện"].map((item, i) => (
              <div key={i} style={{ padding: "7px 0", borderBottom: "1px solid #2a2a2a", fontSize: "14px" }}>› {item}</div>
            ))}
          </div>
          <div>
            <h3 style={{ color: "#f0c070", fontSize: "18px", marginBottom: "16px", fontWeight: "800" }}>THÔNG TIN LIÊN HỆ</h3>
            <div style={{ lineHeight: "2", fontSize: "14px" }}>
              <div>📞 <a href="tel:0935351095" style={{ color: PRIMARY, textDecoration: "none", fontWeight: "700" }}>0935 351 095</a></div>
              <div>📧 thaibao.lighting@gmail.com</div>
              <div>📍 TP. Hồ Chí Minh</div>
              <div>⏰ 8:00 – 20:00 (Thứ 2 – CN)</div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ color: "#f0c070", marginBottom: "10px" }}>HỖ TRỢ KHÁCH HÀNG</h4>
              {["Hướng dẫn mua hàng", "Chính sách bảo hành", "Chính sách vận chuyển", "Chính sách đổi trả"].map((item, i) => (
                <div key={i} style={{ padding: "5px 0", fontSize: "13px" }}>› {item}</div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "30px", paddingTop: "20px", borderTop: "1px solid #2a2a2a", fontSize: "13px", color: "#666" }}>
          © 2026 Thái Bảo Lighting. All rights reserved.
        </div>
      </div>

      {/* CART DRAWER */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200 }} />
          <div style={{
            position: "fixed", top: 0, right: 0, bottom: 0,
            width: isMobile ? "100vw" : "400px",
            background: "#fff", zIndex: 300,
            display: "flex", flexDirection: "column",
            boxShadow: "-4px 0 20px rgba(0,0,0,0.15)"
          }}>
            <div style={{ padding: "18px 20px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "800" }}>🛒 Giỏ hàng ({cartCount})</h3>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px 0", color: "#aaa" }}>
                  <div style={{ fontSize: "40px", marginBottom: "10px" }}>🛒</div>
                  <div>Giỏ hàng trống</div>
                </div>
              ) : cart.map(item => (
                <div key={item.id} style={{ display: "flex", gap: "12px", padding: "12px 0", borderBottom: "1px solid #eee" }}>
                  <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "4px" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "4px" }}>{item.name.substring(0, 40)}...</div>
                    <div style={{ color: PRIMARY, fontSize: "14px", fontWeight: "700" }}>{fmt(item.price)} × {item.qty}</div>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div style={{ padding: "16px 20px", borderTop: "1px solid #eee" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: "700", marginBottom: "14px" }}>
                  <span>Tổng cộng:</span>
                  <span style={{ color: PRIMARY }}>{fmt(cartTotal)}</span>
                </div>
                <a href="tel:0935351095" style={{
                  display: "block", background: BROWN, color: "#fff",
                  textAlign: "center", textDecoration: "none",
                  padding: "14px", fontWeight: "700", fontSize: "15px", borderRadius: "4px"
                }}>📞 Đặt hàng: 0935 351 095</a>
              </div>
            )}
          </div>
        </>
      )}

      {/* FLOATING BUTTONS */}
      <div style={{ position: "fixed", right: "16px", bottom: "80px", display: "flex", flexDirection: "column", gap: "12px", zIndex: 99 }}>
        <a href="tel:0935351095" style={{
          width: "52px", height: "52px", borderRadius: "50%",
          background: "#e53935", display: "flex", alignItems: "center",
          justifyContent: "center", color: "#fff", fontSize: "22px",
          textDecoration: "none", boxShadow: "0 4px 12px rgba(229,57,53,0.4)"
        }}>📞</a>
        <a href="https://zalo.me/0935351095" target="_blank" rel="noreferrer" style={{
          width: "52px", height: "52px", borderRadius: "50%",
          background: "#0068ff", display: "flex", alignItems: "center",
          justifyContent: "center", color: "#fff", fontSize: "13px",
          fontWeight: "800", textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,104,255,0.4)"
        }}>Zalo</a>
      </div>

      {/* TOAST */}
      {toast && (
        <div style={{
          position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)",
          background: "#222", color: "#fff", padding: "12px 20px",
          borderRadius: "6px", fontSize: "13px", zIndex: 999,
          maxWidth: "90vw", textAlign: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
        }}>{toast}</div>
      )}
    </div>
  );
}

export default App;
