import { useState } from "react";

const VANG = "#c9982b";

const SAN_PHAM = [
{
id: 1,
ten: "Đèn Hắt Tường Trắng TNT9 – 6W",
gia: 104000,
giaGoc: 208000,
anh: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
},
{
id: 2,
ten: "Đèn Tường Decor TNT2",
gia: 226000,
giaGoc: 290000,
anh: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
},
{
id: 3,
ten: "Đèn Hắt Tường Đen TNT8 – 6W",
gia: 104000,
giaGoc: 208000,
anh: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200&auto=format&fit=crop",
},
{
id: 4,
ten: "Đèn Vách Trụ Tròn Đen",
gia: 200000,
giaGoc: 260000,
anh: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
},
{
id: 5,
ten: "Đèn Vách Xoay Đen",
gia: 200000,
giaGoc: 260000,
anh: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
},
{
id: 6,
ten: "Đèn Ngoại Thất Classic",
gia: 350000,
giaGoc: 455000,
anh: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
},
];

const fmt = (n) => n.toLocaleString("vi-VN") + " đ";

export default function App() {
const [search, setSearch] = useState("");

return ( <div className="bg-[#f5f5f5] min-h-screen">

```
  <div className="bg-black text-white text-sm">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
      <div className="flex gap-8">
        <div>🚚 Miễn phí vận chuyển đơn hàng từ 5.000.000đ</div>
        <div>🛡️ Bảo hành chính hãng 24 tháng</div>
      </div>

      <div className="hidden md:flex gap-6">
        <a href="#">Giới thiệu</a>
        <a href="#">Dự án</a>
        <a href="#">Tin tức</a>
        <a href="#">Liên hệ</a>
      </div>
    </div>
  </div>

  <div className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col lg:flex-row gap-6 items-center justify-between">

      <div className="flex items-center gap-4">
        <img
          src="https://i.imgur.com/eA6Qw8K.png"
          alt="logo"
          className="w-20"
        />

        <div>
          <h1 className="text-4xl font-black text-red-700">
            THÁI BẢO LIGHTING
          </h1>

          <p className="text-red-600 italic">
            Chuyên Cung Cấp Đèn Trang Trí
          </p>
        </div>
      </div>

      <div className="flex w-full max-w-2xl">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Tìm kiếm sản phẩm..."
          className="flex-1 border border-yellow-700 px-5 py-4 outline-none rounded-l-xl"
        />

        <button
          className="px-8 rounded-r-xl text-white font-bold"
          style={{ background: VANG }}
        >
          🔍
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-5xl text-red-600">
          📞
        </div>

        <div>
          <div className="text-gray-500">
            Hotline & Zalo
          </div>

          <div className="text-3xl font-black text-red-600">
            0935 351 095
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="bg-black text-white">
    <div className="max-w-7xl mx-auto flex gap-10 overflow-auto px-6 py-5 text-lg font-semibold">
      <div className="text-yellow-500">ĐÈN TƯỜNG</div>
      <div>ĐÈN THẢ</div>
      <div>ĐÈN CHÙM</div>
      <div>QUẠT TRẦN ĐÈN</div>
      <div>ĐÈN NGOẠI THẤT</div>
      <div>TIN TỨC</div>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 py-10">

    <h2 className="text-5xl font-black mb-10">
      ĐÈN TƯỜNG NGOẠI THẤT
    </h2>

    <div className="grid lg:grid-cols-4 gap-8">

      <div className="bg-white rounded-2xl overflow-hidden border">

        <div
          className="text-white px-5 py-4 text-2xl font-bold"
          style={{ background: VANG }}
        >
          SẢN PHẨM GIẢM GIÁ
        </div>

        <div className="divide-y">

          {SAN_PHAM.map((sp) => (
            <div
              key={sp.id}
              className="flex gap-4 p-4 hover:bg-gray-50 transition"
            >
              <img
                src={sp.anh}
                alt={sp.ten}
                className="w-20 h-20 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h4 className="text-sm font-medium line-clamp-2">
                  {sp.ten}
                </h4>

                <div className="mt-2">
                  <div className="line-through text-gray-400 text-sm">
                    {fmt(sp.giaGoc)}
                  </div>

                  <div className="text-red-600 font-bold text-xl">
                    {fmt(sp.gia)}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

      <div className="lg:col-span-3">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {SAN_PHAM.map((sp) => (

            <div
              key={sp.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition-all"
            >

              <div className="relative">

                <img
                  src={sp.anh}
                  alt={sp.ten}
                  className="w-full h-72 object-cover"
                />

                <div
                  className="absolute top-4 left-4 text-white text-sm font-bold w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: VANG }}
                >
                  -50%
                </div>

              </div>

              <div className="p-5">

                <h3 className="font-bold text-xl min-h-[60px]">
                  {sp.ten}
                </h3>

                <div className="mt-4">
                  <div className="line-through text-gray-400">
                    {fmt(sp.giaGoc)}
                  </div>

                  <div className="text-red-600 text-3xl font-black">
                    {fmt(sp.gia)}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">

                  <button
                    className="flex-1 py-3 rounded-xl text-white font-bold"
                    style={{ background: VANG }}
                  >
                    THÊM VÀO GIỎ
                  </button>

                  <a
                    href="https://zalo.me/0935351095"
                    className="border px-4 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition"
                  >
                    Zalo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

  <footer className="bg-black text-white pt-20 pb-10 px-6 mt-16">

    <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-14">

      <div>
        <h3 className="text-3xl font-black text-yellow-400 mb-8">
          HỖ TRỢ KHÁCH HÀNG
        </h3>

        <div className="space-y-5 text-gray-300">
          <div>Hướng dẫn mua hàng</div>
          <div>Chính sách thanh toán</div>
          <div>Chính sách bảo hành</div>
          <div>Chính sách vận chuyển</div>
          <div>Chính sách đổi trả</div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-black text-yellow-400 mb-8">
          DANH MỤC SẢN PHẨM
        </h3>

        <div className="space-y-5 text-gray-300">
          <div>Đèn tường</div>
          <div>Đèn thả</div>
          <div>Đèn chùm</div>
          <div>Đèn bàn</div>
          <div>Đèn ngoại thất</div>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-black text-yellow-400 mb-8">
          VIDEO
        </h3>

        <div className="rounded-2xl overflow-hidden">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed?listType=user_uploads&list=thaibao-lighting6754"
            title="Thai Bao Lighting"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <a
          href="https://www.youtube.com/@thaibao-lighting6754"
          target="_blank"
          className="inline-block mt-5 px-6 py-3 rounded-xl font-bold"
          style={{ background: VANG }}
        >
          XEM KÊNH YOUTUBE
        </a>
      </div>

      <div>

        <h3 className="text-3xl font-black text-yellow-400 mb-8">
          THÁI BẢO LIGHTING
        </h3>

        <div className="space-y-5 text-gray-300 leading-7">

          <p>
            Chuyên cung cấp giải pháp chiếu sáng hiện đại,
            đèn decor và thiết bị chiếu sáng cao cấp.
          </p>

          <p>
            Hotline:
            <span className="text-yellow-400 font-bold">
              {" "}0935 351 095
            </span>
          </p>

          <p>
            Facebook:
            <span className="text-yellow-400">
              {" "}Thái Bảo Lighting
            </span>
          </p>

        </div>

      </div>

    </div>

    <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500">
      © 2026 THÁI BẢO LIGHTING. All rights reserved.
    </div>

  </footer>

</div>
```

);
}
