import React from 'react';

const Order = ({ book, i, handleDelete }) => {
    const { mobileModel, email, _id } = book;
    return (
        <div>
            <tr>
                <th>{i + 1}</th>
                <td>{email}</td>
                <td>{mobileModel}</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
            </tr>
        </div>
    );
};

export default Order;