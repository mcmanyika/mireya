'use client';
import React, { useState } from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import Image from 'next/image'
import { setGlobalState, getGlobalState } from './store'
import Layout from './components/Layout'
import Header from './components/Header'
import BannerText from './components/BannerText'
import MiddleBanner from './components/MiddleBanner'
import Content from './components/Content'
import Team from './components/Team'
import Services from './components/Services'
import OnsiteHeader from './components/OnsiteHeader'
import Onsite from './components/Onsite'
import AllFaqs from './components/AllFaqs'
import Footer from './components/Footer'

const Home = () => {
  const isOpen = getGlobalState('isOpen');

  const openNav = () => {
    if (isOpen) {
      setGlobalState('isOpen', true);
    }
  };

  const closeNav = () => {
    // setIsOpen(false);
  };
  return (
    <Layout>
      
          <BannerText />
          <MiddleBanner />
          <Content />
          <Services />
          <OnsiteHeader />
          <Onsite title='Sales' title2='IoCheckmarkSharp' />
          <Onsite title='Virtual Assistance' title2='IoCheckmarkSharp' />
          <Onsite title='Outbound' title2='IoCheckmarkSharp' />
          <Onsite title='Phone Support' title2='IoCheckmarkSharp' />
          <Onsite title='Scheduling' title2='IoCheckmarkSharp' />
          <Onsite title='Order Processing' title2='IoCheckmarkSharp' />
          <Onsite title='Logistics and Shipping' title2='IoCheckmarkSharp' />
          <Onsite title='Chat/Email and Webinar' title2={`1`} />
          <Team />
          <AllFaqs />
          
      
    </Layout>
  )
}
export default Home