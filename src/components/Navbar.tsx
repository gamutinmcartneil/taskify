
import Profile from "./Profile";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { FiMoon } from "react-icons/fi";
import { IoLanguageOutline } from "react-icons/io5";
import AlertNotifications from "./Notification";
import Message from "./Message";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSidebar } from '@/context/LayoutContext';

export default function Navbar() {
   const { toggle } = useSidebar();
    return(
        <>
        <nav className={`flex justify-between relative px-4 pb-3 pt-4 shadow-[0_0px_32px_0px_rgba(41,48,66,.1)]`}>
              <div className='flex space-x-4'>
                {/* onClick={() => setSidebarOpen(!isSidebarOpen)} */}
                <div className="cursor-pointer flex h-[26px] w-[26px] self-center">
                  <Link href='#' onClick={toggle}>
                  <MdMenu className="size-7" />
                </Link>
                </div>
               <form action="" className="self-center">
                 <div className="flex items-stretch relative w-full min-w-[240px]">
                    <input type="text" placeholder="Search..." className="min-w-0 relative w-[1%] bg-[#f4f7f9] border-0 shadow-none h-[2.56875rem] px-3 py-[0.45rem] w-full border border-[#495057] rounded-[0.2rem] text-[#6c757d] text-[0.825rem] font-normal leading-[1.625] px-[0.7rem] py-1 transition duration-150 ease-in-out focus:outline-none" />
                    <Link href="" className="bg-[#f4f7f9] pr-3 flex"><HiMagnifyingGlass className="size-5 self-center" /></Link>
                 </div>
               </form>
              </div>
              <div className='flex'>
                <div className="flex items-center">
                  <div className='space-x-5 flex'>
                    <Message/>
                    <AlertNotifications/>
                    <button className="disabled none"><FiMoon className='size-6' /></button>
                    <button className=""><IoLanguageOutline className='size-6' /></button>
                  </div>
                  <Profile />
  
                </div>
              </div>
        </nav>
        </>
    )
}