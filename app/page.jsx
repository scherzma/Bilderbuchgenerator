'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import { SliderData } from './components/SliderData';

function Home() {
  return (
    <div>
      <Navbar />
      <Slider slides={SliderData} />
    </div>
  );
}

export default Home;
