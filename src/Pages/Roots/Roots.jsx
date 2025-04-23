import React from 'react';
import Nabvar from '../../Components/Header/Nabvar';
import { Outlet,  useNavigation } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const Roots = () => {
    const navigation = useNavigation();
    const isLoading = (navigation.state === 'loading');
    return (
        
        
        <div>
            <Nabvar></Nabvar>
            {isLoading && (
                <div className='w-full flex justify-center bg-[#EFEFEF] items-center py-10'>
                    <span className="loading loading-bars loading-xl my-4"></span>
                </div>
            )}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;