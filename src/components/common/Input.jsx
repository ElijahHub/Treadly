import React from "react";

const Input = ({
  id,
  name,
  type,
  className,
  placeholder,
  label,
  value,
  checked,
  onChange,
}) => {
  if (type === "checkbox" || type === "radio") {
    return (
      <div className='flex gap-3'>
        <input
          type={type}
          id={id}
          checked={checked}
          value={value}
          name={name}
          onChange={onChange}
          className='cursor-pointer w-[1rem]   '
        />
        <label htmlFor={id} className={`body-2 ${className ? className : ""} `}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <>
      {label ? (
        <div className='w-full flex items-start justify-start flex-col gap-3'>
          <label htmlFor={id} className='body-2'>
            {label}
            <sup>*</sup>
          </label>
          <input
            type={type || "text"}
            className={`w-full text-sm bg-n-1 border-2 border-n-3 rounded-sm px-6 py-3 placeholder:opacity-[0.9] focus:outline-none ${
              className ? className : ""
            } `}
            placeholder={placeholder || ""}
            value={value}
            onChange={onChange}
            id={id}
            name={name}
          />
        </div>
      ) : (
        <input
          type={type || "text"}
          className={`w-full text-sm bg-n-1 border-2 border-n-3 rounded-sm px-6 py-3 placeholder:opacity-[0.9] focus:outline-none ${
            className ? className : ""
          } `}
          placeholder={placeholder || ""}
          value={value}
          onChange={onChange}
          id={id}
          name={name}
        />
      )}
    </>
  );
};

export default Input;
