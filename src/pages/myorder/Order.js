import React from 'react';

const Order = ({ book, i, handleDelete }) => {
    const { mobileModel, email, _id } = book;
    return (
        <div>
            <tr>
                <th>{i + 1}</th>
                <td>{mobileModel}</td>
                <td>{email}</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td><button onClick={() => handleDelete(_id)}>Delete</button></td>
            </tr>
        </div>
    );
};

export default Order;