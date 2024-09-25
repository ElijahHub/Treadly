import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  children,
  className,
  onClick,
  text,
  isLink,
  path,
  title,
}) => {
  return (
    <>
      {isLink ? (
        <Link
          to={path}
          className={className || ""}
          onClick={onClick}
          title={title}
        >
          {text || children}
        </Link>
      ) : (
        <button
          className={`focus:outline-none ${className || ""}`}
          onClick={onClick}
          title={title}
        >
          {text || children}
        </button>
      )}
    </>
  );
};

export default Button;
