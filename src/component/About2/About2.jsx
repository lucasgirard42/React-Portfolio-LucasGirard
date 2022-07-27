import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About2.css';
import { faCheck, faCode, faHammer, faImage, faServer } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Navigation, Grid, Pagination } from "swiper";

import Test from '../Test/Test'


function About2() {
    return (
        
        <>
{/*----------------------------------------------------------- mobile & tablets ---------------------------------------------------*/}
            <Swiper
                /* navigation={true} 
                 modules={[Navigation]} 
                 spaceBetween={30}
                 breakpoints={{
                     768: {
                         width: 768,
                         slidesPerView: 2,
                       },
                   
                 }}*/
                slidesPerView={1}
                grid={{
                    rows: 2,
                }}
                spaceBetween={0}

                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className="SwiperAbout2">
                <SwiperSlide className='SwiperSlideAbout2'>
                    <FontAwesomeIcon icon={faImage} size={'4x'} />
                    <h5>LA CRÉATION GRAPHIQUE<span style={{ color: " #F8D948" }}> DU SITE WEB</span></h5>
                    <p >Nous analysons et définissons ensemble vos besoins webmarketing pour mettre en place une stratégie de communication digitale. </p>
                </SwiperSlide>

                <SwiperSlide className='SwiperSlideAbout2'>
                    <FontAwesomeIcon icon={faCode} size={'4x'} />
                    <h5>DÉVELOPPEMENT<span style={{ color: "#F8D948" }}> WEB</span></h5>
                    <p >J'utilise les dernières technologies et ergonomies web: HTML5, CSS3, JavaScript et PHP. </p>
                </SwiperSlide>

                <SwiperSlide className='SwiperSlideAbout2'>
                    <FontAwesomeIcon icon={faGoogle} size={'4x'} />
                    <h5 >LE RÉFÉRENCEMENT<span style={{ color: " #F8D948" }}> NATUREL (SEO)</span></h5>
                    <p >Tous mes sites sont en première page de GOOGLE.</p>
                </SwiperSlide>

                <SwiperSlide className='SwiperSlideAbout2'>
                    <FontAwesomeIcon icon={faServer} size={'4x'} />
                    <h5 className="card1-titre">L'HÉBERGEMENT<span style={{ color: "#F8D948" }}> SUR SERVEUR DÉDIÉ</span></h5>
                    <p className="card1-text">Nous analysons et définissons ensemble vos besoins webmarketing pour mettre en place une stratégie de communication digitale. </p>
                </SwiperSlide>

                <SwiperSlide className='SwiperSlideAbout2'>
                    <FontAwesomeIcon icon={faServer} size={'4x'} />
                    <h5 >L'HÉBERGEMENT<span style={{ color: "#F8D948" }}> SUR SERVEUR DÉDIÉ</span></h5>
                    <p>Nous analysons et définissons ensemble vos besoins webmarketing pour mettre en place une stratégie de communication digitale. </p>
                </SwiperSlide>

                <SwiperSlide className='SwiperSlideAbout2'>
                    <FontAwesomeIcon icon={faCheck} size={'3x'} />
                    <h5 >LA SATISFACTION<span style={{ color: "#F8D948" }}> DU CLIENT</span></h5>
                    <p >Un client content, c'est un client heureux qui a eu raison de me faire confiance </p>
                </SwiperSlide>
            </Swiper>


{/*------------------------------------- Desktop    ---------------------------------------------------*/}



            <div className='parent'>
                <div className="div1 iconAndText">
                    <div className="icon-graphique">
                        <FontAwesomeIcon icon={faImage} size={'4x'} />
                    </div>
                    <div className='card'>
                        <h5 className="card1-titre">LA CRÉATION GRAPHIQUE<span style={{ color: " #F8D948" }}> DU SITE WEB</span></h5>
                        <p className="card1-text">Nous analysons et définissons ensemble vos besoins webmarketing pour mettre en place une stratégie de communication digitale. </p>
                    </div>
                </div>
                <div className="div2 iconAndText">
                    <div className="icon-graphique">
                        <FontAwesomeIcon icon={faCode} size={'4x'} />
                    </div>
                    <div className='card'>
                        <h5 className="card1-titre">DÉVELOPPEMENT<span style={{ color: "#F8D948" }}> WEB</span></h5>
                        <p className="card1-text">J'utilise les dernières technologies et ergonomies web: HTML5, CSS3, JavaScript et PHP. </p>
                    </div>
                </div>
                <div className="div3 iconAndText">
                    <div className="icon-graphique">
                        <FontAwesomeIcon icon={faGoogle} size={'4x'} />
                    </div>
                    <div className='card'>
                        <h5 className="card1-titre">LE RÉFÉRENCEMENT<span style={{ color: " #F8D948" }}> NATUREL (SEO)</span></h5>
                        <p className="card1-text">Tous mes sites sont en première page de GOOGLE.</p>
                    </div>
                </div>
                <div className="div4 iconAndText">
                    <div className="icon-graphique">
                        <FontAwesomeIcon icon={faServer} size={'4x'} />
                    </div>
                    <div className='card'>
                        <h5 className="card1-titre">L'HÉBERGEMENT<span style={{ color: "#F8D948" }}> SUR SERVEUR DÉDIÉ</span></h5>
                        <p className="card1-text">Nous analysons et définissons ensemble vos besoins webmarketing pour mettre en place une stratégie de communication digitale. </p>
                    </div>
                </div>
                <div className="div5 iconAndText">
                    <div className="icon-graphique">
                        <FontAwesomeIcon icon={faHammer} size={'4x'} />
                    </div>
                    <div className='card'>
                        <h5 className="card1-titre">UNE<span style={{ color: "#F8D948" }}> MAINTENANCE</span></h5>
                        <p className="card1-text">2 heures de maintenances qui vous permettent surtout pour les sites non administrable de mettre à jour. </p>
                    </div>
                </div>
                <div className="div6 iconAndText">
                    <div className="icon-graphique">
                        <FontAwesomeIcon icon={faCheck} size={'4x'} />
                    </div>
                    <div className='card'>
                        <h5 className="card1-titre">LA SATISFACTION<span style={{ color: "#F8D948" }}> DU CLIENT</span></h5>
                        <p className="card1-text">Un client content, c'est un client heureux qui a eu raison de me faire confiance </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About2; 