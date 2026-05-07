import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';



import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";


import backgroundProduct from "../../assets/images/products/all-products-banner-blue-md.png";
import {useLanguage} from "../../LanguageContext";
import IntroVideo from '../../assets/ProductBanner.mp4';
import IntroVideoMobile2 from '../../assets/Luzenti_prodmobile.mp4';

export default function BannerProductsList() {

  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const item = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 }
  };

  const controls6 = useAnimation();
  const { ref: ref6, inView: inView6 } = useInView({
    threshold: 0.5,
  });

  const controls61 = useAnimation();
  const { ref: ref61, inView: inView61 } = useInView({
    threshold: 0.5,
  });

  const controls62 = useAnimation();
  const { ref: ref62, inView: inView62 } = useInView({
    threshold: 0.5
  });

  const controls63 = useAnimation();
  const { ref: ref63, inView: inView63 } = useInView({
    threshold: 0.5
  });

  const controls64 = useAnimation();
  const { ref: ref64, inView: inView64 } = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (inView6) {
      controls6.start('visible').then(() => {
        controls61.start('visible').then(() => {
          controls62.start('visible').then(() => {
            controls63.start('visible').then(() => {
              controls64.start('visible');
            });
          });
        });
      });
    }
  }, [inView6, controls6, controls61, controls62, controls63, controls64]);

  return (
    <>
      {/*desktop*/}
      <section className="hidden lg:block">
        <div className="container-fluid relative">
          <div className="relative table w-full lg:mb-52 xl:mb-64">
            <div className="">
              <video
                playsInline
                id="introVideo2"
                autoPlay
                loop
                muted
                className="absolute object-fill w-full inset-0"
                style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }}
              >
                <source src={IntroVideo} type="video/mp4" />
              </video>
            </div>
            <div className="my-auto relative">
              <div
                className="max-w-[800px] my-auto lg:mr-0 xl:mr-0 xxl:mr-20 ml-[53vw]"
              >
                <div className="flex justify-start mt-[35%] items-left xxl:text-left xl:text-start lg:text-start">
                  <motion.div
                    className="text-white lg:leading-normal px-1 leading-normal text-[45px] lg:text-[40px] tracking-[2px] xl:text-[45px] xxl:text-[50px] font-light"
                    variants={item}
                    ref={ref6}
                    initial="hidden"
                    animate={controls6}
                  >
                    ELEVATE
                  </motion.div>
                  <motion.div
                    className="text-white lg:leading-normal px-1 leading-normal text-[45px] lg:text-[40px] tracking-[2px] xl:text-[45px] xxl:text-[50px] font-light"
                    variants={item}
                    ref={ref61}
                    initial="hidden"
                    animate={controls61}
                  >
                    YOUR
                  </motion.div>
                  <motion.div
                    className="text-white lg:leading-normal px-1 leading-normal text-[45px] lg:text-[40px] tracking-[2px] xl:text-[45px] xxl:text-[50px] font-light"
                    variants={item}
                    ref={ref62}
                    initial="hidden"
                    animate={controls62}
                  >
                    SKIN
                  </motion.div>
                </div>
                <div className="flex justify-start pl-32 items-start xxl:text-left xl:text-start lg:text-start">
                  <motion.div
                    className="text-[48px] text-white pt-2 lg:text-[40px] xl:text-[45px] tracking-[2px] text-right font-light"
                    variants={item}
                    ref={ref63}
                    initial="hidden"
                    animate={controls63}
                  >
                    TO
                  </motion.div>
                  <motion.div
                    className="text-white leading-[64px] pl-5 mr-16 text-[45px] lg:text-[60px] xl:text-[75px] xxl:text-[90px] tracking-[2px] font-light"
                    variants={item}
                    ref={ref64}
                    initial="hidden"
                    animate={controls64}
                  >
                    SERENITY
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/*mobile*/}
      <section className="lg:hidden overflow-hidden">
        <div className="container-fluid relative mb-1">
          <div className="relative min-h-[500px]">
            {/*<img src={backgroundProduct} className="object-fill h-full w-full" alt="luzenti-logo" />*/}
                <video
                  playsInline
                  id="introVideo2"
                  autoPlay
                  loop
                  muted
                  className="object-fill w-full inset-0"
                  style={{ opacity: 1, transition: 'opacity 1s ease-in-out' }}
                >
                  <source src={IntroVideoMobile2} type="video/mp4" />
                </video>
            <div className="z-10 min-h-[100px] w-[100%] absolute bottom-[15%]">
              <div className="mx-auto pt-10 grid grid-cols-1">
                <div className="grid grid-cols-1">
                  <h1 className="text-white lg:leading-normal text-[28px] font-light tracking-wide pl-[10vw] md:pl-[15vw] ">ELEVATE YOUR SKIN</h1>
                </div>
                <div className="grid grid-flow-col pl-12 pt-2">
                  <div className="col-span-1 xs:items-center min-w-[10.77vw] relative">
                    <div className="text-[26px] text-white text-right font-light absolute right-0 top-[-5px] xs:text-[48px]">TO</div>
                  </div>
                  <div className="col-span-1">
                    <div className="text-white font-light object-top text-[45px] pl-4 xs:text-[80px]">SERENITY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<section className="mt-20">*/}
      {/*    <div className="container-fluid relative">*/}
      {/*        <div className="relative max-h-fit overflow-hidden">*/}
      {/*            <img src={aboutHomeLg} className="hidden lg:block object-fill h-full w-full" alt="unveil" />*/}
      {/*            <img src={aboutHomeMd} className="hidden md:block lg:hidden object-fill h-full w-full" alt="unveil" />*/}
      {/*            <img src={aboutHomeSm} className="md:hidden object-fill h-full w-full" alt="unveil" />*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</section>*/}
    </>
  )
}
