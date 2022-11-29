import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Order from './Order';

const MyOrder = () => {

    const {user} = useContext(AuthContext)
    const [booked, setBooked] = useState([])

    const url = `http://localhost:5000/bookings?email=${user?.email}`

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
        const procced = window.confirm('Are you')
        if(procced){
            fetch(`http://localhost:5000/bookings/${id}`, {
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
                            <th>Mobil Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
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