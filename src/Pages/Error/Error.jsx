import React from "react";
import { TbMoodSad } from "react-icons/tb";
import { useNavigate } from "react-router";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center gap-6 items-center">
      <div className="p-5 card  card-xl shadow-sm flex flex-col justify-center gap-6 items-center bg-gray-100">
        <TbMoodSad size={200} />
        <h1>404</h1>
        <p>Page not found</p>
        <p>Oops! The page you are looking for doesn't exist</p>
        <button
          onClick={() => navigate(-1)}
          type="button"
          class="btn btn-outline-primary"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
