import React, { useState } from 'react';

function Pagination({pageProp,goBack,goAhead}) {

  return <>
    <div className="w-full 
    flex justify-center
    mb-8
    ">
      <button className="
            p-2
            border-2
            border-teal-500
            text-teal-500
            border-r-0
            rounded-l-xl
        "
        onClick={goBack}
      >Previous</button>
      <button className="
            p-2
            border-2
            border-teal-500
            text-teal-500
            bg-gray-300
            ">
              {pageProp}
            </button>
      <button className="
            p-2
            border-2
            border-teal-500
            text-teal-500
            border-l-0
            rounded-r-xl
            "
        onClick={goAhead}
        >Next</button>
    </div>
  </>
}

export default Pagination;
