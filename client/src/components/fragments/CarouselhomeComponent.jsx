
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselhomeComponent() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="CarouselhomeComponent">
      <div>
        <Slider {...settings}>
          {data.map((d) => (
            <div className="carouselhome">
              <div className=" text-white">
                <div className=" slide">
                  <img src={d.img} alt="" className="img-carousel"></img>

                  <div className="cont-content text-center d-none mt-3 fs-6 d-sm-block">
                    <p className="fw-bold fs-5 mb-0">{d.title}</p>
                    <p>{d.review}</p>
                    <button className="button-carousel">
                      <a className="no-underline" target="_blank" href="#">
                        Selanjutnya
                      </a>
                    </button>
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
    title: `Melihat keindahan Sunrise sindoro`,
    img: `/carouselhome.jpg`,
    review: `Savana Edelweiss. Di sini Anda bisa melihat indahnya hamparan bunga Edelweiss yang menakjubkan. `,
  },
  {
    title: `Melihat keindahan Pegunungan Dieng`,
    img: `/carouselhome.jpg`,
    review: `Savana Edelweiss. Di sini Anda bisa melihat indahnya hamparan bunga Edelweiss yang menakjubkan. `,
  },
  {
    title: `Melihat keindahan Sunrise sindoro`,
    img: `/carouselhome.jpg`,
    review: `Savana Edelweiss. Di sini Anda bisa melihat indahnya hamparan bunga Edelweiss yang menakjubkan. `,
  },
  {
    title: `Melihat keindahan Sunrise sindoro`,
    img: `/carouselhome.jpg`,
    review: `Savana Edelweiss. Di sini Anda bisa melihat indahnya hamparan bunga Edelweiss yang menakjubkan. `,
  },
];

export default CarouselhomeComponent ;
