import React from "react";
import projectData from "../data/data.js";

const Card = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-8  items-center justify-items-center">
      {projectData.map((data) => (
        <div
          className="border    shadow-lg w-[300px] h-[300px]  rounded-3xl   "
          key={data.id}
        >
          <img
            src={data.image}
            alt={data.projectName}
            className="image-fit w-full rounded-t-3xl"
          />
          <div>
            <h3 className="py-3 text-2xl text-ternary-dark font-bold-general px-5 text-center">
              {data.projectName}
            </h3>
            <p className="px-5 py- 2 text-xl text-slate-500 font-semibold-general text-center ">
              {data.ProjectType}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
