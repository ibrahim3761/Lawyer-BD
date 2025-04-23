import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const LawyerDetails = () => {
    const {id} = useParams();
    const idnum = parseInt(id);
    const data = useLoaderData();
    const lawyer = data.find(lawyer => lawyer.id === idnum);
    const {name, image, experience, speciality, licenseNumber, availableDays,fee} = lawyer;

    return (
        <div>
            
        </div>
    );
};

export default LawyerDetails;