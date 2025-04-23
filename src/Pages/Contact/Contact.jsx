import React from 'react';
import { Link } from 'react-router';
const Contact = () => {
    return (
    <>
    <Nabvar></Nabvar>
    <div className="flex h-screen justify-center gap-6 items-center">
      <div className="p-5 card  card-xl shadow-sm flex flex-col justify-center gap-6 items-center bg-gray-100">
        <TbMoodSad size={200} />
        <h1>404</h1>
        <p>Page not found</p>
        <p>Oops! The page you are looking for doesn't exist</p>
        <Link to={"/"}><button
          type="button"
          className="btn btn-outline-primary"
        >
          Go Back Home
        </button></Link>
      </div>
    </div>
    </>
    );
};

export default Contact;