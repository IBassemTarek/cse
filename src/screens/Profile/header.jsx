import React from 'react';
import image from '../../assets/imgs/default.png';

export const Header = () => {
  return (
    <div className="flex flex-row-reverse items-center w-full bg-white shadow-md mr-10">
      <div className="flex bg-[#E0E0E0] h-52 ml-4 w-52 justify-center items-center">
        <img
          src={image}
          alt="profile"
          className="h-[20%] w-[20%] self-center"
        />
      </div>
      <div className="flex flex-col items-end space-y-2">
        <h1 className="text-base font-bold text-[#2C70AF]">جندي</h1>
        <h1 className="text-base font-bold text-[#000000]">
          احمد السيد محمد عبدالقادر
        </h1>

        <div className="flex flex-row-reverse">
          <h1 className="text-base font-bold text-[#8A8A8A] ml-8">
            :الرقم العسكري{' '}
          </h1>
          <h1 className="text-base font-bold text-[#8A8A8A]">2023324904136</h1>
        </div>

        <div className="flex flex-row-reverse">
          <h1 className="text-base font-bold text-[#8A8A8A] ml-6">
            :التسكين الحالي{' '}
          </h1>
          <h1 className="text-base font-bold text-[#8A8A8A]">الحاسب الاداري</h1>
        </div>

        <div className="flex flex-row-reverse">
          <h1 className="text-base font-bold text-[#8A8A8A] ml-20">:الحالة </h1>
          <h1 className="text-base font-bold text-[#4EAF2C]">متواجد بالوحدة</h1>
        </div>

        <div className="flex flex-row space-x-28">
          <div className="flex flex-row-reverse">
            <h1 className="text-base font-bold text-[#8A8A8A] ml-9">
              :تاريخ التسريح
            </h1>
            <h1 className="text-base font-bold text-[#8A8A8A]">1/3/2024</h1>
          </div>

          <div className="flex flex-row-reverse">
            <h1 className="text-base font-bold text-[#8A8A8A] ml-8">
              :تاريخ الالتحاق
            </h1>
            <h1 className="text-base font-bold text-[#8A8A8A]">1/3/2023</h1>
          </div>
        </div>
      </div>
      <div className="h-[60%] w-[1.3px] bg-[#8A8A8A] mr-48"></div>
    </div>
  );
};
