
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselHomeTestimoni() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="Carouselhomeulasan">
      <div className="">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="carouselulasan">
              <div className=" text-white">
                <div className=" slide" key={d.id}>
                  <img src={d.img} alt="" className="img-carousel-testimoni mt-2 mx-auto d-block" ></img>

                  <div className="cont-content text-center d-none mt-0 fs-6 d-sm-block">
                  <p className=" mb-0">{d.pekerjaan}</p>
                    <p className="fw-bold fs-6 mb-0">{d.nama}</p>
                    <p className="text-gray-400  mt-2" style={{color:"#f3f3f396"}}>{d.tanggal}</p>
                    <p className="text-justify">{d.ulasan}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  
  {
    id:1,
    img:"../../../public/nyoman.png",
    nama: "Dharma",
    pekerjaan: "Mahasiswa",
    tanggal: "7 Oktober 2023",
    ulasan: "Saya baru saja kembali dari mendaki di Sindoro Via Banaran. Basecamp ini benar-benar luar biasa dengan penyediaan service yang unggul..",
  },
  {
    id:2,
    img:"../../../public/david.png",
    pekerjaan: "Pegawai Swasta",
    nama: `David`,
    tanggal: "15 Oktober 2023",
    ulasan: "Saat baru turun dari pendakian Sindoro via Banaran, rasanya gak bisa move on dari pengalaman seru tadi. Basecamp-nya bener-bener oke..",
  },
  {
    id:3,
    img:"../../../public/nurita.png",
    pekerjaan: "Pegawai Negeri Sipil",
    nama: "Nurita Hilda",
    tanggal: "15 Juli 2023",
    ulasan:"Barusan aja selesai mendaki Sindoro lewat jalur Banaran. Gak bisa nahan kagum sama basecamp-nya, pelayanan dari awal sampe akhir...",
  },
  {
    id:4,
    img:"../../../public/munesa.png",
    pekerjaan: "Mahasiswa",
    nama: "Sandrian Mahesa",
    tanggal: "10 September 2023",
    ulasan:"Saya baru saja kembali dari mendaki di Sindoro Via Banaran. Basecamp ini benar-benar luar biasa dengan penyediaan service yang unggul.." ,
  },
  {
    id:5,
    img:"../../../public/arumgusti.png",
    pekerjaan: "Mahasiswa",
    nama:"Arum Gusti",
    tanggal: "7 September 2023",
    ulasan:"Saya baru saja kembali dari mendaki di Sindoro Via Banaran. Basecamp ini benar-benar luar biasa dengan penyediaan service yang unggul..",
  },

];

export default CarouselHomeTestimoni ;
