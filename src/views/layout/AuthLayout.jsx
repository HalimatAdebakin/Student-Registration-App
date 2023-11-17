import React from 'react'

function AuthLayout({ config, children }) {
  return (
    <div className="flex gap-4 w-full h-screen bg-white overflow-y-hidden">
      <div className="left-container flex-auto lg:flex w-6/12 hidden">
        <img
          className="image1 w-full object-cover"
          src={config.image1}
          alt="Description"
        />
      </div>
      <div className="right-container flex-auto flex lg:w-6/12 w-full justify-center items-center">
        {React.Children.map(children, child => {
            return React.cloneElement(child, { config });
        })}
      </div>
    </div>
  )
}

export default AuthLayout