import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import { useLanguage } from '../../LanguageContext';

import MainFooter from '../../component/Footer/mainFooter';
import MainNavbar from '../../component/Navbar/mainNavbarGold';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import ModalVideo from 'react-modal-video'
import "react-modal-video/css/modal-video.css";
import '../../assets/css/introVideo.css'
import styles from '../../assets/css/Animation.module.css';


import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import IntroVideo from '../../assets/LuzentiLogo.mp4'
import IntroVideoMobile from '../../assets/luzenti_mobile1.mp4'
import IntroVideo2 from '../../assets/LuzentiVid2.mp4'
import IntroVideoMobile2 from '../../assets/luzenti_mobile2.mp4'



import {productData, productCategories, carouselDetails,carouselDetailsEn, luzentiSosmed, productCategoriesID} from '../../data/dataTwo';
import backgroundHomeSm from "../../assets/images/homepage/ashwagandhasm.png";
import playVector from "../../assets/images/homepage/play-vector.svg";
import FeaturedProduct from "../../component/featured/featuredProducts";
import MainNavbarGold from '../../component/Navbar/mainNavbarGold';
import FeaturedKeunggulan from '../../component/featured/featuredKeunggulan';
import BackgroundWater from '../../assets/images/water-surface.png';
import Carousel from 'react-multi-carousel';

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

export default function Index() {
    const [isInView, setIsInView] = useState(false);
    const { language, setLanguage } = useLanguage();
    const [isOpen, setOpen] = useState(false);
    const [isOpenMobile, setOpenMobile] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [slidesPerView, setSlidesPerView] = useState(5);
    const [showContent, setShowContent] = useState(false);
    const [isFirstVisit, setIsFirstVisit] = useState(false);
    const [introVideoLoaded, setIntroVideoLoaded] = useState(false);
    const productCategoriesRef = useRef([]);
    const introTextRef = useRef(null);

    const { t } = useTranslation();

    const handleVideoOpen = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setOpen(true);
    };
    const handleVideoOpenMobile = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setOpenMobile(true);
    };

    const updateSlidesPerView = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setSlidesPerView(5);
        } else if (width >= 640) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('animated-background');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                setIsInView(isInView);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        updateSlidesPerView(); // Set initial value
        window.addEventListener('resize', updateSlidesPerView);
        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

    useEffect(() => {
        const firstVisit = sessionStorage.getItem('firstVisit') === null;

        if (firstVisit) {
            sessionStorage.setItem('firstVisit', 'false');
            setIsFirstVisit(true);
            document.body.classList.add('no-scroll');

            setTimeout(() => {
                const introVideo = document.getElementById('introVideo');
                const introVideo2 = document.getElementById('introVideo2');

                introVideo?.classList.add('animate-fadeOut');
                introVideo2?.classList.add('animate-fadeIn');

                setTimeout(() => {
                    introVideo.style.opacity = 0;
                    introVideo2.style.opacity = 1;
                    setShowContent(true);
                    document.body.classList.remove('no-scroll');
                }, 1000);
            }, 5000);
        } else {
            setIsFirstVisit(false);
            setShowContent(true);
        }
    }, []);

