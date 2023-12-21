import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const artikel = [

  {
    id: 1,
    title: "3 Mitos Terkenal Di Gunung Sindoro Konon Katanya Tempat Bersemayam Makhluk Gaib",
    // desc: "Gunung Sindoro yang juga dikenal dengan sebutan Gunung ...",
    images: "/src/assets/images/gambarArtikel/artikel.jpeg",
    url:"/artikel1",
  },

  {
    id: 2,
    title: "Mengenal Gunung Sindoro, Daya Tarik dan Lokasinya",
    // desc: "Gunung Sindoro, dengan daya tarik dan lokasinya yang...",
    images: "/src/assets/images/gambarArtikel/artikel2.jpeg",
    url:"/artikel2",
  },
  
  {
    id: 3,
    title: "Gunung Sindoro, Sembunyikan Keindahan Dalam Jalur Yang Menantang",
    // desc: "Gunung Sindoro, dengan kemegahan puncaknya yang mencapai...",
    images: "/src/assets/images/gambarArtikel/artikel1.jpeg",
    url:"artikel3",
  },
  
];

const CardartikelComponent = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={29}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper mt-6"
    >
      <div>
        {artikel.map((art) => (
          <SwiperSlide className="mt-5 mb-5 ">
            <div className="card-swipe  " key={art.id}>
              <Link to={art.url}>
              <img src={art.images} alt="Gambar Card" />
              </Link>
              <div className="card-body justify-content-center">
                <h2 className="text-white fs-6 fw-bold">{art.title}</h2>
                <p className="fs-7">{art.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default CardartikelComponent;
