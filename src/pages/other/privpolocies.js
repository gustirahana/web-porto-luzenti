import React from 'react';
import MainFooter from '../../component/Footer/mainFooter';
import MainNavbar from '../../component/Navbar/mainNavbar';
import {useLanguage} from "../../LanguageContext";

export default function Privpolocies() {
    const { language, setLanguage } = useLanguage();
    return (
        <>
            <MainNavbar />
            <section className="relative mt-10 px-[5%] lg:px-[20%] py-10 lg:my-32 lg:py-16">
                    <div className="hidden lg:block">
                        <div className="text-blue-luzenti text-[36px] tracking-[1.5px] text-center lg:text-left">{language === 'en' ? 'PRIVACY POLICY' : 'KEBIJAKAN PRIVASI'}</div>
                    </div>
                    <div className="grid gap-5 lg:mt-20">
                        <div className="flex grid-cols-1 md:grid-cols-2">
                            <div id="faq2" name="faq2" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="col-span-1 text-[17px] mt-1">{language === 'en' ? 'Welcome to the Luzenti website ("Website"). This Website is owned and operated by Luzenti, a skincare brand dedicated to providing high-quality skincare products. By accessing or using this Website, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms and conditions carefully before using the Website.'
                                    : 'Selamat datang di Luzenti Skincare! Kebijakan Privasi ini menjelaskan bagaimana Luzenti ("kita," atau "kami") mengumpulkan, menggunakan, dan mengungkapkan informasi Anda ketika Anda mengunjungi luzentiskincare.id (selanjutnya disebut sebagai “situs web”). Dengan mengakses atau menggunakan situs web, Anda setuju dengan ketentuan Kebijakan Privasi ini.'}</div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2 mt-10">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] font-medium uppercase">{language === 'en' ? 'Log Files' : 'Berkas Log'}</div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Luzenti Skincare follows standard procedures for using log files. These files log visitors when they access our website. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. This information is not linked to any personally identifiable information. The purpose of collecting this information is for analyzing trends, administering the site, tracking users\' movement on the website, and gathering demographic information.\n' :
                                    'Luzenti Skincare mengikuti prosedur standar penggunaan berkas log. Berkas ini mencatat pengunjung saat mengakses situs web kami. Informasi yang dikumpulkan oleh berkas log meliputi alamat protokol internet (IP), tipe browser, Penyedia Layanan Internet (ISP), tanggal dan waktu, halaman referensi/keluar, dan mungkin jumlah klik. Informasi ini tidak terkait dengan informasi yang dapat diidentifikasi secara pribadi. Tujuan pengumpulan informasi ini adalah untuk menganalisis tren, mengelola situs, melacak pergerakan pengguna di situs web, dan mengumpulkan informasi demografis.'}</div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2 mt-10">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] font-medium uppercase">Cookies dan Web Beacons</div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Luzenti Skincare uses cookies to enhance the user experience. These cookies are used to store information, including visitors\' preferences and the pages on the website that the visitor accessed or visited. The information collected through cookies is used to optimize the users\' experience by customizing our web page content based on visitors\' browser type and/or other information.\n' :
                                    'Luzenti Skincare menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies ini digunakan untuk menyimpan informasi, termasuk preferensi pengunjung dan halaman-halaman di situs web yang diakses atau dikunjungi oleh pengunjung. Informasi yang dikumpulkan melalui cookies digunakan untuk mengoptimalkan pengalaman pengguna dengan menyesuaikan konten halaman web kami berdasarkan tipe browser pengunjung dan/atau informasi lainnya.'}</div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2 mt-10">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] font-medium uppercase">{language === 'en' ? 'Third-Party Privacy Policies' : 'Kebijakan Privasi Pihak Ketiga'}</div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Luzenti Skincare\'s Privacy Policy does not apply to other advertisers or websites. We advise you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. These third-party ad servers or ad networks may use technologies like cookies, JavaScript, or Web Beacons in their respective advertisements and links that appear on Luzenti Skincare\'s website, which are sent directly to users\' browsers. They may use this information to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites you visit.\n' +
                                    '\n'
                                    : 'Kebijakan Privasi Luzenti Skincare tidak berlaku untuk pengiklan atau situs web lainnya. Kami menyarankan Anda untuk berkonsultasi dengan Kebijakan Privasi masing-masing server iklan pihak ketiga untuk informasi lebih rinci. Server iklan pihak ketiga ini dapat menggunakan teknologi seperti cookie, JavaScript, atau Web Beacon dalam iklan dan tautan mereka yang muncul di situs web Luzenti Skincare, yang dikirim langsung ke browser pengguna. Mereka dapat menggunakan informasi ini untuk mengukur efektivitas kampanye periklanan mereka dan/atau untuk mempersonalisasi konten periklanan yang Anda lihat di situs web yang Anda kunjungi.'}
                                </div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Please note that Luzenti Skincare has no access to or control over these cookies used by third-party advertisers.\n'
                                    : 'Harap dicatat bahwa Luzenti Skincare tidak memiliki akses atau kontrol atas cookie yang digunakan oleh pengiklan pihak ketiga.'}</div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2 mt-10">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] font-medium uppercase">{language === 'en' ? 'Children\'s Information' : 'Informasi Anak-Anak'}</div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'Protecting children\'s privacy online is a priority for Luzenti Skincare. We do not knowingly collect any Personal Identifiable Information from children under the age of 13. If you believe that your child has provided such information on our website, please contact us immediately, and we will make every effort to promptly remove such information from our records.\n'
                                    : 'Perlindungan privasi anak-anak secara online merupakan prioritas bagi Luzenti Skincare. Kami tidak dengan sengaja mengumpulkan Informasi Identifikasi Pribadi apa pun dari anak di bawah usia 13 tahun. Jika Anda percaya bahwa anak Anda telah memberikan informasi seperti itu di situs web kami, harap hubungi kami segera, dan kami akan berupaya untuk segera menghapus informasi tersebut dari catatan kami.'}</div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2 mt-10">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] font-medium uppercase">{language === 'en' ? 'Online Privacy Policy Only' : 'Kebijakan Privasi Online'}</div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'This Privacy Policy applies solely to our online activities and is valid for visitors to our website with regards to the information they shared and/or collected on Luzenti Skincare\'s website. This policy does not apply to any information collected offline or through channels other than this website.\n'
                                    : 'Kebijakan Privasi ini berlaku hanya untuk kegiatan online kami dan berlaku untuk pengunjung situs web Luzenti Skincare dengan mengenai informasi yang mereka bagikan dan/atau kumpulkan di situs web Luzenti Skincare. Kebijakan ini tidak berlaku untuk informasi yang dikumpulkan secara offline atau melalui saluran lain selain situs web ini.'}</div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2 mt-10">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] font-medium uppercase">{language === 'en' ? 'Consent' : 'Persetujuan'}</div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'By using our website, you consent to the collection and use of your information as outlined in this Privacy Policy.\n'
                                    : 'Dengan menggunakan situs web kami, Anda menyetujui pengumpulan dan penggunaan informasi Anda sebagaimana dijelaskan dalam Kebijakan Privasi ini.'}</div>
                            </div>
                        </div>
                        <div className="flex grid-cols-1 md:grid-cols-2 mt-10">
                            <div id="faq5" name="faq5" style={{position:"absolute", marginTop:'-200px'}}></div>
                            <div className="col-span-1">
                                <div className="flex md:block col-span-1 text-[18px] md:text-[24px] font-medium uppercase">{language === 'en' ? 'Contact' : 'Kontak'}</div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at official@deniaberkahsejahtera.com.' : 'Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi kami, silakan hubungi kami di official@deniaberkahsejahtera.com.'}</div>
                                <div className="col-span-1 text-[17px] mt-5">{language === 'en' ? 'By using our website, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.\n' : 'Dengan menggunakan situs web kami, Anda menyetujui pengumpulan, penggunaan, dan pengungkapan informasi Anda sebagaimana dijelaskan dalam Kebijakan Privasi ini.'}</div>
                            </div>
                        </div>
                    </div>
            </section>
            <MainFooter />
        </>
    );
}
