import React from "react";
import { FaCartPlus, FaEye } from "react-icons/fa6";
import Button from "./Button";
import { FaTimes } from "react-icons/fa";

const Table = ({
  headings,
  data,
  showTotal,
  onClick,
  onClickView,
  onDelete,
  handleQuantity,
  path,
}) => {
  const widths = ["w-1/2", "w-1/4", "w-1/6"];

  return (
    <table className='w-full table-fixed'>
      <thead>
        <tr>
          {headings.map((heading, i) => (
            <th key={i} className={` ${widths[i]} text-left body-1 py-4 `}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={item.id} className='border-y border-n-3'>
            <td className='py-8 '>
              <div className='flex items-center gap-5'>
                <div className=''>
                  <img
                    src={"https://" + item.imageUrl}
                    width={80}
                    alt={item.name}
                  />
                </div>
                <div className='justify-center gap-3'>
                  <p className='body-2'>{item.name}</p>
                  <h6 className='h6'>{item.price}</h6>
                </div>
              </div>
            </td>
            {showTotal ? (
              <td className='py-8'>
                <div className='flex items-center  gap-3 '>
                  <Button
                    text='-'
                    className='h6 border border-n-1 bg-[#eee] w-[2rem]'
                    onClick={() => handleQuantity(item, "dec")}
                  />
                  <h5 className='h5'>{item.quantity}</h5>
                  <Button
                    text='+'
                    className='h6 border border-n-1 bg-[#eee] w-[2rem]'
                    onClick={() => handleQuantity(item, "inc")}
                  />
                </div>
              </td>
            ) : (
              <td className='py-8 '>{item?.brandName || "Nike"}</td>
            )}

            {showTotal ? (
              <td className='py-8'>
                <h6 className='h6'>
                  ${(item?.priceValue * item.quantity).toFixed(2)}
                </h6>
              </td>
            ) : (
              <>
                <td>
                  <Button
                    className='bg-transparent'
                    onClick={() => onClick(item, item.id)}
                  >
                    <FaCartPlus />
                  </Button>
                </td>
                <td>
                  <Button
                    isLink
                    className='bg-transparent'
                    onClick={() => onClickView(item)}
                    path={`/shop/${item.url}`}
                  >
                    <FaEye />
                  </Button>
                </td>
              </>
            )}
            <td>
              <Button
                className='bg-[#eee]  w-[2rem] h-[2rem]  flex items-center justify-center rounded-full cursor-pointer '
                onClick={() => onDelete(item)}
              >
                <FaTimes className='text-[1.2rem] text-color-3  ' />
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
