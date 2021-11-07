import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const LayoutAdmin = () => {
    return (
        <div>
            <nav>Soy navbar</nav>
            <Sidebar />
            <Outlet />
            <footer>Soy footer</footer>
        </div>
    )
}

export default LayoutAdmin;
