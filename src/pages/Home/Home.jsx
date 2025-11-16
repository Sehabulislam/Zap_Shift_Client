import React from 'react';
import Slider from './Slider';
import HowWorks from './HowWorks';
import Services from './Services';
import Brands from './Brands';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HowWorks></HowWorks>
            <Services></Services>
            <Brands></Brands>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;