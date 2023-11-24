import React from 'react'

function Logout() {
  return (
    <div>
      <div className="mx-auto rounded-2xl p-6 bg-[white] w-[365px]  border-2 border-[#ECEEEE]">
        <div className="mx-auto rounded-full bg-[#FDF2F2] flex justify-center items-center border-[#ECEEEE] w-12 h-12">
        <i className="fa-solid fa-right-from-bracket text-[#DF3939]"></i>
        </div>
        <div className="">
          <div className="text-[#131515] text-center mt-8 text-lg font-semibold">Do you want to Logout?</div>
          <div className="text-base font-medium text-[#748181] text-center mt-4">Are you sure you want to <span>LOGOUT?</span></div>
        </div>
        <div className="flex justify-end gap-8 mt-12 border-t-2 p-6">
        <div className="">
            <button
              type="submit"
              className="bg-[white] text-[#748181] border-2 border-[#ECEEEE] text-base font-medium w-full rounded-full focus:outline-none px-9 py-3"
            >
              Cancel
            </button>
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-[#36A1C5] text-white text-base font-medium w-full rounded-full focus:outline-none px-9 py-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logout