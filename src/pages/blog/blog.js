import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

import { blogData, blogDataEn } from '../../data/dataTwo';

import {MdKeyboardArrowRight,FaArrowRight, MdOutlineKeyboardArrowLeft} from "../../assets/icons/icons"
import MainNavbar from "../../component/Navbar/mainNavbar";
import MainFooter from "../../component/Footer/mainFooter";
import {useLanguage} from "../../LanguageContext";

export default function Blog() {
    const { language, setLanguage } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        const updatedData = language === 'en' ? blogDataEn : blogData;
        setFilteredData(updatedData);
    }, [language]);

    const matchCategory = (category) => {
        setSelectedCategory(category);
        if (category === null) {
            setFilteredData(blogData);
        } else {
            setFilteredData(blogData.filter(item => item.category.map(cat => cat.toLowerCase()).includes(category.toLowerCase())));
        }
    };

    console.log(filteredData)

    return (
        <>
            <MainNavbar />
            <section className="relative table w-full py-20 lg:py-20">
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="text-[28px] tracking-[5px] md:leading-normal leading-normal text-blue-luzenti">LUZENTI FILES</h3>
                    </div>
                    <div className="grid grid-cols-1 pb-8 text-center mt-1 md:px-[8%]">
                        <h3 className="text-[17px] md:leading-normal leading-normal tracking-[1px] text-dark-blue">{ language === 'en' ? 'FROM PRODUCT AND INGREDIENT ADVICE, TO REGIME RECOMMENDATIONS AND TREATMENT OPTIONS, LUZENTI ANSWERS YOUR MOST ASKED SKINCARE QUESTIONS.'
                        : 'DARI SARAN PRODUK DAN BAHAN, HINGGA REKOMENDASI DAN PILIHAN PERAWATAN, LUZENTI MENJAWAB PERTANYAAN PERAWATAN KULIT YANG KAMU INGIN TAHU.'}</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 items-center gap-[10px] md:gap-[30px] mt-10 md:px-[10%] lg:px-[5%]">
                    <div className="filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="block overflow-x-auto mx-5 mb-0 list-none text-blue-luzenti whitespace-nowrap">
                                <li
                                  className={`inline-block text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${selectedCategory === null ? 'text-blue-luzenti' : 'text-slate-400'} hover:text-blue-luzenti`}
                                  data-group="all"
                                  onClick={() => matchCategory(null)}
                                >
                                    All
                                </li>
                                <li
                                  className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${selectedCategory === 'howto' ? ' text-blue-luzenti' : 'text-slate-400'} hover:text-blue-luzenti`}
                                  data-group="howto"
                                  onClick={() => matchCategory('howto')}
                                >
                                    How To
                                </li>
                                <li
                                  className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${selectedCategory === 'skintypes' ? 'text-blue-luzenti' : 'text-slate-400'} hover:text-blue-luzenti`}
                                  data-group="skintypes"
                                  onClick={() => matchCategory('skintypes')}
                                >
                                    Skin Types
                                </li>
                                <li
                                  className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${selectedCategory === 'whatis' ? ' text-blue-luzenti' : 'text-slate-400'} hover:text-blue-luzenti`}
                                  data-group="whatis"
                                  onClick={() => matchCategory('whatis')}
                                >
                                    What Is
                                </li>
                                <li
                                  className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${selectedCategory === 'wellness' ? ' text-blue-luzenti' : 'text-slate-400'} hover:text-blue-luzenti`}
                                  data-group="wellness"
                                  onClick={() => matchCategory('wellness')}
                                >
                                    Wellness
                                </li>
                                <li
                                  className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-2 relative cursor-pointer duration-1000 uppercase ${selectedCategory === 'ashwagandha' ? ' text-blue-luzenti' : 'text-slate-400'} hover:text-blue-luzenti`}
                                  data-group="adaptogen"
                                  onClick={() => matchCategory('adaptogen')}
                                >
                                    Adaptogen
                                </li>
                                <li
                                  className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-2 relative cursor-pointer duration-1000 uppercase ${selectedCategory === 'skincare' ? ' text-blue-luzenti' : 'text-slate-400'} hover:text-blue-luzenti`}
                                  data-group="skincare"
                                  onClick={() => matchCategory('skincare')}
                                >
                                    Skincare
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mb-20">
                <div className="container px-0 relative">
                    <div className="grid grid-cols-1 px-5 lg:grid-cols-3 gap-[30px] gap-y-[60px]">
                        {filteredData?.slice(0, 9).map((item, index) => (
                          <div key={index} className="blog relative overflow-hidden">
                              <div className="h-[450px]">
                                  <Link to={`/${language}/blog-detail/${item.id}`}>
                                      <img className="w-full h-full object-cover" src={item.image} alt="" />
                                  </Link>
                              </div>

                              <div className="content mt-[30px]">
                                  <Link to={`/${language}/blog-detail/${item.id}`} className="title h5 text-[20px] text-blue-luzenti font-medium hover:text-blue-luzenti duration-500 ease-in-out">{item.title}</Link>
                                  <p className="mt-3 text-[14px] line-clamp-3">{item.desc}</p>

                                  <div className="mt-4">
                                      <Link to={`/${language}/blog-detail/${item.id}`} className="relative inline-flex font-normal tracking-wide align-middle text-[14px] text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 after:bg-black duration-500 uppercase">{language === 'en' ? 'Read More >' : 'Baca lebih lanjut >'}</Link>
                                  </div>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </section>
            <MainFooter/>

        </>
    )
}
