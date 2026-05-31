import React, { useState } from "react";

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
  const [selectedCatalogue, setSelectedCatalogue] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalCatalogue, setModalCatalogue] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const isMobile = window.innerWidth <= 768;

  const addCart = (p) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === p.id);
      if (ex) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...p, qty: 1 }];
    });
    setToast("Đã thêm vào giỏ hàng ✓");
    setTimeout(() => setToast(null), 2000);
  };
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const fmtPrice = (n) => n.toLocaleString("vi-VN") + "₫";

  const CATEGORIES = [
    {
      id: "am-tran", label: "ĐÈN ÂM TRẦN",
      products: [
        { id: 101, name: "Âm Trần Viền Vàng P110 – 9W", price: 55000, original: 79000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80", desc: "Đường kính Ø110mm, 9W LED, ánh sáng vàng ấm 3000K" },
        { id: 102, name: "Âm Trần Boss Viền Mạ Vàng Ø90 – 7W", price: 34000, original: 45000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80", desc: "Ø90mm, 7W, viền mạ vàng sang trọng, tuổi thọ 30.000h" },
        { id: 103, name: "Âm Trần 3 Chế Độ Màu AT3 Ø90 – 7W", price: 38000, original: 50000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc: "3 chế độ: trắng/trung tính/vàng, Ø90mm, 7W" },
        { id: 104, name: "Âm Trần SH AT18 P90-7W Viền Bạc", price: 49000, original: 63000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80", desc: "Ø90mm, 7W, viền bạc hiện đại, CRI>80" },
        { id: 105, name: "Âm Trần Vuông AT22 – 12W", price: 75000, original: 98000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", desc: "120×120mm vuông, 12W, ánh sáng đều, phù hợp văn phòng" },
        { id: 106, name: "Âm Trần Cao Cấp AT30 Ø120 – 18W", price: 120000, original: 155000, img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400&q=80", desc: "Ø120mm, 18W LED SMD, độ sáng cao, bảo hành 24 tháng" },
      ]
    },
    {
      id: "den-tuong", label: "ĐÈN TƯỜNG",
      products: [
        { id: 201, name: "Đèn Tường Châu Âu 821 – Đồng Mạ", price: 756000, original: 1080000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc: "Phong cách châu Âu cổ điển, khung đồng mạ vàng, chao thủy tinh" },
        { id: 202, name: "Đèn Tường Đồng TNT65", price: 1013000, original: 1254000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80", desc: "Khung đồng nguyên chất, chao vải cao cấp, E27 max 40W" },
        { id: 203, name: "Đèn Hắt Tường TNT9 – 6W LED", price: 104000, original: 198000, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80", desc: "6W LED tích hợp, ánh sáng hắt lên tường tạo hiệu ứng đẹp" },
        { id: 204, name: "Đèn Tường Art Deco Gold TNT74", price: 890000, original: 1100000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", desc: "Phong cách Art Deco, khung mạ vàng, chao thủy tinh thổi tay" },
        { id: 205, name: "Đèn Tường LED Decor CT0032", price: 355000, original: 495000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80", desc: "Thiết kế hiện đại, LED tích hợp 8W, tiết kiệm điện" },
        { id: 206, name: "Đèn Tường Pha Lê TPL14 – Cao Cấp", price: 737000, original: 920000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80", desc: "Chao pha lê trong suốt, khung mạ chrome, E14 max 25W" },
      ]
    },
    {
      id: "den-tha", label: "ĐÈN THẢ",
      products: [
        { id: 301, name: "Đèn Thả Nordic Tối Giản TH55", price: 578000, original: 715000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80", desc: "Phong cách Bắc Âu, khung kim loại, chụp đan mây tre tự nhiên" },
        { id: 302, name: "Đèn Thả Giếng Trời Thông Tầng", price: 4500000, original: 5800000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", desc: "Dây treo 2–5m điều chỉnh, phù hợp không gian thông tầng cao" },
        { id: 303, name: "Đèn Thả Decor Gold Sóng BY5106", price: 2625000, original: 3400000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80", desc: "L1200×H200mm, mạ vàng cao cấp, phù hợp bàn ăn dài" },
        { id: 304, name: "Đèn Thả Pha Lê Vuông THPL12", price: 2552000, original: 3160000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc: "5 pha lê Swarovski, Ø350mm, ánh sáng lung linh" },
        { id: 305, name: "Đèn Thả Decor Xoắn BY5103", price: 2247000, original: 3200000, img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400&q=80", desc: "Ø600mm×H2000mm, kiểu xoắn độc đáo, làm điểm nhấn không gian" },
        { id: 306, name: "Đèn Thả Hiện Đại TH70-2098", price: 1398000, original: 1800000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80", desc: "Ø400mm, chao kim loại sơn tĩnh điện, E27 LED max 40W" },
      ]
    },
    {
      id: "den-chum", label: "ĐÈN CHÙM",
      products: [
        { id: 401, name: "Đèn Chùm Pha Lê Crystal Versailles", price: 4850000, original: 6200000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80", desc: "Ø80×H60cm, 48 bóng LED, pha lê K9 cao cấp, phong cách Pháp" },
        { id: 402, name: "Đèn Chùm Thông Tầng Pha Lê Crystal", price: 12500000, original: 15000000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", desc: "Chiều dài 3–6m tùy chọn, 120W LED, lắp đặt theo yêu cầu" },
        { id: 403, name: "Đèn Chùm Hoa Lily 8 tay CHĐ23", price: 2099000, original: 3630000, img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&q=80", desc: "8 tay đèn hình hoa lily, mạ vàng, Ø65cm, E14 8×40W" },
        { id: 404, name: "Đèn Chùm Hoa Vân Môn CHĐ21-12", price: 1775000, original: 2300000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80", desc: "12 tay đèn, Ø80cm, mạ đồng, chao pha lê trong suốt" },
        { id: 405, name: "Đèn Chùm Pha Lê Elip 10112-800", price: 3780000, original: 5000000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc: "Hình elip Ø800mm, pha lê Swarovski, sang trọng tinh tế" },
        { id: 406, name: "Đèn Chùm Cổ Điển Galaxy 8105-10", price: 2250000, original: 3920000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80", desc: "10 bóng, Ø70cm, khung đồng mạ vàng, phong cách cổ điển" },
      ]
    },
    {
      id: "mam-op-tran", label: "MÂM – ỐP TRẦN",
      products: [
        { id: 501, name: "Đèn Mâm Hiện Đại MHĐ17 Vũ Mao 5 cánh", price: 803000, original: 995000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80", desc: "Ø60cm, 5 cánh, LED tích hợp 48W, 3 màu ánh sáng" },
        { id: 502, name: "Đèn Mâm Hoa Sen 16 cánh MHĐ11", price: 2363000, original: 2925000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80", desc: "Ø80cm, 16 cánh hoa sen, LED 72W, điều khiển từ xa" },
        { id: 503, name: "Đèn Ốp Trần Hiện Đại Decor MHĐ45", price: 2249000, original: 2785000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", desc: "Ø70cm, thiết kế tối giản cao cấp, LED 60W" },
        { id: 504, name: "Đèn Mâm Hiện Đại Vuông OT24", price: 992000, original: 1230000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc: "60×60cm vuông, LED 48W, viền mạ vàng tinh tế" },
        { id: 505, name: "Đèn Ốp Trần Tròn Vỏ Sò A12", price: 404000, original: 540000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80", desc: "Ø40cm, LED 24W, thiết kế vỏ sò độc đáo" },
        { id: 506, name: "Đèn Mâm MHĐ32 Hiện Đại", price: 1250000, original: 1600000, img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400&q=80", desc: "Ø65cm, LED 54W, 3 chế độ ánh sáng, điều khiển cảm ứng" },
      ]
    },
    {
      id: "den-ban", label: "ĐÈN BÀN",
      products: [
        { id: 601, name: "Đèn Bàn Pha Lê ĐB25 – Sang Trọng", price: 690000, original: 855000, img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80", desc: "Chao pha lê K9, đế đồng mạ vàng, E27 max 40W, H50cm" },
        { id: 602, name: "Đèn Bàn Vân Đá Trắng ĐB50", price: 1077000, original: 1334000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc: "Đế vân đá marble trắng cao cấp, chao vải linen, H65cm" },
        { id: 603, name: "Đèn Bàn Decor ĐB35 – Bắc Âu", price: 1342000, original: 1662000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80", desc: "Phong cách Scandinavian, đế gỗ walnut, chao vải, H55cm" },
        { id: 604, name: "Đèn Bàn Hiện Đại ĐB79 – Mạ Chrome", price: 452000, original: 600000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80", desc: "Đế kim loại mạ chrome, chao nhựa trắng, điều chỉnh chiều cao" },
      ]
    },
    {
      id: "quat-tran-den", label: "QUẠT TRẦN ĐÈN",
      products: [
        { id: 701, name: "Quạt Trần Đèn Aurora 5 cánh Gỗ", price: 3200000, original: 3800000, img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80", desc: "5 cánh gỗ walnut Ø132cm, đèn LED 36W 3 màu, 6 cấp tốc độ, điều khiển từ xa" },
        { id: 702, name: "Quạt Ốp Trần Chữ Nhật FS-995 LED", price: 3380000, original: 3880000, img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80", desc: "Dạng ốp trần chữ nhật, cánh ẩn, LED 36W, điều khiển từ xa" },
        { id: 703, name: "Quạt Ốp Trần Vuông FS-995 LED", price: 1980000, original: 2360000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80", desc: "Dạng vuông 50×50cm, cánh ẩn, LED 24W, 3 tốc độ" },
        { id: 704, name: "Quạt Trần 5 Cánh Cao Cấp Trang Trí", price: 5376000, original: 7314000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", desc: "5 cánh gỗ Ø150cm, đèn LED 48W CCT, motor DC tiết kiệm điện 95%" },
        { id: 705, name: "Quạt Trần Đèn QT65 – Thông Tầng", price: 1563000, original: 2980000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc: "Cần dài 60cm, phù hợp trần cao 3–5m, đèn LED 24W" },
        { id: 706, name: "Quạt Ốp Trần Tròn FS-995 LED", price: 1920000, original: 2250000, img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400&q=80", desc: "Ø60cm tròn, cánh ẩn DC inverter, LED 30W, yên tĩnh" },
      ]
    },
    {
      id: "den-trang-tri", label: "ĐÈN TRANG TRÍ",
      products: [
        { id: 801, name: "Đèn Sàn Reading Floor Lamp", price: 2100000, original: 2500000, img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80", desc: "H140–165cm điều chỉnh, chao vải linen, 18W LED, góc 360°" },
        { id: 802, name: "LED Dây RGB 5m Thông Minh", price: 450000, original: 580000, img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=400&q=80", desc: "16 triệu màu RGB, điều khiển app, tương thích Alexa & Google" },
        { id: 803, name: "Đèn Soi Tranh Gold ST24", price: 671000, original: 831000, img: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80", desc: "Khung mạ vàng, GU10 max 35W, góc chiếu 30°, phù hợp tranh/kệ" },
        { id: 804, name: "Đèn Ngủ Cảm Ứng Thông Minh", price: 320000, original: 420000, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80", desc: "Cảm ứng chạm, 3 mức sáng, USB sạc điện thoại, pin tích hợp" },
        { id: 805, name: "Đèn Decor Cầu LED Trang Trí", price: 285000, original: 380000, img: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?w=400&q=80", desc: "Dây 3m, 30 bóng LED warm, trang trí phòng ngủ/ban công" },
        { id: 806, name: "Đèn Trang Trí Nội Thất TNT2 Cao Cấp", price: 226000, original: 295000, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", desc: "Gắn tường/kệ, LED 3W warm white, vỏ nhôm, IP20" },
      ]
    },
  ];

  const productGroups = [
    {
      title: "✨ ĐÈN CHÙM",
      items: [
        { name: "Đèn Chùm Pha Lê Crystal", price: "4,850,000₫", image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Chùm Cổ Điển Luxury", price: "1,250,000₫", image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Chùm Thông Tầng", price: "12,500,000₫", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Chùm Hoa Lily 8 tay", price: "2,099,000₫", image: "https://images.unsplash.com/photo-1513506003901-1e6a35f09b15?q=80&w=800&auto=format&fit=crop" },
      ],
    },
    {
      title: "💡 ĐÈN THẢ",
      items: [
        { name: "Đèn Thả Nordic Tối Giản", price: "860,000₫", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Thả Giếng Trời", price: "4,500,000₫", image: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Thả Decor Gold", price: "2,625,000₫", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Thả Pha Lê Vuông", price: "2,552,000₫", image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop" },
      ],
    },
    {
      title: "🔆 ĐÈN ỐP TRẦN",
      items: [
        { name: "Đèn Mâm Hiện Đại MHĐ17", price: "803,000₫", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Ốp Trần Tròn OT19", price: "419,000₫", image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Ốp Trần Decor MHĐ45", price: "2,249,000₫", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" },
        { name: "Đèn Mâm Hoa Sen 16 cánh", price: "2,363,000₫", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop" },
      ],
    },
  ];

  const denTrangTri = [
    { name: "SLISTER A 2024", embedUrl: "https://drive.google.com/file/d/1XXHxGtK8tIIbNSZRucvxhdnyEboLJ8Bq/preview" },
    { name: "ANDORA LIGHT 2025", embedUrl: "https://drive.google.com/file/d/1e9CwAhTaAWgy-EWe9vnnR4y802OB4CYU/preview" },
    { name: "VERONIA LIGHTING 2026", embedUrl: "https://drive.google.com/file/d/15zo5zQPDJcH9RIFCtA9x4ATTsGM9lwk6/preview" },
    { name: "ĐÈN TRANG TRÍ 355", embedUrl: "https://drive.google.com/file/d/1ErboZhxxQZORl_D53oyYq5roroEG33SL/preview" },
    { name: "HUFA LIGHTING", embedUrl: "https://drive.google.com/file/d/1GExOEbMzQ5kL4CHBPSCuZL6KPOEZgTp6/preview" },
    { name: "QVIFA FAN 2026", embedUrl: "https://drive.google.com/file/d/1utRhIdN947migF7L_5O1Q6ljIKbutABK/preview" },
    { name: "79 LIGHTING 2025", link: "https://drive.google.com/file/d/1A69j4WtwFcipQb9AQ6oGc-10_WzcM3QQ/view?usp=sharing" },
    { name: "SANO LIGHTING", link: "https://drive.google.com/file/d/1Z2FFPv7fMTP_qE4R64qBaTOrOgjNqz0P/view?usp=sharing" },
    { name: "PTH LIGHTING HOME 2026", link: "https://drive.google.com/file/d/1RmSDNgPrO5p1C2C3YVkchFjCTddrSMkO/view?usp=sharing" },
    { name: "CTL-VIRGO 2024", link: "https://drive.google.com/file/d/1XngZt99pMG6_AfBPB3EIIMcSJ5Kdp6dE/view?usp=sharing" },
  ];

  const chieuSang = ["PANASONIC","GS LIGHTING","VINALED LIGHTING","ANFACO LIGHTING","HUFA LIGHTING","ACUMEN LIGHTING","MINH ĐỨC","KINGLED LIGHTING","MPE LIGHTING","KHAPHACO LIGHTING","PARAGON LIGHTING","ENA LIGHTING","TLC LIGHTING","DUHAL LIGHTING","PHILIPS","RẠNG ĐÔNG LIGHTING"];
  const linhKien = ["Ổ CẮM ĐIỆN","APTOMAT","DÂY ĐIỆN","CÔNG TẮC","PHÍCH CẮM","BÓNG LED","ĐUI ĐÈN","NGUỒN LED"];

  return (
    <div style={{ fontFamily: "Tahoma, Arial, sans-serif", background: "#f5f5f5" }}>
      {/* TOP */}
      <div style={{ background: "#111", color: "#fff", padding: isMobile ? "8px 15px" : "10px 40px", display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
        <div>THÁI BẢO-LIGHTING</div>
        <div>Hotline: 0935 351 095</div>
      </div>

      {/* HEADER */}
      <div style={{ background: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "10px 15px" : "18px 40px", gap: isMobile ? "10px" : "30px", flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src="https://i.ibb.co/YTVmQgFZ/logo-thaibao.png" alt="THÁI BẢO-LIGHTING" style={{ width: isMobile ? "55px" : "85px", height: isMobile ? "55px" : "85px", objectFit: "contain" }} />
          <div>
            <div style={{ fontSize: isMobile ? "17px" : "28px", fontWeight: "800", color: "#b67812", lineHeight: "1.2", letterSpacing: "0.5px" }}>THÁI BẢO-LIGHTING</div>
            <div style={{ color: "#555", fontSize: isMobile ? "12px" : "16px", marginTop: "4px" }}>Chuyên Cung Cấp Đèn Trang Trí</div>
          </div>
        </div>
        {!isMobile && (
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <input type="text" placeholder="Tìm kiếm sản phẩm..." style={{ width: "100%", maxWidth: "520px", padding: "15px 18px", border: "1px solid #ccc", borderRadius: "8px", fontSize: "16px", outline: "none" }} />
          </div>
        )}
        <div style={{ textAlign: "right", display: "flex", alignItems: "center", gap: "12px" }}>
          {!isMobile && <div>
            <div style={{ color: "#666", fontSize: "15px" }}>Hỗ trợ khách hàng</div>
            <div style={{ color: "red", fontSize: "24px", fontWeight: "800", marginTop: "4px", whiteSpace: "nowrap" }}>0935 351 095</div>
          </div>}
          <button onClick={() => setCartOpen(true)} style={{ position: "relative", background: "#7a3708", color: "#fff", border: "none", padding: isMobile ? "8px 12px" : "10px 16px", borderRadius: "6px", cursor: "pointer", fontSize: isMobile ? "13px" : "15px", fontWeight: "700" }}>
            🛒 Giỏ hàng
            {cartCount > 0 && <span style={{ position: "absolute", top: "-8px", right: "-8px", background: "#e53935", color: "#fff", borderRadius: "50%", width: "20px", height: "20px", fontSize: "11px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800" }}>{cartCount}</span>}
          </button>
        </div>
      </div>
      {isMobile && (
        <div style={{ padding: "8px 15px", background: "#fff", borderTop: "1px solid #eee" }}>
          <input type="text" placeholder="Tìm kiếm sản phẩm..." style={{ width: "100%", padding: "10px 14px", border: "1px solid #ccc", borderRadius: "6px", fontSize: "14px", outline: "none" }} />
        </div>
      )}

      {/* MENU */}
      <div style={{ background: "#111", color: "#fff", display: "flex", alignItems: "center", gap: isMobile ? "6px" : "4px", padding: isMobile ? "0 10px" : "0 20px", fontWeight: "700", fontSize: isMobile ? "12px" : "15px", overflowX: "auto", height: "50px", whiteSpace: "nowrap" }}>
        <button onClick={() => setCurrentCategory(null)} style={{ ...menuStyle, background: "none", border: "none", cursor: "pointer", padding: "0 10px", fontSize: "inherit", fontFamily: "inherit" }}>🏠</button>
        {CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => { setCurrentCategory(cat.id); window.scrollTo(0,0); }}
            style={{ ...menuStyle, background: currentCategory === cat.id ? "#7a3708" : "none", border: "none", cursor: "pointer", padding: "0 12px", fontSize: "inherit", fontFamily: "inherit", borderRadius: "0" }}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* TRANG DANH MỤC SẢN PHẨM */}
      {currentCategory && (() => {
        const cat = CATEGORIES.find(c => c.id === currentCategory);
        if (!cat) return null;
        const discount = (p) => Math.round((1 - p.price / p.original) * 100);
        return (
          <div style={{ padding: isMobile ? "16px" : "30px 40px", background: "#f5f5f5", minHeight: "60vh" }}>
            {/* Breadcrumb */}
            <div style={{ fontSize: "13px", color: "#888", marginBottom: "16px" }}>
              <span onClick={() => setCurrentCategory(null)} style={{ cursor: "pointer", color: "#7a3708", fontWeight: "600" }}>Trang chủ</span>
              {" › "}<span style={{ color: "#333" }}>{cat.label}</span>
            </div>
            {/* Tiêu đề */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <h2 style={{ fontSize: isMobile ? "20px" : "28px", fontWeight: "800", color: "#7a3708", margin: 0 }}>{cat.label}</h2>
              <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg,#7a3708,transparent)" }} />
              <span style={{ fontSize: "13px", color: "#888" }}>{cat.products.length} sản phẩm</span>
            </div>
            {/* Grid sản phẩm */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(auto-fill,minmax(220px,1fr))", gap: isMobile ? "10px" : "20px" }}>
              {cat.products.map(p => (
                <div key={p.id} style={{ background: "#fff", border: "1px solid #e8e8e8", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <div style={{ position: "relative" }}>
                    <img src={p.img} alt={p.name} style={{ width: "100%", height: isMobile ? "140px" : "200px", objectFit: "cover" }} />
                    <span style={{ position: "absolute", top: "8px", left: "8px", background: "#e53935", color: "#fff", fontSize: "11px", fontWeight: "700", padding: "3px 8px", borderRadius: "3px" }}>-{discount(p)}%</span>
                  </div>
                  <div style={{ padding: isMobile ? "10px" : "14px" }}>
                    <div style={{ fontSize: isMobile ? "13px" : "14px", fontWeight: "700", color: "#222", marginBottom: "6px", lineHeight: "1.4", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.name}</div>
                    <div style={{ fontSize: "11px", color: "#888", marginBottom: "8px", lineHeight: "1.4", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.desc}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
                      <span style={{ color: "#e53935", fontSize: isMobile ? "16px" : "18px", fontWeight: "800" }}>{fmtPrice(p.price)}</span>
                      <span style={{ color: "#bbb", fontSize: "12px", textDecoration: "line-through" }}>{fmtPrice(p.original)}</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <button onClick={() => addCart(p)} style={{ flex: 1, background: "#111", color: "#fff", border: "none", padding: isMobile ? "8px 4px" : "10px", borderRadius: "5px", fontSize: isMobile ? "11px" : "12px", fontWeight: "700", cursor: "pointer" }}>🛒 GIỎ HÀNG</button>
                      <a href="tel:0935351095" style={{ flex: 1, background: "#c58a11", color: "#fff", border: "none", padding: isMobile ? "8px 4px" : "10px", borderRadius: "5px", fontSize: isMobile ? "11px" : "12px", fontWeight: "700", cursor: "pointer", textDecoration: "none", display: "flex", alignItems: "center", justifyContent: "center" }}>MUA NGAY</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* TRANG CHỦ - chỉ hiện khi không có category */}
      {!currentCategory && <>

      {/* BANNER */}
      <div style={{ position: "relative" }}>
        <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop" alt="banner" style={{ width: "100%", height: isMobile ? "220px" : "650px", objectFit: "cover" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "rgba(0,0,0,0.45)", padding: isMobile ? "18px" : "50px", borderRadius: "12px", textAlign: "center", color: "#fff", width: isMobile ? "88%" : "70%" }}>
          <h2 style={{ fontSize: isMobile ? "20px" : "60px", margin: 0 }}>Kiến trúc không gian sống đẹp</h2>
          <p style={{ fontSize: isMobile ? "13px" : "28px", marginTop: isMobile ? "8px" : "20px" }}>Hơn 500 mẫu đèn hiện đại và cao cấp</p>
          <button style={{ marginTop: isMobile ? "10px" : "20px", background: "#c58a11", border: "none", color: "#fff", padding: isMobile ? "10px 22px" : "18px 45px", fontSize: isMobile ? "14px" : "20px", borderRadius: "8px", fontWeight: "700" }}>MUA NGAY</button>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "340px 1fr", gap: isMobile ? "0" : "30px", padding: isMobile ? "12px" : "40px" }}>
        {/* SIDEBAR */}
        <div style={{ background: "#fff", border: "1px solid #ddd" }}>
          {isMobile && (
            <button onClick={() => setSidebarOpen(o => !o)} style={{ width: "100%", background: "#7a3708", color: "#fff", padding: "13px 16px", fontSize: "15px", fontWeight: "800", border: "none", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
              <span>📂 DANH MỤC SẢN PHẨM</span><span>{sidebarOpen ? "▲" : "▼"}</span>
            </button>
          )}
          {(!isMobile || sidebarOpen) && <div style={{ background: "#7a3708", color: "#fff", padding: "36px 40px", fontSize: "40px", fontWeight: "800" }}>DANH MỤC SẢN PHẨM</div>}
          {(!isMobile || sidebarOpen) && <div style={{ padding: "36px 40px", fontWeight: "800", fontSize: "36px" }}>📘 CATALOGUE ĐÈN TRANG TRÍ</div>}
          {(!isMobile || sidebarOpen) && denTrangTri.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.embedUrl) {
                  if (isMobile) {
                    setModalCatalogue(item);
                  } else {
                    setSelectedCatalogue(item);
                    window.scrollTo({ top: 600, behavior: "smooth" });
                  }
                } else {
                  window.open(item.link, "_blank");
                }
              }}
              style={{
                display: "block",
                padding: "28px 60px",
                color: item.embedUrl ? "#1a56db" : "#444",
                borderBottom: "1px solid #eee",
                cursor: "pointer",
                fontWeight: "600",
                fontSize: "28px",
                background: selectedCatalogue && selectedCatalogue.name === item.name ? "#fff3e0" : "transparent",
                borderLeft: selectedCatalogue && selectedCatalogue.name === item.name ? "8px solid #c58a11" : "8px solid transparent",
              }}
            >
              {item.embedUrl ? "📖" : "🔗"} {item.name}
              {!item.embedUrl && <span style={{ fontSize: "22px", color: "#999", marginLeft: "12px" }}>(đang cập nhật)</span>}
            </div>
          ))}

          {(!isMobile || sidebarOpen) && <div style={{ padding: "36px 40px", fontWeight: "800", fontSize: "36px", marginTop: "10px" }}>💡 CATALOGUE CHIẾU SÁNG</div>}
          {(!isMobile || sidebarOpen) && chieuSang.map((item, index) => (
            <a key={index} href="#" style={{ display: "block", padding: "28px 60px", color: "#444", borderBottom: "1px solid #eee", textDecoration: "none", fontSize: "28px" }}>{item}</a>
          ))}

          {(!isMobile || sidebarOpen) && <div style={{ padding: "36px 40px", fontWeight: "800", fontSize: "36px", marginTop: "10px" }}>🔧 DỤNG CỤ & LINH KIỆN</div>}
          {(!isMobile || sidebarOpen) && linhKien.map((item, index) => (
            <a key={index} href="#" style={{ display: "block", padding: "28px 60px", color: "#444", borderBottom: "1px solid #eee", textDecoration: "none", fontSize: "28px" }}>{item}</a>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div>
          {selectedCatalogue ? (
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <h2 style={{ fontSize: "28px", margin: 0, color: "#7a3708" }}>📖 {selectedCatalogue.name}</h2>
                <button
                  onClick={() => setSelectedCatalogue(null)}
                  style={{ background: "#111", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", cursor: "pointer", fontWeight: "700", fontSize: "16px" }}
                >
                  ✕ Đóng catalogue
                </button>
              </div>
              <iframe
                src={selectedCatalogue.embedUrl}
                width="100%"
                height="850px"
                frameBorder="0"
                allowFullScreen
                style={{ borderRadius: "8px", border: "1px solid #ddd", display: "block" }}
                title={selectedCatalogue.name}
              />
            </div>
          ) : (
            <div>
              {productGroups.map((group, gi) => (
                <div key={gi} style={{ marginBottom: "24px" }}>
                  <div style={{ background: "#7a3708", color: "#fff", padding: "10px 16px", fontSize: "16px", fontWeight: "800", marginBottom: "12px", borderRadius: "4px" }}>
                    {group.title}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {group.items.map((sp, index) => (
                      <div key={index} style={{ background: "#fff", border: "1px solid #ddd", borderRadius: "6px", overflow: "hidden" }}>
                        <img src={sp.image} alt={sp.name} style={{ width: "100%", height: "130px", objectFit: "cover" }} />
                        <div style={{ padding: "10px" }}>
                          <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "6px", lineHeight: "1.3" }}>{sp.name}</div>
                          <div style={{ color: "#c00", fontWeight: "700", fontSize: "14px", marginBottom: "8px" }}>{sp.price}</div>
                          <div style={{ display: "flex", gap: "6px" }}>
                            <button style={{ flex: 1, background: "#111", color: "#fff", border: "none", padding: "7px 4px", borderRadius: "4px", fontWeight: "700", fontSize: "11px", cursor: "pointer" }}>🛒 GIỎ</button>
                            <button style={{ flex: 1, background: "#c58a11", color: "#fff", border: "none", padding: "7px 4px", borderRadius: "4px", fontWeight: "700", fontSize: "11px", cursor: "pointer" }}>MUA</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ĐÓNG TRANG CHỦ */}
      </>}

      {/* FOOTER */}
      <div style={{ background: "#000", color: "#fff", padding: isMobile ? "30px 15px" : "60px 40px", marginTop: "40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? "30px" : "60px" }}>
          <div>
            <h2 style={{ color: "yellow", marginBottom: "30px", fontSize: "32px" }}>HỖ TRỢ KHÁCH HÀNG</h2>
            {["Hướng dẫn mua hàng","Chính sách thanh toán","Chính sách bảo hành","Chính sách vận chuyển","Chính sách đổi trả"].map((item, i) => (
              <div key={i} style={{ padding: "15px 0", borderBottom: "1px solid #333", fontSize: "20px" }}>› {item}</div>
            ))}
          </div>
          <div>
            <h2 style={{ color: "yellow", marginBottom: "30px", fontSize: "32px" }}>CHUYÊN MỤC</h2>
            {["Tin tức","Khuyến mãi","Lắp đặt thực tế","Hướng dẫn sử dụng"].map((item, i) => (
              <div key={i} style={{ padding: "15px 0", borderBottom: "1px solid #333", fontSize: "20px" }}>› {item}</div>
            ))}
          </div>
          <div>
            <h2 style={{ color: "yellow", marginBottom: "30px", fontSize: "32px" }}>VIDEO</h2>
            <iframe width="100%" height="260" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="YouTube video" frameBorder="0" allowFullScreen style={{ borderRadius: "10px", border: "none" }}></iframe>
            <div style={{ marginTop: "20px", fontSize: "24px", fontWeight: "700" }}>THÁI BẢO-LIGHTING - Đèn Trang Trí Giá Tốt</div>
            <div style={{ display: "flex", gap: "18px", marginTop: "25px" }}>
              <a href="https://facebook.com" style={socialStyle("#1877f2")}>f</a>
              <a href="https://youtube.com" style={socialStyle("red")}>▶</a>
              <a href="https://tiktok.com" style={socialStyle("#111")}>♪</a>
            </div>
          </div>
        </div>
      </div>

      {/* GIỎ HÀNG DRAWER */}
      {cartOpen && (
        <>
          <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200 }} />
          <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: isMobile ? "100vw" : "380px", background: "#fff", zIndex: 300, display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#7a3708", color: "#fff" }}>
              <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "800" }}>🛒 Giỏ hàng ({cartCount})</h3>
              <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: "20px", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: "center", padding: "40px 0", color: "#aaa" }}><div style={{ fontSize: "40px" }}>🛒</div><div>Giỏ hàng trống</div></div>
              ) : cart.map(item => (
                <div key={item.id} style={{ display: "flex", gap: "12px", padding: "12px 0", borderBottom: "1px solid #eee" }}>
                  <img src={item.img} alt={item.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "4px" }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "13px", fontWeight: "600", marginBottom: "4px", lineHeight: "1.3" }}>{item.name}</div>
                    <div style={{ color: "#e53935", fontSize: "14px", fontWeight: "700" }}>{fmtPrice(item.price)} × {item.qty}</div>
                  </div>
                </div>
              ))}
            </div>
            {cart.length > 0 && (
              <div style={{ padding: "16px 20px", borderTop: "1px solid #eee" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: "800", marginBottom: "14px" }}>
                  <span>Tổng cộng:</span><span style={{ color: "#e53935" }}>{fmtPrice(cartTotal)}</span>
                </div>
                <a href="tel:0935351095" style={{ display: "block", background: "#7a3708", color: "#fff", textAlign: "center", textDecoration: "none", padding: "14px", fontWeight: "800", fontSize: "16px", borderRadius: "6px" }}>📞 Đặt hàng: 0935 351 095</a>
              </div>
            )}
          </div>
        </>
      )}

      {/* TOAST */}
      {toast && <div style={{ position: "fixed", bottom: "90px", left: "50%", transform: "translateX(-50%)", background: "#333", color: "#fff", padding: "12px 20px", borderRadius: "6px", fontSize: "14px", zIndex: 9998, whiteSpace: "nowrap" }}>{toast}</div>}

      {/* CATALOGUE MODAL - hiện full màn hình điện thoại */}
      {modalCatalogue && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 10000,
          background: "#fff", display: "flex", flexDirection: "column"
        }}>
          {/* Header modal */}
          <div style={{
            background: "#7a3708", color: "#fff",
            padding: "14px 16px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexShrink: 0
          }}>
            <div style={{ fontSize: "16px", fontWeight: "800", flex: 1, marginRight: "12px" }}>
              📖 {modalCatalogue.name}
            </div>
            <button
              onClick={() => setModalCatalogue(null)}
              style={{
                background: "rgba(255,255,255,0.2)", border: "none", color: "#fff",
                width: "36px", height: "36px", borderRadius: "50%",
                fontSize: "18px", cursor: "pointer", fontWeight: "700",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0
              }}
            >✕</button>
          </div>
          {/* Iframe full màn hình */}
          <iframe
            src={modalCatalogue.embedUrl}
            style={{ flex: 1, border: "none", width: "100%", display: "block" }}
            allowFullScreen
            title={modalCatalogue.name}
          />
        </div>
      )}

      {/* CALL + ZALO */}
      <div style={{ position: "fixed", right: "20px", bottom: "30px", display: "flex", flexDirection: "column", gap: "16px", zIndex: 9999 }}>
        <a href="tel:0935351095" style={{ width: "78px", height: "78px", borderRadius: "50%", background: "#ff1200", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontSize: "38px", textDecoration: "none" }}>📞</a>
        <a href="https://zalo.me/0935351095" target="_blank" rel="noreferrer" style={{ width: "78px", height: "78px", borderRadius: "50%", background: "#7CFC00", display: "flex", justifyContent: "center", alignItems: "center", color: "#0b63ff", fontSize: "24px", fontWeight: "800", textDecoration: "none" }}>Zalo</a>
      </div>
    </div>
  );
}

export default App;
