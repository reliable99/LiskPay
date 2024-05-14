import React, { useState } from 'react';


const Header = () => {
  // State to track the active menu item
  const [activeMenu, setActiveMenu] = useState('Summary');

  // Function to handle menu clicks and set the active menu item
  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);
  };


  return (
    <div className="header">
      <div className='px-20 py-5 shadow-lg'>
        <div className="flex flex-row justify-between">
          <div className='flex flex-row'>
            <div className='logo mr-4'>
              <img
                className="max-w-full mx-auto md:max-w-none h-auto"
                src={'/liskpay.png'}
                width="150"
                height="100"
                alt={'lisklogo'}
              />
            </div>
            {/* Map through the menu items and conditionally add a border */}
            {['Summary', 'Activity', 'Send & Request', 'Wallet', 'Help'].map((item) => (
              <div
                key={item}
                className={`menuOption mr-4 ${
                  activeMenu === item ? 'border-b-2 border-black pb-1 text-cyan-500' : ''
                }`}
                onClick={() => handleMenuClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;