import React from 'react';
import { Link } from 'react-router-dom';
import './Catagories.css'

const Catagories = ({ product }) => {
    const { catagory, pictureurl, _id} = product;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img className='photo-size' src={pictureurl} alt="Mobile" /></figure>
                <div className="card-body">
                    <div className="card-actions justify-end">
                        <h2 className="card-title blue m-3">{catagory}</h2>
                        <p>{_id}</p>
                        <Link to ={`/product/${_id}`}>See Products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagories;