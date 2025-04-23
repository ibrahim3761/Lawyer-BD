import React from "react";

const HandleBook = ({ lawyer,handleCancelAppointment }) => {
  return (
    <div className="border rounded-xl p-5 shadow-sm mb-4 lg:mx-10 my-10">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h2 className="text-lg font-semibold">{lawyer.name}</h2>
        <p className="text-gray-500">{lawyer.speciality}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-600">
          Appointment Fee: <strong>{lawyer.fee} Taka</strong>
        </p>
      </div>
    </div>

    <button onClick={() => handleCancelAppointment(lawyer.id)}
      className="w-full text-red-500 border cursor-pointer border-red-500 px-6 py-2 rounded-full hover:bg-red-100 transition duration-200 font-semibold"
    >
      Cancel Appointment
    </button>
  </div>
  );
};

export default HandleBook;
