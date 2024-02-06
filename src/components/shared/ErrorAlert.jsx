import React from "react";
import redLine from "../../assets/shapes/redLine.png";
import notification from "../../assets/shapes/notification.png";
const ErrorAlert = ({ message }) => {
  return (
    <div
      className={` w-11/12  md:w-1/2 lg:w-1/3 mx-auto  px-4 py-3  text-red-500 `}
      role="alert"
    >
      <div className={`flex gap-2 `}>
        <div className="py-1 w-10 ">
          <img src={notification} />
        </div>
        <p className="w-full md:py-2 py-2 text-sm md:text-sm">{message}</p>
      </div>
      <div>
        <img src={redLine} />
      </div>
    </div>
  );
};

export default ErrorAlert;
