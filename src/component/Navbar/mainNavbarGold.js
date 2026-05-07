import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoWhite from '../../assets/images/logoWhite.svg';
import logo from '../../assets/images/logo.svg';
import { useLanguage } from '../../LanguageContext';
import { useTranslation } from 'react-i18next'; // Import useTranslation from i18next
import './MainNavbar.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function MainNavbarGold() {
    const [isMenu, setIsMenu] = useState(false);
    const [navbarSticky, setNavbarSticky] = useState(false);
    const [navbarText, setNavbarText] = useState(false);
    const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false); // State for language dropdown
    const [manu, setManu] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { language, setLanguage } = useLanguage();
    const { t } = useTranslation(); // Hook for i18next translation
    const [loading, setLoading] = useState(false);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        function windowScroll() {
            if (document.body.scrollTop >= 500 || document.documentElement.scrollTop >= 500) {
                setNavbarSticky(true);
                setNavbarText(true);
            } else {
                setNavbarSticky(false);
                setNavbarText(false);
            }
        }

        window.addEventListener('scroll', windowScroll);
        window.scrollTo(0, 0);

        let pathSegments = location.pathname.split('/');
        let current = pathSegments[pathSegments.length - 1];
        setManu(current);

        setTimeout(() => {
            setInitialLoad(false);
        }, 1000); // Adjust timeout to match animation duration

        return () => {
            window.removeEventListener('scroll', windowScroll);
        };
    }, [location.pathname]);

    const toggleMenu = () => {
        setIsMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href");
                    if (target !== "" && elem.target.parentElement) {
                        // Find the submenu directly inside the parent <li> (if it exists)
                        const submenu = elem.target.parentElement.querySelector(".submenu");
                        if (submenu) {
                            submenu.classList.toggle('open');
                        }
                    }
                });
            });
        }
    };

    const changeLanguage = (lang) => {
        setLanguageDropdownOpen(false); // Close the dropdown after changing language
        setLoading(true);
        setLanguage(lang);
        const currentPath = location.pathname.split('/').slice(2).join('/');
        navigate(`/${lang}/${currentPath}`);
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    };

    const toggleLanguageDropdown = () => {
        setLanguageDropdownOpen(!isLanguageDropdownOpen);
    };

    return (
      <>
          {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
                <div className="animate-spin h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
            </div>
          )}
          <nav id="topnav" className={`navbar ${initialLoad ? 'navbar-animated' : ''} ${navbarSticky ? "nav-sticky" : "bg-transparent"}`}>
              <div className="relative"> {/* Use flexbox to align items */}
                  <div className='hidden lg:flex xl:absolute ml-10 logo'>
                      <div className='relative'>
                          <button onClick={toggleLanguageDropdown}
                                  className='text-white pt-1 text-[14px] align-middle rounded'>
                              {language === 'en' ? 'International (English)' : 'Indonesia (ID)'}
                              <span className='ml-0'>{isLanguageDropdownOpen ? <KeyboardArrowDownIcon /> :
                            <KeyboardArrowRightIcon />}</span>
                          </button>
                          {isLanguageDropdownOpen && (
                            <ul className='absolute mt-2 py-2 w-48 bg-white border border-gray-200 rounded shadow-lg'>
                                <li>
                                    <button
                                      className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                      disabled={language === 'en'}
                                      onClick={() => changeLanguage('en')}
                                    >
                                        International (English)
                                    </button>
                                </li>
                                <li>
                                    <button
                                      className={`block w-full text-left px-4 py-2 text-sm ${language === 'id' ? 'text-gray-400' : 'text-gray-700 hover:bg-gray-100'}`}
                                      disabled={language === 'id'}
                                      onClick={() => changeLanguage('id')}
                                    >
                                        Indonesia (ID)
                                    </button>
                                </li>
                            </ul>
                          )}
                      </div>
                  </div>

                  {/* Language Dropdown for Desktop */}
                  <div className='hidden lg:flex items-center'>
                  </div>

                  {/* Mobile Menu Toggle */}
                  <div className='menu-extras'>
                      <div className='menu-item'>
                          <Link className={`navbar-toggle ${isMenu ? 'open' : ''}`} id='isToggle'
                                onClick={() => toggleMenu()}>
                              <div className='lines'>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                          </Link>
                      </div>
                  </div>

                  {/* Mobile View */}
                  <div className='lg:hidden flex justify-center items-center'>
                      <Link to={`/${language}/`}>
                          <img src={logo} className='inline-block w-28 pt-4' alt='luzenti-logo' />
                      </Link>
                  </div>

                  {/* Navigation Menu */}
                  <div id='navigation' style={{ display: isMenu ? 'block' : 'none' }}>
                      <ul className='navigation-menu bg-blue-luzenti lg:bg-transparent lg:gap-5 xl:gap-16'>
                          <li className={''}>
                              <Link to={`/${language}/about`} className='sub-menu-item group overflow-hidden'>
                                  <div
                                    className={`hover:text-white ${navbarText ? 'text-white' : 'text-white'} text-[18px] font-medium text-center`}>
                                      {t('navbar.about')}
                                      <span className={`hidden lg:block ease absolute bottom-5 right-0 h-0 w-0 border-b-2 border-white transition-all duration-700 group-hover:w-full`}></span>
                                  </div>
                              </Link>
                          </li>
                          <li className={''}>
                              <Link to={`/${language}/products`} className="sub-menu-item group">
                                  <div className={`hover:text-white ${navbarText ? "text-white" : "text-white"} text-[18px] font-medium text-center`}>
                                      {t('navbar.product')}
                                      <span className={`hidden lg:block ease absolute bottom-5 right-0 h-0 w-0 border-b-2 border-white transition-all duration-700 group-hover:w-full`}></span>
                                  </div>
                              </Link>
                          </li>
                          <li className="hidden lg:block">
                              <Link className="p-4" to={`/${language}/`}>
                                  <img src={logo} className="inline-block w-24" alt="luzenti-logo" />
                              </Link>
                          </li>
                          <li className={`${["Blogs","FAQ", "blogs","Testimonies", "Testimoni"].includes(manu) ? "active" : ""} has-submenu text-white text-[18px] parent-menu-item font-medium text-center`}>
                              <Link className={`pr-4 hover:text-white ${navbarText ? "text-white" : "text-white"} text-[18px] font-medium`} to="#">
                                  {t('navbar.files')}
                              </Link>
                              <ul className="submenu bg-blue-luzenti flex-col">
                                  <li className={"group text-white"}>
                                      <Link to={`/${language}/blogs`} className="text-white text-[18px] font-medium sub-menu-item text-center">
                                          <div className='flex text-white'>
                                              {t('navbar.blogs')}
                                          </div>
                                      </Link>
                                  </li>
                                  <li className={manu === "Testimonies" || "Testimoni" ? "active" : "" }>
                                      <Link to={`/${language}/testimonies`} className="text-white text-[18px] font-medium sub-menu-item text-center">
                                          <div className='flex text-white'>{t('navbar.testimonies')}</div>
                                      </Link>
                                  </li>
                                  <li className={manu === "FAQ" ? "active" : ""}>
                                      <Link to={`/${language}/contacts?category=faqs`} className="text-white text-[18px] font-medium sub-menu-item text-center">
                                          <div className='flex text-white'>{t('navbar.faq')}</div>
                                      </Link>
                                  </li>
                              </ul>
                          </li>
                          <li className={manu === "contacts" ? "active" : ""}>
                              <Link to={`/${language}/contacts?category=contact-us`} className="sub-menu-item group">
                                  <div className={`${manu === "contacts" ? "text-white border-white border-b-2" : ""} hover:text-white ${navbarText ? "text-white" : "text-white"} text-[18px] font-medium text-center`}>
                                      {t('navbar.contactUs')}
                                      <span className={`hidden lg:block ease absolute bottom-5 right-0 h-0 w-0 border-b-2 border-white transition-all duration-700 group-hover:w-full`}></span>
                                  </div>
                              </Link>
                          </li>

                          {/* Language Button for Mobile */}
                          <li className="lg:hidden text-center">
                              <button onClick={() => changeLanguage(language === 'en' ? 'id' : 'en')} className="text-white text-[18px] py-[10px] px-[20px] font-medium">
                                  {language === 'en' ? 'Indonesia (ID)' : 'International (English)'}
                              </button>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </>
    );
}
