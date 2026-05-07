import React from "react";
import { useLanguage } from '../../LanguageContext';

import Instagram from '../../assets/images/sosmed/instagram.svg'
import Douyin from '../../assets/images/sosmed/douyin.svg'
import Youtube from '../../assets/images/sosmed/youtube-new.svg'

import BackgroundFooter from '../../assets/glitter.mp4'

export default function MainFooter(){
    const { language, setLanguage } = useLanguage();
    return(
    <footer className="footer relative text-white">
        <video autoPlay playsInline muted className="absolute object-cover w-full h-full inset-0">
            <source src={BackgroundFooter} type="video/mp4" />
        </video>
        <div className="container relative pt-[50px]">
            <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center">
                <div className="col-span-1">
                    <div className="md:py-[50px] px-0 w-[180px]">
                        <div className="text-[14px] mt-6 tracking-[2px] font-semibold">{language === 'en' ? 'WHERE TO BUY?' : 'BISA BELI DIMANA?'}</div>
                        <div className="mt-2 md:mt-5 md:space-x-10 flex flex-col md:flex-row">
                            <div className="inline"><a href=" https://shopee.co.id/luzentiofficial" target="_blank" className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">SHOPEE</a></div>
                            <div className="inline"><a href="https://www.tokopedia.com/luzentiofficial " target="_blank" className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">TOKOPEDIA</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="md:py-[50px] px-0 w-[180px]">
                        <div className="text-[14px] mt-6 tracking-[2px] font-semibold">{language === 'en' ? 'HAVE QUESTIONS?' : 'ADA PERTANYAAN'}</div>
                        <div className="mt-2 md:mt-5 md:space-x-10 flex flex-col md:flex-row">
                            <div className="inline"><a href={`/${language}/contacts?category=faqs`} className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">FAQS</a></div>
                            <div className="inline min-w-[120px]"><a href={`/${language}/contacts?category=contact-us`} className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'CONTACT US' : 'HUBUNGI KAMI'}</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="md:py-[50px] px-0 w-[180px] md:w-full">
                        <div className="text-[14px] mt-6 tracking-[2px] font-semibold">{language === 'en' ? 'WHAT THEY SAY?' : 'APA YANG MEREKA KATAKAN?'}</div>
                        <div className="mt-2 md:mt-5 md:space-x-10 flex flex-col md:flex-row">
                            <div className="inline"><a href={`/${language}/testimonies`} target="_blank" className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'TESTIMONIES' : 'TESTIMONI'}</a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[30px] md:py-0 px-0 mt-[30px] md:mt-0 border-t border-white-800"></div>

            <div className="grid grid-cols-2 md:grid-cols-5 justify-items-center">
                <div className="col-span-1">
                    <div className="md:py-[50px] px-0 w-[150px]">
                        <div className="list-none space-x-5 space-y-1">
                            <div className="inline"><a href="/id/about" target="_blank" className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'ABOUT US' : 'TENTANG KAMI'}</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="md:py-[50px] px-0 w-[150px]">
                        <div className="list-none space-x-5 space-y-1">
                            <div className="inline"><a href="/blogs" target="_blank" className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'MEDIA' : 'MEDIA'}</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="md:py-[50px] px-0 w-[150px]">
                        <div className="list-none space-x-5 space-y-1">
                            <div className="inline"><a href="/id/testimonies" target="_blank" className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'VIDEOS' : 'VIDEO'}</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="md:py-[50px] px-0 w-[150px]">
                        <div className="list-none space-x-5 space-y-1">
                            <div className="inline"><a href="/id/testimonies" target="_blank" className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'TESTIMONIALS' : 'TESTIMONI'}</a></div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="md:py-[50px] px-0 w-[150px]">
                        <div className="list-none space-x-5 space-y-1">
                            <div className="inline"><a href="/id/contacts?category=faqs" target="_blank" className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'RETURN POLICY' : 'GARANSI PENGEMBALIAN'}</a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-rows-2 justify-items-center gap-2">
                <div className="text-[14px] tracking-[2px] mt-6 font-semibold">{language === 'en' ? 'FIND OUR STORY' : 'TEMUKAN KISAH KAMI DI'}</div>
                <div className="mt-[15px] flex grid-cols-3 gap-7">
                    <span>
                        <a href="https://www.instagram.com/luzentiofficial/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} className="align-middle size-8" alt="instagram" />
                        </a>
                    </span>
                    <span>
                        <a href="https://www.tiktok.com/@luzenti.official?lang=en" target="_blank" rel="noopener noreferrer">
                            <img src={Douyin} className="align-middle size-8" alt="tiktok" />
                        </a>
                    </span>
                    <span>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src={Youtube} className="align-middle size-9" alt="Youtube" />
                    </a>
                    </span>
                </div>
            </div>
            <div className="grid grid-rows-2 justify-items-center gap-2 pb-10">
                <div className="text-[14px] tracking-[1.5px] mt-[70px]">© 2024 LUZENTI ALL RIGHTS RESERVED</div>
                <div className="flex space-x-4 mt-[30px] grid-cols-2 md:space-x-16">
                    <span>
                        <div className="inline"><a href={`/${language}/privacy-policies`} className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'PRIVACY POLICY' : 'KEBIJAKAN PRIVASI'}</a></div>
                    </span>
                    <span>
                        <div className="inline"><a href={`/${language}/terms-conditions`}  className="text-[12px] tracking-[1.5px] hover:text-gold-luzenti" rel="noreferrer">{language === 'en' ? 'TERMS & CONDITIONS' : 'SYARAT & KETENTUAN'}</a></div>
                    </span>
                </div>
            </div>
        </div>
    </footer>
    )
}