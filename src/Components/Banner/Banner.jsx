import React from "react";
import banner from "../../assets/banner-img-1.png";
const Banner = () => {
  return (
    <div className="rounded-4xl overflow-hidden lg:px-10 my-10">
      <div
        className="hero min-h-screen rounded-4xl"
        style={{
          backgroundImage:
            `url(${banner})`
        }}
      >
        <div className=""></div>
        <div className="text-white text-center">
          <div className="max-w-3xl ">
            <h1 className="mb-5 text-5xl font-bold space-y-10">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
            <p className="mb-5 font-extralight">
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
