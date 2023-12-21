"use client";
import Card from "@/app/component/card";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fragment, useEffect } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import $ from "jquery";

export default function Cards ({ data, title, slider, category, blog, count }) {

    useEffect(() => {

        $(".cards-loader").hide();
    
    }, []);

    return (

        <Fragment>
            {
                slider ?
                <main>

                    <h1 className="title">{title}</h1>

                    <div className="card-slider relative">

                        <Swiper modules={[Navigation, Autoplay]} spaceBetween={10} slidesPerView={count || 4} 
                            autoplay={{delay: 5000}} speed={500} navigation={true} 
                            breakpoints={{ 0: {slidesPerView: 1.2}, 500: {slidesPerView: 2}, 748: {slidesPerView: 3}, 
                            1200: {slidesPerView: count || 4} }}>

                            {
                                data.map((item, index) => 
                                    <SwiperSlide key={index}>
                                        <Card data={item} category={category} blog={blog}/>
                                    </SwiperSlide>
                                )
                            }

                        </Swiper>

                        <div className="loader cards-loader"></div>

                    </div>

                </main> :
                <main>

                    <h1 className="title">{title}</h1>

                    <div className="list-cards">

                        { data.map((item, index) => <Card key={index} data={item} category={category} blog={blog}/>) }
                        
                    </div>

                </main>
            }
        </Fragment>

    )

}
