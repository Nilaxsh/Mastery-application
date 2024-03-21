import React from 'react';
import { FaStickyNote } from 'react-icons/fa';
import { PiNotepadBold } from 'react-icons/pi';
import { PiExam } from 'react-icons/pi';
import { HiMiniUsers } from 'react-icons/hi2';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const Sidebar = ({ isOpen }) => {


  const handleLogout = async () => {
    try {
    const response = await fetch('http://localhost:5007/api/users/logout', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
   
});
    if (!response.ok) {
    toast.error('Error  Loging out');
    throw new Error('Error logging out');
    }else{
    const data = await response.json();
    console.log(data.message)  
    if (response.ok){
      window.location.href = "http://localhost:3000/";
      toast.success(data.message);
    }else{
    toast.success(data.message);}
}
    } catch (error) {
    console.error(error);
    return error
    }
};
  const sidebarClasses = `fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
    isOpen ? 'translate-x-0' : '-translate-x-full'
  } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`;

  return (
    <>
      <aside id="logo-sidebar" className={sidebarClasses} aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-normal">
            <li>
              <a href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <PiNotepadBold className='text-[24px]' />
                <span className="flex-1 ms-3 whitespace-nowrap">Notes</span>
              </a>
            </li>
            <li>
              <a href="/questions" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <PiExam className='text-[24px]' />
                <span className="flex-1 ms-3 whitespace-nowrap">Questions</span>
              </a>
            </li>
            <li>
              <a href="/students" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <HiMiniUsers className='text-[24px]' />
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" onClick={handleLogout}>
                <RiLogoutCircleRLine className='text-[24px]' />
                <span className="flex-1 ms-3 whitespace-nowrap">Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
