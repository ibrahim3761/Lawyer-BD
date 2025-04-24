import React from "react";
import { useParams } from "react-router";
import { TbMoodSad } from "react-icons/tb";
import { PiTrademarkRegistered } from "react-icons/pi";
import { Link } from "react-router";
const LawyerDetailsError = () => {
  const { licenseNumber } = useParams();

  return (
    <div>
      <div className="flex lg:h-screen justify-center gap-6 items-center">
        <div className="p-5 card  card-xl shadow-sm flex flex-col justify-center gap-6 items-center bg-gray-100">
          <TbMoodSad size={200} />
          <h1 className="lg:text-5xl font-bold">No Lawyer Found</h1>
          <p className="text-gray-500">No Lawyer Found with this License No-</p>
          <h5 className="flex gap-2 items-center text-start text-black font-semibold">
            <PiTrademarkRegistered /> {licenseNumber}
          </h5>
          <Link to={"/"}>
            <button
              type="button"
              className="btn btn-outline-primary bg-blue-700 text-white"
            >
              View All Lawyers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetailsError;
