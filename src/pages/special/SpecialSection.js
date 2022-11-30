import React from 'react';
import './SpecialSection.css'

const SpecialSection = () => {
    return (
        <div className='sm:flex m-5'>
            <div className='net'>
                <h1 className='text-5xl'>Sell Your Phone</h1>
                <p className='net mt-3'>
                    With Cashify, now recycle mobile phones <br></br> right from your home.<br></br> The process is simple. Select your mobile device model and brand from our list. We'll then come to your doorstep and collect the device from you.
                </p>
                <button className='btn mt-20'>Sell Phone Now</button>
            </div>
            <div className='mt-3'>
                <img src="https://res.cloudinary.com/jerrick/image/upload/v1614068905/6034bca9f62e56001c2f814f.png" alt="imag" />
            </div>
        </div>
    );
};

export default SpecialSection;