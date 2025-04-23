import React from "react";
import { PiTrademarkRegistered } from "react-icons/pi";
import { Link } from "react-router";

const Lawyer = ({ lawyer }) => {
  const {
    id,
    name,
    image,
    speciality,
    experience,
    licenseNumber,
    status,
  } = lawyer;
  return (
    <div>
      <div class="flex gap-6 bg-base-100  shadow-sm p-4">
        <div>
          <img
            src={image}
            alt="Shoes"
            class="rounded-xl h-[200px] w-[200px] object-cover "
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-2 ">
            <p className="p-2 rounded-2xl bg-blue-100 text-blue-600">
              {status}
            </p>
            <p className="p-2 rounded-2xl bg-green-100 text-green-600">
              {experience}
            </p>
          </div>
            <h2 className="text-2xl text-start font-bold">{name}</h2>
            <h5 className="p-0 text-start">{speciality}</h5>
            <h5 className="flex gap-2 items-center text-start"><PiTrademarkRegistered /> {licenseNumber}</h5>

          <div class="flex flex-col">
            <Link to={`/lawyerDetails/${id}`}><button className="mt-2 cursor-pointer  lg:px-34 py-2 border border-blue-300 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition">
              View Details
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyer;
