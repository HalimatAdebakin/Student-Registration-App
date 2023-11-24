import React, { useEffect, useState } from "react";
import dp from "../../../images/dp.svg";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useStudent } from "../../../context/StudentContext";


function AddSuccess() {
  const {id} = useParams();
  const [userAccount, setUserAccount] = useState(null);
  const {students} = useStudent();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = students.filter((u) => u.id === parseInt(id));
    if (userData) {
      console.log(userData, parseInt(id))
      setUserAccount(userData[0]);
    }else{
      toast.error("Error Invalid Student ID")
      navigate("/")
    }
  },[id]);

  return (
    <>
      {
        !userAccount ? <div>Wait Page loading.....</div> : 
        (
          <div>
            <div className="flex justify-end w-[391px] mx-auto ">
              <div className="rounded-full bg-[white] w-12 h-12 mb-4 flex justify-center items-center border-[#ECEEEE] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M12.8538 12.1463C12.9002 12.1927 12.9371 12.2479 12.9622 12.3086C12.9874 12.3693 13.0003 12.4343 13.0003 12.5C13.0003 12.5657 12.9874 12.6308 12.9622 12.6915C12.9371 12.7521 12.9002 12.8073 12.8538 12.8538C12.8073 12.9002 12.7522 12.9371 12.6915 12.9622C12.6308 12.9873 12.5657 13.0003 12.5 13.0003C12.4343 13.0003 12.3693 12.9873 12.3086 12.9622C12.2479 12.9371 12.1927 12.9002 12.1463 12.8538L8.00003 8.70688L3.85378 12.8538C3.75996 12.9476 3.63272 13.0003 3.50003 13.0003C3.36735 13.0003 3.2401 12.9476 3.14628 12.8538C3.05246 12.7599 2.99976 12.6327 2.99976 12.5C2.99976 12.3673 3.05246 12.2401 3.14628 12.1463L7.29316 8L3.14628 3.85375C3.05246 3.75993 2.99976 3.63269 2.99976 3.5C2.99976 3.36732 3.05246 3.24007 3.14628 3.14625C3.2401 3.05243 3.36735 2.99973 3.50003 2.99973C3.63272 2.99973 3.75996 3.05243 3.85378 3.14625L8.00003 7.29313L12.1463 3.14625C12.2401 3.05243 12.3674 2.99973 12.5 2.99973C12.6327 2.99973 12.76 3.05243 12.8538 3.14625C12.9476 3.24007 13.0003 3.36732 13.0003 3.5C13.0003 3.63269 12.9476 3.75993 12.8538 3.85375L8.70691 8L12.8538 12.1463Z"
                    fill="#748181"
                  />
                </svg>
              </div>
            </div>
            <div className="mx-auto rounded-2xl p-6 bg-[white] w-[391px] text-center">
              <div className="w-full h-20 flex justify-center items">
                <div className="flex w-14 h-14 rounded-full items-center justify-center">
                  <img className="w-full h-full rounded-full" src={userAccount?.picture} alt="frame1" />
                </div>
              </div>
              
              <div className="mt-6 text-[#131515] text-lg font-semibold">Successful Created</div>
              <div className="border-b-2 pb-8 mt-2 text-[#748181] font-medium text-base">An account have been created for <span className="font-bold text-lg">{userAccount.firstName} {userAccount.lastName}</span> with the ID number: <span className="font-bold text-lg">HIS/{userAccount.id}</span></div>
              <div className="flex justify-center mt-10">
                  <NavLink
                    to="/"
                    className="bg-[#36A1C5] text-white text-base font-medium px-4 py-2 w-full rounded-full focus:outline-none"
                  >
                    Done
                  </NavLink>
                </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default AddSuccess;
