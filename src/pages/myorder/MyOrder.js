import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Order from './Order';

const MyOrder = () => {

    const {user} = useContext(AuthContext)
    const [booked, setBooked] = useState([])

    const url = `https://twelve-server-mdrobiulislam09.vercel.app/bookings?email=${user?.email}`

    const {data: bookings =[]} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    athourization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        const procced = window.confirm('Are you sure want to delete this product')
        if(procced){
            fetch(`https://twelve-server-mdrobiulislam09.vercel.app/bookings/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount >= 0){
                    const remaining = bookings.filter(books => books._id !== id)
                    setBooked(remaining)
                }
            })
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Mobile Name</th>
                            <th>Email</th>
                            <th>Mobile Number</th>
                            <th>Price</th>
                            <th>Delete Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((book, i) => <Order
                              key={book._id}
                              book={book}
                              i={i}
                              handleDelete={handleDelete}
                            ></Order>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;