import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './assets/libs/@mdi/font/css/materialdesignicons.min.css';
import Home from './pages/index';
import Testimonies from './pages/other/testimonies';
import Policies from './pages/other/privpolocies';
import Terms from './pages/other/termsandcons';
import ProductsList from './pages/products/productsList';
import ProductsDetails from './pages/products/productsDetails';
import ShopAbout from './pages/products/about';
import PageError from './pages/special/pageError';
import PageBlog from './pages/blog/blog';
import BlogDetails from './pages/blog/blogDetails';
import ContactUs from './pages/contact/contactus';
import { useLanguage } from './LanguageContext';

const LanguageWrapper = ({ element }) => {
    const { language } = useLanguage(); // Access language from context
    return React.cloneElement(element, { lang: language });
};

export default function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/id" />} />
              <Route path="/:lang" element={<LanguageWrapper element={<Home />} />} />
              <Route path="/:lang/products" element={<LanguageWrapper element={<ProductsList />} />} />
              <Route path="/:lang/testimonies" element={<LanguageWrapper element={<Testimonies />} />} />
              <Route path="/:lang/privacy-policies" element={<LanguageWrapper element={<Policies />} />} />
              <Route path="/:lang/terms-conditions" element={<LanguageWrapper element={<Terms />} />} />
              <Route path="/:lang/product-details/:id" element={<LanguageWrapper element={<ProductsDetails />} />} />
              <Route path="/*" element={<PageError />} />
              <Route path="/:lang/notfound" element={<LanguageWrapper element={<PageError />} />} />
              <Route path="/:lang/contacts" element={<LanguageWrapper element={<ContactUs />} />} />
              <Route path="/:lang/blogs" element={<LanguageWrapper element={<PageBlog />} />} />
              <Route path="/:lang/blog-detail/:id" element={<LanguageWrapper element={<BlogDetails />} />} />
              <Route path="/:lang/about" element={<LanguageWrapper element={<ShopAbout />} />} />
          </Routes>
      </BrowserRouter>
    );
}
