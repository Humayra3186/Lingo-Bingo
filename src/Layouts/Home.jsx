import React from 'react';
import Banner from '../components/Banner/Banner';
import About from '../components/About';
import Success from '../components/Success';
import Testimonial from '../components/Testimonial';
import Slider from '../components/Slider/Slider';

const Home = () => {
    return (
        <div >
          <Slider></Slider>
        
          <About></About>
          <Success></Success>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;