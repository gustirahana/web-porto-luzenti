import { productData } from "../../data/dataTwo";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FeaturedProduct = ({ language }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1 // Trigger when 10% of the element is in view
    });
    const specificIndices = [0, 1, 2];
    const selectedItems = productData.filter((_, index) => specificIndices.includes(index));

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const variants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0.8 }
    };

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.7,
                staggerChildren: 0.5
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
            <motion.div
              ref={ref}
              className="hidden lg:grid lg:grid-cols-3 mt-10 gap-20 lg:gap-2 grid-cols-1 lg:mt-16 justify-items-center min-h-[450px]"
              variants={container}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
                {selectedItems.map((item, index) => {
                    return (
                        <motion.div
                            key={index}
                            className="group max-w-[360px]"
                            variants={itemVariants}
                        >
                            <div className="relative overflow-hidden dark:shadow-gray-800 align-middle lg:hover:scale-110 group-hover:dark:shadow-gray-800 transition-all duration-500 grid place-items-center">
                                <Link to={`/${language}/product-details/${item.id}`}>
                                    <img className="object-center align-middle size-56" src={item.image} alt={item.name} />
                                </Link>
                            </div>
                            <div className="relative mt-8">
                                <motion.div
                                    className="justify-center align-middle items-center mt-1 text-center"
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                >
                                    <Link to={`/${language}/product-details/${item.id}`} className="text-blue-luzenti text-[16px] md:text-[18px] font-semibold">
                                        {item.name}
                                    </Link>
                                </motion.div>
                                <motion.div
                                    className="justify-center align-middle items-center mt-2 text-center"
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                >
                                    <Link to={`/${language}/product-details/${item.id}`} className="hover:text-blue-luzenti text-[15px] md:text-[18px] font-semibold">
                                        {item.cat}
                                    </Link>
                                </motion.div>
                                <motion.div
                                    className="justify-center align-middle mt-1 items-center text-center"
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                >
                                    <p className="hover:text-blue-luzenti text-[15px] md:text-[18px]">{item.size}</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/*mobile*/}
            <div
              className="grid lg:hidden lg:grid-cols-3 mt-10 gap-8 lg:gap-2 grid-cols-1 lg:mt-16 justify-items-center min-h-[450px]"
            >
                {selectedItems.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="group max-w-[360px]"
                      >
                          <div className="relative overflow-hidden dark:shadow-gray-800 align-middle lg:hover:scale-110 group-hover:dark:shadow-gray-800 transition-all duration-500 grid place-items-center">
                              <Link to={`/${language}/product-details/${item.id}`}>
                                  <img className="object-center align-middle size-56" src={item.image} alt={item.name} />
                              </Link>
                          </div>
                          <div className="relative mt-8">
                              <div
                                className="justify-center align-middle items-center mt-1 text-center"
                              >
                                  <Link to={`/${language}/product-details/${item.id}`} className="text-blue-luzenti text-[18px] md:text-[18px] font-semibold">
                                      {item.name}
                                  </Link>
                              </div>
                              <div
                                className="justify-center align-middle items-center text-center"
                              >
                                  <Link to={`/${language}/product-details/${item.id}`} className="hover:text-blue-luzenti text-[15px] md:text-[18px] font-semibold">
                                      {item.cat}
                                  </Link>
                              </div>
                              <div
                                className="justify-center align-middle items-center text-center"
                              >
                                  <p className="hover:text-blue-luzenti text-[15px] md:text-[18px]">{item.size}</p>
                              </div>
                          </div>
                      </div>
                    );
                })}
            </div>
            <div className="text-center pt-12">
                <div
                    className="hover:text-blue-luzenti text-[16px] font-semibold"
                >
                    <Link to={`/${language}/products/`}>
                        {language === 'en' ? 'VIEW ALL PRODUCTS >' : 'LIHAT PRODUK LAINNYA >'}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default FeaturedProduct;
