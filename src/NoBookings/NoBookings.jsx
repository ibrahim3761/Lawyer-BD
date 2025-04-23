import React from 'react';
import { TbMoodSad } from "react-icons/tb";
import { Link} from "react-router";

const NoBookings = () => {
    return (
        <div>
            <div className="flex lg:h-screen justify-center gap-6 items-center">
                  <div className="p-5 card  card-xl shadow-sm flex flex-col justify-center gap-6 items-center bg-gray-100">
                    <TbMoodSad size={200} />
                    <h1 className='lg:text-5xl font-bold'>You have not booked any appointments yet</h1>
                    <p className='text-gray-500'>Our platform connects you with verified Lawyers accross various specialities-all at your convenience</p>
                    <Link to={"/"}><button
                      type="button"
                      className="btn btn-outline-primary bg-blue-700 text-white"
                    >
                      Book an appointment
                    </button></Link>
                  </div>
                </div>
        </div>
    );
};

export default NoBookings;