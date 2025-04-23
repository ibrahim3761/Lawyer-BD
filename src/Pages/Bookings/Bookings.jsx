import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBooking } from '../../Utilities/Utilities';
import Booking from '../Booking/Booking';
import NoBookings from '../../NoBookings/NoBookings';

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
        const updatedBookings = bookedLawyers.filter((booking) => booking.id !== id);
        
        localStorage.setItem("bookinglist", JSON.stringify(updatedBookings));
        setBookedLawyers(updatedBookings);
      };
      console.log(bookedLawyers.length);
      
    return (
        <div>
            {
                bookedLawyers.length > 0 ? (
                    <Booking handleCancelAppointment={handleCancelAppointment} bookedLawyers={bookedLawyers}></Booking> 
                ):(<NoBookings></NoBookings>)
            }
        </div>
    );
};

export default Bookings;