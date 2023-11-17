// EyeIcon.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const EyeIcon = ({ toggleVisibility }) => {
  return (
    <FontAwesomeIcon
      icon={faEye}
      onClick={toggleVisibility}
      className="absolute right-2 top-2/4 align-center cursor-pointer text-[#153E4C]"
    />
  );
};

export default EyeIcon;
