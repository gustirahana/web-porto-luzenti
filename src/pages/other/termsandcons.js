import React from 'react';
import MainFooter from '../../component/Footer/mainFooter';
import MainNavbar from '../../component/Navbar/mainNavbar';
import {useLanguage} from "../../LanguageContext";

export default function Termsandcons() {
    const { language, setLanguage } = useLanguage();
    return (
        <>
            <MainNavbar />
            <section className="relative mt-10 px-[5%] lg:px-[20%] py-10 lg:my-32 lg:py-16">
                    <div className="hidden lg:block">
                        <div className="text-blue-luzenti text-[36px] tracking-[1.5px] text-center lg:text-left">{language === 'en' ? 'Terms & Conditions' : 'SYARAT & KETENTUAN'}</div>
                    </div>
                    <div className="grid gap-10 lg:mt-20">
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq2" name="faq2" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Welcome to the Luzenti website ("Website"). This Website is owned and operated by Luzenti, a skincare brand dedicated to providing high-quality skincare products. By accessing or using this Website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms and conditions carefully before using the Website.'
                                : 'Selamat datang di situs web Luzenti ("Situs Web"). Situs Web ini dimiliki dan dioperasikan oleh Luzenti, merek perawatan kulit yang berdedikasi untuk menyediakan produk perawatan kulit berkualitas tinggi. Dengan mengakses atau menggunakan Situs Web ini, Anda menyetujui untuk mematuhi dan terikat oleh syarat dan ketentuan penggunaan berikut ini. Harap baca syarat dan ketentuan ini dengan seksama sebelum menggunakan Situs Web.'}</div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Acceptance of Terms'
                                    :'Penerimaan Syarat'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'By accessing or using the Luzenti Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. \n'
                                    :'Dengan mengakses atau menggunakan Situs Web Luzenti, Anda mengakui bahwa Anda telah membaca, memahami, dan menyetujui Syarat & Ketentuan ini.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Ownership and Location\n'
                                    :'Kepemilikan dan Lokasi'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'The Luzenti Website is owned and operated by Luzenti, with its principal place of business at Jakarta, Indonesia.\n'
                                    :'Situs Web Luzenti dimiliki dan dioperasikan oleh Luzenti, dengan tempat usaha utama di Jakarta, Indonesia.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Our Website\n'
                                    :'Situs Web Kami'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Our Website is made available free of charge. We do not guarantee that our Website, or any content on it, will always be available or be uninterrupted. We may suspend, withdraw, discontinue or change all or any part of our Website without notice. We will not be liable to you if for any reason our Website is unavailable at any time or for any period. We may update the Website and/or change the content on it at any time.\n'
                                    :'Situs Web kami disediakan secara gratis. Kami tidak menjamin bahwa Situs Web kami, atau konten di dalamnya, akan selalu tersedia atau tidak terganggu.- Kami dapat menangguhkan, menarik, menghentikan, atau mengubah seluruh atau bagian dari Situs Web kami tanpa pemberitahuan. Kami tidak akan bertanggung jawab kepada Anda jika Situs Web kami tidak tersedia kapan saja atau untuk jangka waktu tertentu. Kami dapat memperbarui Situs Web dan/atau mengubah kontennya kapan saja.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Use of Website\n'
                                    :'Penggunaan Situs Web'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'This Website is intended for informational purposes only. You may browse the Website and access its content for personal, non-commercial use. You agree not to use this Website for any unlawful or prohibited purpose.\n'
                                    : 'Situs Web ini dimaksudkan untuk tujuan informasi saja. Anda dapat menjelajahi Situs Web dan mengakses kontennya untuk penggunaan pribadi, non-komersial. Anda setuju untuk tidak menggunakan Situs Web ini untuk tujuan yang melanggar hukum atau dilarang.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Product Information\n'
                                    : 'Informasi Produk'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'The product information provided on this Website is for general informational purposes only. While we strive to ensure the accuracy of product descriptions, we do not warrant the completeness, reliability, or currency of this information. You acknowledge that reliance on any information provided on this Website is at your own risk.\n'
                                    :'Informasi produk yang disediakan di Situs Web ini hanya untuk tujuan informasi umum. Meskipun kami berusaha untuk memastikan akurasi deskripsi produk, kami tidak menjamin kelengkapan, keandalan, atau keberlanjutan informasi tersebut.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Intellectual Property\n'
                                    :'Kekayaan Intelektual'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'All content included on this Website, such as text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Luzenti or its content suppliers and is protected by international copyright laws. You may not modify, reproduce, distribute, transmit, display, publish, or create derivative works from any part of this Website without the prior written consent of Luzenti.\n'
                                    :'Semua konten yang disertakan di Situs Web ini, seperti teks, grafik, logo, gambar, klip audio, unduhan digital, dan kompilasi data, adalah milik Luzenti atau pemasok kontennya dan dilindungi oleh hukum hak cipta internasional. Anda tidak boleh mengubah, mereproduksi, mendistribusikan, mentransmisikan, menampilkan, menerbitkan, atau membuat karya turunan dari bagian apa pun dari Situs Web ini tanpa persetujuan tertulis sebelumnya dari Luzenti.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Third-Party Links\n'
                                    :'Tautan Pihak Ketiga'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'This Website may contain links to third-party websites or resources. These links are provided solely for your convenience and do not imply any endorsement by Luzenti. We have no control over the content, privacy policies, or practices of these third-party sites and disclaim any responsibility for them. You access and use third-party websites at your own risk.\n'
                                    :'Situs Web ini dapat berisi tautan ke situs web atau sumber daya pihak ketiga. Tautan-tautan ini disediakan semata-mata untuk kenyamanan Anda dan tidak menyiratkan dukungan apa pun dari Luzenti. Kami tidak memiliki kendali atas konten, kebijakan privasi, atau praktik-praktik situs pihak ketiga tersebut dan menyangkal segala tanggung jawab atasnya. Anda mengakses dan menggunakan situs web pihak ketiga tersebut atas risiko Anda sendiri.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Third Party Intellectual Property & Licensing\n'
                                    :'Kekayaan Intelektual Pihak Ketiga'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Our website may feature content, including images, videos, names and other materials, owned by third parties. The intellectual property rights for this Third-Party Content are retained by the respective third-party owners. We have secured the necessary licenses and permissions to use this content on our website. These licenses permit us to display and distribute the Third-Party Content exclusively within the context of our website and its related services.\n'
                                    :'Situs web kami mungkin menampilkan konten, termasuk gambar, video, nama, dan materi lainnya, yang dimiliki oleh pihak ketiga. Hak cipta & kekayaan intelektual untuk Konten Pihak Ketiga ini tetap dimiliki oleh pemilik pihak ketiga yang bersangkutan. Kami telah memperoleh lisensi dan izin yang diperlukan untuk menggunakan konten ini di situs web kami. Lisensi ini memungkinkan kami untuk menampilkan dan mendistribusikan Konten Pihak Ketiga secara eksklusif dalam konteks situs web kami dan layanan terkait.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Availability and Interruption of Service\n'
                                    :'Ketersediaan dan Gangguan Layanan'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'We do not guarantee that the Luzenti Website, or any content on it, will be free from errors or omissions. We use reasonable efforts to include only accurate and up-to-date information on the Website; however, we make no representations, warranties, or guarantees, whether expressed or implied, concerning such information.\n'
                                    :'Kami tidak menjamin bahwa Situs Web Luzenti, atau konten di dalamnya, akan bebas dari kesalahan atau kelalaian. Kami berupaya dengan wajar untuk hanya menyertakan informasi yang akurat dan terbaru di Situs Web; namun, kami tidak membuat pernyataan, jaminan, atau garansi, baik yang tersurat maupun tersirat, mengenai informasi tersebut.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Viruses and Misuse\n'
                                    :'Virus dan Penggunaan yang Salah'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'We do not guarantee that our Website will be secure or free from bugs or viruses. You are responsible for configuring your information technology, computer programs, and platform in order to access our Website, and we recommend that you use your own virus protection software.\n'
                                    :'Kami tidak menjamin bahwa Situs Web kami akan aman atau bebas dari bug atau virus. Anda bertanggung jawab untuk mengkonfigurasi teknologi informasi Anda, program komputer, dan platform agar dapat mengakses Situs Web kami, dan kami merekomendasikan agar Anda menggunakan perangkat lunak perlindungan virus Anda sendiri.'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'You must not misuse our Website by knowingly introducing viruses, trojans, worms, logic bombs, or other material which is malicious or technologically harmful. You must not attempt to gain unauthorized access to our Website, the server on which our Website is stored, or any server, computer, or database connected to our Website.\n'
                                    :'Anda tidak boleh menyalahgunakan Situs Web kami dengan sengaja memasukkan virus, trojan, worm, bom logika, atau materi lain yang bersifat jahat atau merusak secara teknologi. Anda tidak boleh mencoba untuk mendapatkan akses yang tidak sah ke Situs Web kami, server tempat Situs Web kami disimpan, atau server, komputer, atau basis data apa pun yang terhubung ke Situs Web kami.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Limitation of Liability\n'
                                    :'Batasan Tanggung Jawab'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'In no event shall Luzenti, its directors, officers, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of the Website or the purchase of products through the Website.\n'
                                    :'Dalam hal ini, Luzenti, para direktur, pejabat, karyawan, atau afiliasinya tidak bertanggung jawab atas kerugian langsung, tidak langsung, kebetulan, khusus, atau akibat yang timbul dari atau dalam hubungan apapun dengan penggunaan Situs Web atau pembelian produk melalui Situs Web.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Dispute Resolution\n'
                                    :'Penyelesaian Sengketa'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Any disputes arising between Luzenti and users in connection with the use of the Website shall initially be resolved through amicable discussions to reach a consensus. If the dispute cannot be resolved within 30 (thirty) calendar days after the dispute notification letter is issued, Luzenti and users agree to settle the dispute through the South Jakarta District Court in Jakarta.\n'
                                    :'Setiap sengketa yang timbul antara Luzenti dan pengguna dalam kaitannya dengan penggunaan Situs Web ini akan diselesaikan melalui diskusi damai untuk mencapai konsensus. Jika sengketa tersebut tidak dapat diselesaikan dalam waktu 30 (tiga puluh) hari kalender setelah surat pemberitahuan sengketa diterbitkan, Luzenti dan pengguna setuju untuk menyelesaikan sengketa tersebut melalui Pengadilan Negeri Jakarta Selatan di Jakarta.'
                                }
                                </div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] uppercase">{language === 'en' ? 'Contact Information\n'
                                    :'Informasi Kontak'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'If you have any questions or concerns about these Terms and Conditions, please contact us at official@deniaberkahsejahtera.com.\n'
                                    :'Jika Anda memiliki pertanyaan atau kekhawatiran tentang Syarat dan Ketentuan ini, silakan hubungi kami di official@deniaberkahsejahtera.com.'
                                }
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'By using this Website, you signify your acceptance of these Terms and Conditions. If you do not agree to these terms, please do not use our Website.\n'
                                    :'Dengan menggunakan Situs Web ini, Anda menandakan penerimaan Anda atas Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan syarat-syarat ini, harap jangan gunakan Situs Web kami.'
                                }
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <MainFooter />
        </>
    );
}
