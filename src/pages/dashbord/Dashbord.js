import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminBord from '../adminBord/AdminBord';

const Dashbord = () => {
    return (
        <div className='flex'>
            <AdminBord></AdminBord>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashbord;