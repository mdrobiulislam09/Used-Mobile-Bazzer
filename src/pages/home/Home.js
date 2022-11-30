import React from 'react';
import Banner from '../banner/Banner';
import Catagory from '../Catagory';
import SpecialSection from '../special/SpecialSection';

const Home = () => {
    return (
        <div>
            <Catagory></Catagory>
            <Banner></Banner>
            <SpecialSection></SpecialSection>
        </div>
    );
};

export default Home;