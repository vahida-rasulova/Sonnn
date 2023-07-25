
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Blog_details.css'

function Blog_details() {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/cards/${id}`)
            .then((a) => a.json())
            .then((a) => setData(a));
    }, []);


    return (
        <>

            <section className="image__main">
                <div className="conteiner">
                    <div className="bigimage">
                    </div>
                </div>
            </section>
            <section className="text__main">
                <div className="container">
                    <div className="text_center_blog">
                    <h1>{data.header}</h1>
                    </div>

                    <div className="blog_detls">


                        
                        <div className="blog_own">
                            
                            <div className="blog__info">

                                <div className="blog_info_img">
                                    <img src={data.image} alt="" />
                                </div>

                            </div>
                        </div>
                        <div className="blog_two">
                           <div className="blog_center"><h2>
                                Latest News
                            </h2>
                            </div> 
                            <div className="news_blogs">
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                                <div className="news_blog">
                                    <div className="news_blog_h1">
                                        We Focus On Comfort
                                        And Gorgeous
                                    </div>
                                    <div className="news_blog_date">
                                        06/02/2020
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div> 
                     </div>
            </section>
            <section>
                <div className="container">
                    <div className="section_blog_2">
                    <p className="sec-blog-text">{data.descript1}</p>

<div className="info__card">

<img src="/images/Blog/Content.svg" alt="" />
    
</div>

<h2 className="qust1">{data.question1}</h2>
<p className="qust2">{data.answer1}</p>

<h2 className="qust1">{data.question2}</h2>
<p className="qust2">{data.answer2}</p>
                    </div>
       
                </div>
            </section>
            <section className="author__section">
                <div className="container">
                    <div className="author__sectionfoot">
                        <div className="author__image">
                            <img src={data.image_author} alt="" />
                        </div>
                        <div className="author__text">
                            <h1>{data.author}</h1>
                            <h6>Dizayner</h6>
                            <p>{data.designer_about}</p>

                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="articlepage__roll">
        <h1 className="container">Digər Məqalələr</h1>
        <Swiper 
                breakpoints={{
                    1200: {
                        // width: 1200,
                        slidesPerView: 4,
                        },
                    // when window width is >= 425px
                    425: {
                    // width: 425,
                    slidesPerView: 3,
                    },
                    // // when window width is >= 375px
                    375: {
                    // width: 375,
                    slidesPerView: 2,
                    },
                }}
                loop={true}
                // spaceBetween={30}
                //   slidesPerView={4}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper furniture__rool"
                >
                <SwiperSlide className='furniture__slide'>
                        <div className='furniture'>
                            <img
                                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
                                alt="" />
                            <a href="https://www.coders.edu.az" className="overlay">
                                <h1>{data.header}</h1>
                                <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                            </a>
                        </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>{data.header}</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>Metbex Mebeli</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>Metbex Mebeli</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>Metbex Mebeli</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>Metbex Mebeli</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>Metbex Mebeli</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>Metbex Mebeli</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>Metbex Mebeli</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='furniture__slide'>
                    <div className='furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60"
                            alt="" />
                        <a href="https://www.coders.edu.az" className="overlay">
                            <h1>Metbex Mebeli</h1>
                            <h5>Ətraflı<i className="fa-solid fa-angles-right" ></i></h5>
                        </a>
                    </div>
                </SwiperSlide>
        </Swiper>
    </section> */}

        </>
    )
}

export default Blog_details







