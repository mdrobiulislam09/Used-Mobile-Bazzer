import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminBord from '../adminBord/AdminBord';

const Dashbord = () => {
    return (
        <div>
            <AdminBord></AdminBord>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashbord;