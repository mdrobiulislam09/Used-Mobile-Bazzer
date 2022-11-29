import React, { useEffect, useState } from 'react';
import Catagories from './catagories/Catagories';

const Catagory = () => {
    const [catagori, setCatagory] = useState([]);

    useEffect(() => {
        fetch('https://twelve-server-mdrobiulislam09.vercel.app/products')
        .then(res => res.json())
        .then(data => setCatagory(data))
    }, [])

    return (
        <div className='grid my-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24'>
            {
                catagori.map(product => <Catagories
                    key={product._id}
                    product={product}
                ></Catagories>)
            }
        </div>
    );
};

export default Catagory;