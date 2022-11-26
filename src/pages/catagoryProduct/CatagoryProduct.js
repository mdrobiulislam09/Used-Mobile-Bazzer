import React from 'react';

const CatagoryProduct = ({ n }) => {
    const { location, used, picture, sellPrice, originalPrice, productName, sellerName, postDate } = n;
    return (
        <div className="card w-96 bg-base-100 mx-auto shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{productName}</h2>
                <p>Seller Name: {sellerName}</p>
                <p>Location: {location}</p>
                <p>Buy Price: {originalPrice}</p>
                <p>Selling Price: m{sellPrice}</p>
                <p>Use time:{used}</p>
                <p>Post Date: {postDate}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default CatagoryProduct;