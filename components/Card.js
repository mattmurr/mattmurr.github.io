import React from "react";
import Link from "next/link";

const Card = ({ project }) => {
  return (
    <Link href={project.url}>
      <div className="my-4 shadow-lg cursor-pointer transition-transform duration-500 transform hover:scale-105 md:my-0 md:flex md:mx-auto md:max-w-2xl">
        <img
          className="object-cover w-full border border-b-0 border-gray-900 rounded-lg rounded-b-none md:border-b md:border-r-0 md:rounded-bl-lg md:rounded-r-none md:w-2/3 pb-5/6"
          src={project.image}
          alt={project.title}
        />
        <div className="w-full px-4 py-4 bg-gray-800 border border-gray-900 rounded-lg rounded-t-none shadow md:rounded-tr-lg md:rounded-l-none md:w-2/3">
          <h2 className="mr-auto text-2xl font-medium ">{project.title}</h2>
          <p className="mt-4 text-gray-400 text-md">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
