import React from 'react';
import Selector from '../../components/Slector';

export const MainInfo = () => {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col bg-white w-[49.2%] rounded-md shadow-lg p-8 items-center justify-center">
        <div className="flex flex-row w-[100%] justify-between mb-5">
          <div className="flex flex-col space-y-2 items-end w-[77%]">
            <p className="text-sm font-bold text-[#6F7482]">الدراسة</p>
            <input
              type="text"
              disabled
              value={'بكالوريوس هندسة ميكاترونيكس'}
              className="w-[100%] h-[40px] rounded-md bg-[#F8FAFC] text-[#B8BCCA] text-right px-2"
            />
          </div>
          <div className="flex flex-col space-y-2 items-end w-[20%]">
            <Selector title="المؤهل" options={['عليا', 'عليا', 'عليا']} />
          </div>
        </div>
        <div className="flex flex-row w-[100%] justify-between">
          <div className="flex flex-col space-y-2 items-end w-[100%]">
            <p className="text-sm font-bold text-[#6F7482]">العمل المدني</p>
            <input
              type="text"
              disabled
              value={
                'Mobile application developer / ex-lead @ Google Developer Student Club'
              }
              className="w-[100%] h-[40px] rounded-md bg-[#F8FAFC] text-[#B8BCCA] text-right px-2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white w-[49.2%] rounded-md shadow-lg p-8 items-center justify-center">
        <div className="flex flex-row w-[100%] justify-between mb-5">
          <div className="flex flex-col space-y-2 items-end w-[20%]">
            <Selector />
          </div>
          <div className="flex flex-col space-y-2 items-end w-[77%]">
            <p className="text-sm font-bold text-[#6F7482]">الاسم</p>
            <input
              type="text"
              disabled
              value={'احمد السيد محمد عبدالقادر عبدالعال'}
              className="w-[100%] h-[40px] rounded-md bg-[#F8FAFC] text-[#B8BCCA] text-right px-2"
            />
          </div>
        </div>

        <div className="flex flex-row w-[100%] justify-between ">
          <div className="flex flex-col space-y-2 items-end w-[70%]">
            <p className="text-sm font-bold text-[#6F7482]">الرقم القومي</p>
            <input
              type="text"
              disabled
              value={'299091234567890000'}
              className="w-[100%] h-[40px] rounded-md bg-[#F8FAFC] text-[#B8BCCA] text-right px-2"
            />
          </div>
          <div className="flex flex-col space-y-2 items-end w-[28%]">
            <p className="text-sm font-bold text-[#6F7482]">تاريخ الميلاد</p>
            <div className="flex flex-row space-x-3 items-end justify-end">
              <input
                type="text"
                disabled
                value={'1999'}
                className="w-[70px] h-[40px] rounded-md bg-[#F8FAFC] text-[#B8BCCA] text-right px-2"
              />
              <input
                type="text"
                disabled
                value={'09'}
                className="w-[40px] h-[40px] rounded-md bg-[#F8FAFC] text-[#B8BCCA] text-right px-2"
              />
              <input
                type="text"
                disabled
                value={'09'}
                className="w-[40px] h-[40px] rounded-md bg-[#F8FAFC] text-[#B8BCCA] text-right px-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
