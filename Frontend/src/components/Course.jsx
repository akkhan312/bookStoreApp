import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
export default function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 z-50">
        <div className="mt-28 justify-center text-center items-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            We are delighted to have you{" "}
            <span className="text-pink-500">Here!:)</span>
          </h1>
          <p className="mt-5 md:mt-9">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            magni cum culpa vitae ipsum quod aliquam ex quo at? Libero tempora
            voluptas doloribus, molestiae optio quod similique nobis ratione
            delectus.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Magni cum culpa vitae ipsum quod aliquam ex quo at? Libero tempora
            voluptas doloribus, molestiae optio quod similique nobis ratione
            delectus.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 rounded-md px-3 py-2 text-white hover:bg-pink-700">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4">
        {list.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))}
        </div>
      </div>
    </>
  );
}
