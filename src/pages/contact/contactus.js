import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainFooter from '../../component/Footer/mainFooter';
import MainNavbar from '../../component/Navbar/mainNavbar';

import Contact from './contact'
import Faq from './faq'
import Stockist from './stockist'
import {useLanguage} from "../../LanguageContext";

export default function ShopGridTwo() {
    const { language, setLanguage } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(language);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryParam = params.get('category');

        setSelectedCategory(categoryParam);
    }, [location.search]);

    const matchCategory = (category) => {
        setSelectedCategory(category);
        navigate(`?category=${category}`, { replace: true });
    };


    return (
        <>
            <MainNavbar />
            <section className="relative mt-10 py-10 lg:mt-20 lg:mb-16 lg:py-16">
                <div className="relative pl-3 pr-3 lg:pl-[10%]">
                    <div className="lg:hidden lg:text-[40px] tracking-[1.5px] leading-normal text-[28px] py-10 text-center text-blue-luzenti">
                        {selectedCategory === 'contact-us' && <div>{language === 'en' ? 'CONTACT US' : 'KONTAK KAMI'}</div>}
                        {selectedCategory === 'faqs' && <div>FREQUENTLY ASKED QUESTIONS</div>}
                        {selectedCategory === 'stockist' && <div>STOCKIST</div>}
                    </div>
                    <div className="lg:flex md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="lg:col-span-3 md:col-span-12">
                            <div className="filters-group-wrap text-left">
                                <div className="filters-group">
                                    <div className="mb-0 w-[170px] lg:w-[220px] list-none text-blue-luzenti md:justify-evenly">
                                        <div
                                            className={`lg:text-[24px] text-[18px] tracking-[2px] lg:pb-2 mx-2 lg:mb-3 relative cursor-pointer duration-500 uppercase ${
                                                selectedCategory === 'contact-us' ? 'border-b-2 border-blue-luzenti text-blue-luzenti' : 'text-slate-400'
                                            } hover:text-blue-luzenti`}
                                            data-group="all"
                                            onClick={() => matchCategory('contact-us')}
                                        >
                                            {language === 'en' ? 'CONTACT US' : 'KONTAK KAMI'}
                                        </div>
                                        <div
                                            className={`inline-block lg:text-[24px] text-[18px] pb-2 mt-2 lg:mt-[25px] tracking-[2px] mx-2 lg:mb-3 cursor-pointer relative transition duration-500 hover:text-blue-luzenti uppercase ${
                                                selectedCategory === 'faqs' ? 'border-b-2 border-blue-luzenti text-blue-luzenti' : 'text-slate-400'
                                            }`}
                                            data-group="howto"
                                            onClick={() => matchCategory('faqs')}
                                        >
                                            Faq
                                        </div>
                                        <div
                                            className={`inline-block lg:text-[24px] text-[18px] pb-2 mt-2 lg:mt-[25px] tracking-[2px] mx-2 mb-2 lg:mb-3 cursor-pointer relative transition duration-500 hover:text-blue-luzenti uppercase ${
                                                selectedCategory === 'stockist' ? 'border-b-2 border-blue-luzenti text-blue-luzenti' : 'text-slate-400'
                                            }`}
                                            data-group="stockist"
                                            onClick={() => matchCategory('stockist')}
                                        >
                                            Stockist
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-9 md:col-span-12 py-10 lg:py-0">
                            {selectedCategory === 'contact-us' && <Contact/>}
                            {selectedCategory === 'faqs' && <Faq/>}
                            {selectedCategory === 'stockist' && <Stockist/>}
                        </div>
                    </div>
                </div>
            </section>
            <MainFooter />
        </>
    );
}
