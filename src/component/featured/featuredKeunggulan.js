import { Link } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";

import BackgroundWater from '../../assets/images/water-surface.svg';
import AllSkin from '../../assets/images/keunggulan/allskin.svg';
import HalalCertified from '../../assets/images/keunggulan/halal.svg';
import SkinBarrier from '../../assets/images/keunggulan/skinbarrier.svg';
import BusuiBumil from '../../assets/images/keunggulan/busui.svg';
import ISOQc from '../../assets/images/keunggulan/isoqc.svg';
import BPOMCertified from '../../assets/images/keunggulan/bpom.svg';
import NoAnimal from '../../assets/images/keunggulan/noanimal.svg';

const productArray = [
    { title: "ALL SKIN TYPES", src: AllSkin, titleLines: ["ALL SKIN", "TYPES"] },
    { title: "HALAL CERTIFIED", src: HalalCertified, titleLines: ["HALAL", "CERTIFIED"] },
    { title: "SKIN BARRIER SUPPORT", src: SkinBarrier, titleLines: ["SKIN BARRIER", "SUPPORT"] },
    { title: "BUMIL, BUSUI AND MUSLIM FRIENDLY", src: BusuiBumil, titleLines: ["BUMIL, BUSUI &", "MUSLIM FRIENDLY"] },
    { title: "ISO CGMP QUALITY", src: ISOQc, titleLines: ["ISO, CGMP", "QUALITY"] },
    { title: "BPOM APPROVED", src: BPOMCertified, titleLines: ["BPOM", "APPROVED"] },
    { title: "DERMATOLOGY TESTED", src: NoAnimal, titleLines: ["DERMATOLOGY", "TESTED"] }
];

const FeaturedProduct = ({ language }) => {
    const controls = useAnimation();
    const ref = useRef();
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const variants = {
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0, 0, 1, 1] } },
        hidden: { opacity: 0, x: -100 }
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
          <section className="min-h-[300px] flex items-center justify-center relative">
              <div className="w-full relative z-10">
                  <div className="text-center lg:pt-10">
                      <motion.div
                        className="text-[21px] lg:text-[30px] tracking-[1px] lg:tracking-[2px] font-medium lg:font-normal leading-normal text-center text-blue-luzenti"
                        initial="hidden"
                        animate={controls}
                        variants={variantsFlyBottom}
                      >
                          {language === 'en' ? `LUZENTI'S HIGHLIGHTS` : 'KEUNGGULAN LUZENTI'}
                      </motion.div>
                  </div>
                  <motion.div
                    className="grid lg:grid-cols-7 px-10 lg:px-20 gap-y-4 lg:gap-2 grid-cols-2 lg:mt-16 mt-6"
                    ref={ref}
                    variants={container}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                  >
                      {productArray.map((item, index) => (
                        <motion.div
                          key={index}
                          className="relative overflow-hidden dark:shadow-gray-800 group-hover:dark:shadow-gray-800 transition-all duration-500 flex flex-col items-center p-1"
                          variants={itemVariants}
                        >
                            <img
                              className="object-center size-16 lg:size-24"
                              src={item.src}
                              alt={item.title}
                            />
                            <div className="mt-1 text-center">
                                {item.titleLines ? (
                                  item.titleLines.map((line, idx) => (
                                    <p key={idx} className="text-blue-luzenti text-[12px] lg:text-[14px] tracking-[1px] font-medium">
                                        {line}
                                    </p>
                                  ))
                                ) : (
                                  <p className="text-blue-luzenti text-[12px] lg:text-[14px] tracking-[1px] font-medium">
                                      {item.title}
                                  </p>
                                )}
                            </div>
                        </motion.div>
                      ))}
                  </motion.div>
              </div>
          </section>
      </>
    );
};

export default FeaturedProduct;