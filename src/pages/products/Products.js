import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CatagoryProduct from '../catagoryProduct/CatagoryProduct';


const Products = () => {
    const products = useLoaderData()
    return (
        <div className='grid my-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24'>
            {
                products.map(n => <CatagoryProduct
                    key={n._id}
                    n={n}
                ></CatagoryProduct>)
            }
        </div>
    );
};

export default Products;