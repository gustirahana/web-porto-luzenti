import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


import MainNavbarGold from '../../component/Navbar/mainNavbarGold';
import MainFooter from '../../component/Footer/mainFooter';


import {productData, carouselDetails,carouselDetailsEn} from '../../data/dataTwo';
import aboutProd from "../../assets/images/about/prod-about.svg";
import inovasiProd from "../../assets/images/inovasi-details.svg";
import productBalmBanner from "../../assets/images/products/cleansing-balm-banner.png";
import productEssenceBanner from "../../assets/images/products/essence-serum-banner.png";
import productSunsceneBanner from "../../assets/images/products/sunscreen.png";
import productBalmBannerMobile from "../../assets/images/products/ProdBlamMobile.png";
import productEssenceBannerMobile from "../../assets/images/products/ProdEssenceBannner.png";
import productSunsceneBannerMobile from "../../assets/images/products/ProdSunMobile.png";
import playVector from "../../assets/images/homepage/play-vector.svg";
import FeaturedArticles from "../../component/featured/featuredArticles";
import {useLanguage} from "../../LanguageContext";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import ModalVideo from 'react-modal-video';
import styles from '../../assets/css/Animation.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
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

const settings = {
    container: '.tiny-single-item',
    items: 1,
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 16,
}
export default function ProductsDetails() {
    const location = useLocation();
    const productId = location.pathname.split('/').pop();
    const product = productData.find(item => item.id === parseInt(productId));
    const [activeIndices, setActiveIndices] = useState([]);
    const { language, setLanguage } = useLanguage();
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');
    const [slidesPerView, setSlidesPerView] = useState(5);
    const [isOpen, setOpen] = useState(false);
    const [isOpenMobile, setOpenMobile] = useState(false);


    const handleVideoOpen = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setOpen(true);
    };

    const handleVideoOpenMobile = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setOpen(true);
    };

    const updateSlidesPerView = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            const filteredCarouselDetails = carouselDetails.filter((detail) => detail.subCat === product.subCat);
            if (filteredCarouselDetails > 5){
              setSlidesPerView(5);
            }
            setSlidesPerView(filteredCarouselDetails);
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

    const toggleAccordion = (index) => {
        // Check if the index is already in the activeIndices array
        const isActive = activeIndices.includes(index);

        // Toggle the index in the activeIndices array
        setActiveIndices(prevIndices =>
            isActive
                ? prevIndices.filter(item => item !== index) // Remove index if already active
                : [...prevIndices, index] // Add index if not active
        );
    };


    const categories = productData.find(item => item.name);

    const backgroundImageUrl = categories === 'Cleansing Balm' ? productBalmBanner : productEssenceBanner;

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

    const controls10 = useAnimation();
    const { ref: ref10, inView: inView10 } = useInView({
        threshold: 0.1
    });

    const controls11 = useAnimation();
    const { ref: ref11, inView: inView11 } = useInView({
        threshold: 0.1
    });

    const controls12 = useAnimation();
    const { ref: ref12, inView: inView12 } = useInView({
        threshold: 0.1
    });

    const controls13 = useAnimation();
    const { ref: ref13, inView: inView13 } = useInView({
        threshold: 0.1
    });

    const controls14 = useAnimation();
    const { ref: ref14, inView: inView14 } = useInView({
        threshold: 0.1
    });

    const controls15 = useAnimation();
    const { ref: ref15, inView: inView15 } = useInView({
        threshold: 0.1
    });

    const controls16 = useAnimation();
    const { ref: ref16, inView: inView16 } = useInView({
        threshold: 0.1
    });

    const controls17 = useAnimation();
    const { ref: ref17, inView: inView17 } = useInView({
        threshold: 0.1
    });

    const controls18 = useAnimation();
    const { ref: ref18, inView: inView18 } = useInView({
        threshold: 0.1
    });

    const controls19 = useAnimation();
    const { ref: ref19, inView: inView19 } = useInView({
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

    useEffect(() => {
        if (inView10) {
            controls10.start("visible");
        } else {
            controls10.start("hidden");
        }
    }, [controls10, inView10]);

    useEffect(() => {
        if (inView11) {
            controls11.start("visible");
        } else {
            controls11.start("hidden");
        }
    }, [controls11, inView11]);


    useEffect(() => {
        if (inView12) {
            controls12.start("visible");
        } else {
            controls12.start("hidden");
        }
    }, [controls12, inView12]);

    useEffect(() => {
        if (inView13) {
            controls13.start("visible");
        } else {
            controls13.start("hidden");
        }
    }, [controls13, inView13]);

    useEffect(() => {
        if (inView14) {
            controls14.start("visible");
        } else {
            controls14.start("hidden");
        }
    }, [controls14, inView14]);

    useEffect(() => {
        if (inView15) {
            controls15.start("visible");
        } else {
            controls15.start("hidden");
        }
    }, [controls15, inView15]);

    useEffect(() => {
        if (inView16) {
            controls16.start("visible");
        } else {
            controls16.start("hidden");
        }
    }, [controls16, inView16]);

    useEffect(() => {
        if (inView17) {
            controls17.start("visible");
        } else {
            controls17.start("hidden");
        }
    }, [controls17, inView17]);

    useEffect(() => {
        if (inView18) {
            controls18.start("visible");
        } else {
            controls18.start("hidden");
        }
    }, [controls18, inView18]);

    useEffect(() => {
        if (inView19) {
            controls19.start("visible");
        } else {
            controls19.start("hidden");
        }
    }, [controls19, inView19]);



    const variantsZoom = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8 }
    };

    const variantsFlyLeft = {
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0, 0, 1, 1] }  },
        hidden: { opacity: 0, x: -100 }
    };

    const variantsFlyTop = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: -100 }
    };


    const variantsFlyRight = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0, 0, 1, 1] }  },
        hidden: { opacity: 0, x: 100 }
    };

    const variantsFlyBottom = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 }
    };


    return (
        <>
            <MainNavbarGold />
            {/*desktop*/}
            <section className="">
                <div className="container-fluid relative">
                    <div className="relative py-48 table w-full overflow-hidden">
                        <div className={`absolute inset-0 bg-no-repeat bg-center ${styles.bgZoomLinear} bg-cover`} style={{ backgroundImage: `url(${product?.banner})` }}></div>
                        <div className="hidden md:block lg:px-[120px] xl:px-[120px] relative">
                            <div className="grid grid-cols-1 pt-8">
                                <div className="grid grid-cols-1">
                                    <motion.div
                                      ref={ref}
                                      initial="hidden"
                                      animate={controls}
                                      variants={variantsFlyBottom}
                                      className={`md:max-w-[200px] lg:max-w-[300px]`}
                                    >
                                        <h1 className="text-white lg:leading-normal leading-normal text-[18px] uppercase">{language === 'en'?'Product Type':'Jenis Produk'} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {product.cat === 'Cleansing Balm' ? 'cleansing' : 'serums'}</h1>
                                    </motion.div>
                                </div>
                                <div className="flex grid-cols-1 mt-[40px] max-w-xl">
                                    <motion.div
                                      ref={ref1}
                                      initial="hidden"
                                      animate={controls1}
                                      variants={variantsFlyBottom}
                                    >
                                      <h1 className="text-white leading-tight font-light lg:text-[55px] xl:text-[px] uppercase">
                                        {product ? product.name : 'Product Not Found'}
                                      </h1>
                                    </motion.div>
                                </div>
                                <div className="grid mt-[15px] grid-cols-1">
                                    <h1 className="text-white lg:leading-normal leading-normal font-light text-[24px] uppercase">
                                        <motion.div
                                          ref={ref2}
                                          initial="hidden"
                                          animate={controls2}
                                          variants={variantsFlyBottom}
                                        >
                                        {product ? product?.cat : 'essence in serum'}
                                        </motion.div>
                                    </h1>
                                </div>
                                <div className="flex-col justify-between mt-[40px] grid-cols-2 pt-8">
                                    <div className="col-span-1 flex grid-cols-2 gap-20">
                                        <div className="col-span-1">
                                            <motion.div
                                              ref={ref3}
                                              initial="hidden"
                                              animate={controls3}
                                              variants={variantsFlyBottom}
                                            >
                                            <div className="text-white tracking-[1px] font-light text-[12px] uppercase">
                                                {language ==='en' ? 'Size' : 'UKURAN'}
                                            </div>
                                            <h1 className="text-white lg:leading-normal leading-normal font-medium text-[17px] uppercase">
                                                {product ? product?.size : ''}
                                            </h1>
                                            </motion.div>
                                        </div>
                                        <div className="col-span-1">
                                            <motion.div
                                              ref={ref4}
                                              initial="hidden"
                                              animate={controls4}
                                              variants={variantsFlyBottom}
                                            >
                                            <div className="text-white tracking-[1px] font-light text-[12px]">
                                                {language === 'en' ? `RETAIL PRICE` : `HARGA RETAIL`}
                                            </div>
                                            <h1 className="text-white lg:leading-normal leading-normal font-medium text-[17px] uppercase">
                                                IDR {product ? product?.amount : ''}
                                            </h1>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="col-span-1 right-[120px] top-[40%] lg:absolute pb-4">
                                        <motion.div
                                          ref={ref5}
                                          initial="hidden"
                                          animate={controls5}
                                          variants={variantsFlyBottom}
                                        >
                                        <div className="text-white lg:leading-loose tracking-[1.5px] leading-normal font-light text-[24px] uppercase">
                                            {product.cat === 'Cleansing Balm' ? 'Deep Cleansing' : product.cat === 'Essence in Serum' ? 'REVITALIZING' : 'Cell Protection'}<br/>
                                            {product.cat === 'Cleansing Balm' ? 'Non Stripping' : product.cat === 'Essence in Serum' ? 'CALMING' : 'Antioxidant'}<br/>
                                            {product.cat === 'Cleansing Balm' ? 'Relaxing' : product.cat === 'Essence in Serum' ? 'EXTREMELY MOISTURIZING' : 'Anti-Pollution'}

                                        </div>
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="md:text-start text-start mt-[50px] pb-6">
                                    <div className="mt-0">
                                        <motion.div
                                          ref={ref6}
                                          initial="hidden"
                                          animate={controls6}
                                          variants={variantsFlyBottom}
                                        >
                                        <a
                                            href={product?.shopee}
                                            className="py-2 uppercase px-5 inline-block font-regular tracking-wide border align-middle duration-500 w-[35%] text-base text-center bg-cyan-500/10 hover:bg-blue-luzenti border-white hover:border-indigo-700 text-white me-2 mt-2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {language === 'en' ? 'Buy At Shopee' :  'Beli di Shopee'}
                                        </a>
                                        </motion.div>
                                    </div>
                                    <div className="mt-0">
                                        <motion.div
                                          ref={ref7}
                                          initial="hidden"
                                          animate={controls7}
                                          variants={variantsFlyBottom}
                                        >
                                        <a
                                            href={product?.tokopedia}
                                            className="py-2 uppercase px-5 inline-block font-regular tracking-wide border align-middle duration-500 w-[35%] text-base text-center bg-cyan-500/10 hover:bg-blue-luzenti border-white hover:border-indigo-700 text-white me-2 mt-2"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {language === 'en' ? 'Buy At Tokopedia' :  'Beli di Tokopedia'}
                                        </a>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*mobile*/}
            <section className="lg:hidden">
                <div className="container-fluid relative">
                    <div className="relative max-h-fit shadow-md overflow-hidden">
                        <div className="relative bg-backround-home">
                            <div className="px-5 grid grid-cols-1 pt-8 pb-10">
                                <div className="grid grid-cols-1">
                                    <div
                                      // ref={ref}
                                      // initial="hidden"
                                      // animate={controls}
                                      // variants={variantsFlyBottom}
                                    >
                                        <h1 className="text-white lg:leading-normal leading-normal text-[14px] uppercase">{language === 'en'?'Product Type':'Jenis Produk'} &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; {product.cat === 'Cleansing Balm' ? 'cleansing' : 'serums'}</h1>
                                    </div>
                                </div>
                                <div className="flex grid-cols-1 lg:mt-[40px] my-4 max-w-xl">
                                    <div
                                      // ref={ref1}
                                      // initial="hidden"
                                      // animate={controls1}
                                      // variants={variantsFlyBottom}
                                    >
                                        <h1 className="text-white leading-tight font-light lg:text-[60px] text-[50px] xl:text-[70px] uppercase">
                                            {product ? product.name : 'Product Not Found'}
                                        </h1>
                                    </div>
                                </div>
                                <div className="grid lg:mt-[15px] grid-cols-1">
                                    <h1 className="text-white lg:leading-normal leading-normal font-light text-[24px] uppercase">
                                        <div
                                          // ref={ref2}
                                          // initial="hidden"
                                          // animate={controls2}
                                          // variants={variantsFlyBottom}
                                        >
                                            {product ? product?.cat : 'essence in serum'}
                                        </div>
                                    </h1>
                                </div>
                                <div className="flex-col justify-between lg:mt-[40px] grid-cols-2 pt-4">
                                    <div className="col-span-1 right-[120px] top-[40%] lg:absolute">
                                        <div
                                          // ref={ref5}
                                          // initial="hidden"
                                          // animate={controls5}
                                          // variants={variantsFlyBottom}
                                        >
                                            <div className="text-white lg:leading-loose tracking-[1.5px] leading-normal font-normal text-[16px] uppercase">
                                                {product.cat === 'Cleansing Balm' ? 'Deep Cleansing' : product.cat === 'Essence in Serum' ? 'REVITALIZING' : 'Cell Protection'}<br/>
                                                {product.cat === 'Cleansing Balm' ? 'Non Stripping' : product.cat === 'Essence in Serum' ? 'CALMING' : 'Antioxidant'}<br/>
                                                {product.cat === 'Cleansing Balm' ? 'Relaxing' : product.cat === 'Essence in Serum' ? 'EXTREMELY MOISTURIZING' : 'Anti-Pollution'}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-1 flex grid-cols-2 mt-5 gap-20">
                                        <div className="col-span-1">
                                            <div
                                              // ref={ref3}
                                              // initial="hidden"
                                              // animate={controls3}
                                              // variants={variantsFlyBottom}
                                            >
                                                <div className="text-white tracking-[1px] font-light text-[12px] uppercase">
                                                    {language ==='en' ? 'Size' : 'UKURAN'}
                                                </div>
                                                <h1 className="text-white lg:leading-normal leading-normal font-medium text-[17px] uppercase">
                                                    {product ? product?.size : ''}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="col-span-1">
                                            <div>
                                                <div className="text-white tracking-[1px] font-light text-[12px]">
                                                    {language === 'en' ? `RETAIL PRICE` : `HARGA RETAIL`}
                                                </div>
                                                <h1 className="text-white lg:leading-normal leading-normal font-medium text-[17px] uppercase">
                                                    IDR {product ? product?.amount : ''}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:text-start text-start pt-2 pb-6">
                                    <div className="mt-1">
                                        <Link className="py-2 uppercase px-5 inline-block font-regular tracking-wide border align-middle duration-500 w-full text-base text-center bg-cyan-500/10 hover:bg-blue-luzenti border-white hover:border-indigo-700 text-white me-2 mt-2">{language === 'en' ? 'Buy At Shopee' : 'Beli di Shopee'}</Link>
                                    </div>
                                    <div className="mt-1">
                                    <Link className="py-2 uppercase px-5 inline-block font-regular tracking-wide border align-middle duration-500 w-full text-base text-center bg-cyan-500/10 hover:bg-blue-luzenti border-white hover:border-indigo-700 text-white me-2 mt-2">{language === 'en' ? 'Buy At Tokopedia' : 'Beli di Tokopedia'}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-0">
                <div className="lg:hidden col-span-1 grid-cols-3 pb-10">
                    <Carousel
                      responsive={responsive}
                      showDots={true}
                      infinite={true}
                      autoPlay={true}
                      autoPlaySpeed={5000}
                      keyBoardControl={true}
                      customTransition="all .5"
                      transitionDuration={5000}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["tablet", "mobile"]}
                      dotListClass="custom-dot-list-style"
                    >
                        <div className="my-8">
                            <img
                              src={product?.imageProdDetails ? product?.imageProdDetails : aboutProd}
                              className="object-fill"
                              alt="about product"
                            />
                        </div>
                        <div className="my-8">
                            <img
                              src={product?.imageProdDetails1 ? product?.imageProdDetails1 : aboutProd}
                              className="object-fill"
                              alt="about product"
                            />
                        </div>
                        <div className="my-8">
                            <img
                              src={product?.imageProdDetails2 ? product?.imageProdDetails2 : aboutProd}
                              className="object-fill"
                              alt="about product"
                            />
                        </div>
                    </Carousel>
                </div>
            </section>

            <section className="mt-0">
                <div className="container-fluid relative">
                    <div
                      className='grid lg:grid-cols-2 max-h-fit bg-white-bone pb-[100px] lg:px-[120px] overflow-hidden'>
                        <section className='mt-0'>
                            <motion.div
                              className='hidden lg:block col-span-1 grid-cols-3'
                              ref={ref8}
                              initial='hidden'
                              animate={controls8}
                              variants={variantsFlyLeft}
                            >
                                <div className='mt-20 max-h-full'>
                                    <div
                                      // ref={ref8}
                                      // initial="hidden"
                                      // animate={controls8}
                                      // variants={variantsFlyLeft}
                                    >
                                        <img src={product?.imageProdDetails ? product?.imageProdDetails : aboutProd}
                                             className='object-cover' alt='about product' />
                                    </div>
                                </div>
                                <div className='mt-2 max-h-full'>
                                    <div
                                      // ref={ref8}
                                      // initial="hidden"
                                      // animate={controls8}
                                      // variants={variantsFlyLeft}
                                    >
                                        <img src={product?.imageProdDetails1 ? product?.imageProdDetails1 : aboutProd}
                                             className='object-cover' alt='about product' />
                                    </div>
                                </div>
                                <div className='mt-2 max-h-full'>
                                    <div
                                      // ref={ref8}
                                      // initial="hidden"
                                      // animate={controls8}
                                      // variants={variantsFlyLeft}
                                    >
                                        <img src={product?.imageProdDetails2 ? product?.imageProdDetails2 : aboutProd}
                                             className='object-cover' alt='about product' />
                                    </div>
                                </div>
                            </motion.div>
                        </section>
                        <div className='col-span-1 mt-20'>
                            <div className='relative text-center text-[24px]'></div>
                            <div className='relative text-center lg:pl-[5%]'>
                                <motion.div
                                  ref={ref9}
                                  initial='hidden'
                                  animate={controls9}
                                  variants={variantsFlyBottom}
                                >
                                    <p className='text-[17px] px-5 text-left'>{product?.desc}
                                    </p>
                                </motion.div>
                            </div>
                            <div className='pt-5 lg:pl-[5%]'>
                                <motion.div
                                  ref={ref14}
                                  initial='hidden'
                                  animate={controls14}
                                  variants={variantsFlyBottom}
                                >
                                    <div id='accordion-collapseone' data-accordion='collapse'>
                                        <div className='relative dark:shadow-gray-800 overflow-hidden mt-4'>
                                            <h2 className='text-base font-semibold' id='accordion-collapse-heading-1'>
                                                <button type='button' onClick={() => toggleAccordion(0)}
                                                        className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndices.includes(0) ? 'dark:bg-slate-800 text-indigo-600' : ''}`}
                                                        data-accordion-target='#accordion-collapse-body-1'
                                                        aria-expanded='true' aria-controls='accordion-collapse-body-1'>
                                                    <span
                                                      className='text-[24px] text-blue-luzenti tracking-[1.5px]'>{language === 'en' ? 'KEY INGREDIENTS' : 'KANDUNGAN'}</span>
                                                    <svg
                                                      className={`text-blue-luzenti ${activeIndices.includes(0) ? 'rotate-180' : 'rotate-270'} size-4 shrink-01`}
                                                      fill='currentColor' viewBox='0 0 20 20'
                                                      xmlns='http://www.w3.org/2000/svg'>
                                                        <path fillRule='evenodd'
                                                              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                              clipRule='evenodd'></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            <div id='accordion-collapse-body-0'
                                                 className={`${activeIndices.includes(0) ? 'block' : 'hidden'}`}>
                                                <div className='p-5'>
                                                    <motion.div
                                                      ref={ref55}
                                                      initial='hidden'
                                                      animate={controls55}
                                                      variants={variantsFlyBottom}
                                                    >
                                                        <p
                                                          dangerouslySetInnerHTML={{ __html: product.ingredients.replace(/\n/g, '<br/>') }} />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='relative dark:shadow-gray-800 overflow-hidden mt-4'>
                                            <h2 className='text-base font-semibold' id='accordion-collapse-heading-2'>
                                                <button type='button' onClick={() => toggleAccordion(1)}
                                                        className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndices.includes(1) ? 'dark:bg-slate-800 text-indigo-600' : ''}`}
                                                        data-accordion-target='#accordion-collapse-body-2'
                                                        aria-expanded='true' aria-controls='accordion-collapse-body-2'>
                                                    <span
                                                      className='text-[24px] text-blue-luzenti tracking-[1.5px]'>{language === 'en' ? 'HOW TO USE' : 'CARA PEMAKAIAN'}</span>
                                                    <svg
                                                      className={`text-blue-luzenti ${activeIndices.includes(1) ? 'rotate-180' : 'rotate-270'} size-4 shrink-01`}
                                                      fill='currentColor' viewBox='0 0 20 20'
                                                      xmlns='http://www.w3.org/2000/svg'>
                                                        <path fillRule='evenodd'
                                                              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                              clipRule='evenodd'></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            <div id='accordion-collapse-body-1'
                                                 className={`${activeIndices.includes(1) ? 'block' : 'hidden'}`}>
                                                <div className='p-5'>
                                                    <motion.div
                                                      ref={ref11}
                                                      initial='hidden'
                                                      animate={controls11}
                                                      variants={variantsFlyBottom}
                                                    >
                                                        <p
                                                          dangerouslySetInnerHTML={{
                                                              __html: product.howTo
                                                                .split('\n')
                                                                .map(line => `&bull; ${line}`)
                                                                .join('<br/>')
                                                          }}
                                                        />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='relative dark:shadow-gray-800 overflow-hidden mt-4'>
                                            <h2 className='text-base font-semibold' id='accordion-collapse-heading-4'>
                                                <button type='button' onClick={() => toggleAccordion(3)}
                                                        className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndices.includes(3) ? 'dark:bg-slate-800 text-indigo-600' : ''}`}
                                                        data-accordion-target='#accordion-collapse-body-4'
                                                        aria-expanded='true' aria-controls='accordion-collapse-body-4'>
                                                    <span
                                                      className='text-[24px] text-blue-luzenti tracking-[1.5px]'>{language === 'en' ? 'BENEFITS' : 'MANFAAT PERAWATAN'}</span>
                                                    <svg
                                                      className={`text-blue-luzenti ${activeIndices.includes(3) ? 'rotate-180' : 'rotate-270'} size-4 shrink-01`}
                                                      fill='currentColor' viewBox='0 0 20 20'
                                                      xmlns='http://www.w3.org/2000/svg'>
                                                        <path fillRule='evenodd'
                                                              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                              clipRule='evenodd'></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            <div id='accordion-collapse-body-3'
                                                 className={`${activeIndices.includes(3) ? 'block' : 'hidden'}`}>
                                                <motion.div
                                                  ref={ref19}
                                                  initial='hidden'
                                                  animate={controls19}
                                                  variants={variantsFlyBottom}
                                                >
                                                    <div className='min-h-[120px] p-5'>
                                                        <p
                                                          dangerouslySetInnerHTML={{ __html: product?.manfaatProd.replace(/\n/g, '<br/>') }} />
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                        <div className='relative dark:shadow-gray-800 overflow-hidden mt-4'>
                                            <h2 className='text-base font-semibold' id='accordion-collapse-heading-5'>
                                                <button type='button' onClick={() => toggleAccordion(4)}
                                                        className={`flex justify-between items-center p-5 w-full font-medium text-start ${activeIndices.includes(4) ? 'dark:bg-slate-800 text-indigo-600' : ''}`}
                                                        data-accordion-target='#accordion-collapse-body-5'
                                                        aria-expanded='true' aria-controls='accordion-collapse-body-5'>
                                                    <span
                                                      className='text-[24px] text-blue-luzenti tracking-[1.5px]'>{language === 'en' ? 'OTHER INFORMATION' : 'INFORMASI LAINNYA'}</span>
                                                    <svg
                                                      className={`text-blue-luzenti ${activeIndices.includes(4) ? 'rotate-180' : 'rotate-270'} size-4 shrink-01`}
                                                      fill='currentColor' viewBox='0 0 20 20'
                                                      xmlns='http://www.w3.org/2000/svg'>
                                                        <path fillRule='evenodd'
                                                              d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                                                              clipRule='evenodd'></path>
                                                    </svg>
                                                </button>
                                            </h2>
                                            <div id='accordion-collapse-body-4'
                                                 className={`${activeIndices.includes(4) ? 'block' : 'hidden'}`}>
                                                <motion.div
                                                  ref={ref13}
                                                  initial='hidden'
                                                  animate={controls13}
                                                  variants={variantsFlyBottom}
                                                >
                                                    <div className='p-5'>
                                                        <p>{language === 'en' ? 'Country:' : 'Negara:'} {product?.manufacturDetails?.country}</p>
                                                        <p>{language === 'en' ? 'Storage Period:' : 'Masa Penyimpanan:'} {product?.manufacturDetails?.storageAge}</p>
                                                        <p>BPOM: {product?.manufacturDetails?.noIzin}</p>
                                                        <p>{language === 'en' ? 'Barcode No:' : 'No Barcode:'} {product?.manufacturDetails?.noBarcode}</p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='hidden lg:block'>
                <div className='relative'>
                    <div className='relative py-2 table w-full overflow-hidden'>
                        <div
                          className={`absolute inset-0 bg-no-repeat bg-right bg-cover ${styles.bgZoomLinear}`}
                          style={{ backgroundImage: `url(${product.cat === 'Cleansing Balm' ? productBalmBanner : product.cat === 'Essence in Serum' ? productEssenceBanner : productSunsceneBanner})` }}
                        ></div>
                        <div className='mx-20 relative lg:h-[500px]'>
                            <div className='grid grid-cols-1 lg:max-w-[650px] xl:max-w-[650px]'>
                                <div className='col-span-1 lg:px-10 lg:mt-[20vh]'>
                                    <motion.div
                                      ref={ref15}
                                      initial='hidden'
                                      animate={controls15}
                                      variants={variantsFlyBottom}
                                    >
                                        <div
                                          className={`relative text-left font-medium text-blue-luzenti tracking-[2px] text-[22px] ${product.cat === 'Cleansing Balm' || product.subCat === 'Perlindungan Matahari' ? 'text-blue-luzenti' : 'text-white'} `}>
                                            {product.subCat === 'Perlindungan Matahari' ? 'The Next Generation Sunscreen' : 'INOVASI FORMULA ESSENCE 2 LAYER'}
                                        </div>
                                    </motion.div>
                                    <div className='relative mt-10'>
                                        <motion.div
                                          ref={ref16}
                                          initial='hidden'
                                          animate={controls16}
                                          variants={variantsFlyBottom}
                                        >
                                            <p
                                              className={`text-[16px] text-left ${product.cat === 'Cleansing Balm' || product.subCat === 'Perlindungan Matahari' ? 'text-black' : 'text-white'}`}>
                                                {product.subCat === 'Perlindungan Matahari' ? 'Next generation sunscreen dengan encapsulation technology yang memberikan broad spectrum protection, melindungi kulit dari efek buruk dan penuaan dini akibat paparan sinar matahari. Teksturnya cair, ringan dan mudah meresap, serta tidak lengket di kulit.'
                                                  : 'Inovasi formula essence 2 layer berwarna biru mampu memberikan efek melembapkan yang optimal dan rasakan sensory feel nya yang mewah dan sangat lembut pada wajah setelah digunakan.Membantu melindungi wajah dari inflamasi dan iritasi.'}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='block lg:hidden'>
                <div className='relative'>
                    <div className='relative py-48 table w-full min-h-[700px] overflow-hidden'>
                        <div
                          className={`absolute inset-0 bg-no-repeat bg-cover ${styles.bgZoomLinear}`}
                          style={{ backgroundImage: `url(${product.cat === 'Cleansing Balm' ? productBalmBannerMobile : product.cat === 'Essence in Serum' ? productEssenceBannerMobile : productSunsceneBannerMobile})` }}
                        ></div>
                        <div className='mx-8 absolute bottom-[10%]'>
                            <div className='grid grid-cols-1 lg:max-w-[650px] xl:max-w-[650px]'>
                                <div className='col-span-1 lg:px-10 xl:pt-[5%]'>
                                    <div
                                    >
                                        <div className={`relative text-left font-medium tracking-[2px] text-[21px] ${product.cat === 'Cleansing Balm' || product.subCat === 'Perlindungan Matahari' ? 'text-blue-luzenti' : 'text-white'} `}>{product.subCat === 'Perlindungan Matahari' ? 'The Next Generation Sunscreen' : 'INOVASI FORMULA ESSENCE 2 LAYER'}</div>
                                    </div>
                                    <div className="relative mt-10">
                                        <div
                                        >
                                            <p className={`text-[16px] text-left ${product.cat === 'Cleansing Balm' || product.subCat === 'Perlindungan Matahari' ? 'text-black' : 'text-white'}`}>
                                                {product.subCat === 'Perlindungan Matahari' ? 'Next generation sunscreen dengan encapsulation technology yang memberikan broad spectrum protection, melindungi kulit dari efek buruk dan penuaan dini akibat paparan sinar matahari. Teksturnya cair, ringan dan mudah meresap, serta tidak lengket di kulit.'
                                                  : 'Inovasi formula essence 2 layer berwarna biru mampu memberikan efek melembapkan yang optimal dan rasakan sensory feel nya yang mewah dan sangat lembut pada wajah setelah digunakan.Membantu melindungi wajah dari inflamasi dan iritasi.'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {(product.cat === 'Essence in Serum' || product.cat === 'Cleansing Balm') &&
              (<div className="relative mt-[50px] lg:mt-[100px]">
                <motion.div
                  ref={ref17}
                  animate={controls17}
                  variants={variantsFlyBottom}
                >
                    <div className="grid grid-cols-1 items-center">
                        <h3 className="text-[21px] lg:text-[30px] tracking-[2px] leading-normal text-center text-blue-luzenti">
                            {language === 'en' ? 'WHAT THEY SAY' : 'APA KATA MEREKA'}
                        </h3>
                    </div>
                </motion.div>
                {/*desktop*/}
                <section id="controls-carousel" className="hidden lg:block mt-[50px]">
                    <div className="overflow-hidden mx-32 min-h-[300px] relative inset-0 flex justify-center first:w-auto">
                        <Swiper
                          className="swiper-wrapper"
                          spaceBetween={5}
                          allowSlideNext={false}
                          allowSlidePrev={false}
                          slidesPerView={slidesPerView}
                          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                          autoplay={{
                              delay: 5000,
                              disableOnInteraction: true,
                          }}
                        >
                            {(language === 'en' ? carouselDetailsEn : carouselDetails)  && product && carouselDetails.length > 0 ? (
                              (language === 'en' ? carouselDetailsEn : carouselDetails)
                                .filter(detail => {
                                    return detail.subCat === product.subCat;
                                })
                                .map((detail, index) => (
                                  <SwiperSlide key={index}>
                                      <motion.div
                                        ref={ref18}
                                        animate={controls18}
                                        variants={variantsZoom}
                                        className="group relative overflow-hidden aspect-9/16 hover:dark:shadow-gray-800 transition-all duration-500 text-center"
                                      >
                                          <div
                                            className="relative dark:shadow-gray-800 h-full w-auto block mx-auto bg-cover bg-center filter blur-md transition ease-in-out duration-300 group-hover:blur-none"
                                            style={{ backgroundImage: `url(${detail.image})` }}
                                          >

                                              <div
                                                className="absolute inset-0 bg-gradient-to-t aspect-9/16 from-blue-luzenti to-transparent transition ease-in-out duration-300"
                                              ></div>
                                          </div>
                                          <div className="absolute inset-0 flex items-center justify-center">
                                              <Link onClick={() => handleVideoOpen(detail.url)} className="lightbox max-w-full max-h-full">
                                                  <img src={playVector} className="object-fill group-hover:hidden size-20" alt="play" />
                                                  <div className="hidden group-hover:flex items-center justify-center w-20 h-20 rounded-full bg-white">
                                                      <span className="text-blue-luzenti font-semibold uppercase">Watch Video</span>
                                                  </div>
                                              </Link>
                                              <div className="absolute text-white tracking-[1px] text-[18px] bottom-[72px]">{detail.name}</div>
                                              <div className="absolute text-white tracking-[1px] text-[12px] font-light bottom-12 uppercase">{detail.title}</div>
                                          </div>
                                      </motion.div>
                                  </SwiperSlide>
                                ))
                            ) : (
                              <div>No Testimonies found.</div>
                            )}
                        </Swiper>
                        <ModalVideo
                          channel='custom'
                          ratio={'9:16'}
                          autoplay
                          isOpen={isOpen}
                          url={currentVideoUrl}
                          onClose={() => setOpen(false)}
                        />
                    </div>
                </section>

                {/*mobile*/}
                <section id="controls-carousel" className="relative lg:hidden mt-[50px]">
                    <div
                      className="relative pb-[30px] inset-0">
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
                          containerClass="carousel-container"
                          dotListClass="custom-dot-list-style"
                          itemClass="carousel-item-padding-40-px"
                        >
                            {carouselDetails
                              .filter(detail => {
                                  return detail.subCat === product.subCat;
                              })
                              .map((detail, index) => (
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
                                          <Link onClick={() => handleVideoOpenMobile(detail.url)}
                                                className="lightbox max-w-full max-h-full">
                                              <img src={playVector} className="object-fill group-hover:hidden size-24"
                                                   alt="play" />
                                              <div
                                                className="hidden group-hover:flex items-center justify-center w-24 h-24 rounded-full bg-white">
                                                <span
                                                  className="text-blue-luzenti font-semibold uppercase">Watch Video</span>
                                              </div>
                                          </Link>
                                          <div className="absolute text-white tracking-[1px] text-[21px] lg:text-[18px] bottom-[90px]">{detail.name}</div>
                                          <div className="absolute text-white tracking-[1px] text-[16px] lg:text-[12px] font-light bottom-14 uppercase">{detail.title}</div>
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
                      onClose={() => setOpen(false)}
                    />
                </section>
            </div>)}


            <section className="relative py-2 mb-[150px]">
                <div className="px-0 relative mt-[92px]">
                    <div className="grid md:grid-cols-1 grid-cols-1 items-center">
                        <div className="text-center">
                            <h3 className="text-[21px] lg:text-[30px] text-blue-luzenti leading-normal tracking-[1.5px]">{language === 'en' ? 'RELATED ARTICLES' : 'ARTIKEL TERKAIT' }</h3>
                        </div>
                    </div>
                    <FeaturedArticles language={language}/>
                </div>
            </section>

         <MainFooter/>
        </>
    )
}
