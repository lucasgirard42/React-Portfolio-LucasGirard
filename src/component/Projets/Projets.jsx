import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Projets.css";

import imgHybrideCouture from "../Projets/img/all-devices-black.png";
import imgFeedDesktop from "../Projets/img/feed-desktop.png";
import imgCosyPiscine from "../Projets/img/cosy-piscine.fr.png";
import imgOnlineShop from "../Projets/img/all-3divice-online-shop.png";
import imgMobileApp from "../Projets/img/mobile-meteo.png";









import Divider from "../Divider/Divider";

export default function Projets() {
  return (
    <div className="projets">
      <h2>Projets</h2>
      <Divider />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}

        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{delay: 2000}}  
        className="mySwiper"
      >
        <SwiperSlide >
          <a href="https://www.hybride-couture.fr/">
            <img className="imageProjets" src={imgHybrideCouture} alt="all devices views hybride couture " />
          </a>
          <h2 className="webSiteName"> hybride-couture.fr</h2>
          <p className="card-text">
            <strong>Wordpress et Divi</strong>
            <br /> Site vitrine pour un atelier de couture
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://customer-feeder-app.herokuapp.com/#/">
            <img className="imageProjets" src={imgFeedDesktop} alt="application web app feeder" />
          </a>
          <h2 className="webSiteName"> feeder app</h2>
          <p className="card-text">
            <strong>Symfony, Api Platform et React</strong>
            <br /> Projet pour la certification de concepteur développeur d'application pour une web-application
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://cosy-piscine.fr/">
            <img className="imageProjets" src={imgCosyPiscine} alt="image cosy-piscine.fr" />
          </a>
          <h2 className="webSiteName"> cosy-piscine.fr</h2>
          <p className="card-text">
            <strong>WordPress et The7</strong>
            <br /> site vitrine pour un piciniste, développer en Agence chez <a className="cosyPiscineText" href="https://www.consulting-web.com/"><strong>JL consulting-web</strong> </a>
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://online-shop.lucasgirard.com/">
            <img className="imageProjets" src={imgOnlineShop} alt="" />
          </a>
          <h2 class="webSiteName">online-shop.lucasgirard.com</h2>
          <p class="card-text">
            <strong>WordPress et Divi</strong>
            <br /> Projet site e-commerce pour de la vente informatique.
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <div className="imgAndButton">
            <img className="imageProjets" src={imgMobileApp} alt="" />
            <div className="buttonDownload">
              <a class="btn btn-xl" href="assets/apk/react-native-meteo-79cd6fc70c1346598b76747cef9c5cde-signed.apk" download="apk application meteo">download apk</a>
            </div>
          </div>
          <h2 class="webSiteName">Application météo</h2>
          <p class="card-text">
            <strong>React Native</strong>
            <br /> Application météo disponible en liens téléchargement APk
          </p>
        </SwiperSlide>

        <SwiperSlide className="rowtest">
          
          <div className="" >
            <a href="https://github.com/lucasgirard42/project-Identi-T"  target="_blank" style={{textDecoration: 'none', color:'white'}}>
            <h1>
              Identi-T
            </h1>
            <FontAwesomeIcon icon={faGithub} size={'4x'} />
            </a>
          </div>
          <div className="gitHubIcon">
            <a href="https://github.com/lucasgirard42/project-feedelety" target="_blank" style={{textDecoration: 'none', color:'white'}} >
            <h1>
              Feedelety
            </h1>
            <FontAwesomeIcon icon={faGithub} size={'4x'} />
            </a>
          </div>
          <div className="gitHubIcons projetLuxuryServices" >
            <a href="https://github.com/lucasgirard42/Luxury-Services" target="_blank" style={{textDecoration: 'none', color:'white'}}>
            <h1 >
              Luxury <br /> services
            </h1>
            <FontAwesomeIcon icon={faGithub} size={'4x'} />

            </a>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
