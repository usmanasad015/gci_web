import Header from '../utils/Header'
import React, { useEffect, useState } from "react";
import Footer from '../utils/Footer';
import Maps from './Maps';
import ContactUs from './ContactUs';
export default function CompleteContact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
    return (
      <>
        <Header />
        <Maps/>
        <ContactUs/>
        <Footer />
      </>
    );
  }
  