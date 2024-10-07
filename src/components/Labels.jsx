import React from "react";
import { labels } from "../constant";

const Labels = () => {
  return (
    <div className='container py-20 flex items-center justify-center gap-20 flex-wrap'>
      {labels.map((item, i) => (
        <div key={i} className='cursor-pointer w-[10rem] '>
          <img
            src={item}
            className=' w-full opacity-20 hover:opacity-100'
            width={200}
            height={200}
            alt='images'
          />
        </div>
      ))}
    </div>
  );
};

export default Labels;
