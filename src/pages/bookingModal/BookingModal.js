import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const BookingModal = ({ phone, date }) => {
    const { productName, sellPrice } = phone;
     
    const { user } = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2"></label>
                    <from>
                        <p>Mobile Name</p>
                        <input type="text" disabled value={productName} className="input input-bordered w-full max-w-xs" />
                        <p>Price</p>
                        <input type="text" disabled value={sellPrice} className="input input-bordered w-full max-w-xs" />
                        <p>Date</p>
                        <input type="text" value={date} className="input input-bordered w-full max-w-xs" />
                        <p>Location</p>
                        <input type="text" placeholder="Meet Location" required className="input input-bordered w-full max-w-xs" />
                        <p>Mobile Name</p>
                        <input type="tel" placeholder="Mobile Number" required className="input input-bordered w-full max-w-xs" />
                        <p>Email</p>
                        <input type="tel" value={user?.email} required className="input input-bordered w-full max-w-xs" />
                        <br/>
                        <br/>
                        <input type="submit" value="OK" className="w-full btn btn-accent" />
                    </from>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;