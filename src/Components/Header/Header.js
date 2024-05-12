import './Header.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function Header(){
    return(
        <header>
            <div className='navbar-container'>
                <span className='logo'>DelFood</span>
                    <ul className='nav-items'>
                        <li><i class="bi bi-person-fill"></i> Login</li>
                        <li><i class="bi bi-search"></i></li>
                        <li><img src='../images/menu.png' /></li>
                    </ul>
            </div>
            <section>
                <h1>Discover Restaurant And Food</h1>
                <p>when you look layout,immerse yourself in it and choose with love</p>
                <div className='form'>
                    <input placeholder='Restaurant Name' type="text" />
                    <input placeholder='All Locations' type="text" />
                    <input type="text" value={'SEARCH'}/>

                </div>


                <div className="header-slider">

                    <Swiper

                        loop={true}
                        grabCursor={true}
                        slidesPerView={5}
                        spaceBetween={242}
                        centeredSlides={true}
                        navigation={true}
                        autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        }}

                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src="../images/slider-img1.png" /></SwiperSlide>
                        <SwiperSlide><img src="../images/slider-img2.png" /></SwiperSlide>
                        <SwiperSlide><img src="../images/slider-img3.png" /></SwiperSlide>
                        <SwiperSlide><img src="../images/slider-img4.png" /></SwiperSlide>
                        <SwiperSlide><img src="../images/slider-img1.png" /></SwiperSlide>
                        <SwiperSlide><img src="../images/slider-img2.png" /></SwiperSlide>
                        <SwiperSlide><img src="../images/slider-img3.png" /></SwiperSlide>
                        <SwiperSlide><img src="../images/slider-img4.png" /></SwiperSlide>
                    
                        
                    </Swiper>
                </div>

            </section>
            
        </header>
    )
}

export default Header;