// New useEffect to handle visibility changes and resume video playback
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                setTimeout(() => {
                    window.location.reload();
                }, 500); // delay in milliseconds
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        const options = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-zoomIn');
                }
            });
        }, options);

        productCategoriesRef.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        if (introTextRef.current) {
            observer.observe(introTextRef.current);
        }

        return () => {
            productCategoriesRef.current.forEach(ref => {
                if (ref) observer.unobserve(ref);
            });

            if (introTextRef.current) {
                observer.unobserve(introTextRef.current);
            }
        };
    }, [productCategoriesRef.current, introTextRef.current]);

    // motion animation controller, just edit this

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1
    });

    const controls0 = useAnimation();
    const { ref: ref0, inView: inView0 } = useInView({
        threshold: 0.1
    });

    const controls1 = useAnimation();
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.5 // Trigger when 10% of the element is in view
    });

    const controls2 = useAnimation();
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.3
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

    const controls551 = useAnimation();
    const { ref: ref551, inView: inView551 } = useInView({
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

    const controls00 = useAnimation();
    const { ref: ref00, inView: inView00 } = useInView({
        threshold: 0.5,
    });

    const controls01 = useAnimation();
    const { ref: ref01, inView: inView01 } = useInView({
        threshold: 0.5,
    });

    const controls02 = useAnimation();
    const { ref: ref02, inView: inView02 } = useInView({
        threshold: 0.5
    });

    const controls03 = useAnimation();
    const { ref: ref03, inView: inView03 } = useInView({
        threshold: 0.5
    });

    const controls04 = useAnimation();
    const { ref: ref04, inView: inView04 } = useInView({
        threshold: 0.5
    });

    useEffect(() => {
        if (inView00) {
            controls00.start('visible').then(() => {
                controls01.start('visible').then(() => {
                    controls02.start('visible').then(() => {
                        controls03.start('visible').then(() => {
                            controls04.start('visible');
                        });
                    });
                });
            });
        }
    }, [inView00, controls00, controls01, controls02, controls03, controls04]);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    useEffect(() => {
        if (inView0) {
            controls0.start("visible");
        } else {
            controls0.start("hidden");
        }
    }, [controls1, inView1]);

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
        if (inView551) {
            controls551.start("visible");
        } else {
            controls551.start("hidden");
        }
    }, [controls551, inView551]);

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

    const variantsFlyBottomBanner = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 100 }
    };

    const variantsFlyBottom = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 }
    };

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
      <>
          {showContent && <MainNavbarGold />}
          <section className="hidden lg:block">
              <div className="container-fluid relative">
                  <div className="relative py-24 lg:py-48 w-full min-h-screen overflow-hidden">
                      {/* Desktop Intro Video */}
                      <video
                        playsInline
                        id="introVideo"
                        autoPlay
                        muted
                        className={`absolute object-cover w-full h-full inset-0 ${isFirstVisit ? '' : 'hidden'}`}
                        style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }}
                      >
                          <source src={IntroVideo} type="video/mp4" />
                      </video>
                      <video
                        playsInline
                        id="introVideo2"
                        autoPlay
                        loop
                        muted
                        className="absolute object-cover w-full h-full inset-0"
                        style={{ opacity: isFirstVisit ? 0 : 1, transition: 'opacity 1s ease-in-out' }}
                      >
                          <source src={IntroVideo2} type="video/mp4" />
                      </video>

                      {/* Content Section */}
                      {showContent && (
                        <div className="absolute bottom-[20%] left-0 w-full animate-fadeIn"
                             style={{ animationDelay: '7s' }}>
                            <div
                              className="flex flex-col gap-5 lg:max-w-[480px] xl:max-w-[600px] 2xl:max-w-2xl ml-[5vw]">

                                {/* Animated Text Section */}
                                <div className="flex flex-col">
                                    {/* "THE" Text */}
                                    <motion.div ref={ref00} initial="hidden" animate={controls00}
                                                variants={variantsFlyBottomBanner}>
                                        <h1
                                          className="text-white text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[50px] tracking-[2px] font-light">
                                            THE
                                        </h1>
                                    </motion.div>

                                    {/* "TIMELESS" Text */}
                                    <motion.div ref={ref01} initial="hidden" animate={controls01}
                                                variants={variantsFlyBottomBanner}>
                                        <h1
                                          className="text-white text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[77px] pl-[5%] tracking-[2px] font-light">
                                            TIMELESS
                                        </h1>
                                    </motion.div>

                                    {/* "BEAUTY" Text */}
                                    <motion.div ref={ref02} initial="hidden" animate={controls02}
                                                variants={variantsFlyBottomBanner}>
                                        <h1
                                          className="text-white text-[48px] lg:text-[60px] xl:text-[70px] 2xl:text-[85px] pl-[10%] lg:pl-[14%] xl:pl-[30%] 2xl:pl-44 tracking-[2px] font-light">
                                            BEAUTY
                                        </h1>
                                    </motion.div>
                                </div>

                                {/* Description and Button */}
                                <motion.div ref={ref03} initial="hidden" animate={controls03}
                                            variants={variantsFlyBottomBanner} className="mt-8 text-left">
                                    <p
                                      className={`animate-zoomIn text-white text-lg lg:text-xl xl:text-2xl ${language === 'en' ? 'xl:text-[19px]' : 'xl:text-[19px]'} font-light delay-2s`}>
                                        {language === 'en'
                                          ? 'Bring your skin to calm and comfort with Luzenti. Enjoy the calming luxury.'
                                          : 'Bawa kulit Anda menuju ketenangan dengan Luzenti. Nikmati kemewahan yang menenangkan.'}
                                    </p>
                                    <motion.div ref={ref04} initial="hidden" animate={controls04}
                                                variants={variantsFlyBottomBanner}
                                                className="mt-10 flex justify-center">
                                        <Link
                                          to={'/products'}
                                          className="py-3 px-6 text-[14px] lg:text-[16px] xl:text-[18px] uppercase font-medium text-white tracking-wide border border-white bg-cyan-500/10 hover:bg-white hover:text-blue-luzenti duration-300"
                                        >
                                            {language === 'en' ? 'Shop Now' : 'Belanja Sekarang'}
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                      )}
                  </div>
              </div>
          </section>

          {/*mobile*/}
          <section className="h-screen bg-background-home lg:hidden">
              <div className="min-h-[600px] relative">
                  {/* Main intro video */}
                  <video
                    id="introVideo"
                    autoPlay
                    muted
                    playsInline
                    className={`absolute object-cover w-full h-screen inset-0 ${isFirstVisit ? 'block' : 'hidden'}`}
                    style={{ opacity: introVideoLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
                  >
                      <source src={IntroVideoMobile} type="video/mp4" />
                  </video>

                  {/* Looping video */}
                  <video
                    id="introVideo2"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute object-cover w-full h-screen inset-0 ${isFirstVisit ? 'hidden' : 'block'}`}
                    style={{ opacity: isFirstVisit ? 0 : 1, transition: 'opacity 1s ease-in-out' }}
                  >
                      <source src={IntroVideoMobile2} type="video/mp4" />
                  </video>
              </div>

              {showContent && (
                <div className='absolute bottom-4 left-0 right-0 text-center px-4'>
                    <h1
                      className='text-white font-light text-[24px] md:text-[28px] lg:text-[36px] tracking-wide'>THE</h1>
                    <h1
                      className='text-white font-light text-[36px] md:text-[44px] lg:text-[50px] tracking-wide mt-2'>TIMELESS</h1>
                    <h1
                      className='text-white font-light text-[36px] md:text-[44px] lg:text-[50px] tracking-wide mt-2'>BEAUTY</h1>
                    <div className='mt-8 text-left'>
                        <p
                          className={`animate-zoomIn text-white text-lg lg:text-xl xl:text-2xl ${language === 'en' ? 'xl:text-[19px]' : 'xl:text-[19px]'} font-light delay-2s`}>
                            {language === 'en'
                              ? 'Bring your skin to calm and comfort with Luzenti. Enjoy the calming luxury.'
                              : 'Bawa kulit Anda menuju ketenangan dengan Luzenti. Nikmati kemewahan yang menenangkan.'}
                        </p>
                        <div className='mt-10 flex justify-center'>
                            <Link
                              to={'/products'}
                              className='py-3 px-6 text-[14px] lg:text-[16px] xl:text-[18px] text-white uppercase font-medium tracking-wide border border-white bg-cyan-500/10 hover:bg-white hover:text-blue-luzenti duration-300'
                            >
                                {language === 'en' ? 'Shop Now' : 'Belanja Sekarang'}
                            </Link>
                        </div>
                    </div>
                </div>
              )}
          </section>


          {/*this section need use motion if in view with atleast 25% per total view*/}
          {showContent && <section className='relative min-h-screen'>
              <div className='relative px-5 lg:mx-20 mb-[60px] lg:my-[100px]'>
                  <div className='grid md:grid-cols-1 grid-cols-1 items-center'>
                      <div className='text-center pt-[60px] md:pt-0'>
                          <motion.div
                            ref={ref}
                            initial='hidden'
                            animate={controls}
                            variants={variantsFlyBottom}
                          >
                              <h3
                                className='lg:text-[36px] text-[21px] tracking-[1px] text-blue-luzenti leading-normal animate-fadeInUp'>
                                  {language === 'en' ? 'LUZENTI\'S FINEST' : 'PRODUK UNGGULAN'}
                              </h3>
                          </motion.div>
                      </div>
                      <div className='mb-7 mt-4 text-center'>
                          <motion.div
                            ref={ref}
                            initial='hidden'
                            animate={controls}
                            variants={variantsFlyBottom}
                          >
                              <h3 className='text-[16px] leading-normal animate-fadeInUp'>
                                  {language === 'en' ? 'Discover the pinnacle of luxury skincare with Luzenti\'s finest selections.' : 'Temukan keindahan perawatan kulit mewah dengan produk terbaik Luzenti.'}
                              </h3>
                          </motion.div>
                      </div>
                  </div>
                  <FeaturedProduct language={language} />
              </div>

              <div className='bg-blue-bg-home pt-[60px] md:pt-[100px]'>
                  <div className='grid grid-cols-1 items-center'>
                      {/*fly in from bottom*/}
                      <motion.div
                        ref={ref55}
                        initial='hidden'
                        animate={controls55}
                        variants={variantsFlyBottom}
                      >
                          <h3
                            className='md:text-[24px] text-[21px] leading-normal tracking-[1.5px] text-center text-blue-luzenti font-medium'>
                              {language === 'en' ? 'PRODUCTS BENEFITS' : 'MANFAAT PRODUK'}
                          </h3>
                      </motion.div>
                  </div>
                  {language === 'en' ? (
                    <div
                      className='grid lg:grid-cols-4 gap-1 lg:gap-1 grid-cols-2 mt-[50px] md:mt-[100px]'
                    >
                        {productCategories.map((item, index) => (
                          <motion.div
                            key={index}
                            className='group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center'
                            variants={itemVariants}
                          >
                              <motion.div
                                ref={ref55}
                                initial='hidden'
                                animate={controls55}
                                variants={variantsFlyBottom}
                                id='animated-background'
                                className={`relative dark:shadow-gray-800 w-full h-72 lg:w-[full] lg:h-[500px] block bg-cover bg-center ${styles.bgZoom}`}
                                style={{ backgroundImage: `url(${item.image})` }}>
                              </motion.div>
                              <div className='absolute inset-0 flex items-center justify-center'>
                                  <Link
                                    className='font-semibold lg:font-medium hover:text-blue-luezenti text-blue-luzenti text-[16px] tracking-[1.98px] uppercase z-10 relative'>{item.title} &gt;</Link>
                              </div>
                          </motion.div>
                        ))}
                    </div>
                  ) : (
                    <motion.div
                      className='grid lg:grid-cols-4 gap-1 lg:gap-1 grid-cols-2 mt-[50px] md:mt-[100px]'
                      ref={ref0}
                      variants={container}
                      initial='hidden'
                      animate={inView0 ? 'visible' : 'hidden'}
                    >
                        {productCategoriesID.map((item, index) => (
                          <motion.div
                            key={index}
                            className='group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center'
                            variants={itemVariants}
                          >
                              <div id='animated-background'
                                   className={`relative dark:shadow-gray-800 w-full h-72 lg:w-[full] lg:h-[500px] block bg-cover bg-center ${styles.bgZoomLinear}`}
                                   style={{ backgroundImage: `url(${item.image})` }}>
                                  {/* Empty div to maintain aspect ratio */}
                              </div>
                              <div className='absolute inset-0 flex items-center justify-center'>
                                  <a href={item.link}
                                     className='font-medium hover:text-blue-luezenti text-blue-luzenti text-[16px] tracking-[1.98px] uppercase z-10 relative'>{item.title} &gt;</a>
                              </div>
                          </motion.div>
                        ))}
                    </motion.div>
                  )}
              </div>
          </section>}

          {/*desktop section 2*/}
          {showContent && <section className='hidden lg:block'>
              <div className='container-fluid relative'>
                  <div className='relative py-48 table w-full overflow-hidden'>
                      <div id='animated-background'
                           className={`absolute inset-0 flex-shrink-0 bg-home-background-ash bg-center bg-no-repeat bg-cover ${isInView ? styles.bgZoom2 : ''}`}></div>
                      <div className='container relative pl-[55%] pr-5'>
                          <div className='grid-cols-1 w-full'>
                              <div className='grid-cols-1 w-[475px]'>
                                  <motion.div
                                    ref={ref1}
                                    initial='hidden'
                                    animate={controls1}
                                    variants={variantsFlyBottom}
                                    transition={{ delay: 0.1 }} // Delay for the first element
                                  >
                                      <h1
                                        className='text-white lg:leading-normal leading-normal text-[16px] font-medium tracking-wide'>{language === 'en' ? 'CARING FOR YOUR SKIN WITH' : 'PERAWATAN KULIT DENGAN'}</h1>
                                  </motion.div>
                              </div>
                              <div className='grid-cols-1'>
                                  <motion.div
                                    ref={ref2}
                                    initial='hidden'
                                    animate={controls2}
                                    variants={variantsFlyBottom}
                                    transition={{ delay: 1 }} // Delay for the second element
                                  >
                                      <h1
                                        className='text-white lg:leading-normal leading-normal text-[36px] font-medium tracking-wide'>{language === 'en' ? 'ASHWAGANDA' : 'ADAPTOGEN'}</h1>
                                  </motion.div>
                              </div>
                              <div className='md:text-start text-center mt-4'>
                                  <motion.div
                                    ref={ref3}
                                    animate={controls3}
                                    variants={variantsFlyBottom}
                                    transition={{ delay: 1.5 }}
                                  >
                                      <p
                                        className='text-white text-[16px] text-balance font-light'>{language === 'en' ? 'LUZENTI presents a new concept: adaptogenic skincare. Luzenti products offer functional effects that reduce the impact of stress on the skin, providing a calming emotional effect and alleviating stress. Adaptogens are substances commonly found in herbal medicine, known for their ability to reduce fatigue and the negative effects that arise from stress. '
                                        : 'LUZENTI hadir dengan mengusung konsep baru, skincare adaptogen. Produk - produk Luzenti memberikan efek fungsional mengurangi dampak stres pada kulit dan efek emosional yang menenangkan dan mengurangi stres. Adaptogen adalah zat yang banyak ditemui dalam pengobatan herbal dikenal karena mengurangi efek fatigue dan hal-hal negatif yang timbul karena stres.'}</p>
                                  </motion.div>
                                  <div className='mt-8'>
                                      <motion.div
                                        ref={ref4}
                                        initial='hidden'
                                        animate={controls4}
                                        variants={variantsFlyBottom}
                                        transition={{ delay: 2 }}
                                      >
                                          <Link to={`about`}
                                                className='py-2 uppercase px-5 inline-block tracking-[1.5px] border align-middle duration-500 w-[475px] lg:w-[375px] xl:w-[475px] text-base text-center bg-cyan-500/10 hover:bg-white hover:text-blue-luzenti border-white  text-white me-2 lg:mt-2'>{language === 'en' ? 'READ MORE' : 'BACA LEBIH LANJUT'}</Link>
                                      </motion.div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>}

          {/*mobile section 2*/}
          {showContent && <section className='lg:hidden'>
              <div className='container-fluid relative'>
                  <div className='relative max-h-fit overflow-hidden'>
                      <img src={backgroundHomeSm} className=' object-fill size-full' alt='ashwagandha' />
                      <div className='relative bg-backround-home'>
                          <div className='px-5 pt-5 grid grid-cols-1'>
                              <div className='grid grid-cols-1'>
                                  <h1
                                    className='text-white mt-2 lg:leading-normal leading-normal text-[14px] font-light tracking-wide sm:pl-[10%] '>{language === 'en' ? 'INTRODUCING OUR UNIQUE INGREDIENT' : 'PERAWATAN KULIT DENGAN'}</h1>
                              </div>
                              <div className='grid grid-cols-1'>
                                  <h1
                                    className='text-white lg:leading-normal leading-normal font-medium text-[30px] tracking-[1.5px] sm:pl-[10%] '>{language === 'en' ? 'ASHWAGANDA' : 'ADAPTOGEN'}</h1>
                              </div>
                              <div className='md:text-start text-start mt-4 sm:pl-[10%]'>
                                  <p
                                    className='text-white text-[16px] max-w-xl font-light'>{language === 'en' ? 'An adaptogen that alleviates stress and provides a calming effect. This ingredient on our products helps the body resist physical and mental stress, boost collagen production, and cultivates peace of mind, healthy skin & overall wellness. '
                                    : 'LUZENTI hadir dengan mengusung konsep baru, skincare adaptogen. Produk - produk Luzenti memberikan efek fungsional mengurangi dampak stres pada kulit dan efek emosional yang menenangkan dan mengurangi stres. Adaptogen adalah zat yang banyak ditemui dalam pengobatan herbal dikenal karena mengurangi efek fatigue dan hal-hal negatif yang timbul karena stres.'} </p>
                                  <div className='mt-6 mb-[60px]'>
                                      <Link
                                        className='uppercase py-2 px-5 inline-block font-medium tracking-[1.5px] border align-middle duration-500 w-full xs:w-[525px] text-[14px] text-center bg-cyan-500/10 hover:bg-white border-white text-white me-2 mt-2'>{language === 'en' ? 'READ MORE' : 'BACA LEBIH LANJUT'}</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>}


          {showContent && <div className='relative pt-[50px] pb-[60px] lg:pt-[100px]'>
              <img
                className='absolute inset-0 object-cover w-full h-[700px]'
                src={BackgroundWater}
                alt='Background'
              />
              <FeaturedKeunggulan language={language} />
              <motion.div
                ref={ref5}
                animate={controls5}
                variants={variantsFlyBottom}// Delay for the fourth element
              >
                  <div className='grid grid-cols-1 pt-16 lg:pt-32 items-center'>
                      <h3
                        className='text-[21px] lg:text-[30px] tracking-[2px] font-medium lg:font-normal leading-normal text-center text-blue-luzenti z-10'>
                          {language === 'en' ? 'WHAT THEY SAY' : 'APA KATA MEREKA'}
                      </h3>
                  </div>
              </motion.div>

              {/*desktop*/}
              <section id='controls-carousel' className='hidden lg:relative lg:block mt-[50px]'>
                  <div className='overflow-hidden mx-6 lg:mx-32 relative inset-0'>
                      <motion.div
                        ref={ref551}
                        animate={controls551}
                        variants={variantsFlyBottom}// Delay for the fourth element
                      >
                          <Swiper
                            className='swiper-wrapper'
                            spaceBetween={5}
                            slidesPerView={slidesPerView}
                            pagination
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: true
                            }}
                          >
                              {(language === 'en' ? carouselDetailsEn : carouselDetails)?.slice(0, 5).map((detail, index) => {
                                  return (
                                    <SwiperSlide key={index}>
                                        <div
                                          className='group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center'
                                          style={{ aspectRatio: '9/16' }}
                                        >
                                            <div
                                              className='relative w-full h-full block bg-cover bg-center filter blur-md transition ease-in-out duration-300 group-hover:blur-none'
                                              style={{ backgroundImage: `url(${detail.image})` }}
                                            ></div>
                                            <div
                                              className='absolute inset-0 bg-gradient-to-t from-blue-luzenti to-transparent transition ease-in-out duration-300'></div>
                                            <div className='absolute inset-0 flex items-center justify-center'>
                                                <Link onClick={() => handleVideoOpen(detail.url)}
                                                      className='lightbox max-w-full max-h-full'>
                                                    <img src={playVector}
                                                         className='object-fill group-hover:hidden size-24'
                                                         alt='play' />
                                                    <div
                                                      className='hidden group-hover:flex items-center justify-center w-24 h-24 rounded-full bg-white'>
                                                          <span
                                                            className='text-blue-luzenti text-[14px] font-medium leading-tight uppercase'>{language === 'en' ? `Watch Video` : ` Tonton Video`}</span>
                                                    </div>
                                                </Link>
                                                <div
                                                  className='absolute text-white tracking-[1px] text-[21px] lg:text-[18px] bottom-[80px]'>{detail.name}</div>
                                                <div
                                                  className='absolute text-white tracking-[1px] text-[16px] lg:text-[12px] font-light bottom-14 uppercase'>{detail.title}</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                  );
                              })}
                          </Swiper>
                          <ModalVideo
                            channel='custom'
                            ratio={'9:16'}
                            autoplay
                            isOpen={isOpen}
                            url={currentVideoUrl}
                            onClose={() => setOpen(false)}
                          />
                      </motion.div>
                  </div>
                  <div className='text-center pt-10'>
                      <div
                        className='hover:text-blue-luzenti text-[16px] font-semibold w-full'
                      >
                          <Link to={`/${language}/products/`}>
                              {language === 'en' ? 'VIEW MORE TESTIMONIES>' : 'LIHAT LEBIH BANYAK >'}
                          </Link>
                      </div>
                  </div>
              </section>

              {/*mobile*/}
              <section id='controls-carousel' className='relative lg:hidden mt-[50px]'>
                  <div
                    className='relative pb-[30px] inset-0'>
                      <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        arrows={false}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        renderDotsOutside
                        transitionDuration={500}
                        containerClass='carousel-container'
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'
                      >
                          {carouselDetails?.map((detail, index) => (
                            <div key={index}>
                                <div
                                  className='group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center'>
                                    <div
                                      className='relative dark:shadow-gray-800 aspect-9/16 block mx-auto bg-cover bg-center filter blur-md transition ease-in-out duration-300 group-hover:blur-none'
                                      style={{ backgroundImage: `url(${detail.image})` }}
                                    ></div>
                                    <div
                                      className='absolute inset-0 bg-gradient-to-t from-blue-luzenti to-transparent transition ease-in-out duration-300 group-hover:blur-none'
                                    ></div>
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Link onClick={() => handleVideoOpenMobile(detail.url)}
                                              className='lightbox max-w-full max-h-full'>
                                            <img src={playVector} className='object-fill group-hover:hidden size-24'
                                                 alt='play' />
                                            <div
                                              className='hidden group-hover:flex items-center justify-center w-24 h-24 rounded-full bg-white'>
                                                <span
                                                  className='text-blue-luzenti font-semibold uppercase'>Tonton Video</span>
                                            </div>
                                        </Link>
                                        <div
                                          className='absolute text-white tracking-[1px] text-[21px] lg:text-[18px] bottom-[90px]'>{detail.name}</div>
                                        <div
                                          className='absolute text-white tracking-[1px] text-[16px] lg:text-[12px] font-light bottom-14 uppercase'>{detail.title}</div>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </Carousel>
                  </div>
                  <ModalVideo
                    channel='custom'
                    ratio={'9:16'}
                    autoplay
                    isOpen={isOpenMobile}
                    url={currentVideoUrl}
                    onClose={() => setOpenMobile(false)}
                  />
              </section>
          </div>}

          {showContent && <div className='relative bg-white-bone py-[60px] lg:py-[100px]'>
              <div className='hidden lg:grid grid-cols-1 items-center'>
                  <motion.div
                    ref={ref6}
                    initial='hidden'
                    animate={controls6}
                    variants={variantsFlyBottom}
                  >
                      <h3
                        className='lg:text-[30px] text-[21px] lg:tracking-[3px] tracking-[0.5px] font-medium lg:font-normal leading-normal text-center'>{language === 'en' ? 'SEE WHAT WE\'RE UP TO' : 'TEMUKAN KISAH KAMI DI'}
                          <span className='text-blue-luzenti lg:tracking-[3px]'><a
                            href={'https://www.instagram.com/luzentiofficial/'}
                            target='_blank' rel="noreferrer">@LUZENTIOFFICIAL</a></span></h3>
                  </motion.div>
              </div>
              <div
                className='hidden lg:relative lg:grid lg:grid-cols-4 md:grid-cols-2 gap-1 mt-[30px] lg:mt-0 grid-cols-2 px-5 md:px-[10%]'>
                  {luzentiSosmed.map((item, index) => (
                    <motion.div
                      ref={ref6}
                      animate={controls6}
                      variants={variantsZoom}
                      key={index}
                      className='group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center'
                    >
                        <a href={item.url} target='_blank' rel='noreferrer'>
                            <div
                              className='relative dark:shadow-gray-800 min-h-[350px] block bg-contain bg-no-repeat'
                              style={{
                                  backgroundImage: `url(${item.image})`,
                                  backgroundSize: 'contain',
                                  backgroundPosition: 'center'
                              }}
                            >
                                {/* Empty div to maintain aspect ratio */}
                            </div>
                        </a>
                    </motion.div>
                  ))}
              </div>
              <div className='grid grid-cols-1 lg:hidden items-center'>
                  <div>
                      <h3
                        className='lg:text-[30px] text-[21px] lg:tracking-[3px] tracking-[0.5px] font-medium lg:font-normal leading-normal text-center'>{language === 'en' ? 'SEE WHAT WE\'RE UP TO' : 'TEMUKAN KISAH KAMI DI'}
                          <span className='text-blue-luzenti lg:tracking-[3px]'><a
                            href={'https://www.instagram.com/luzentiofficial/'}
                            target='_blank' rel="noreferrer">@LUZENTIOFFICIAL</a></span></h3>
                  </div>
              </div>
              {/*mobile*/}
              <div
                className='grid lg:hidden lg:grid-cols-4 md:grid-cols-2 gap-1 mt-[30px] lg:mt-[50px] grid-cols-2 px-5 md:px-[10%]'>
                  {luzentiSosmed.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className='group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center'>
                            <a href={item.url} target='_blank' rel='noreferrer'>
                                <div
                                  className='relative dark:shadow-gray-800 w-48 h-48 md:h-96 lg:w-58 lg:h-80 block mx-auto bg-cover bg-center'
                                  style={{ backgroundImage: `url(${item.image})` }}>
                                    {/* Empty div to maintain aspect ratio */}
                                </div>
                            </a>
                        </div>
                      );
                  })}
              </div>
          </div>}
          {showContent && <section className='mt-0'>
              <div className='container-fluid relative'>
                  <div className='relative pt-60 pb-16 lg:pt-[350px] h-[700px] overflow-hidden'>
                      <div id='animated-background'
                           className={`absolute md:hidden inset-0 bg-unsplash-sm ${isInView ? styles.bgZoom2 : ''} bg-no-repeat bg-cover`}></div>
                      <div id='animated-background'
                           className={`hidden md:block absolute lg:hidden inset-0 ${isInView ? styles.bgZoom2 : ''} bg-unsplash-md bg-no-repeat bg-top bg-cover`}></div>
                      <div id='animated-background'
                           className={`hidden lg:block absolute inset-0 ${isInView ? styles.bgZoom2 : ''} bg-unsplash-lg bg-no-repeat bg-top bg-cover`}></div>
                      <div className='relative pt-48 lg:pt-16'>
                          <div className='grid grid-rows-1'>
                              <div className='lg:hidden grid-cols-1'>
                                  <div
                                  >
                                      <h1
                                        className='text-white lg:leading-normal drop-shadow-lg leading-normal mb-4 text-[16px] px-16 tracking-wide text-center'>{language === 'en' ? 'Indulge in skincare that goes beyond the surface.' : 'Nikmati perawatan kulit yang melebihi permukaan.'}</h1>
                                  </div>
                              </div>
                              <div className='hidden lg:block grid-cols-1'>
                                  <motion.div
                                    ref={ref7}
                                    initial='hidden'
                                    animate={controls7}
                                    variants={variantsFlyBottom}
                                  >
                                      <h1
                                        className='text-white lg:leading-normal drop-shadow-lg leading-normal text-[20px] px-5 tracking-wide text-center'>{language === 'en' ? 'Indulge in skincare that goes beyond the surface.' : 'Nikmati perawatan kulit yang melebihi permukaan.'}</h1>
                                  </motion.div>
                              </div>
                              <div className='md:hidden text-center'>
                                  {language === 'en' ? (<> <p
                                      className='text-white text-[50px] drop-shadow-lg font-medium uppercase px-5'>Shop
                                        Luzenti</p>
                                        <p
                                          className='text-white text-[45px] drop-shadow-lg font-medium uppercase px-5'>for
                                            a radiant,</p>
                                        <p
                                          className='text-white text-[45px] drop-shadow-lg font-medium uppercase px-5'>confident
                                            you.</p></>) :
                                    (<p
                                      className='text-white tracking-[0.5px] leading-normal text-[24px] mb-4 drop-shadow-lg font-medium uppercase px-5'>Temukan
                                        kepercayaan diri Anda dengan Luzenti.</p>)}
                                  <div className='mt-4 px-2'>
                                      <Link to={`/id/products`}
                                            className='py-2 uppercase font-medium tracking-[1.5px] block align-middle duration-500 text-[14px] text-center bg-blue-luzenti border-white hover:bg-white hover:text-blue-luzenti text-white mt-2'>{language === 'en' ? 'Shop Now' : 'Belanja Sekarang'}</Link>
                                  </div>
                              </div>

                              <div className='hidden md:flex md:flex-col justify-center items-center text-center'>
                                  <motion.div
                                    ref={ref7}
                                    initial='hidden'
                                    animate={controls7}
                                    variants={variantsFlyBottom}
                                  >
                                      <p
                                        className='text-white text-[40px] tracking-[3px] uppercase'>{language === 'en' ? 'Shop Luzenti for a radiant, confident you.' : 'Temukan kepercayaan diri Anda dengan Luzenti.'}</p>
                                  </motion.div>
                                  <motion.div
                                    ref={ref8}
                                    initial='hidden'
                                    animate={controls8}
                                    variants={variantsFlyBottom}
                                  >
                                      <div className='mt-6 px-2'>
                                          <a href={'/id/products'}
                                             className='py-2 uppercase tracking-[2px] block w-[150px] lg:w-[600px] align-middle duration-500 text-base border-white text-center bg-blue-luzenti hover:bg-backround-home text-white text-[] mt-2'>{language === 'en' ? 'Shop Now' : 'Belanja Sekarang'}</a>
                                      </div>
                                  </motion.div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>}
          {showContent && <MainFooter />}
      </>
    )
}
