import React from "react";
import { toast } from "react-toastify";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useStudent } from "../../../context/StudentContext";

function DeleteStudent() {
  const { deleteStudent } = useStudent();
  const location = useLocation();
  const navigate = useNavigate();

  const deleteSingleStudent = async () => {
    try {
      await deleteStudent(location.state.studentId);
        toast.success("Student Successfully Deleted")
          navigate("/");
    } catch (error) {
      // Handle the case where student is undefined
      
    }
  };

  return (
    <div>
      <div className="mx-auto rounded-2xl p-6 bg-[white] w-[365px]  border-2 border-[#ECEEEE]">
        <div className="mx-auto rounded-full bg-[#FDF2F2] flex justify-center items-center border-[#ECEEEE] w-12 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
          >
            <path
              d="M27.5 6.5H22.5V5.5C22.5 4.70435 22.1839 3.94129 21.6213 3.37868C21.0587 2.81607 20.2956 2.5 19.5 2.5H13.5C12.7044 2.5 11.9413 2.81607 11.3787 3.37868C10.8161 3.94129 10.5 4.70435 10.5 5.5V6.5H5.5C5.23478 6.5 4.98043 6.60536 4.79289 6.79289C4.60536 6.98043 4.5 7.23478 4.5 7.5C4.5 7.76522 4.60536 8.01957 4.79289 8.20711C4.98043 8.39464 5.23478 8.5 5.5 8.5H6.5V26.5C6.5 27.0304 6.71071 27.5391 7.08579 27.9142C7.46086 28.2893 7.96957 28.5 8.5 28.5H24.5C25.0304 28.5 25.5391 28.2893 25.9142 27.9142C26.2893 27.5391 26.5 27.0304 26.5 26.5V8.5H27.5C27.7652 8.5 28.0196 8.39464 28.2071 8.20711C28.3946 8.01957 28.5 7.76522 28.5 7.5C28.5 7.23478 28.3946 6.98043 28.2071 6.79289C28.0196 6.60536 27.7652 6.5 27.5 6.5ZM12.5 5.5C12.5 5.23478 12.6054 4.98043 12.7929 4.79289C12.9804 4.60536 13.2348 4.5 13.5 4.5H19.5C19.7652 4.5 20.0196 4.60536 20.2071 4.79289C20.3946 4.98043 20.5 5.23478 20.5 5.5V6.5H12.5V5.5ZM24.5 26.5H8.5V8.5H24.5V26.5ZM14.5 13.5V21.5C14.5 21.7652 14.3946 22.0196 14.2071 22.2071C14.0196 22.3946 13.7652 22.5 13.5 22.5C13.2348 22.5 12.9804 22.3946 12.7929 22.2071C12.6054 22.0196 12.5 21.7652 12.5 21.5V13.5C12.5 13.2348 12.6054 12.9804 12.7929 12.7929C12.9804 12.6054 13.2348 12.5 13.5 12.5C13.7652 12.5 14.0196 12.6054 14.2071 12.7929C14.3946 12.9804 14.5 13.2348 14.5 13.5ZM20.5 13.5V21.5C20.5 21.7652 20.3946 22.0196 20.2071 22.2071C20.0196 22.3946 19.7652 22.5 19.5 22.5C19.2348 22.5 18.9804 22.3946 18.7929 22.2071C18.6054 22.0196 18.5 21.7652 18.5 21.5V13.5C18.5 13.2348 18.6054 12.9804 18.7929 12.7929C18.9804 12.6054 19.2348 12.5 19.5 12.5C19.7652 12.5 20.0196 12.6054 20.2071 12.7929C20.3946 12.9804 20.5 13.2348 20.5 13.5Z"
              fill="#DF3939"
            />
          </svg>
        </div>
        <div className="">
          <div className="text-[#131515] text-center mt-8 text-lg font-semibold">
            Delete Student?
          </div>
          <div className="text-base font-medium text-[#748181] text-center mt-2">
            Are you sure you want to delete the account of{" "}
            <span>
              {location.state.fName} {location.state.lName}?
            </span>{" "}
            Kindly note this action is irreversible
          </div>
        </div>
        <div className="flex justify-end gap-8 mt-12 border-t-2 p-6">
          <div className="">
            <button
              onClick={() => deleteSingleStudent()}
              type="submit"
              className="bg-[white] text-[#748181] border-2 border-[#ECEEEE] text-base font-medium w-full rounded-full focus:outline-none px-9 py-3"
            >
              Delete
            </button>
          </div>
          <NavLink to="/" className="">
            <button
              type="submit"
              className="bg-[#36A1C5] text-white text-base font-medium w-full rounded-full focus:outline-none px-9 py-3"
            >
              Cancel
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default DeleteStudent;
