import React, { useEffect } from 'react';

import Shop from '../../assets/images/sosmed/shop.svg'
import Call from '../../assets/images/sosmed/phone.svg'
import Email from '../../assets/images/sosmed/email.svg'
import Socials from '../../assets/images/sosmed/social.svg'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {

    const controls = useAnimation();
    const { ref: ref, inView: inView } = useInView({
        threshold: 0.5 // Trigger when 10% of the element is in view
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
            <section className="pl-[2%] mt-2 lg:pl-20 relative">
                <motion.div
                  ref={ref1}
                  initial="hidden"
                  animate={controls1}
                  variants={variantsFlyBottom}
                  className="hidden lg:block"
                >
                    <div className="text-blue-luzenti tracking-[1.5px] text-[36px]">STOCKIST</div>
                </motion.div>
                <div className="grid flex-row gap-10 lg:gap-20 lg:mt-28">
                    <motion.div
                      className="flex grid-cols-1 md:grid-cols-2 gap-10"
                      ref={ref2}
                      initial="hidden"
                      animate={controls2}
                      variants={variantsFlyBottom}
                    >
                        <div className="hidden md:block col-span-1"><img src={Shop} alt="Shop"/> </div>
                        <div className="col-span-1">
                            <div className="flex md:block col-span-1 text-blue-luzenti text-[18px] md:text-[24px]"><img className="md:hidden mr-5" src={Shop} alt="Shop"/>SHOPEE</div>
                            <div className="col-span-1 text-[17px] font-semibold mt-5">Luzenti Official</div>
                            <a href="https://shopee.co.id/luzentiofficial" className="hover:text-blue-luzenti ecol-span-1 text-[17px]">https://shopee.co.id/luzentiofficial </a>
                        </div>
                    </motion.div>
                    <motion.div
                      className="flex grid-cols-1 md:grid-cols-2 gap-10"
                      ref={ref3}
                      initial="hidden"
                      animate={controls3}
                      variants={variantsFlyBottom}
                    >
                        <div className="hidden md:block col-span-1"><img className="size-[27px]" src={Shop} alt="call"/> </div>
                        <div className="col-span-1">
                            <div className="flex md:block col-span-1 text-blue-luzenti text-[18px] md:text-[24px]"><img className="md:hidden mr-5 size-[27px]" src={Shop} alt="call"/>TOKOPEDIA</div>
                            <div className="col-span-1 text-[17px] font-semibold mt-5">Luzenti Official</div>
                            <a href="https://www.tokopedia.com/luzentiofficial" className="hover:text-blue-luzenti ecol-span-1 text-[17px]">https://www.tokopedia.com/luzentiofficial</a>
                        </div>
                    </motion.div>
                    {/*<div className="flex grid-cols-1 md:grid-cols-2 gap-10">*/}
                    {/*    <div className="hidden md:block col-span-1"><img className="size-[27px]" src={Email} alt="email"/> </div>*/}
                    {/*    <div className="col-span-1">*/}
                    {/*        <div className="flex md:block col-span-1 text-blue-luzenti text-[18px] md:text-[24px]"><img className="md:hidden mr-5 size-[27px]" src={Email} alt="email"/>WHATSAPP</div>*/}
                    {/*        <div className="col-span-1 text-[17px] mt-5">Luzenti Business</div>*/}
                    {/*        <div className="col-span-1 text-[17px]">+62 811 123 3456</div>*/}
                    {/*        <div className="col-span-1 text-[17px]">Fast response</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="flex grid-cols-1 md:grid-cols-2 gap-10">*/}
                    {/*    <div className="hidden md:block col-span-1"><img className="size-[27px]" src={Socials} alt="socials"/> </div>*/}
                    {/*    <div className="col-span-1">*/}
                    {/*        <div className="flex md:block col-span-1 text-blue-luzenti text-[18px] md:text-[24px]"><img className="md:hidden mr-5 size-[27px]" src={Socials} alt="socials"/>STORES</div>*/}
                    {/*        <div className="flex md:block col-span-1 text-[17px] mt-5"><img className="md:hidden mr-5 size-[27px]" src={Socials} alt="socials"/>Sociolla PIM 1</div>*/}
                    {/*        <div className="flex md:block col-span-1 text-[17px]"><img className="md:hidden mr-5 size-[27px]" src={Socials} alt="socials"/>Sociolla Puri Indah</div>*/}
                    {/*        <div className="flex md:block col-span-1 text-[17px]"><img className="md:hidden mr-5 size-[27px]" src={Socials} alt="socials"/>Sociolla PIM 1</div>*/}
                    {/*        <div className="flex md:block col-span-1 text-[17px]"><img className="md:hidden mr-5 size-[27px]" src={Socials} alt="socials"/>Sociolla Puri Indah</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>
        </>
    );
}
