import { blogData, blogDataEn } from '../../data/dataTwo';
import {Link} from "react-router-dom";
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedArticles = ({ language }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1 // Trigger when 10% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 }
  };
    return (
        <>
            <motion.div
              ref={ref}
              animate={controls}
              variants={variants}
              className="grid lg:grid-cols-3 grid-cols-1 px-4 lg:px-32 py-8 lg:py-16 gap-[50px] lg:gap-[30px] justify-start items-start">
                {(language==='en'? blogDataEn : blogData).slice(0,3).map((item,index)=>{
                    return(
                        <div
                          key={index}
                          className="blog relative overflow-hidden">
                            <div className="aspect-square">
                                <img className="w-full h-full object-cover" src={item.image} alt="" />
                            </div>
                            <div className="content mt-[20px]">
                                <Link to={`/${language}/blog-detail/${item.id}`} className="title h5 text-[16px] lg:text-[20px] text-blue-luzenti font-medium hover:text-blue-luzenti duration-500 ease-in-out">{item.title}</Link>
                                <p className="mt-3 text-[14px] line-clamp-3">{item.desc}</p>
                                <div className="mt-3">
                                    <Link to={`/${language}/blog-detail/${item.id}`} className="relative inline-flex font-normal tracking-wide align-middle text-[12px] text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 after:bg-black duration-500 uppercase">{language === 'en' ? `Read More >` : `Baca Lebih Lanjut >` }</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </>
    );
};

export default FeaturedArticles;
