'use client';
import React, { useState } from 'react';
import Image from 'next/image'
import { setGlobalState, getGlobalState } from './store'
import Layout from './components/Layout'
import Header from './components/Header'
import BannerText from './components/BannerText'
import MiddleBanner from './components/MiddleBanner'
import Content from './components/Content'
import Team from './components/Team'
import Services from './components/Services'
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
          <Onsite title='Sales' />
          <Onsite title='Virtual Assistance' />
          <Onsite title='Outbound' />
          <Onsite title='Phone Support' />
          <Onsite title='Scheduling' />
          <Onsite title='Order Processing' />
          <Onsite title='Logistics and Shipping' />
          <Onsite title='Chat/Email and Webinar' />
          <Team />
          <AllFaqs />
          
      
    </Layout>
  )
}
export default Home