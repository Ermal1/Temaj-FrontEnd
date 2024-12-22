import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const Brands = ({ brandsdata }) => {
  const { t } = useTranslation();
  const isSmallDev = useMediaQuery("(max-width: 768px)");
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current !== null) {
      swiperRef.current.swiper.update();
    }
  }, [swiperRef]);

  useEffect(() => {
    if (brandsdata.data) {
      setBrands(brandsdata.data);
    }
  }, [brandsdata.data]);

  const slidesPerView = 5;
  const totalSlides = 5;

  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-title">
          <h1>{`${t("buyBrand")}`}</h1>
          <div className="nav">
            <button
              className="transparent-btn"
              onClick={() => navigate("/products")}
              style={{
                display: isSmallDev ? "none" : "",
              }}
            >
              {`${t("seeMore")}`}
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 7,
            },
            700: {
              slidesPerView, //5 when its live
              spaceBetween: "20px",
            },
          }}
          freeMode={true}
          modules={[FreeMode]}
          style={{
            maxWidth: "100%",
          }}
        >
          {brands.map((el, index) => (
            <SwiperSlide
              id="swipeslides"
              key={el.id || index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  height: "150px",
                  width: "150px",
                  backgroundColor: "#fff",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: 'pointer'
                }}
                onClick={() => navigate(`/products?brand=${el.brand_name}`)}
              >
                <img
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    height: "80%",
                    width: "80%",
                    borderRadius: "50px",
                  }}
                  src={el.brand_logo}
                  alt="logo"
                />
              </div>
            </SwiperSlide>
          ))}
          {Array.from({
            length: totalSlides - brands,
          }).map((_, index) => (
            <SwiperSlide id="swipeslides" key={`placeholder-${index}`}>
              <div className="placeholder"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;