import React, { useState } from 'react';
import Slider from '../../components/Slider/slider';
import "./home.css"
import Product_PK from '../../components/Product_PK/Product_PK'
import Banner from '../../components/Banner/Banner';
import ImageBanner1 from '../../assets/img/xxxbanner1.webp'
import ImageBanner2 from '../../assets/img/xxxbanner2.webp'
import ImageBanner3 from '../../assets/img/xxxbanner3.webp'
import ImageBanner4 from '../../assets/img/xxxbanner4.webp'
import ImageBanner5 from '../../assets/img/banner2.webp'
import ImageBanner6 from '../../assets/img/banner3.webp'
import ImageBanner7 from '../../assets/img/banner4.webp'
import ImageBanner8 from '../../assets/img/banner5.webp'
import ImageBanner9 from '../../assets/img/banner6.webp'
import ImageBanner10 from '../../assets/img/banner7.webp'
import ImageBanner11 from '../../assets/img/banner8.webp'
import ImageBanner12 from '../../assets/img/banner9.webp'
import SlideProduct from '../../components/Slider/slideproduct';



const Home = () => {

    return (
        <div className="main">
            <div className="slide-home">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0">
                            <Slider></Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Banner listBanner={[ImageBanner1, ImageBanner2, ImageBanner3, ImageBanner4]}></Banner>
            <div className="product-deal-hot">
                <div class="container">

                    <div class="product-deal-hot-wrap">
                        <div class="product-hot-intro">
                            <h3 class="product-deal-hot-title">
                                Laptop Khuyến Mãi Trong Tháng
                    </h3>
                            <a href="../Trangsanpham/khuyenmai.html" class="product-hot-btn">
                                Xem tất cả <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                        <div class="row mx-4">
                            <div className="col-12">
                                <SlideProduct></SlideProduct>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner listBanner={[ImageBanner5]} />
            <div className="product-deal-hot">
                <div class="container">

                    <div class="product-deal-hot-wrap">
                        <div class="product-hot-intro">
                            <h3 class="product-deal-hot-title">
                                Laptop Khuyến Mãi Trong Tháng
                    </h3>
                            <a href="../Trangsanpham/khuyenmai.html" class="product-hot-btn">
                                Xem tất cả <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                        <div class="row mx-4">
                            <div className="col-12">
                                <SlideProduct></SlideProduct>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Banner listBanner={[ImageBanner6, ImageBanner7, ImageBanner8]} />
            <div className="product-deal-hot">
                <div class="container">

                    <div class="product-deal-hot-wrap">
                        <div class="product-hot-intro">
                            <h3 class="product-deal-hot-title">
                                Laptop Khuyến Mãi Trong Tháng
                    </h3>
                            <a href="../Trangsanpham/khuyenmai.html" class="product-hot-btn">
                                Xem tất cả <i class="fas fa-chevron-right"></i>
                            </a>
                        </div>
                        <div class="row mx-4">
                            <div className="col-12">
                                <SlideProduct></SlideProduct>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-brand">
                <div class="container">
                    <div class="product-brand-wrap">
                        <h3 class="product-brand-title">
                            Thương hiệu nổi bật
                       </h3>
                        <div class="row px-4 mt-2">
                            <div class="col-lg-3 p-0">
                                <div class="product-brand-item">
                                    <div class="brand-img-wrap">
                                        <img src={ImageBanner9} alt="" class="product-brand-img" />
                                    </div>
                                    <div class="product-band-desc">
                                        <p class="product-brand-name">
                                            MSI
                                </p>
                                        <p class="product-brand-content">
                                            Made for Gamers and Creator
                                </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 p-0">
                                <div class="product-brand-item">
                                    <div class="brand-img-wrap">
                                        <img src={ImageBanner10} alt="" class="product-brand-img" />
                                    </div>
                                    <div class="product-band-desc">
                                        <p class="product-brand-name">
                                            HP
                                </p>
                                        <p class="product-brand-content">
                                            Lễ hội máy tính HP - Ưu đãi cực phê
                                 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 p-0">
                                <div class="product-brand-item">
                                    <div class="brand-img-wrap">
                                        <img src={ImageBanner11} alt="" class="product-brand-img" />
                                    </div>                            <div class="product-band-desc">
                                        <p class="product-brand-name">
                                            LG
                                </p>
                                        <p class="product-brand-content">
                                            Tháng LG quà mê ly
                                </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 p-0">
                                <div class="product-brand-item">
                                    <div class="brand-img-wrap">
                                        <img src={ImageBanner12} alt="" class="product-brand-img" />
                                    </div>                            <div class="product-band-desc">
                                        <p class="product-brand-name">
                                            Lenovo
                                     </p>
                                        <p class="product-brand-content">
                                            Laptop chơi game thực thụ
                                </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Product_PK/>
        </div>
    );
};



export default Home;
