import React from "react";
import Banner from "../../Components/Banner/Banner";
import Lawyers from "../Lawyers/Lawyers";
import CountUp from "react-countup";
import succdoc from "../../assets/success-doctor.png";
import succpat from "../../assets/success-patients.png";
import succstaff from "../../assets/success-staffs.png";
import succreview from "../../assets/success-review.png";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Lawyers></Lawyers>
      <div className="my-10 lg:px-10">
        <div className="text-center">
          <h1>We Provide Best Law Services</h1>
          <p>
            Our platform connects you with verified, experienced Lawyers across
            various specialities — all at your convenience.
          </p>
        </div>
        <div className="px-10 mx-auto py-8 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Doctors Card */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg">
                <img src={succdoc} alt="" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-1">
              <CountUp end={199} suffix="+" duration={5} />
            </h2>
            <p className="text-gray-500">Total Lawyers</p>
          </div>

          {/* Total Reviews Card */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-start mb-4">
              <div className="flex w-12 h-12 items-center justify-center rounded-lg">
                <img src={succreview} alt="" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-1">
              <CountUp end={467} suffix="+" duration={5} />
            </h2>
            <p className="text-gray-500">Total Reviews</p>
          </div>

          {/* Patients Card */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={succpat} alt="" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-1">
              <CountUp end={1900} suffix="+" duration={5} />
            </h2>
            <p className="text-gray-500">Case inititated</p>
          </div>

          {/* Total Staffs Card */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-sm">
            <div className="flex items-start mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src={succstaff} alt="" />
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-1">
              <CountUp end={300} suffix="+" duration={5} />
            </h2>
            <p className="text-gray-500">Total Stuffs</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
