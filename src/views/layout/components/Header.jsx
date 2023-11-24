import React from 'react'
import avatar from "../../../images/avatar.svg";
import notification from "../../../images/notifications.svg";

function Header() {
    return (
        <div className="header flex items-center gap-6 py-4 px-6  border-b border-[#ECEEEE]">
            <div className="flex-auto font-semibold text-lg text-[#131515]">
              Student Management
            </div>
            <div className="flex-auto flex justify-end">
              <img className="" src={notification} alt="notification" />
            </div>
            <div>
              <div className="font-medium text-sm text-[#131515]">
                Hussein Adebakin
              </div>
              <div className="text-right text-sm font-normal text-[#748181]">
                Admin
              </div>
            </div>
            <div>
              <img className="" src={avatar} alt="avater" />
            </div>
        </div>
    )
}

export default Header