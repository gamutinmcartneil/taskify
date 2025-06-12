'use client';

import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { Context } from "@/context/LayoutContext";

export default function Profile() {

    const {profileOpen, toggleProfile} = Context();

    const logout = async () => {
        // Implement your logout logic here
        console.log("Logging out...");
        // Redirect to login page or perform any other action
    }

    return (
        <>
            <div className='relative'>
                    <Link href='' className="flex items-center focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex" type="button" onClick={toggleProfile}>
                      <div className={`flex items-center block `}>
                        <span>Mc Art Neil</span>
                        <MdKeyboardArrowDown className="size-7" />
                      </div>
                      {/* {isResponsive && (
                          <Cog6ToothIcon className="size-6" />
                        )} */}
                    </Link>
                    {profileOpen && (
                      <div id="profileDropdown" className="absolute z-[1000] min-w-[10rem] py-2 list-none text-left text-[0.825rem] text-[#6c757d] bg-white border border-[rgba(0,0,0,0.175)] rounded-[0.2rem] right-0 left-auto mt-[0.125rem] top-full">
                        <Link href='' className="flex block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">
                          <FiUser className="size-5 !mr-1" />
                          Profile
                        </Link>
                        <Link href='' className="flex block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">
                          <FiUser className="size-5 !mr-1" />
                          Analytics
                        </Link>
                        <div className="border-t border-[rgba(0,0,0,0.175)] h-0 my-2 opacity-100 overflow-hidden"></div>
                        <Link href="" className="block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">Settings & Privacy</Link>
                        <Link href="" className="block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">Help</Link>
                        <Link href="" className="block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap" onSubmit={logout}>Sign out</Link>
                      </div>
                    )}
                  </div>
        </>
    );
}