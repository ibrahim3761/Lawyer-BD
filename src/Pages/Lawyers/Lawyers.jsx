import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = () => {
    const lawyers = useLoaderData();
    const [showAll, setShowAll] = useState(false);

    const visibleLawyers = showAll ? lawyers : lawyers.slice(0, 6);

    const handleToggle = () => {
        setShowAll(prev => !prev);
    };

    return (
        <div>
            <div className='text-center lg:px-18 pt-10'>
                <h1 className='text-4xl font-bold'>Our Best Lawyers</h1>
                <p className='text-lg text-gray-500 px-5 py-6'>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    {
                        visibleLawyers.map(lawyer => (
                            <Lawyer key={lawyer.id} lawyer={lawyer} />
                        ))
                    }
                </div>

                {lawyers.length > 6 && (
                    <div className='text-center mt-8'>
                        <button
                            onClick={handleToggle}
                            className="btn w-56 text-white font-bold bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 rounded-full transition duration-300"
                        >
                            {showAll ? 'Show Less' : 'View All Lawyers'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Lawyers;
