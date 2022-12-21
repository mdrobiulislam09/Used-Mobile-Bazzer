import React, { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import Catagories from './catagories/Catagories';


const Catagory = () => {

    const [loading, setloading] = useState(false)
    const [catagori, setCatagory] = useState([]);

    useEffect(() => {
        setloading(true)
        fetch('https://twelve-server-mdrobiulislam09.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setCatagory(data)
                setloading(false)
            })
    }, [])

    return (
        <div className='grid  my-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                loading ? <ClipLoader
                size={116}
                color={'green'}
                className='m-auto'
              />
                    :
                    catagori.map(product => <Catagories
                        key={product._id}
                        product={product}
                    ></Catagories>)
            }
        </div>
    );
};

export default Catagory;