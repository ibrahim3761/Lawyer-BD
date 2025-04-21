import React from 'react';
import Nabvar from '../../Components/Header/Nabvar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Roots = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;