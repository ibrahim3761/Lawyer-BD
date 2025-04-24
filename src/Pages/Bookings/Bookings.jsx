import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBooking, removeFromDb } from '../../Utilities/Utilities';
import Booking from '../Booking/Booking';
import NoBookings from '../../NoBookings/NoBookings';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Bookings = () => {
    const [bookedLawyers, setBookedLawyers] = useState([]);

    const data = useLoaderData();
    useEffect(() => {
        const storedBookings = getStoredBooking();
        const convertedStoredBookings = storedBookings.map((storedBooking) => parseInt(storedBooking));
        const bookedLawyers = data.filter((lawyer) => convertedStoredBookings.includes(lawyer.id));
        setBookedLawyers(bookedLawyers);
    },[ data]);

    const handleCancelAppointment = (id) => {   
        removeFromDb(id);
        setBookedLawyers(prev => prev.filter(lawyer => lawyer.id !== id));
        toast.error("Appointment cancelled successfully.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
      };

      console.log(bookedLawyers.length);
      
    return (
        <>
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <div>
            {
                bookedLawyers.length > 0 ? (
                    <Booking handleCancelAppointment={handleCancelAppointment} bookedLawyers={bookedLawyers}></Booking> 
                ):(<NoBookings></NoBookings>)
            }
        </div>
        
        </>
    );
};

export default Bookings;