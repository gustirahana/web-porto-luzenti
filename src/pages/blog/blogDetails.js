import React, {useState} from 'react'

import MainFooter from "../../component/Footer/mainFooter";
import MainNavbar from "../../component/Navbar/mainNavbar";
import {productData, blogData,blogDataEn, htmlBlog, productCategories} from '../../data/dataTwo';
import {Link, useLocation} from "react-router-dom";
import {useLanguage} from "../../LanguageContext";
import FeaturedProduct from "../../component/featured/featuredProducts";
import FeaturedArticles from "../../component/featured/featuredArticles";

export default function BlogDetailsPost() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { language, setLanguage } = useLanguage();

    const blogDataToUse = language === 'en' ? blogDataEn : blogData;

    const location = useLocation();
    const blogId = location.pathname.split('/').pop();
    const blogPost = blogDataToUse.find(item => item.id === parseInt(blogId));

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };
    return (
        <>
            <MainNavbar />
            <section className="relative table w-full pt-20 py-5">
                <div className="relative">
                    <section className="relative table w-full py-20 lg:py-20">
                        <div className="container relative">
                            <div className="grid grid-cols-1 pb-8 text-center">
                                <h3 className="text-[28px] lg:text-[50px] md:leading-normal leading-normal tracking-[5px] text-blue-luzenti">LUZENTI FILES</h3>
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
                                            className={`inline-block text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${
                                                selectedCategory === null ? 'text-blue-luzenti' : 'text-slate-400'
                                            } hover:text-blue-luzenti`}
                                            data-group="all"
                                            onClick={() => matchCategory(null)}
                                        >
                                            All
                                        </li>
                                        <li
                                            className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${
                                                selectedCategory === 'howto' ? ' text-blue-luzenti' : 'text-slate-400'
                                            } hover:text-blue-luzenti`}
                                            data-group="howto"
                                            onClick={() => matchCategory('howto')}
                                        >
                                            How To
                                        </li>
                                        <li
                                            className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${
                                                selectedCategory === 'skintypes' ? 'text-blue-luzenti' : 'text-slate-400'
                                            } hover:text-blue-luzenti`}
                                            data-group="branding"
                                            onClick={() => matchCategory('skintypes')}
                                        >
                                            Skin Types
                                        </li>
                                        <li
                                            className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${
                                                selectedCategory === 'whatis' ? ' text-blue-luzenti' : 'text-slate-400'
                                            } hover:text-blue-luzenti`}
                                            data-group="designing"
                                            onClick={() => matchCategory('whatis')}
                                        >
                                            What Is
                                        </li>
                                        <li
                                            className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-3 relative cursor-pointer duration-1000 uppercase ${
                                                selectedCategory === 'wellness' ? ' text-blue-luzenti' : 'text-slate-400'
                                            } hover:text-blue-luzenti`}
                                            data-group="photography"
                                            onClick={() => matchCategory('wellness')}
                                        >
                                            Wellness
                                        </li>
                                        <li
                                            className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-2 relative cursor-pointer duration-1000 uppercase ${
                                                selectedCategory === 'ASHWAGANDA' ? ' text-blue-luzenti' : 'text-slate-400'
                                            } hover:text-blue-luzenti`}
                                            data-group="development"
                                            onClick={() => matchCategory('ASHWAGANDA')}
                                        >
                                            ASHWAGANDA
                                        </li>
                                        <li
                                            className={`inline-block w-[150px] text-center text-[18px] tracking-[2px] mx-2 mb-2 relative cursor-pointer duration-1000 uppercase ${
                                                selectedCategory === 'development' ? ' text-blue-luzenti' : 'text-slate-400'
                                            } hover:text-blue-luzenti`}
                                            data-group="skincare"
                                            onClick={() => matchCategory('development')}
                                        >
                                            Skincare
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </section>
                    <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div className="col-span-12">
                            <div className="p-6">
                                <img src={blogPost?.image} className="mx-auto lg:max-w-[650px]" alt="" />

                                <div className="text-center tracking-[1.5px] mt-12">
                                    {blogPost.category.map((cat, index) => (
                                        <span key={index} className="inline-block text-[14px] font-regular px-2.5 py-0.5 text-slate-400 hover:text-blue-luzenti h-5 uppercase">{cat}</span>
                                    ))}
                                    <h3 className="my-3 text-[28px] lg:text-[36px] text-blue-luzenti max-w-[650px] block mx-auto font-light">{blogPost?.title}</h3>

                                    <ul className="list-none mt-6 flex flex-col justify-center">
                                        <li className="inline-block col-span-1 font-semibold text-slate-400 mx-4">
                                            <span className="text-blue-luzenti text-[14px] block uppercase">by {blogPost?.name}</span>
                                        </li>
                                        <li className="inline-block col-span-1 font-regular text-slate-400 mx-4 pt-5">
                                            <span className="block text-[14px] uppercase">{blogPost?.date}</span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-4 p-6">
                <div className="max-w-[650px] text-[16px] block mx-auto" dangerouslySetInnerHTML={{__html: blogPost?.textArticle}} />
                <div className="text-[16px] max-w-[650px] mx-auto font-regular pt-10 pb-10">
                    {language === 'en' ? 'SOURCE' : 'SUMBER'} {blogPost?.url && (
                    <a href={blogPost.url} target="_blank" rel="noopener noreferrer">
                        <div className="text-blue-luzenti text-[16px]">{blogPost.name}</div>
                    </a>
                )}
                </div>
            </section>

            <section className="relative py-2 lg:my-10 bg-white-bone">
                <div className="relative mx-10 lg:mx-20 my-[50px] lg:my-[100px]">
                    <div className="grid md:grid-cols-1 grid-cols-1 items-center">
                        <div className="text-center">
                            <h3 className="lg:text-[30px] text-[21px] tracking-[2px] lg:pb-0 lg:tracking-[6px] text-blue-luzenti leading-normal">{language === 'en' ? 'RELATED PRODUCTS' : 'PRODUK TERKAIT'}</h3>
                        </div>
                    </div>
                    <FeaturedProduct language={language} />
                </div>
            </section>

            <section className="relative py-2">
                <div className="relative mt-16">
                    <div className="grid md:grid-cols-1 grid-cols-1 items-center">
                        <div className="text-center">
                            <h3 className="lg:text-[30px] text-[21px] tracking-[2px] text-blue-luzenti leading-normal tracking-[1.5px]">{language === 'en' ? 'RELATED ARTICLES' : 'ARTIKEL TERKAIT'}</h3>
                        </div>
                    </div>
                    <FeaturedArticles language={language} />
                </div>
            </section>
            <MainFooter/>
        </>
    )
}
