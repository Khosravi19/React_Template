import './Testimonial.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';

import 'swiper/css';

function Testimonial() {
    return(
        <>
            <div className="testimonial-heading">
                <h2>Testimonial</h2>
            </div>

            <div className="footer-slider">

                <Swiper

                    loop={true}
                    grabCursor={true}
                    slidesPerView={1}
                    autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    }}

                    modules={[Autoplay]}
                    className="footer-swiper"
                >
                    <SwiperSlide>
                        <h4>Virginia</h4>
                        <p>Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and</p>
                    </SwiperSlide>

                    <SwiperSlide>
                        <h4>Virginia</h4>
                        <p>Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and</p>
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </>
    )
}

export default Testimonial;