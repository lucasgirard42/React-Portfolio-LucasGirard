import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Divider from '../Divider/Divider';
import './Services.css';
import { EffectCoverflow, Pagination } from "swiper";


function Services() {
    return (
        <>
            <div className='services'>
                <h2>MES SERVICES</h2>
                <Divider />
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="swiperService"
                >
                    <SwiperSlide>
                        <div className="TitleForfaitAndOptions">
                            <div>
                                <h5 className='priceTitle'>Standard</h5>
                                <h1 className='priceForfait' >690 €</h1>
                            </div>
                            <div>
                                <ul className='options'>
                                    <li className='option'>4 pages</li>
                                    <li className='option' >Design sur mesure</li>
                                    <li className='option'>Responsive (Mobile/Tablette/PC)</li>
                                    <li className='option'>Optimisation Google</li>
                                    <li className='option'>Nom de domaine /an</li>
                                    <li className='option'>Hébergement /an</li>
                                    <li className='option'>Maintenance (jusqu'a 2h/mois)</li>
                                    <li className='option' style={{ borderBottom: '1px solid  rgba(0,0,0,.125)' }}>Statistiques détaillées</li>
                                    {/*<li className='option'>Certificat https</li>*/}
                                </ul>
                            </div>
                            <div className='certificat'>
                                <p className='certificatText'>Certificat https</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="TitleForfaitAndOptions">
                            <h5 className='priceTitle'>VITRINE</h5>
                            <h1 className='priceForfait' >990 €</h1>
                            <ul className='options'>
                                <li className='option'>10 pages</li>
                                <li className='option' >Design sur mesure</li>
                                <li className='option'>Responsive (Mobile/Tablette/PC)</li>
                                <li className='option'>Optimisation Google</li>
                                <li className='option'>Nom de domaine /an</li>
                                <li className='option'>Hébergement /an</li>
                                <li className='option'>Maintenance (jusqu'a 2h/mois)</li>
                                <li className='option'>Statistiques détaillées</li>
                                <li className='option'>Certificat https</li>
                                <li className='option'>Outils d'édition avec accompagnements</li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="TitleForfaitAndOptions">
                            <h5 className='priceTitle'>E-commerce</h5>
                            <h1 className='priceForfait' >1590  €</h1>
                            <ul className='options'>
                                <li className='option'>Pages illimitées</li>
                                <li className='option' >Design sur mesure</li>
                                <li className='option'>Responsive (Mobile/Tablette/PC)</li>
                                <li className='option'>Optimisation Google</li>
                                <li className='option'>Nom de domaine /an</li>
                                <li className='option'>Hébergement /an</li>
                                <li className='option'>Maintenance (jusqu'a 2h/mois)</li>
                                <li className='option'>Statistiques détaillées</li>
                                <li className='option'>Certificat https</li>
                                <li className='option'>Outils d'édition avec accompagnements</li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="TitleForfaitAndOptions surMesureSwiper ">
                            <h5 className='priceTitle'>SUR MESURE</h5>
                            <h2 className='priceForfaitMesure' >Un devis en accord parfait avec votre projet.</h2>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className='price'>
                    <div className="price1 TitleForfaitAndOptions">
                        <div>
                            <h5 className='priceTitle'>Standard</h5>
                            <h1 className='priceForfait' >690 €</h1>
                        </div>
                        <div>
                            <ul className='options'>
                                <li className='option'>4 pages</li>
                                <li className='option' >Design sur mesure</li>
                                <li className='option'>Responsive (Mobile/Tablette/PC)</li>
                                <li className='option'>Optimisation Google</li>
                                <li className='option'>Nom de domaine /an</li>
                                <li className='option'>Hébergement /an</li>
                                <li className='option'>Maintenance (jusqu'a 2h/mois)</li>
                                <li className='option' style={{ borderBottom: '1px solid  rgba(0,0,0,.125)' }}>Statistiques détaillées</li>
                                {/*<li className='option'>Certificat https</li>*/}
                            </ul>
                        </div>
                        <div className='certificat'>
                            <p className='certificatText'>Certificat https</p>
                        </div>
                    </div>
                    <div className="price2">
                        <div className="TitleForfaitAndOptions">
                            <h5 className='priceTitle'>VITRINE</h5>
                            <h1 className='priceForfait' >990 €</h1>
                            <ul className='options'>
                                <li className='option'>10 pages</li>
                                <li className='option' >Design sur mesure</li>
                                <li className='option'>Responsive (Mobile/Tablette/PC)</li>
                                <li className='option'>Optimisation Google</li>
                                <li className='option'>Nom de domaine /an</li>
                                <li className='option'>Hébergement /an</li>
                                <li className='option'>Maintenance (jusqu'a 2h/mois)</li>
                                <li className='option'>Statistiques détaillées</li>
                                <li className='option'>Certificat https</li>
                                <li className='option'>Outils d'édition avec accompagnements</li>
                            </ul>
                        </div>
                    </div>
                    <div className="price3">
                        <div className="TitleForfaitAndOptions">
                            <h5 className='priceTitle'>E-commerce</h5>
                            <h1 className='priceForfait' >1590  €</h1>
                            <ul className='options'>
                                <li className='option'>Pages illimitées</li>
                                <li className='option' >Design sur mesure</li>
                                <li className='option'>Responsive (Mobile/Tablette/PC)</li>
                                <li className='option'>Optimisation Google</li>
                                <li className='option'>Nom de domaine /an</li>
                                <li className='option'>Hébergement /an</li>
                                <li className='option'>Maintenance (jusqu'a 2h/mois)</li>
                                <li className='option'>Statistiques détaillées</li>
                                <li className='option'>Certificat https</li>
                                <li className='option'>Outils d'édition avec accompagnements</li>
                            </ul>
                        </div>
                    </div>
                    <div className="price4">
                        <div className="TitleForfaitAndOptions">
                            <h5 className='priceTitle'>SUR MESURE</h5>
                            <h2 className='priceForfaitMesure' >Un devis en accord parfait avec votre projet.</h2>

                            {/**<h5 >Un devis en accord parfait avec votre projet.</h5>*/}



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Services; 