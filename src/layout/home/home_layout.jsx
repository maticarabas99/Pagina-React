import React from 'react'
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from '../../components/footer/footer';

export const HomeLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

