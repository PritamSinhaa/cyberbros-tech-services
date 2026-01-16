import React from "react";

function AboutHeader({about,approach}) {
  return (
    <div className="w-full  text-white flex justify-center items-center">
      <div className="mt-40 mb-5 flex items-center text-white/90 w-270">
        <div className="w-[65%]">
          <div>
            <h2 className="text-4xl font-medium leading-14">About</h2>

            <p className="text-white/60 text-xl my-8">{about}</p>
          </div>
          <div>
            <h3 className="text-3xl mb-8">My approach to work</h3>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
