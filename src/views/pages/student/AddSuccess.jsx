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
            <div className="mx-auto rounded-2xl p-6 bg-[white] w-[391px] text-center border-2 border-[#ECEEEE]">
              <div className="w-full h-20 flex justify-center items">
                <div className="flex w-14 h-14 rounded-full items-center justify-center">
                  <img className="w-full h-full rounded-full" src={userAccount?.picture} alt="frame1" />
                </div>
              </div>
              
              <div className="mt-6 text-[#131515] text-lg font-semibold">Successful Created</div>
              <div className="border-b-2 pb-8 mt-2 text-[#748181] font-medium text-base">An account have been created for <span className="font-bold text-lg">{userAccount.firstName} {userAccount.lastName}</span> with the ID number: <span className="font-bold text-lg">CAP/{userAccount.id}</span></div>
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
