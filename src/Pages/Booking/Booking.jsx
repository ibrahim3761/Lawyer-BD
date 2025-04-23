import React from 'react';
import HandleBook from './HandleBook';

const Booking = ({bookedLawyers,handleCancelAppointment}) => {
    return (
        <div>
         {/* rechart */}
         {
            bookedLawyers.map((lawyer,index) =><HandleBook key={index} handleCancelAppointment={handleCancelAppointment} lawyer={lawyer}></HandleBook> ) 
         }
        </div>
    );
};

export default Booking;