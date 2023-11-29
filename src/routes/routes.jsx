import React from 'react';
import { BrowserRouter, Routes as ReactDomRoutes, Route } from 'react-router-dom';
import { HomeLayout } from '../layout/home/home_layout';
import { Header } from '../pages/header/header';
import { AboutUs } from '../pages/about_us/about_us';
import { Contacto } from '../pages/contacto/contacto';
import { Catalogo } from '../pages/catalogo/catalogo';


  const Routes = () => {
      return (
          <BrowserRouter>
              <HomeLayout>
                  <ReactDomRoutes>
                      <Route path="/" element={<Header />} />
                      <Route path="*" element={<Header />} />
                      <Route path="sobre-nosotros" element={<AboutUs />} />
                      <Route path="contacto" element={<Contacto />} />
                      <Route path="productos" element={<Catalogo />} />
                  </ReactDomRoutes>
              </HomeLayout>
          </BrowserRouter>
      )
  }

  export default Routes;