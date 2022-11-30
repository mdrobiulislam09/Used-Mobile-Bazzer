import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const User = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://twelve-server-mdrobiulislam09.vercel.app/users');
            const data = await res.json();
            return data
        }
    })

    const handleAdmin = (id) =>{
        fetch(`https://twelve-server-mdrobiulislam09.vercel.app/users/admin/${id}`,{
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Succesfully make Admin')
                refetch();
            };
        })
    }

    return (
        <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete Now</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id} >
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleAdmin(user._id)} className='btn btn-sm btn-warning'>Make Admin</button>}</td>
                                <td><button className='btn btn-sm '>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default User;