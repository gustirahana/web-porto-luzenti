import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';


import MainFooter from '../../component/Footer/mainFooter';
import MainNavbar from '../../component/Navbar/mainNavbar';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import aboutProd from "../../assets/images/about/prod-about.png";
import aboutNatureSm from "../../assets/images/about/nature-sm.svg";
import aboutNatureMd from "../../assets/images/about/nature-md.svg";
import aboutNatureLg from "../../assets/images/about/nature-lg.svg";
import backgroundHome2 from "../../assets/images/homepage/ashwagandhasm.png";
import {useLanguage} from "../../LanguageContext";
import FeaturedProduct from "../../component/featured/featuredProducts";
import FeaturedArticles from "../../component/featured/featuredArticles";

import styles from '../../assets/css/Animation.module.css';
import IntroVideo from "../../assets/glitter2.mp4";
import MainNavbarGold from '../../component/Navbar/mainNavbarGold';
import IntroVideoMobile2 from '../../assets/glitterMobile.mp4';
import ProdAboutCarousel from '../../component/carousels/carouselAbout';

export default function IndexShop() {
    const { language, setLanguage } = useLanguage();
    const [isInView, setIsInView] = useState(false);

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

    // motion animation controller, just edit this
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
        threshold: 0.1 // Trigger when 80% of the element is in view
    });

    const controls21 = useAnimation();
    const { ref: ref21, inView: inView21 } = useInView({
        threshold: 0.1 // Trigger when 80% of the element is in view
    });

    const controls3 = useAnimation();
    const { ref: ref3, inView: inView3 } = useInView({
        threshold: 0.5
    });

    const controls31 = useAnimation();
    const { ref: ref31, inView: inView31 } = useInView({
        threshold: 0.5
    });

    const controls32 = useAnimation();
    const { ref: ref32, inView: inView32 } = useInView({
        threshold: 0.5
    });

    const controls4 = useAnimation();
    const { ref: ref4, inView: inView4 } = useInView({
        threshold: 0.1
    });

    const controls5 = useAnimation();
    const { ref: ref5, inView: inView5 } = useInView({
        threshold: 0.1
    });

    const controls51 = useAnimation();
    const { ref: ref51, inView: inView51 } = useInView({
        threshold: 0.1
    });

    const controls52 = useAnimation();
    const { ref: ref52, inView: inView52 } = useInView({
        threshold: 0.1
    });

    const controls53 = useAnimation();
    const { ref: ref53, inView: inView53 } = useInView({
        threshold: 0.1
    });

    const controls55 = useAnimation();
    const { ref: ref55, inView: inView55 } = useInView({
        threshold: 0.1
    });

    const controls6 = useAnimation();
    const { ref: ref6, inView: inView6 } = useInView({
        threshold: 0.5
    });

    const controls61 = useAnimation();
    const { ref: ref61, inView: inView61 } = useInView({
        threshold: 0.5
    });
    const controls62 = useAnimation();
    const { ref: ref62, inView: inView62 } = useInView({
        threshold: 0.5
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
        if (inView21) {
            controls21.start("visible");
        } else {
            controls21.start("hidden");
        }
    }, [controls21, inView21]);

    useEffect(() => {
        if (inView3) {
            controls3.start("visible");
        } else {
            controls3.start("hidden");
        }
    }, [controls3, inView3]);
    useEffect(() => {
        if (inView31) {
            controls31.start("visible");
        } else {
            controls31.start("hidden");
        }
    }, [controls31, inView31]);

    useEffect(() => {
        if (inView32) {
            controls32.start("visible");
        } else {
            controls32.start("hidden");
        }
    }, [controls32, inView32]);


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
        if (inView51) {
            controls51.start("visible");
        } else {
            controls51.start("hidden");
        }
    }, [controls51, inView51]);

    useEffect(() => {
        if (inView52) {
            controls52.start("visible");
        } else {
            controls52.start("hidden");
        }
    }, [controls52, inView52]);

    useEffect(() => {
        if (inView53) {
            controls53.start("visible");
        } else {
            controls53.start("hidden");
        }
    }, [controls53, inView53]);

    useEffect(() => {
        if (inView55) {
            controls55.start("visible");
        } else {
            controls55.start("hidden");
        }
    }, [controls55, inView55]);

    useEffect(() => {
        if (inView6) {
            controls6.start('visible').then(() => {
                controls61.start('visible').then(() => {
                    controls62.start('visible');
                });
            });
        }
    }, [inView6, controls6, controls61, controls62]);

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

    const variantsZoom = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
        hidden: { opacity: 0, scale: 0.8 }
    };

    const variantsFlyLeft = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: -100 }
    };

    const variantsFlyTop = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: -100 }
    };


    const variantsFlyRight = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 100 }
    };

    const variantsFlyBottom = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 }
    };

    return (
        <>
            <MainNavbarGold />
            <section className="hidden lg:block">
                <div className="container-fluid relative">
                    <div className="relative py-48 table w-full min-h-screen overflow-hidden">
                        <video
                            playsInline
                            id="introVideo2"
                            autoPlay
                            loop
                            muted
                            className="absolute object-fill w-full h-full inset-0"
                        >
                            <source src={IntroVideo} type="video/mp4" />
                        </video>
                            <div className="absolute bottom-[30%] left-0 w-full">
                                <div className="flex-row gap-0 grid-cols-2 lg:max-w-[780px] xl:max-w-3xl mx-auto text-center">
                                    <div className="row-span-1 md:text-start mt-10">
                                        <motion.div
                                            ref={ref6}
                                            initial="hidden"
                                            animate={controls6}
                                            variants={variantsFlyBottom}
                                            transition={{ delay: 0.1 }}
                                        >
                                        <p
                                            className={`text-white text-2xl  text-start ${
                                                language === 'en' ? 'lg:text-[90px]' : 'lg:text-[90px]'
                                            }`}
                                        >
                                            LIGHT
                                        </p>
                                        </motion.div>
                                    </div>
                                    <div className='flex flex-nowrap'>
                                        <div className="ml-[10%] flex text-start mt-10">
                                            <motion.div
                                                ref={ref61}
                                                initial="hidden"
                                                animate={controls61}
                                                variants={variantsFlyBottom}
                                                transition={{ delay: 1 }}
                                            >
                                            <p
                                                className={`text-white pt-6 text-2xl ${
                                                    language === 'en' ? 'lg:text-[54px]' : 'lg:text-[54px]'
                                                }`}
                                            >
                                                OF
                                            </p>
                                            </motion.div>
                                        </div>
                                        <div className="ml-[4%] mt-10">
                                            <motion.div
                                                ref={ref62}
                                                initial="hidden"
                                                animate={controls62}
                                                variants={variantsFlyBottom}
                                                transition={{ delay: 2 }}
                                            >
                                            <p
                                                className={`text-white text-2xl pt-8 text-start ${
                                                    language === 'en' ? 'lg:text-[90px]' : 'lg:text-[90px]'
                                                }`}
                                            >
                                                YOUR SKIN
                                            </p>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <section>
                    <div className="relative lg:block">
                        <div className="relative max-h-fit overflow-hidden">
                            <div className="relative text-center mx-5 mt-12 lg:mt-12 lg:my-12 sm:p-[5%]">
                                <motion.div
                                  ref={ref}
                                  initial="hidden"
                                  animate={controls}
                                  variants={variantsFlyBottom}
                                >
                                    <p className="text-[15px] text-black lg:text-[17px] text-center max-w-[750px] mx-auto">
                                        {language === 'en'
                                          ? 'LUZENTI Skincare is a local brand established in 2022 in Indonesia, with the mission of being a pioneer and trendsetter in the skincare industry through safe and high-quality products. We are committed to providing halal and natural skincare with safe, premium ingredients, to help women in their journey of appreciating themselves and their lives.'
                                          : 'LUZENTI Skincare adalah brand lokal yang didirikan pada tahun 2022 di Indonesia, dengan misi menjadi pelopor dan trendsetter dalam industri skincare melalui produk yang aman, serta berkualitas tinggi. Komitmen kami menyediakan skincare yang halal dan natural dengan bahan baku yang aman dan premium yang dapat membantu wanita menghargai dirinya sendiri dan kehidupannya.'}
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className='lg:hidden'>
                <div className="container-fluid relative">
                    <div className="relative table w-full overflow-hidden">
                        <video
                          id="introVideo2"
                          playsInline
                          autoPlay
                          loop
                          muted
                          className="object-contain inset-0"
                          style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }}
                        >
                            <source src={IntroVideoMobile2} type="video/mp4" />
                        </video>
                        <div className="absolute bottom-24 md:bottom-[30%] left-[47%] transform -translate-x-1/2">
                            <div className="flex flex-col max-w-[700px] xl:max-w-3xl mx-auto text-center">
                                <div className="row-span-1 leading-relaxed md:text-start mt-10">
                                    <p
                                      className={`text-white text-[40px] leading-[20px] text-start ${
                                        language === 'en' ? 'md:text-[60px]' : 'md:text-[60px]'
                                      }`}
                                    >
                                        LIGHT
                                    </p>
                                </div>
                                <div className="flex flex-nowrap">
                                    <div className="ml-[10%] flex text-start">
                                        <p
                                          className={`text-white text-[22px] mt-2 ${
                                            language === 'en' ? 'md:text-[22px]' : 'md:text-[22px]'
                                          }`}
                                        >
                                            OF
                                        </p>
                                    </div>
                                    <div className="ml-[4%] min-w-[250px]">
                                        <p
                                          className={`text-white text-[40px] text-start ${
                                            language === 'en' ? 'md:text-[40px]' : 'md:text-[40px]'
                                          }`}
                                        >
                                            YOUR SKIN
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="relative lg:block">
                        <div className="relative max-h-fit overflow-hidden">
                            <div className="relative text-center mx-5 my-14 lg:mt-12 lg:my-12 sm:p-[5%]">
                                <div
                                >
                                    <p className="text-[15px] text-black lg:text-[17px] text-center max-w-[750px] mx-auto">
                                        {language === 'en'
                                          ? 'LUZENTI Skincare is a local brand established in 2022 in Indonesia, with the mission of being a pioneer and trendsetter in the skincare industry through safe and high-quality products. We are committed to providing halal and natural skincare with safe, premium ingredients, to help women in their journey of appreciating themselves and their lives. \n'
                                          : 'LUZENTI Skincare adalah brand lokal yang didirikan pada tahun 2022 di Indonesia, dengan misi menjadi pelopor dan trendsetter dalam industri skincare melalui produk yang aman, serta berkualitas tinggi. Komitmen kami menyediakan skincare yang halal dan natural dengan bahan baku yang aman dan premium yang dapat membantu wanita menghargai dirinya sendiri dan kehidupannya.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>


            <section>
                <div className="container-fluid sm:pt-[60px] md:pt-0 relative">
                    <div className="grid lg:grid-cols-2 max-h-fit overflow-hidden">
                        <div className="col-span-1">
                            <img id="animated-background" src={aboutProd} className={`object-cover h-full w-full ${isInView ? styles.bgZoom : ''}`} alt="about product" />
                        </div>
                        <div className="col-span-1 bg-white-bone pt-8 pb-[60px] lg:py-16">
                            <motion.div
                                ref={ref1}
                                initial="hidden"
                                animate={controls1}
                                variants={variantsFlyBottom}
                            >
                            <div className={`relative text-center text-blue-luzenti font-medium tracking-[2px] text-[21px] lg:text-[24px] m-5 py-[2%] ${language === 'en' ? 'sm:pt-[1%]' : 'sm:py-[1%]'} `}>{language === 'en' ? 'LUZENTI’S BEGINNINGS' : 'AWAL MULA LUZENTI'}</div>
                            </motion.div>
                            <div className="relative text-center m-2 lg:py-[2%] sm:px-[5%]">
                            <motion.div
                                ref={ref2}
                                initial="hidden"
                                animate={controls2}
                                variants={variantsFlyBottom}
                            >
                                <p className={`text-[16px] text-balance lg:text-[16px] xl:text-[17px] text-center max-w-[750px] mx-3 lg:mx-8`}>
                                    {language === 'en' ?
                                    'Stress due to sudden lifestyle changes and drastic changes in the workplace environment have caused signs of aging, even for those with relatively young age. The heightened worry about pollution and environmental effects in the society exacerbates the already existing stress in our daily life. All of this affects our general well-being, including our skin. \n' :
                                    'Stres karena perubahan gaya hidup yang mendadak dan lingkungan pekerjaan yang berubah drastis telah menimbulkan tanda - tanda penuaan, bahkan pada mereka yang masih berusia muda. Meningkatnya kecemasan masyarakat akan polusi dan paparan lingkungan pun memperparah tekanan hidup yang sudah ada. Semua ini memiliki pengaruh terhadap kesehatan kulit dan secara keseluruhan.'
                                    }
                                </p>
                            </motion.div>
                            </div>
                            <div className="relative text-center mx-2 mt-2 pt-[2%] sm:px-[5%]">
                                <motion.div
                                    ref={ref21}
                                    initial="hidden"
                                    animate={controls21}
                                    variants={variantsFlyBottom}
                                    transition={{ delay: 2.5 }}
                                >
                                <p className={`text-[16px] lg:text-[16px] xl:text-[17px] text-center max-w-[750px] mx-3 lg:mx-8 text-balance`}>
                                    {language === 'en' ? 'The stressful conditions which influence the skin becomes the impetus for Luzenti Skincare as our breakthrough. As the name suggests, ‘luz en ti’, which means ‘light in you’, Luzenti wants our customers to rediscover hope and light in their lives.'
                                    : 'Kondisi stres yang berdampak pada kulit ini kemudian menjadi dasar utama kami untuk memberikan terobosan baru melalui LUZENTI Skincare. Seperti namanya, ‘luz en ti’ yang berarti ‘cahaya dalam dirimu’, Luzenti menginginkan pelanggannya untuk kembali menemukan harapan dan kebahagiaan dalam hidupnya.'
                                    }
                                </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="my-[60px] lg:my-20 px-[2%] lg:px-0">
                <div className="container-fluid relative">
                    <div className="relative max-h-fit overflow-hidden">
                        <div className="relative text-center mx-2">
                            <motion.div
                                ref={ref8}
                                initial="hidden"
                                animate={controls8}
                                variants={variantsFlyBottom}
                            >
                            <p className="text-[21px] text-balance lg:text-[23px] text-blue-luzenti text-center tracking-[2px] font-medium lg:mt-8 max-w-[700px] mx-2 lg:mx-auto">

                                {language === 'en' ? 'A SKINCARE FORMULA THAT FEELS LUXURIOUS YET CALMING ON THE SKIN'
                                : 'FORMULA PERAWATAN KULIT YANG TERASA MEWAH PADA KULIT TETAPI JUGA MENENANGKAN'
                                }
                            </p>
                            </motion.div>
                        </div>
                        <div className="relative text-center mt-8 lg:my-8 sm:px-[5%]">
                            <motion.div
                                ref={ref7}
                                initial="hidden"
                                animate={controls7}
                                variants={variantsFlyBottom}
                            >
                            <p className="lg:text-[17px] text-[16px] text-center max-w-[900px] text-balance mx-3 lg:mx-auto">
                                {language === 'en' ? 'LUZENTI emerges with a new concept of adaptogenic skincare. Luzenti products have the functional effect of alleviating the impact of stress on the skin and giving a calming, stress-relieving emotional effect. Adaptogen is a substance that is often found in herbal medication, known for its property of reducing negative effects of fatigue and stress. The name adaptogen has roots in the substance’s ability to adapt to the body’s needs. \n'
                                  :
                                'LUZENTI hadir dengan mengusung konsep baru, skincare adaptogen. Produk - produk Luzenti memberikan efek fungsional mengurangi dampak stres pada kulit dan efek emosional yang menenangkan dan mengurangi stres. Adaptogen adalah zat yang banyak ditemui dalam pengobatan herbal dikenal karena mengurangi efek fatigue dan hal-hal negatif yang timbul karena stres. Nama adaptogen terlahir dari sifat zat tersebut yang bisa beradaptasi terhadap kebutuhan tubuh. '
                                }
                            </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/*desktop section 2*/}
            <section className="hidden lg:block">
                <div className="relative">
                    <div className="relative py-48 table w-full overflow-hidden">
                        <div id="animated-background" className={`absolute inset-0 flex-shrink-0 bg-home-background-ash bg-center bg-no-repeat bg-cover ${isInView ? styles.bgZoom2 : ''}`}></div>
                        <div className="relative pl-[58%] pr-32">
                            <div className="grid-cols-1">
                                <div className="grid-cols-1">
                                    <motion.div
                                      ref={ref3}
                                      initial="hidden"
                                      animate={controls3}
                                      variants={variantsFlyBottom}
                                    >
                                        <h1 className="text-white lg:leading-normal leading-normal text-[14px] tracking-[2px] font-medium">
                                            {language === 'en' ? 'INDULGING YOUR SKINCARE WITH' : 'PERAWATAN MENGGUNAKAN'}
                                        </h1>
                                    </motion.div>
                                </div>
                                <div className="grid-cols-1">
                                    <motion.div
                                      ref={ref31}
                                      initial="hidden"
                                      animate={controls31}
                                      variants={variantsFlyBottom}
                                      transition={{ delay: 1 }}
                                    >
                                        <h1 className="text-white lg:leading-normal leading-normal text-[30px] tracking-[2px] font-medium">
                                            {language === 'en' ? 'ASHWAGANDHA' : 'ADAPTOGEN'}
                                        </h1>
                                    </motion.div>
                                </div>
                                <div className="md:text-start text-center mt-8">
                                    <motion.div
                                      ref={ref32}
                                      initial="hidden"
                                      animate={controls32}
                                      variants={variantsFlyBottom}
                                      transition={{ delay: 2 }}
                                    >
                                        <p className="text-white text-[16px] font-light">
                                            {language === 'en'
                                              ? 'Adaptogens are believed to slow down skin aging, especially since premature aging often results from stress. One example of an adaptogen is Ashwagandha, which is used as a key ingredient in Luzenti\'s product line.'
                                              : 'Untuk kulit sendiri, adaptogen dianggap dapat memperlambat penuaan pada kulit terutama karena penuaan dini pada kulit sering timbul akibat stres. Salah satu contoh adaptogen adalah Ashwagandha, yang digunakan sebagai bahan baku dalam rangkaian produk Luzenti.'
                                            }
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*mobile section 2*/}
            <section className="lg:hidden">
                <div className="container-fluid relative">
                    <div className="relative max-h-fit overflow-hidden">
                        <img src={backgroundHome2} className="object-fill size-full" alt="ashwagandha" />
                        <div className="relative pt-3 pb-[60px] lg:pb-6 bg-backround-home">
                            <div className="px-5 grid grid-cols-1">
                                <div className="grid grid-cols-1">
                                    <h1 className="text-white mt-2 lg:leading-normal leading-normal text-[18px] font-light tracking-wide sm:pl-[10%] ">{language === 'en' ? 'UNWIND WITH' : 'PERAWATAN MENGGUNAKAN'}</h1>
                                </div>
                                <div className="grid grid-cols-1">
                                    <h1 className="text-white lg:leading-normal leading-normal text-[40px] font-medium tracking-[2px] sm:pl-[10%] drop-shadow-md ">{language === 'en' ? 'ASHWAGANDHA' : 'ADAPTOGEN' }</h1>
                                </div>
                                <div className="md:text-start text-start mt-2 sm:pl-[10%]">
                                    <p className="text-white text-[16px] xs:text-[24px] max-w-xl font-light lg:mb-8">{language === 'en' ? 'LUZENTI presents a new concept: adaptogenic skincare. Luzenti products offer functional effects that reduce the impact of stress on the skin, providing a calming emotional effect and alleviating stress. Adaptogens are substances commonly found in herbal medicine, known for their ability to reduce fatigue and the negative effects that arise from stress.' :
                                        'Untuk kulit sendiri, adaptogen dianggap dapat memperlambat penuaan pada kulit terutama karena penuaan dini pada kulit sering timbul akibat stres. Salah satu contoh adaptogen adalah Ashwagandha, yang digunakan sebagai bahan baku dalam rangkaian produk Luzenti.'
                                    }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" lg:py-16 mt-[60px] lg:my-14">
                <div className="container-fluid relative">
                    <div className="grid lg:grid-cols-2 max-h-fit sm:px-[10%] overflow-hidden">
                        <div className="col-span-1 lg:pt-[55px]">
                            <motion.div
                                ref={ref4}
                                initial="hidden"
                                animate={controls4}
                                variants={variantsFlyLeft}
                            >
                            <div className="relative font-medium text-blue-luzenti tracking-[2px] text-start text-[21px] lg:text-[24px] lg:m-5 mx-5 lg:pt-[5%]">{language === 'en' ? 'OUR FOCUS' : 'FOKUS KAMI'}</div>
                            </motion.div>
                            <div className="relative text-start mt-8">
                            <motion.div
                                ref={ref4}
                                initial="hidden"
                                animate={controls4}
                                variants={variantsFlyLeft}
                            >
                                <p className="text-[17px] text-start max-w-[600px] mx-5 mb-8">{language === 'en' ? 'Bringing skincare that is not only effective in reducing signs of aging,  but also relieving stress with the objective of preventing significant signs of aging and promoting general well-being.'
                                  : 'Menghadirkan skincare yang tidak hanya efektif untuk mengatasi tanda - tanda penuaan, namun juga mengurangi stres untuk mencegah terbentuknya tanda penuaan dini dan mempromosikan well-being.'}
                                </p>
                            </motion.div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <motion.div
                                ref={ref5}
                                initial="hidden"
                                animate={controls5}
                                variants={variantsFlyRight}
                                transition={{ delay: 0.1 }}
                            >
                            <div className="bg-white-bone relative text-center mx-5 lg:mx-6 my-2 lg:m-6 sm:p-[5%] lg:py-0">
                                <p className="text-[18px] lg:text-[24px] font-medium tracking-[1px] text-start max-w-[750px] py-5 lg:py-7 mx-10 ">{language === 'en' ? 'Stress' : 'Stres'}
                                </p>
                            </div>
                            </motion.div>
                            <motion.div
                                ref={ref51}
                                initial="hidden"
                                animate={controls51}
                                variants={variantsFlyRight}
                                transition={{ delay: 0.6 }}
                            >
                            <div className="bg-white-bone relative text-center mx-5 my-2 lg:my-0 lg:m-6 sm:p-[5%] lg:py-0">
                                <p className="text-[18px] lg:text-[24px] font-medium tracking-[1px] text-start max-w-[750px] py-5 lg:py-7 mx-10">{language === 'en' ? 'Signs of aging' : 'Tanda-tanda penuaan'}
                                </p>
                            </div>
                            </motion.div>
                            <motion.div
                                ref={ref52}
                                initial="hidden"
                                animate={controls52}
                                variants={variantsFlyRight}
                                transition={{ delay: 1.1 }}
                            >
                            <div className="bg-white-bone relative text-center mx-5 my-2 lg:m-6 sm:p-[5%] lg:py-0">
                                <p className="text-[18px] lg:text-[24px] font-medium text-start tracking-[1px] max-w-[750px] py-5 lg:py-7 mx-10">{language === 'en' ? 'Well-being' : 'Well-being'}
                                </p>
                            </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="relative mt-16 lg:my-14">
                    <div className="grid md:grid-cols-1 grid-cols-1 items-center">
                        <div className="text-center mb-5">
                            <motion.div
                                ref={ref9}
                                initial="hidden"
                                animate={controls9}
                                variants={variantsFlyBottom}
                            >
                            <h3 className={`text-[21px] lg:text-[30px] font-medium lg:font-normal lg:px-20 px-5 tracking-[1px] text-blue-luzenti uppercase ${language === 'id' ? 'xl:px-72' : ''}`}>{language === 'en' ? 'ADAPTOGENIC-BASED SKINCARE THAT COMFORTS THE SKIN WITH A NATURAL GLOW ' :
                                'SKINCARE BERBASIS ADAPTOGEN YANG MEMBUAT Kulit Bercahaya DAN TENANG'}</h3>
                            </motion.div>
                        </div>
                    </div>
                    <div>
                    <FeaturedProduct language={language}/>
                    </div>
                </div>
            </section>

            <section className="relative pt-2 pb-16">
                <div className="relative mt-16">
                    <div className="grid md:grid-cols-1 grid-cols-1 items-center">
                        <div className="text-center">
                            <motion.div
                                ref={ref10}
                                initial="hidden"
                                animate={controls10}
                                variants={variantsFlyBottom}
                            >
                            <h3 className="text-[21px] lg:text-[30px] font-medium lg:font-normal text-blue-luzenti mx-4 leading-normal tracking-[1.5px]">{language === 'en' ? 'RELATED ARTICLES' : 'ARTIKEL TERKAIT ADAPTOGEN'}</h3>
                            </motion.div>
                        </div>
                    </div>
                    <FeaturedArticles language={language} />
                </div>
            </section>


            <MainFooter/>
        </>
    )
}
