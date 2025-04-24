import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { PiTrademarkRegistered } from "react-icons/pi";
import { MdErrorOutline } from "react-icons/md";
import { addToDb } from "../../Utilities/Utilities";
import { ToastContainer, toast, Bounce } from 'react-toastify';

const LawyerDetails = () => {
  const {licenseNumber } = useParams();
  const data = useLoaderData();
  const lawyer = data.find((lawyer) => String(lawyer.licenseNumber) === licenseNumber);
  const {
    id,
    name,
    image,
    experience,
    speciality,
    availableDays,
    fee,
  } = lawyer;

  const navigate = useNavigate();

  const handleLawyer = (id, name) => {
    const added = addToDb(id);
    if (added) {
      toast.success(`Appointment scheduled for ${name} successfully.`, {
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

       setTimeout(() => {
            navigate("/my-bookings");
        }, 2500); 
    } else {
        toast.warn("Appointment is already scheduled for today.", {
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
    }
};

  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const isAvailable = availableDays.includes(today);

  return (
    <>
    <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
    <div className="bg-[#EFEFEF] lg:px-10 px-5 lg:py-10 py-5">
      <div className="text-center space-y-3 lg:space-y-5 bg-white rounded-2xl lg:p-10 p-5">
        <h1 className="text-3xl font-bold">Lawyer’s Profile Details</h1>
        <p className="opacity-30 font-bold">
          Discover expert care, trusted experience, and the commitment behind
          every consultation.
        </p>
      </div>

      <div className="hero">
        <div className="flex justify-between flex-col lg:grid grid-cols-2 gap-5 lg:gap-28 p-5 my-5 bg-white rounded-2xl">
          <div className="flex justify-center">
            <img src={image} className="rounded-2xl h-[350px] w-[650px]" />
          </div>
          <div className="flex flex-col gap-5 justify-center text-center md:text-left">
            <div className="space-y-2">
              <p className="p-2 w-[100px] text-center rounded-2xl bg-green-100 text-green-600">
              {experience}
              </p>
              <h1 className="text-2xl font-bold">{name}</h1>
              <div className="flex gap-2 ">
              <h5 className="p-0 text-start text-gray-500">{speciality}</h5>
              <h5 className="flex gap-2 items-center text-start text-gray-500"><PiTrademarkRegistered /> {licenseNumber}</h5>
              </div>
            </div>

            <div className="flex gap-2 flex-wrap">
            Availability: 
              {availableDays.map((availableDays, idx) => (
                <span
                  key={idx}
                  className="bg-yellow-100 text-yellow-500 text-sm px-2 py-1 rounded-full"
                >
                {availableDays}
                </span>
              ))}
            </div>

            <p className="text-lg">
              <span className="font-bold">Consultation Fee: </span>
              <span className="text-green-600 font-bold">Taka: {fee}</span>{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center space-y-3 lg:space-y-5 bg-white rounded-2xl lg:p-10 p-5">
        <div className="pb-3 border-b-2 border-dashed border-gray-200">
          <h1 className="text-2xl font-bold">Book an Appointment</h1>
        </div>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between text-lg font-bold pb-3 border-b-2 border-dashed border-gray-200">
          <p>Availability</p>
          <p
            className={`text-sm font-semibold px-2 py-1 rounded-full ${
              isAvailable
                ? "bg-green-100 text-green-600"
                : "bg-green-100 text-green-600"
            }`}
          >
            {isAvailable
              ? "Lawyer Available Today"
              : "Lawyer Unavailable Today"}
          </p>
        </div>

        <div className="pb-5">
          <p className="text-sm font-semibold px-2 py-1 rounded-full text-[#FFA000] bg-orange-50 flex flex-col items-center md:flex-row gap-2 justify-center ">
            <MdErrorOutline size={20} />
            {isAvailable
              ? `Due to high client volume, we are currently accepting appointments for today. We appreciate your understanding and cooperation.`
              : `Due to high client volume, we aren't currently accepting appointments for today. We appreciate your understanding and cooperation.`}
          </p>
        </div>

        <button 
  onClick={() => handleLawyer(id, name)} 
  disabled={!isAvailable}
  className={`btn transition rounded-full 
    ${isAvailable 
      ? "bg-green-600 text-white hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600" 
      : "bg-gray-300 text-gray-500 cursor-not-allowed"} 
    duration-300`}>
  Book Appointment Now
</button>

      </div>
    </div>
    </>
  );
};

export default LawyerDetails;
