import React from 'react';

const Order = ({ book, i, handleDelete }) => {
    const { mobileModel, email, _id, MobileNumber, price } = book;
    return (
            <tr>
                <th>{i + 1}</th>
                <td>{mobileModel}</td>
                <td>{email}</td>
                <td>{MobileNumber}</td>
                <td>{price}</td>
                <td><button className='btn' onClick={() => handleDelete(_id)}>Delete</button></td>
            </tr>
    );
};

export default Order;