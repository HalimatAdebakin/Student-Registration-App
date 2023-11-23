import React from "react";
import dp from "../../../images/dp.svg";

function StudentProfile() {
  return (
    <div>
      <div className="flex justify-end w-[457px] mx-auto ">
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
      <div className="mx-auto rounded-2xl p-6 bg-[white] w-[457px]">
        <div className="flex items-center gap-6 border-b-2 pb-4 rounded-b border-[#ECEEEE]">
          <div className="text-[#131515] flex-auto text-base font-medium">
            Hussein
          </div>
          <div className="flex-auto flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M12 2.75C10.0716 2.75 8.18657 3.32183 6.58319 4.39317C4.97982 5.46451 3.73013 6.98726 2.99218 8.76884C2.25422 10.5504 2.06114 12.5108 2.43735 14.4021C2.81355 16.2934 3.74215 18.0307 5.10571 19.3943C6.46928 20.7579 8.20656 21.6865 10.0979 22.0627C11.9892 22.4389 13.9496 22.2458 15.7312 21.5078C17.5127 20.7699 19.0355 19.5202 20.1068 17.9168C21.1782 16.3134 21.75 14.4284 21.75 12.5C21.7473 9.91498 20.7192 7.43661 18.8913 5.60872C17.0634 3.78084 14.585 2.75273 12 2.75ZM12 20.75C10.3683 20.75 8.77326 20.2661 7.41655 19.3596C6.05984 18.4531 5.00242 17.1646 4.378 15.6571C3.75358 14.1496 3.5902 12.4908 3.90853 10.8905C4.22685 9.29016 5.01259 7.82015 6.16637 6.66637C7.32016 5.51259 8.79017 4.72685 10.3905 4.40852C11.9909 4.09019 13.6497 4.25357 15.1571 4.87799C16.6646 5.50242 17.9531 6.55984 18.8596 7.91655C19.7661 9.27325 20.25 10.8683 20.25 12.5C20.2475 14.6873 19.3775 16.7843 17.8309 18.3309C16.2843 19.8775 14.1873 20.7475 12 20.75ZM13.125 12.5C13.125 12.7225 13.059 12.94 12.9354 13.125C12.8118 13.31 12.6361 13.4542 12.4305 13.5394C12.225 13.6245 11.9988 13.6468 11.7805 13.6034C11.5623 13.56 11.3618 13.4528 11.2045 13.2955C11.0472 13.1382 10.94 12.9377 10.8966 12.7195C10.8532 12.5012 10.8755 12.275 10.9606 12.0695C11.0458 11.8639 11.19 11.6882 11.375 11.5646C11.56 11.441 11.7775 11.375 12 11.375C12.2984 11.375 12.5845 11.4935 12.7955 11.7045C13.0065 11.9155 13.125 12.2016 13.125 12.5ZM17.25 12.5C17.25 12.7225 17.184 12.94 17.0604 13.125C16.9368 13.31 16.7611 13.4542 16.5555 13.5394C16.35 13.6245 16.1238 13.6468 15.9055 13.6034C15.6873 13.56 15.4868 13.4528 15.3295 13.2955C15.1722 13.1382 15.065 12.9377 15.0216 12.7195C14.9782 12.5012 15.0005 12.275 15.0856 12.0695C15.1708 11.8639 15.315 11.6882 15.5 11.5646C15.685 11.441 15.9025 11.375 16.125 11.375C16.4234 11.375 16.7095 11.4935 16.9205 11.7045C17.1315 11.9155 17.25 12.2016 17.25 12.5ZM9 12.5C9 12.7225 8.93402 12.94 8.81041 13.125C8.68679 13.31 8.51109 13.4542 8.30552 13.5394C8.09996 13.6245 7.87376 13.6468 7.65553 13.6034C7.4373 13.56 7.23684 13.4528 7.07951 13.2955C6.92217 13.1382 6.81503 12.9377 6.77162 12.7195C6.72821 12.5012 6.75049 12.275 6.83564 12.0695C6.92079 11.8639 7.06498 11.6882 7.24999 11.5646C7.43499 11.441 7.6525 11.375 7.875 11.375C8.17337 11.375 8.45952 11.4935 8.6705 11.7045C8.88148 11.9155 9 12.2016 9 12.5Z"
                fill="#748181"
              />
            </svg>
          </div>
        </div>
        <div className="border border-[#ECEEEE] mx-auto mt-4">
          <div className="rounded-t-md bg-[#36A1C5] text-white h-[105px] relative ">
            <div className="flex absolute bottom-0 right-0 p-6 text-base font-bold">
              ID: HIS/160407054
            </div>
            <div className="absolute -bottom-8 left-5">
              <img className="" src={dp} alt="frame1" />
            </div>
          </div>
        </div>
        <div className="mt-12">
            <div className="flex gap-4 relative">
                <div className=" text-[#131515] text-lg font-bold">Hussein Adebakin</div>
                <div className="pt-1">M</div>
                <div className="  flex justify-end bg-[#E6F9EE] rounded-full text-[#1BA154] absolute top-0 right-0 px-3 py-1 text-base font-medium">Active</div>
            </div>
            <div className="mt-1 text-[#748181] text-base font-medium">husseinadebakin@gmail.com</div>
            <div className="mt-1 text-[#748181] text-base font-medium">08050235926</div>
        </div>
        <div className="mt-4">
        <table className="min-w-full rounded-lg border border-[#ECEEEE] text-base font-normal">
          <thead className="text-[#748181]">
            <tr>
              <th className="border px-4 py-2">Course</th>
              <th className="border px-4 py-2">Faculty</th>
              <th className="border px-4 py-2">Location</th>
            </tr>
          </thead>
          <tbody className="text-[#131515]">
              <tr>
                <td className="border px-4 py-2">Systems Engineering</td>
                <td className="border px-4 py-2">Engineering</td>
                <td className="border px-4 py-2">Yaba</td>
              </tr>
          </tbody>
        </table>
        </div>
        <div className="flex justify-end gap-8 mt-12">
        <div className=" ">
            <button
              type="submit"
              className="bg-[white] text-[#748181] border-2 border-[#ECEEEE] text-base font-medium px-4 py-2 w-full rounded-full focus:outline-none"
            >
              Cancel
            </button>
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-[#36A1C5] text-white text-base font-medium px-4 py-2 w-full rounded-full focus:outline-none"
            >
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
