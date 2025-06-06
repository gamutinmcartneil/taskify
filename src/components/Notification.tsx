'use client';

import { FaRegBellSlash } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";


export default function AlertNotifications() {

    const [alertDropdown, setalertDropdown] = useState(false);

    return (
        <>
            <div className="relative">
                {/* onClick={() => { setalertDropdown(!alertDropdown); setMessageDropdown(false); setProfileDropdown(false); }} */}
                <Link href=''><FaRegBellSlash className='size-6' /></Link>
                {alertDropdown && (
                    <>
                        {/*  className={`absolute bg-[#fff] z-[1000] p-[0.5rem 0] min-h-[10rem] p-4 rounded-lg border border-gray-800 text-center ${isResponsive ? '' : 'min-w-[20rem] left-auto right-0'}`} */}
                        <div id="alerDropdown" className={`absolute z-[1000] min-w-[20rem] py-2 list-none text-left text-[0.825rem] text-[#6c757d] bg-white border border-[rgba(0,0,0,0.175)] rounded-[0.2rem] right-0 left-auto mt-[0.125rem] top-full'}`}>
                            <div className="font-medium p-3 text-center"><span className="relative">4 New Notifications</span></div>
                            <div className={`flex flex-col rounded-[0.2rem] mb-0 pl-0`}>
                                {/* <MessageList /> */}
                                <a href="" className="flex block relative bg-white border border-[#dee6ed] text-[#6c757d] px-5 py-3 border-b border-x-0 border-t-0 mb-0 no-underline">
                                    {/* l */}
                                    <div className="grid grid-cols-12 gap-4">
                                        <div className="col-span-2 flex flex-wrap mx-[12px] mt-0 ">
                                            <div className="self-center flex-none w-1/6">
                                                <HiOutlineExclamationCircle className="size-6 text-red-500 " />
                                            </div>
                                        </div>
                                        <div className="col-span-10 ps-2">
                                            <div>Update completed</div>
                                            <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                            <div className="text-muted small mt-1">15m ago</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="block text-[0.75rem] p-2 text-center">
                                <a href="#" className="text-muted">Show all messages</a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}