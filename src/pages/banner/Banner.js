import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url("https://t-mobile.scene7.com/is/image/Tmusprod/bg-heroFull-multiple_phones_aerial.desktop?wid=1280&hei=720")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Tusted Used Mobile Shop</h1>
                        <p className="mb-5">This is a National website and also 100% tusted Shop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;