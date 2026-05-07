import React, { useEffect } from 'react';
import {motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../../LanguageContext';

export default function Faq() {
    const { language } = useLanguage();

    const faqDataId = [
        {
            title: 'APA ITU ADAPTOGEN?',
            description: `
            <p>Adaptogen adalah sifat zat alami dari tanaman herbal, akar dan jamur, yang bermanfaat bagi kesehatan. Disebut adaptogen karena zat alami tersebut mampu bekerja membantu tubuh beradaptasi sesuai kebutuhannya melawan efek negatif stres pada tubuh baik secara fisik, kimia, maupun biologis serta mengurangi efek kelelahan pada tubuh.</p>
        `
        },
        {
            title: 'Apa itu Ashwagandha?',
            description: `
            <p>Ashwagandha (Withania Somnifera) adalah salah satu jenis tanaman herbal yang memiliki zat alami bersifat adaptogen (adaptogenic) yang banyak digunakan di pengobatan tradisional India (Ayurveda).</p>
            <p>Untuk kesehatan kulit, Ashwagandha berfungsi sebagai pelindung sel kulit dari efek negatif stres pada tubuh serta paparan lingkungan termasuk artificial visible light dari perangkat elektronik.</p>
        `
        },
        {
            title: 'Apa itu Adaptogenic Skincare?',
            description: `
            <p>Adalah perawatan kulit (skincare) dengan produk yang memiliki kandungan bahan aktif yang bersifat adaptogen (adaptogenic), yang mampu beradaptasi dengan perubahan negatif pada kulit yang mengalami stres sehingga mampu melindungi dan merawat kulit dari kerusakan.</p>
        `
        },
        {
            title: 'Apa manfaat Adaptogenic Skincare bagi kita?',
            description: `
            <p>Zat alami dari tanaman herbal yang bersifat adaptogen selain baik untuk wellbeing dan stress relief, juga bermanfaat bagi perawatan kulit wajah, yaitu:</p>
            <br>
                <p>1. Mengurangi masalah kulit yang diakibatkan stres.</p> 
                <p>Adaptogenic skincare membantu menyeimbangkan hormon kortisol dan melindungi kulit dari agresor harian, karena kandungannya kaya antioksidan.</p>
                <br>
                <p>2. Melindungi kulit dari serangan (agresor) harian.</p>
                <p>Adaptogenic skincare memberikan perlindungan maksimal pada kulit, karena kandungannya kaya antioksidan.</p>
   
        `
        },
        {
            title: 'Aman dipakai untuk kulit sensitif?',
            description: `
            <p>Seluruh produk Luzenti telah lolos uji Dermatology yang menyatakan tidak ada indikasi iritasi serta aman digunakan untuk semua jenis kulit termasuk kulit sensitif.</p>
        `
        },
        {
            title: 'Siapa saja yang dapat menggunakan Luzenti Skincare?',
            description: `
            <p>Formula Luzenti skincare dapat membantu merawat kulit dari dampak negatif stres pada kulit yang terjadi di usia remaja, usia produktif, sampai usia dewasa dimana kulit mulai menunjukkan tanda-tanda penuaan.</p>
        `
        },
        {
            title: 'Aman dipakai anak-anak?',
            description: `
            <p>Untuk menggunakan skincare anti-aging, usia yang paling tepat adalah sekitar 30 tahun awal.</p>
        `
        },
        {
            title: 'Apakah bisa menghilangkan kerutan, dan wajah kusam akibat penuaan (umur)?',
            description: `
            <p>Produk Luzenti mengandung hero ingredient Ashwagandha yang berfungsi sebagai antioksidan dan membantu mengatasi stres pada kulit serta melindungi kulit dari kerusakan.</p>
        `
        },
        {
            title: 'Apakah produk luzenti fragrance-free?',
            description: `
            <p>Seluruh produk Luzenti Skincare fragrance-free, tidak mengandung wewangian sintetis. Aroma nya berasal dari wewangian alami berupa essential oil: Lavender untuk Comfort Care Cleansing Balm, dan Rose untuk Azure Glow Essence in Serum.</p>
        `
        },
        {
            title: 'Apakah saya bisa konsultasi dahulu?',
            description: `
            <p>Customer bisa konsultasi via HP admin 0818 972024.</p>
        `
        },
        {
            title: 'Bagaimana kalau saya menerima produk yang salah?',
            description: `
            <p>Jika terjadi kesalahan dalam pengiriman produk maka dapat diganti dengan menyertakan bukti video unboxing dan menghubungi nomor WA Admin untuk prosedurnya.</p>
        `
        },
        {
            title: 'Bisa beli Luzenti Skincare dimana?',
            description: `
            <p>Produk Luzenti bisa dibeli di toko online Shopee luzentiofficial dan Tokopedia luzentiofficial.</p>
        `
        },
        {
            title: 'Apakah produk Luzenti Skincare HALAL?',
            description: `
            <p>Seluruh produk Luzenti sudah mendapat sertifikasi HALAL.</p>
        `
        },
        {
            title: 'Apakah sudah terdaftar di BPOM?',
            description: `
            <p>Produk Luzenti sudah terdaftar di BPOM.</p>
        `
        }
    ];

    const faqDataEn = [
        {
            title: 'WHAT IS ADAPTOGEN?',
            description: `
            <p>Adaptogen is a nature of plants, herbs, roots, and mushrooms that is beneficial for our health. It is called ‘adaptogen’ because it can help our body adapt in countering physical, chemical, and biological negative effects on our body and reducing the impact of fatigue.</p>
        `
        },
        {
            title: 'WHAT IS ASHWAGANDHA?',
            description: `
            <p>Ashwagandha (Withania Somnifera) is a type of herb that has natural adaptogenic substances and is commonly used as a traditional medication in India (Ayurveda).</p>
            <p>In the context of skin health, Ashwagandha functions as a protector for the skin cells from the negative impact of stress on the body and environment, including the artificial visible light (bluelight) from electronic devices.</p>
        `
        },
        {
            title: 'WHAT IS AN ADAPTOGENIC SKINCARE?',
            description: `
            <p>Adaptogenic skincare is a skincare product with adaptogenic substances that can adapt to negative changes in stressed skin so that they can protect and maintain the skin from damage.</p>
        `
        },
        {
            title: 'WHAT ARE THE BENEFITS OF ADAPTOGENIC SKINCARE FOR US?',
            description: `
            <p>Natural adaptogenic substances of herbs are not only good for our well-being and stress relief, but they are also beneficial for the skin.</p>
            <br>
            <p>1. Reducing skin problems due to stress</p>
            <p>When the body is experiencing stress, it may result in a negative impact on the skin, such as skin breakout. When it happens, the body produces a higher cortisol level, which leads to oily skin, clogged pores, acne, dry skin, skin irritation, skin dullness, etc. Natural substances in adaptogenic skincare can adapt to skin changes due to stress and also help balance the cortisol level.</p>
            <br>
            <p>2. Protecting the skin from daily aggressors </p>
            <p>The ingredients of the adaptogenic skincare that are rich in antioxidants help protect the skin from pollutants.</p>
        `
        },
        {
            title: 'ARE THE PRODUCTS SAFE FOR SENSITIVE SKIN?',
            description: `
            <p>All Luzenti products have passed the Dermatology test, which states that there is no indication of irritation and are safe for all skin types, including sensitive skin.</p>
        `
        },
        {
            title: 'WHO CAN USE LUZENTI SKINCARE PRODUCTS?',
            description: `
            <p>The formulation of Luzenti skincare products helps maintain the skin from the negative impact of stress that occurs during teenage, middle, and mature age when the skin shows signs of aging.</p>
            <p>With the various indoor and outdoor activities that we do, our skin might be exposed to things that can have negative impacts on our skin, such as internal stress (emotional state and hormonal changes during menstruation), external stress (dust, pollutants, or UV rays), and exposure to artificial visible light (bluelight) from electronic devices.</p>
        `
        },
        {
            title: 'ARE THE PRODUCTS SAFE FOR CHILDREN TO USE?',
            description: `
            <p>Anti-aging skincare products are best used in the early 30s.</p>
        `
        },
        {
            title: 'CAN THE PRODUCTS REMOVE WRINKLES AND DULLNESS DUE TO AGING?',
            description: `
            <p>Luzenti skincare products contain Ashwagandha, which functions as an antioxidant that helps reduce stress on the skin and prevents free radicals, which can prevent and protect the skin from damage. Aside from that, we should still adopt a healthy lifestyle, eat healthily, exercise regularly, and get enough sleep to protect and maintain our skin health optimally.</p>
        `
        },
        {
            title: 'ARE ALL LUZENTI PRODUCTS FRAGRANCE-FREE?',
            description: `
            <p>All Luzenti products do not contain synthetic fragrances. The aromas come from natural fragrances in the form of essential oils: Lavender essential oil for Comfort Care Cleansing Balm and Rose essential oil for Azure Glow Essence in Serum.</p>
        `
        },
        {
            title: 'IS IT POSSIBLE TO DO A CONSULTATION BEFOREHAND?',
            description: `
            <p>Customers can consult to our team by phone (0818 972024).</p>
        `
        },
        {
            title: 'WHAT IF I RECEIVE THE WRONG PRODUCT?',
            description: `
            <p>If you happen to receive the wrong products from what you ordered, you can get a replacement by sending an unboxing video (of when you first opened the product) and contacting our team via WhatsApp.</p>
        `
        },
        {
            title: 'WHERE CAN I BUY LUZENTI SKINCARE PRODUCTS?',
            description: `
            <p>Luzenti skincare products can be bought from our online store on Shopee (luzentiofficial) and Tokopedia (luzentiofficial).</p>
        `
        },
        {
            title: 'ARE LUZENTI SKINCARE PRODUCTS HALAL CERTIFIED?',
            description: `
            <p>All Luzenti skincare products are HALAL certified.</p>
        `
        },
        {
            title: 'ARE LUZENTI SKINCARE PRODUCTS REGISTERED ON BPOM?',
            description: `
            <p>All Luzenti skincare products are registered on BPOM.</p>
        `
        }
    ];

    const faqData = language === 'en' ? faqDataEn : faqDataId;

    const controls = useAnimation();
    const { ref, inView } = useInView({
        threshold: 0.1 // Trigger when 10% of the element is in view
    });

    const controls0 = useAnimation();
    const { ref: ref0, inView: inView0 } = useInView({
        threshold: 0.1
    });

    const controls1 = useAnimation();
    const { ref: ref1, inView: inView1 } = useInView({
        threshold: 0.5 // Trigger when 10% of the element is in view
    });

    const controls2 = useAnimation();
    const { ref: ref2, inView: inView2 } = useInView({
        threshold: 0.3
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

    const controls10 = useAnimation();
    const { ref: ref10, inView: inView10 } = useInView({
        threshold: 0.1
    });

    const controls11 = useAnimation();
    const { ref: ref11, inView: inView11 } = useInView({
        threshold: 0.1
    });

    const controls12 = useAnimation();
    const { ref: ref12, inView: inView12 } = useInView({
        threshold: 0.1
    });

    const controls13 = useAnimation();
    const { ref: ref13, inView: inView13 } = useInView({
        threshold: 0.1
    });

    const controls14 = useAnimation();
    const { ref: ref14, inView: inView14 } = useInView({
        threshold: 0.1
    });

    const controls15 = useAnimation();
    const { ref: ref15, inView: inView15 } = useInView({
        threshold: 0.1
    });

    const controls16 = useAnimation();
    const { ref: ref16, inView: inView16 } = useInView({
        threshold: 0.1
    });
    const controls17 = useAnimation();
    const { ref: ref17, inView: inView17 } = useInView({
        threshold: 0.1
    });

    const controls20 = useAnimation();
    const { ref: ref20, inView: inView20 } = useInView({
        threshold: 0.1
    });

    const controls21 = useAnimation();
    const { ref: ref21, inView: inView21 } = useInView({
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
        if (inView0) {
            controls0.start("visible");
        } else {
            controls0.start("hidden");
        }
    }, [controls1, inView1]);

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

    useEffect(() => {
        if (inView10) {
            controls10.start("visible");
        } else {
            controls10.start("hidden");
        }
    }, [controls10, inView10]);

    useEffect(() => {
        if (inView11) {
            controls11.start("visible");
        } else {
            controls11.start("hidden");
        }
    }, [controls11, inView11]);

    useEffect(() => {
        if (inView12) {
            controls12.start("visible");
        } else {
            controls12.start("hidden");
        }
    }, [controls12, inView12]);

    useEffect(() => {
        if (inView13) {
            controls13.start("visible");
        } else {
            controls13.start("hidden");
        }
    }, [controls13, inView13]);

    useEffect(() => {
        if (inView14) {
            controls14.start("visible");
        } else {
            controls14.start("hidden");
        }
    }, [controls14, inView14]);

    useEffect(() => {
        if (inView15) {
            controls15.start("visible");
        } else {
            controls15.start("hidden");
        }
    }, [controls15, inView15]);

    useEffect(() => {
        if (inView16) {
            controls16.start("visible");
        } else {
            controls16.start("hidden");
        }
    }, [controls16, inView16]);

    useEffect(() => {
        if (inView20) {
            controls20.start("visible");
        } else {
            controls20.start("hidden");
        }
    }, [controls20, inView20]);

    useEffect(() => {
        if (inView21) {
            controls21.start("visible");
        } else {
            controls21.start("hidden");
        }
    }, [controls21, inView21]);

    const variantsFlyBottom = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 100 }
    };

    return (
      <>
          <section className="px-[2%] lg:pr-[10%] mt-2 lg:pl-20 relative">
              <div className="hidden lg:block">
                  <motion.div ref={ref20} initial="hidden" animate={controls20} variants={variantsFlyBottom}>
                      <div className="text-blue-luzenti tracking-[1.5px] text-[36px]">FAQ</div>
                  </motion.div>
              </div>
              {/* Navigation for FAQ titles */}
              <div className="grid gap-10 lg:mt-20">
                  <div className="flex grid-cols-1">
                      <motion.div
                        className="grid-cols-1 text-blue-luzenti"
                        ref={ref21}
                        initial="hidden"
                        animate={controls21}
                        variants={variantsFlyBottom}
                        transition={{ delay: 1 }}
                      >
                          {faqData.map((faq, index) => (
                            <div key={index}
                                 className="col-span-1 font-medium py-3 text-[16px] lg:text-[18px] uppercase">
                                {/* Navigation Links to FAQ sections */}
                                <a href={`#faq${index + 1}`}>{faq.title}</a>
                            </div>
                          ))}
                      </motion.div>
                  </div>
              </div>

              {/* FAQ Content Sections */}
              <div className="grid gap-10 lg:mt-20">
                  {faqData.map((faq, index) => (
                    <div key={index} className="flex grid-cols-1 md:grid-cols-2">
                        {/* FAQ section with dynamic IDs for navigation */}
                        <div id={`faq${index + 1}`} name={`faq${index + 1}`}
                             style={{ position: 'absolute', marginTop: '-200px' }}></div>
                        <motion.div
                          className="col-span-1"
                          ref={eval(`ref${index + 1}`)}
                          initial="hidden"
                          animate={eval(`controls${index + 1}`)}
                          variants={variantsFlyBottom}
                        >
                            <div
                              className="flex md:block font-medium col-span-1 mt-8 text-blue-luzenti text-[16px] md:text-[20px] uppercase">
                                {faq.title}
                            </div>
                            <div className="col-span-1 text-[18px] leading-normal mt-5"
                                 dangerouslySetInnerHTML={{ __html: faq.description }}>
                            </div>
                            <div className="lg:hidden col-span-1 text-[14px] text-right text-slate-400 pt-5">
                                <a href="#top">BACK TO TOP</a>
                            </div>
                        </motion.div>
                    </div>
                  ))}
              </div>
          </section>
      </>
    );
}
