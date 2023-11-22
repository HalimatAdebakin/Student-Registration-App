import React from 'react'
import FadeTransition from '../miscellaneous/FadeTransition'
import SideBar from './components/SideBar';
import Header from './components/Header';

function MainLayout({ children, config, userData}) {
  return (
    <FadeTransition>
      <div className="flex gap-4 w-full overflow-y-hidden p-6 bg-[#f3fafc]">
        <SideBar />

        <div className="second-container flex-auto bg-white w-5/7 border rounded-2xl">
          <Header />

          <div className="mainContainer pt-5 px-6">

            {/* Content */}
            {React.Children.map(children, child => {
                  return React.cloneElement(child, { config, userData });
            })}

          </div>
          
        </div>
      </div>
    </FadeTransition>
  )
} 

export default MainLayout