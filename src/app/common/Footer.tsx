import React from 'react'

const Footer: React.FC = () => {
  return (
    // <footer className="bg-green w-full mt-auto dark:bg-green-800">
    <footer className="w-full mt-auto bg-gradient-to-t from-indigo-900 to-purple-800">
      <div className="w-full h-[92px] flex flex-col items-center justify-center space-y-2.5 px-24 py-4">
        <span className="text-center text-[16px] leading-[40px] font-medium text-[#e3e3e3]">
          All rights reserved. © Copyright Mukul C. Mahadik 2024
        </span>
        {/* </div> */}
      </div>
    </footer >
  )
}

export default Footer