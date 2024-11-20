import React from 'react';
import About from '../components/About';
import Success from '../components/Success';
import Testimonial from '../components/Testimonial';
import Slider from '../components/Slider/Slider';
import Award from '../components/Award';

const Home = () => {
    return (
        <div >
          <Slider></Slider>
        
          <About></About>
          <Success></Success>
          <Testimonial></Testimonial>
          <Award></Award>
        </div>
    );
};

export default Home;