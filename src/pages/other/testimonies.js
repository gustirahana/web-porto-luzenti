import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import MainFooter from '../../component/Footer/mainFooter';
import MainNavbar from '../../component/Navbar/mainNavbar';

import Carousel from "react-multi-carousel";
import "./carouselStyle.css";



import { carouselDetails, carouselDetailsEn, luzentiSosmed, luzentiTesti } from '../../data/dataTwo';
import playVector from "../../assets/images/homepage/play-vector.svg";
import {useLanguage} from "../../LanguageContext";
import ModalVideo from "react-modal-video";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TestimoniesSection from './testiSection';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    }
};

export default function Testimonies() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [carouselAuto, setCarouselAuto] = useState(true);
    const [carouselArrow, setCarouselArrow] = useState(true);

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
            setSlidesPerView(5);
        } else if (width >= 640) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
            setCarouselArrow(false);
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

    const variantsFlyLeft = {
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0, 0, 1, 1] } },
        hidden: { opacity: 0, x: -100 }
    };

    const variantsFlyTop = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: -100 }
    };


    const variantsFlyRight = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0, 0, 1, 1] } },
        hidden: { opacity: 0, x: 100 }
    };

    const variantsFlyBottom = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 }
    };

    return (
      <>
          <MainNavbar />
          <div className="block relative mt-20">
              <div className="grid grid-cols-1 items-center py-10 lg:py-20">
                  <motion.div
                    ref={ref1}
                    animate={controls1}
                    variants={variantsFlyBottom}
                  >
                      <h3
                        className="lg:text-[36px] text-[28px] tracking-[5px] leading-normal text-center text-blue-luzenti">{language === 'en' ? 'WHAT THEY SAY' : 'APA KATA MEREKA'}</h3>
                  </motion.div>
                  {/*<motion.div*/}
                  {/*  ref={ref2}*/}
                  {/*  animate={controls2}*/}
                  {/*  variants={variantsFlyBottom}*/}
                  {/*  transition={{ delay: 0.8 }}*/}
                  {/*>*/}
                  {/*    <h3 className="lg:text-[18px] text-[16px] leading-normal text-center mt-8 px-4 lg:px-[25%]">*/}
                  {/*      {language === 'en' ? 'From product suggestions and ingredients to recommendations and treatment options, Luzenti answers the skincare questions you want to know.' : 'Luzenti menjawab pertanyaan perawatan kulit yang kamu ingin tahu.'}</h3>*/}
                  {/*</motion.div>*/}
              </div>
              <section id="controls-carousel" className="relative py-[25px] mb-24">
                  <motion.div
                    ref={ref}
                    animate={controls}
                    variants={variantsZoom}
                    className="relative pb-[30px] inset-0">
                      <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={carouselAuto}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        arrows={carouselArrow}
                        renderDotsOutside
                        transitionDuration={500}
                        containerClass="carousel-container"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                      >
                          {(language === 'en' ? carouselDetailsEn : carouselDetails)?.map((detail, index) => (
                            <div key={index}>
                                <div
                                  className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center">
                                    <div
                                      className="relative dark:shadow-gray-800 aspect-9/16 block mx-auto bg-cover bg-center filter blur-md transition ease-in-out duration-300 group-hover:blur-none"
                                      style={{ backgroundImage: `url(${detail.image})` }}
                                    ></div>
                                    <div
                                      className="absolute inset-0 bg-gradient-to-t from-blue-luzenti to-transparent transition ease-in-out duration-300 group-hover:blur-none"
                                    ></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Link onClick={() => handleVideoOpen(detail.url)}
                                              className="lightbox max-w-full max-h-full">
                                            <img src={playVector} className="object-fill group-hover:hidden size-24"
                                                 alt="play" />
                                            <div
                                              className="hidden group-hover:flex items-center justify-center w-24 h-24 rounded-full bg-white">
                                                <span
                                                  className="text-blue-luzenti font-semibold uppercase">{language === 'en' ? 'Watch Video' : 'Tonton Video'}</span>
                                            </div>
                                        </Link>
                                        <div className="absolute text-white tracking-[1px] text-[21px] lg:text-[18px] bottom-[90px]">{detail.name}</div>
                                        <div className="absolute text-white tracking-[1px] text-[16px] lg:text-[12px] font-light bottom-14 uppercase">{detail.title}</div>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </Carousel>
                  </motion.div>
                  <ModalVideo
                    channel='custom'
                    ratio={'9:16'}
                    autoplay
                    isOpen={isOpen}
                    url={currentVideoUrl}
                    onClose={() => setOpen(false)}
                  />
              </section>
          </div>
          <TestimoniesSection/>
          <div className="relative bg-white-bone py-[60px] lg:py-[100px]">
              <div className="hidden lg:grid  grid-cols-1 items-center">
                  <motion.div
                    ref={ref6}
                    initial="hidden"
                    animate={controls6}
                    variants={variantsFlyBottom}
                  >
                      <h3 className="lg:text-[30px] text-[21px] lg:tracking-[3px] tracking-[0.5px] font-medium lg:font-normal leading-normal text-center">{language === 'en' ? 'SEE WHAT WE\'RE UP TO' : 'TEMUKAN KISAH KAMI DI'} <span className="text-blue-luzenti lg:tracking-[3px]"><a href={'https://www.instagram.com/luzentiofficial/'} target="_blank">@LUZENTIOFFICIAL</a></span></h3>
                  </motion.div>
              </div>
              <div className="hidden lg:relative lg:grid lg:grid-cols-4 md:grid-cols-2 gap-1 mt-[30px] lg:mt-[50px] grid-cols-2 px-5 md:px-[10%]">
                  {luzentiSosmed.map((item,index)=>{
                      return(
                        <motion.div
                          ref={ref6}
                          animate={controls6}
                          variants={variantsZoom}
                          key={index}
                          className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center">
                            <a href={item.url} target='_blank' rel="noreferrer">
                                <div className="relative dark:shadow-gray-800 min-h-[350px] block bg-contain bg-no-repeat" style={{ backgroundImage: `url(${item.image})` }}>
                                    {/* Empty div to maintain aspect ratio */}
                                </div>
                            </a>
                        </motion.div>
                      )
                  })}
              </div>
              <div className="grid grid-cols-1 lg:hidden items-center">
                  <div>
                      <h3 className="lg:text-[30px] text-[21px] lg:tracking-[3px] tracking-[0.5px] font-medium lg:font-normal leading-normal text-center">{language === 'en' ? 'SEE WHAT WE\'RE UP TO' : 'TEMUKAN KISAH KAMI DI'} <span className="text-blue-luzenti lg:tracking-[3px]"><a href={'https://www.instagram.com/luzentiofficial/'} target="_blank">@LUZENTIOFFICIAL</a></span></h3>
                  </div>
              </div>
              {/*mobile*/}
              <div className="grid lg:hidden lg:grid-cols-4 md:grid-cols-2 gap-1 mt-[30px] lg:mt-[50px] grid-cols-2 px-5 md:px-[10%]">
                  {luzentiSosmed.map((item,index)=>{
                      return(
                        <div
                          key={index}
                          className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center">
                            <a href={item.url} target='_blank' rel="noreferrer">
                                <div className="relative dark:shadow-gray-800 w-48 h-48 md:h-96 lg:w-58 lg:h-80 block mx-auto bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                                    {/* Empty div to maintain aspect ratio */}
                                </div>
                            </a>
                        </div>
                      )
                  })}
              </div>
          </div>
          <MainFooter/>
      </>
    )
}