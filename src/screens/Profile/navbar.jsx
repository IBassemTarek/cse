import React from 'react';
import { motion } from 'framer-motion';
export const TopNavbar = ({ selectedTab, setSelectedTab, tabs }) => {
  return (
    <div className="w-full pt-12 mr-[3%]">
      <div className="flex justify-between items-center w-[50%] pb-12">
        <div className="flex space-x-5">
          {Object.keys(tabs).map((tab) => {
            console.log(tab === selectedTab, tabs[tab].title);
            return (
              <div
                key={tab}
                className={`flex items-center justify-center px-5 py-2 rounded-md cursor-pointer relative`}
                onClick={() => setSelectedTab(tab)}
              >
                <p
                  className={`text-sm font-bold z-20 ${
                    tab === selectedTab ? 'text-white' : 'text-stone-800'
                  }`}
                >
                  {tabs[tab].title}
                </p>
                {tab === selectedTab && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-stone-800/50 rounded-md z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: '100%',
                    }}
                    transition={{
                      type: 'spring',
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
      {tabs[selectedTab].component}
    </div>
  );
};
