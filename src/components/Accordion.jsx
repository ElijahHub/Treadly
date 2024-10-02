import React, { useState } from "react";
import { catalog } from "../constant";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Accordion = ({ className, handleChecked, handleColorSelection }) => {
  const obj = {
    branding: true,
    "filter price": true,
    colors: true,
    gender: true,
  };

  const [active, setActive] = useState(obj);

  const handleActive = (title) => {
    let titleValue = !active[title.toLowerCase()];
    const name = title.toLowerCase();

    setActive({ ...active, [name]: titleValue });
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {catalog.map((item, i) => (
        <div key={item.title} className=''>
          <div
            className='flex justify-between mb-2 cursor-pointer'
            onClick={() => handleActive(item.title)}
          >
            <h5 className='h5'>{item.title}</h5>
            {active[item.title.toLowerCase()] ? (
              <FaChevronUp />
            ) : (
              <FaChevronDown />
            )}
          </div>
          <div
            className={` w-full flex gap-2 mb-6 border-b border-n-5/40 pb-5 transition-all ${
              item.title.toLowerCase() === "gender" ||
              item.title.toLowerCase() === "colors"
                ? "flex-row flex-wrap"
                : "flex-col"
            } ${active[item.title.toLowerCase()] ? "block" : "hidden"} `}
          >
            {item.choices.map((el, j) => (
              <div key={j}>
                {item.title.toLowerCase() === "colors" ? (
                  <div
                    className={`w-[2.3rem] h-[2.3rem] rounded-full cursor-pointer  ${el.choiceTitle} border `}
                    onClick={() => handleColorSelection(el.value)}
                  ></div>
                ) : (
                  <div className='flex gap-2'>
                    <input
                      type='checkbox'
                      name={el.value}
                      onChange={handleChecked(item.title)}
                      className='cursor-pointer w-[1rem] '
                    />
                    <p>{el.choiceTitle}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
