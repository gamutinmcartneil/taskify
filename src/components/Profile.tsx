'use client';

import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { FiUser, FiClock } from "react-icons/fi";

export default function Profile() {

    const [isProfileDropdown, setProfileDropdown] = useState(true);

    return (
        <>
            <div className='relative'>
                {/* onClick={() => { setProfileDropdown(!isProfileDropdown); setalertDropdown(false); setMessageDropdown(false) }} */}
                    <Link href='' className="flex items-center focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex" type="button">
                      <div className={`flex items-center block `}>
                        <span>Mc Art Neil</span>
                        {/* <span>{`${data}`}</span> */}
                        <MdKeyboardArrowDown className="size-7" />

                      </div>
                      {/* {isResponsive && (
                          <Cog6ToothIcon className="size-6" />
                        )} */}
                    </Link>
                    {isProfileDropdown && (
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
                        <a href="" className="block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">Settings & Privacy</a>
                        <a href="" className="block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">Help</a>
                        <a href="" className="block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">Signout</a>
                        {/* <Link href='' className="flex text-gray-800 mb-4 gap-2">
                          <FiClock className="size-5" />
                          <span className="text-base">Analytics</span>
                        </Link>
                        <Link href='' className="text-gray-800 mb-4 justify-self-start text-base">Settings & Privacy</Link>
                        <Link href='' className="text-gray-800 mb-4 justify-self-start text-base">Help</Link>
                        <Link href='' className="text-gray-800 justify-self-start text-base">Sign out</Link> */}
                      </div>
                    )}
                  </div>
        </>
    );
}