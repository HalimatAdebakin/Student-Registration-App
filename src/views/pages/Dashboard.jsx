import React from "react";
import frame1 from "../../images/frame1.svg";
import frame2 from "../../images/frame2.svg";
import button from "../../images/Button.svg";
import filter from "../../images/filter.svg";
import avatar2 from "../../images/avatar2.svg";
import arrow from "../../images/arrow.svg";
import { NavLink } from "react-router-dom";
import { useStudent } from "../../context/StudentContext";


function Dashboard() {
  const {students} = useStudent();
  return (
    <div>
      <div className="body1 flex border-b border-[#ECEEEE]  gap-6">
        <div className="border-2 items-center gap-5 flex-auto flex text-white p-6 rounded-2xl bg-[#36A1C5]">
          <div className="mb-4">
            <img className="" src={frame1} alt="frame1" />
          </div>
          <div className="">
            <div className="font-normal text-sm items-center mb-2">
              Total Number of Students
            </div>
            <div className="font-semibold text-2xl items-center">200,000</div>
          </div>
        </div>
        <div className="border-2 items-center gap-5 flex-auto flex p-6 rounded-2xl">
          <div className="mb-4">
            <img className="" src={frame2} alt="frame2" />
          </div>
          <div className="">
            <div className="font-normal text-sm items-center mb-2 text-[#748181]">
              Active Students
            </div>
            <div className="font-semibold text-2xl items-center text-[#131515]">
              100,000
            </div>
          </div>
        </div>
        <div className="border-2 items-center gap-5 flex-auto flex p-6 rounded-2xl">
          <div className="mb-4">
            <img className="" src={frame2} alt="frame2" />
          </div>
          <div className="">
            <div className="font-normal text-sm items-center mb-2 text-[#748181]">
              Graduated Students
            </div>
            <div className="font-semibold text-2xl items-center text-[#131515]">
              100,000
            </div>
          </div>
        </div>
      </div>
      <div className="body2 flex h-10 justify-between items-center mt-4 pl-6">
        <div className="flex text-[#131515] text-base font-semibold gap-4 items-center">
          <div>Student Lists</div>
          <div className="flex gap-2 items-center border rounded-full border-[#DFE2E2] p-4 w-72">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M14.3538 13.6463L11.2244 10.5175C12.1314 9.42857 12.5837 8.03187 12.4872 6.61796C12.3906 5.20405 11.7527 3.88179 10.7061 2.92624C9.65951 1.97069 8.2848 1.45541 6.86796 1.48761C5.45113 1.51981 4.10125 2.09701 3.09913 3.09912C2.09702 4.10123 1.51983 5.45111 1.48763 6.86795C1.45543 8.28478 1.9707 9.65949 2.92625 10.7061C3.88181 11.7527 5.20407 12.3906 6.61798 12.4872C8.03189 12.5837 9.42859 12.1314 10.5175 11.2244L13.6463 14.3538C13.6927 14.4002 13.7479 14.4371 13.8086 14.4622C13.8693 14.4873 13.9343 14.5003 14 14.5003C14.0657 14.5003 14.1308 14.4873 14.1915 14.4622C14.2522 14.4371 14.3073 14.4002 14.3538 14.3538C14.4002 14.3073 14.4371 14.2522 14.4622 14.1915C14.4874 14.1308 14.5003 14.0657 14.5003 14C14.5003 13.9343 14.4874 13.8693 14.4622 13.8086C14.4371 13.7479 14.4002 13.6927 14.3538 13.6463ZM2.50002 7.00001C2.50002 6.10999 2.76394 5.23996 3.25841 4.49994C3.75287 3.75992 4.45568 3.18314 5.27795 2.84255C6.10021 2.50195 7.00501 2.41284 7.87793 2.58647C8.75084 2.76011 9.55266 3.18869 10.182 3.81802C10.8113 4.44736 11.2399 5.24918 11.4136 6.1221C11.5872 6.99501 11.4981 7.89981 11.1575 8.72208C10.8169 9.54435 10.2401 10.2472 9.50009 10.7416C8.76007 11.2361 7.89004 11.5 7.00002 11.5C5.80695 11.4987 4.66313 11.0242 3.8195 10.1805C2.97587 9.3369 2.50134 8.19307 2.50002 7.00001Z"
                  fill="#748181"
                />
              </svg>
            </div>
            <div className="text-[#748181] ">
              <input
                className="focus:outline-none appearance-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            {" "}
            <img className="" src={button} alt="frame1" />
          </div>
          <div>
            {" "}
            <img className="" src={filter} alt="frame1" />
          </div>
          <NavLink
            to="/addstudent"
            className="text-white bg-[#36A1C5] border rounded-full border-[#DFE2E2] font-medium text-base py-2.5 px-3"
          >
            Add New Student
          </NavLink>
        </div>
      </div>
      <div className="body3 mt-4 p-6">
        <table className="min-w-full border-b border-[#ECEEEE] text-base font-normal text-[#748181]">
          <thead>
            <tr>
              <th className="border-b px-4 py-2">Student Name</th>
              <th className="border-b px-4 py-2">Student ID</th>
              <th className="border-b px-4 py-2">Course</th>
              <th className="border-b px-4 py-2">Faculty</th>
              <th className="border-b px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student?.id}>
                <td className="border-b px-4 py-2">
                  <div className="flex gap-2 items-center">
                    <div className="w-12 h-12 rounded-full">
                      <img className="w-full h-full rounded-full" src={student.picture} alt="frame1" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-[#131515]">
                        {student.firstName} {student.lastName}
                      </div>
                      <div className="font-normal text-xs text-[#748181]">
                        {student.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-b px-4 py-2">{student?.id ?? '----'}</td>
                <td className="border-b px-4 py-2">{student.course}</td>
                <td className="border-b px-4 py-2">{student.faculty}</td>
                <td className="border-b px-4 py-2">{student.location}</td>
                <td className="border-b px-4 py-2">
                  <img className="" src={arrow} alt="frame1" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
