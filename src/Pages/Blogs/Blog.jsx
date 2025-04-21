import React from "react";

const Blog = ({ data }) => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
            {data.question}
        </div>
        <div className="collapse-content text-sm">
          {data.answer}
        </div>
      </div>
    </div>
  );
};

export default Blog;
