import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <Sidebar isOpen={isSidebarOpen}/>
      <Header onToggleSidebar={toggleSidebar}/>
    <div className='md:pl-[270px] md:pr-[50px] md:pt-[80px] pt-[80px] px-[10px] w-screen overflow-scroll'>
      <Outlet/>
      </div>
    </div>

    </>
  )
}

export default RootLayout