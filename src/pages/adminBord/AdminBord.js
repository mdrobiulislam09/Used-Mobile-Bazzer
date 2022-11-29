import React from 'react';
import { Link } from 'react-router-dom';

const AdminBord = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                
                <div>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashbord/myorder'>My Order</Link></li>
                        <li><Link to='/dashbord/user'>All User</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminBord;