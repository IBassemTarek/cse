import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Header } from './header';
import { MainInfo } from './main-info';
import { TopNavbar } from './navbar';

const TABS = {
  main: {
    title: 'المعلومات الاساسية',
    component: <MainInfo />,
  },
  military: {
    title: 'المعلومات العسكرية',
    component: <MainInfo />,
  },
  financial: {
    title: 'المعلومات الاساسية',
    component: <MainInfo />,
  },
  judge: {
    title: 'المحكمات',
    component: <MainInfo />,
  },
  team: {
    title: 'الفرق',
    component: <MainInfo />,
  },
};

export const Profile = () => {
  const [selectedTab, setSelectedTab] = useState('main');

  return (
    <div className="flex flex-col h-screen bg-[#f5f5f5]">
      <Navbar />
      <div className="flex justify-end items-end mt-24 mx-24 flex-col space-y-5">
        <h1 className="text-2xl font-bold">جندي/ احمد السيد محمد</h1>
        <Header />
        <TopNavbar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tabs={TABS}
        />
      </div>
    </div>
  );
};
