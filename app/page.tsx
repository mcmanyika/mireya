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
import Packages from './components/Packages'
import Brands from './components/packages/Brands'
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
      <Packages />
      <Brands />
      <AllFaqs />
      <Team />
    </Layout>
  )
}
export default Home