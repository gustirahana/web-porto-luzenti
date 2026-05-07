import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';


import tune from  '../../assets/images/products/tune.png'

import { motion, useAnimation, useInView } from 'framer-motion';

import MainFooter from '../../component/Footer/mainFooter';
import MainNavbar from '../../component/Navbar/mainNavbar';

import { productData, productDataEn } from '../../data/dataTwo';
import {useLanguage} from "../../LanguageContext";
import MainNavbarGold from '../../component/Navbar/mainNavbarGold';
import BannerProductsList from './bannerProductList';

export default function ProductsList() {

    const { language, setLanguage } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    const [showFilters, setShowFilters] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const ref001 = useRef();
    const inView001 = useInView(ref001, { triggerOnce: true, threshold: 0.1 });

    const filterOptionsEn = {
        productType: [
            { name: 'Moisturizer', checked: false },
            { name: 'Cleanser', checked: false },
            { name: 'Serum', checked: false },
            { name: 'Sunscreen', checked: false },
        ],
        skinType: [
            { name: 'All', checked: false },
            { name: 'Dry', checked: false },
            { name: 'Dehydrated', checked: false },
            { name: 'Combination', checked: false },
            { name: 'Oily', checked: false },
        ],
        benefits: [
            { name: 'Anti-aging', checked: false },
            { name: 'Moisturizing', checked: false },
            { name: 'Calming', checked: false },
            { name: 'Brightening', checked: false },
        ],
    };

    const filterOptionsId = {
        productType: [
            { name: 'Pelembab', checked: false },
            { name: 'Pembersih', checked: false },
            { name: 'Serum', checked: false },
            { name: 'Perlindungan Matahari', checked: false },
        ],
        skinType: [
            { name: 'Semua', checked: false },
            { name: 'Kering', checked: false },
            { name: 'Dehidrasi', checked: false },
            { name: 'Kombinasi', checked: false },
            { name: 'Berminyak', checked: false },
        ],
        benefits: [
            { name: 'Anti-penuaan', checked: false },
            { name: 'Melembabkan', checked: false },
            { name: 'Menenangkan', checked: false },
            { name: 'Mencerahkan', checked: false },
        ],
    };

    const getFilterOptions = () => {
        const searchParams = new URLSearchParams(location.search);
        const filterOptions = language === 'id' ? filterOptionsId : filterOptionsEn;

        Object.keys(filterOptions).forEach(category => {
            filterOptions[category] = filterOptions[category].map(option => ({
                ...option,
                checked: searchParams.getAll(category).includes(option.name),
            }));
        });

        return filterOptions;
    };

    const [filterOptions, setFilterOptions] = useState(getFilterOptions);
    const [filteredProducts, setFilteredProducts] = useState(language === 'en' ? productDataEn : productData);

    useEffect(() => {
        setFilterOptions(getFilterOptions());
    }, [location.search, language]);

    useEffect(() => {
        filterProducts();
    }, [filterOptions, language]);

    const filterProducts = () => {
        const selectedCategories = {
            productType: filterOptions.productType.filter(opt => opt.checked).map(opt => opt.name),
            skinType: filterOptions.skinType.filter(opt => opt.checked).map(opt => opt.name),
            benefits: filterOptions.benefits.filter(opt => opt.checked).map(opt => opt.name),
        };

        let filteredData = language === 'en' ? productDataEn : productData;

        Object.keys(selectedCategories).forEach(category => {
            if (selectedCategories[category].length > 0) {
                filteredData = filteredData.filter(item => selectedCategories[category].includes(item.subCat));
            }
        });

        setFilteredProducts(filteredData);
    };

    const onClickCategory = (category, index) => {
        const newOptions = { ...filterOptions };
        newOptions[category][index].checked = !newOptions[category][index].checked;
        setFilterOptions(newOptions);

        const searchParams = new URLSearchParams(location.search);
        if (newOptions[category][index].checked) {
            searchParams.append(category, newOptions[category][index].name);
        } else {
            const params = searchParams.getAll(category);
            searchParams.delete(category);
            params.forEach(param => {
                if (param !== newOptions[category][index].name) {
                    searchParams.append(category, param);
                }
            });
        }

        navigate({ search: searchParams.toString() });
    };


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5
            }
        }
    };

    const item = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 }
    };

    const controls6 = useAnimation();
    const { ref: ref6, inView: inView6 } = useInView({
        threshold: 0.1,
    });

    const controls61 = useAnimation();
    const { ref: ref61, inView: inView61 } = useInView({
        threshold: 0.1,
    });

    const controls62 = useAnimation();
    const { ref: ref62, inView: inView62 } = useInView({
        threshold: 0.1
    });

    const controls63 = useAnimation();
    const { ref: ref63, inView: inView63 } = useInView({
        threshold: 0.1
    });

    const controls64 = useAnimation();
    const { ref: ref64, inView: inView64 } = useInView({
        threshold: 0.1
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
            <MainNavbarGold />
            {/*desktop*/}
            <section className="relative">
            <BannerProductsList/>
            </section>


            <section className="relative px-2 lg:px-12 pb-16 lg:mt-[60px]">
                <div className="">
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-2 md:col-span-6">
                            <button
                                onClick={() => setShowFilters(prev => !prev)}
                                className={`mt-4 py-2 px-4 text-blue-luzenti rounded-md hover:text-dark-blue md:hidden`}
                            >
                                <span className="text-blue-luzenti flex justify-center items-center">
                                    <img
                                      className="size-[18px] align-bottom"
                                      src={tune}
                                      alt="filter"
                                    />
                                    <div className="ml-2 align-middle">
                                    {showFilters ? (language==='en'? 'Hide Filters':'Sembunyikan Filter') : (language==='en'? 'Show Filters':'Tampilkan Filter')}
                                    </div>
                                </span>
                            </button>
                            <div className={`dark:shadow-gray-800 pl-4 lg:pl-0 py-6 rounded-md bg-white dark:bg-slate-900 ${showFilters ? '' : 'hidden'} sticky top-20 md:block`}>
                                <form>
                                    <div className="grid grid-cols-1 gap-10">
                                        <div>
                                            <div className="font-medium tracking-[0.5px] uppercase mb-6 text-[17px]">{language === 'en' ? 'Product Type' : 'Jenis Produk' }</div>
                                            {filterOptions.productType.map((option, index) => (
                                              <div className="block mt-2" key={index}>
                                                  <div>
                                                      <label className="inline-flex items-center">
                                                          <input
                                                            type="checkbox"
                                                            onClick={() => onClickCategory('productType', index)}
                                                            className="form-checkbox border-gray-200 dark:border-gray-800 text-blue-luzenti focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                                                            checked={option.checked}
                                                            readOnly
                                                          />
                                                          <span className="ml-2 text-[12px] tracking-[1.5px]">{option.name}</span>
                                                      </label>
                                                  </div>
                                              </div>
                                            ))}
                                        </div>
                                        <div>
                                            <div className="font-medium tracking-[1px] uppercase mb-6 text-[17px]">{language === 'en' ? 'Skin Type' : 'Jenis Kulit' }</div>
                                            {filterOptions.skinType.map((option, index) => (
                                                <div className="block mt-2" key={index}>
                                                    <div>
                                                        <label className="inline-flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                onClick={() => onClickCategory('skinType', index)}
                                                                className="form-checkbox border-gray-200 dark:border-gray-800 text-blue-luzenti focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                                                                checked={option.checked}
                                                                readOnly
                                                            />
                                                            <span className="ml-2 text-[12px] tracking-[1.5px]">{option.name}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <div className="font-medium tracking-[1px] uppercase mb-6 text-[17px]">{language === 'en' ? 'Benefits' : 'Manfaat' }</div>
                                            {filterOptions.benefits.map((option, index) => (
                                                <div className="block mt-2" key={index}>
                                                    <div>
                                                        <label className="inline-flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                onClick={() => onClickCategory('benefits', index)}
                                                                className="form-checkbox border-gray-200 dark:border-gray-800 text-blue-luzenti focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                                                                checked={option.checked}
                                                                readOnly
                                                            />
                                                            <span className="ml-2 text-[12px] tracking-[1.5px]">{option.name}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="hidden lg:block lg:col-span-10 md:col-span-6">
                            <motion.div
                              ref={ref001}
                              className="grid lg:grid-cols-3 gap-y-12 lg:gap-y-0 grid-cols-2"
                              variants={container}
                              initial="hidden"
                              animate={inView001 ? 'visible' : 'hidden'}
                            >
                                {filteredProducts.map((itemData, index) => (
                                  <motion.div
                                    key={index}
                                    className="relative overflow-hidden dark:shadow-gray-800 align-middle hover:scale-110 group-hover:dark:shadow-gray-800 transition-all duration-500 grid place-items-center"
                                    variants={item}
                                  >
                                      <Link
                                        to={`/${language}/product-details/${itemData.id}`}
                                        className="group"
                                      >
                                          <img
                                            className="object-center align-middle lg:h-[320px]"
                                            src={itemData.image}
                                            alt=""
                                          />
                                          <div className="justify-center align-middle items-center mt-1 text-center">
                                              <p className="text-blue-luzenti text-[16px] lg:text-[21px] font-semibold">{itemData.name}</p>
                                          </div>
                                          <div className="justify-center align-middle items-center mt-1 text-center">
                                              <p className="hover:text-blue-luzenti text-[15px] lg:text-[16px] lg:font-semibold">{itemData.cat}</p>
                                          </div>
                                          <div className="justify-center align-middle mt-1 items-center text-center">
                                              <p className="hover:text-blue-luzenti text-[14px] lg:text-[16px]">{itemData.size}</p>
                                          </div>
                                          <div className="justify-center align-middle items-center mt-2 lg:mt-4">
                                              <p className="text-[14px] lg:text-[16px] text-center">IDR {itemData.amount}</p>
                                          </div>
                                      </Link>
                                  </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="block lg:hidden lg:col-span-10 md:col-span-6">
                            <div
                              className="grid lg:grid-cols-3 gap-y-12 lg:gap-y-0 grid-cols-2"
                            >
                                {filteredProducts.map((itemData, index) => (
                                  <div
                                    key={index}
                                    className="relative overflow-hidden dark:shadow-gray-800 align-middle hover:scale-110 group-hover:dark:shadow-gray-800 transition-all duration-500 grid place-items-center"
                                  >
                                      <Link
                                        to={`/${language}/product-details/${itemData.id}`}
                                        className="group"
                                      >
                                          <img
                                            className="object-center align-middle lg:h-[320px]"
                                            src={itemData.image}
                                            alt=""
                                          />
                                          <div className="justify-center align-middle items-center mt-1 text-center">
                                              <p className="text-blue-luzenti text-[16px] lg:text-[21px] font-semibold">{itemData.name}</p>
                                          </div>
                                          <div className="justify-center align-middle items-center mt-1 text-center">
                                              <p className="hover:text-blue-luzenti text-[15px] lg:text-[16px] lg:font-semibold">{itemData.cat}</p>
                                          </div>
                                          <div className="justify-center align-middle mt-1 items-center text-center">
                                              <p className="hover:text-blue-luzenti text-[14px] lg:text-[16px]">{itemData.size}</p>
                                          </div>
                                          <div className="justify-center align-middle items-center mt-2 lg:mt-4">
                                              <p className="text-[14px] lg:text-[16px] text-center">IDR {itemData.amount}</p>
                                          </div>
                                      </Link>
                                  </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <MainFooter/>
        </>
    )
}
