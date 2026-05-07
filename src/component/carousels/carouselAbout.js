import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import { motion } from 'framer-motion';
import { productData } from '../../data/dataTwo';

const ProdAboutCarousel = ({ language }) => {
  const [isOpen, setOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');
  const specificIndices = [0, 1, 2];
  const selectedItems = productData.filter((_, index) => specificIndices.includes(index));

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

  return (
    <section id="controls-carousel" className="relative lg:hidden mt-[50px]">
      <div className="relative pb-[30px] inset-0">
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
          {selectedItems.map((item, index) => (
            <div key={index}>
              <div className="group relative overflow-hidden hover:shadow-lg hover:dark:shadow-gray-800 transition-all duration-500 text-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link to={`/${language}/product-details/${item.id}`}>
                    <img className="object-center align-middle size-56" src={item.image} alt={item.name} />
                  </Link>
                  <div className="relative mt-8">
                    <div className="justify-center align-middle items-center mt-1 text-center">
                      <Link to={`/${language}/product-details/${item.id}`} className="text-blue-luzenti text-[18px] md:text-[18px] font-semibold">
                        {item.name}
                      </Link>
                    </div>
                    <div className="justify-center align-middle items-center text-center">
                      <Link to={`/${language}/product-details/${item.id}`} className="hover:text-blue-luzenti text-[15px] md:text-[18px] font-semibold">
                        {item.cat}
                      </Link>
                    </div>
                    <motion.div className="justify-center align-middle items-center text-center"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                  hidden: { opacity: 0 },
                                  visible: { opacity: 1 }
                                }}>
                      <p className="hover:text-blue-luzenti text-[15px] md:text-[18px]">{item.size}</p>
                    </motion.div>
                  </div>
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
        isOpen={isOpen}
        url={currentVideoUrl}
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default ProdAboutCarousel;
