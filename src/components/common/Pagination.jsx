import React from "react";
import _ from "lodash";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav
      aria-label='Page navigation'
      className='w-full flex items-center justify-center my-3'
    >
      <ul className='flex items-center gap-[0.15rem]'>
        {pages.map((page) => (
          <li
            key={page}
            className={`${
              page === currentPage
                ? "bg-blue-600 text-n-1"
                : "bg-white hover:bg-gray-100"
            } px-4 py-2 ml-0 border border-gray-300 rounded-md cursor-pointer `}
            onClick={() => onPageChange(page)}
          >
            <a
              href='#start'
              className={`leading-tight ${
                page === currentPage ? "text-n-1" : "text-n-8"
              } hover:text-gray-700`}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
