import React from 'react'
import admin from "../../../images/admin.jpg";
import notification from "../../../images/notifications.svg";

function Header() {
    return (
        <div className="header flex items-center gap-6 py-4 px-6  border-b border-[#ECEEEE]">
            <div className="flex-auto whitespace-nowrap font-semibold text-lg text-[#131515]">
              Student Management
            </div>
            <div className="hidden flex-auto md:flex justify-end">
              <img className="" src={notification} alt="notification" />
            </div>
            <div className='hidden md:block'>
              <div className="font-medium text-sm text-[#131515]">
                Halimat Adebakin
              </div>
              <div className="text-right text-sm font-normal text-[#748181]">
                Admin
              </div>
            </div>
            <div className='w-fit'>
              <div className='w-full flex md:block items-center justify-between'>
                <img className="md:hidden" src={notification} alt="notification" />
                <img className="ml-auto mr-0 w-10 h-10 rounded-full" src={admin} alt="avater" />
              </div>
              <div className="md:hidden font-medium whitespace-nowrap text-sm text-[#131515]">
                Halimat Adebakin
              </div>
            </div>
        </div>
    )
}

export default Header