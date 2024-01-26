import { useState } from "react";
import { useApiData } from "../Utils/Context";
import Search from "./Search";
import { FaEye } from "react-icons/fa";


import { MdDelete } from "react-icons/md";
import Sharepost from "../Components/Sharepost";

const Homepage = () => {
  const { photo, removepost } = useApiData();
  
  console.log(photo);
  return (
    <>
      <Search />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 object-contain mx-32 py-20">
        {photo.map((item) => {
          const { alt, url, src, photographer, id } = item;
          return (
            <div
              key={id}
              className="border-sky-700 border-2 p-3 rounded-3xl flex flex-col justify-between"
            >
              <a href={url}>
                <img
                  src={src.original}
                  alt={alt}
                  className="w-full h-56 rounded-3xl"
                />
              </a>
              <p className="font-mono pt-5 text-center ">
                Clicked by <strong>{photographer}</strong>
              </p>

              <div className="buttons flex items-center justify-between pt-3 px-3">
              <span className="share">
                                  <Sharepost  url={url} author={photographer} />
                

                  </span>
                <a href={url}>
                  <span className="delete">
                    <FaEye />
                  </span>
                </a>
                

              </div>
            </div>
          );
        })}
      </div>
    </>

                //     {/* <span className="veiwmore" onClick={() => removepost(id)}>
                //   <MdDelete />
                // </span> */}
  );
};

export default Homepage;