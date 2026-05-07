import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


import { A11y, Autoplay, Navigation, Pagination, Grid, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css'
import "swiper/css/grid";
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { carouselDetails, luzentiSosmed, luzentiTesti, luzentiTestiEn } from '../../data/dataTwo';
import playVector from "../../assets/images/homepage/play-vector.svg";
import {useLanguage} from "../../LanguageContext";
import ModalVideo from "react-modal-video";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import IntroVideo from '../../assets/testiBgm.mp4';
import CustomDot from './CustomDot';



export default function TestimoniesSection() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [carouselAuto, setCarouselAuto] = useState(true);

    useEffect(() => {
        if (!isOpen) {
            setCarouselAuto((prevAuto) => !prevAuto);
        }
    }, [isOpen]);


    const handleVideoOpen = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setOpen(true);
    };

    const [slidesPerView, setSlidesPerView] = useState(5);

    const updateSlidesPerView = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setSlidesPerView(3);
        } else if (width >= 640) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
        }
    };

    useEffect(() => {
        updateSlidesPerView(); // Set initial value
        window.addEventListener('resize', updateSlidesPerView);
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1 // Trigger when 10% of the element is in view
    });

    const controls1 = useAnimation();
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.5 // Trigger when 10% of the element is in view
    });

    const controls2 = useAnimation();
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.8 // Trigger when 80% of the element is in view
    });

    const controls3 = useAnimation();
    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.9
    });

    const controls4 = useAnimation();
    const { ref: ref4, inView: inView4 } = useInView({
        threshold: 0.1
    });

    const controls5 = useAnimation();
    const { ref: ref5, inView: inView5 } = useInView({
        threshold: 0.1
    });

    const controls55 = useAnimation();
    const { ref: ref55, inView: inView55 } = useInView({
        threshold: 0.1
    });

    const controls6 = useAnimation();
    const { ref: ref6, inView: inView6 } = useInView({
        threshold: 0.1
    });

    const controls7 = useAnimation();
    const { ref: ref7, inView: inView7 } = useInView({
        threshold: 0.1
    });

    const controls8 = useAnimation();
    const { ref: ref8, inView: inView8 } = useInView({
        threshold: 0.1
    });
    const controls9 = useAnimation();
    const { ref: ref9, inView: inView9 } = useInView({
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    useEffect(() => {
        if (inView1) {
            controls1.start("visible");
        } else {
            controls1.start("hidden");
        }
    }, [controls1, inView1]);

    useEffect(() => {
        if (inView2) {
            controls2.start("visible");
        } else {
            controls2.start("hidden");
        }
    }, [controls2, inView2]);

    useEffect(() => {
        if (inView3) {
            controls3.start("visible");
        } else {
            controls3.start("hidden");
        }
    }, [controls3, inView3]);

    useEffect(() => {
        if (inView4) {
            controls4.start("visible");
        } else {
            controls4.start("hidden");
        }
    }, [controls4, inView4]);

    useEffect(() => {
        if (inView5) {
            controls5.start("visible");
        } else {
            controls5.start("hidden");
        }
    }, [controls5, inView5]);

    useEffect(() => {
        if (inView55) {
            controls55.start("visible");
        } else {
            controls55.start("hidden");
        }
    }, [controls55, inView55]);

    useEffect(() => {
        if (inView6) {
            controls6.start("visible");
        } else {
            controls6.start("hidden");
        }
    }, [controls6, inView6]);

    useEffect(() => {
        if (inView7) {
            controls7.start("visible");
        } else {
            controls7.start("hidden");
        }
    }, [controls7, inView7]);

    useEffect(() => {
        if (inView8) {
            controls8.start("visible");
        } else {
            controls8.start("hidden");
        }
    }, [controls8, inView8]);

    useEffect(() => {
        if (inView9) {
            controls9.start("visible");
        } else {
            controls9.start("hidden");
        }
    }, [controls9, inView9]);

    const variantsZoom = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8 }
    };

    return (
      <>
          <div className="relative">
              <video
                playsInline
                id="introVideo2"
                autoPlay
                loop
                muted
                className="absolute object-fill w-[100%] h-[100%] inset-0"
                style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }}
              >
                  <source src={IntroVideo} type="video/mp4" />
              </video>
              <section className="hidden lg:block relative min-h-[300px]">
                  <motion.div
                    ref={ref}
                    animate={controls}
                    variants={variantsZoom}
                    className="relative mx-32"
                  >
                      <Swiper
                        autoplay={{
                            delay: 3000,
                        }}
                        loop={true}
                        navigation={true}
                        pagination={true}
                        slidesPerView={3}
                        modules={[Navigation, Pagination]}
                        className="swiper-wrapper py-24 lg:py-32"
                      >
                          {(language === 'en' ? luzentiTestiEn : luzentiTesti)?.map((item, index) => (
                            <SwiperSlide key={index} className="px-4">
                                <img src={item.image} alt="testimoni" className="w-full h-full" />
                            </SwiperSlide>
                          ))}
                      </Swiper>
                  </motion.div>
              </section>
              <section className="block lg:hidden relative min-h-[800px]">
                  <div className="relative">
                      <Swiper
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={true}
                        slidesPerView={1}
                        grid={{
                            rows: 3,
                            fill:'rows'
                        }}
                        modules={[Grid, Navigation, Pagination]}
                        className="py-24 lg:py-32"
                      >
                          {(language === 'en' ? luzentiTestiEn : luzentiTesti)?.map((item, index) => (
                            <SwiperSlide key={index} className="">
                                <img src={item.image} alt="testimoni" className="w-[100%] h-[100%]" />
                            </SwiperSlide>
                          ))}
                      </Swiper>
                  </div>
              </section>
          </div>
      </>
    )
}