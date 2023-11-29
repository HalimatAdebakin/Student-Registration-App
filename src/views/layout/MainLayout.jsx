import React from 'react'
import FadeTransition from '../miscellaneous/FadeTransition';
import SideBar from './components/SideBar';
import Header from './components/Header';
import { useAuth } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";


function MainLayout({ children, config, userData}) {
  const { logout } = useAuth();

  return (
    <FadeTransition>
      <div className="flex gap-4 w-full  overflow-y-hidden md:p-6 bg-[#f3fafc] cursor-pointer">
        <SideBar className="h-full" />

        <div className="second-container flex-auto bg-white w-5/7 border rounded-2xl cursor-pointer">
          <Header />

          <div className="mainContainer w-full pt-5 px-4 md:px-6">

            {/* Content */}
            {React.Children.map(children, child => {
                  return React.cloneElement(child, { config, userData });
            })}

          </div>
          <div className='xl:hidden fixed bottom-0 left-0 w-full text-lg bg-[#143566] text-white p-1 cursor-pointer gap-8 mt-8 flex '>
          <NavLink
               to="/">
              <div className="text-white font-normal cursor-pointer">Dashboard</div>
              </NavLink>
              <div className=' '>Settings</div>
              <div className='' onClick={logout}> Logout</div>

          </div>
          
        </div>
      </div>
    </FadeTransition>
  )
} 

export default MainLayout