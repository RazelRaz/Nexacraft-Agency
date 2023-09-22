import Brands from '@/components/Brands';
import Contacts from '@/components/Contacts';
import FeaturedProject from '@/components/FeaturedProject';
import Hero from '@/components/Hero';
import HowWorks from '@/components/HowWorks';
import Stats from '@/components/Stats';
import React from 'react';

const page = () => {
  return (
    <div>
      <Hero></Hero>
      <Stats></Stats>
      <HowWorks></HowWorks>
      <FeaturedProject></FeaturedProject>
      <Contacts></Contacts>
      <Brands></Brands>
    </div>
  );
};

export default page;