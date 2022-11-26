import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../bookingModal/BookingModal';
import CatagoryProduct from '../catagoryProduct/CatagoryProduct';


const Products = () => {
const [phone, setPhone] = useState(null)
const [date, setDate]= useState(new Date())

    const products = useLoaderData()
    return (
        <section>
            <div className='grid my-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24'>
                {
                    products.map(n => <CatagoryProduct
                        key={n._id}
                        n={n}
                        setPhone={setPhone}
                        setDate={setDate}
                    ></CatagoryProduct>)
                }
            </div>
            {
                phone &&
                <BookingModal 
                phone={phone}
                date={date}
            ></BookingModal>}
        </section>
    );
};

export default Products;