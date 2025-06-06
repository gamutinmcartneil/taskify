'use client'

import React, { useState } from 'react'
import Link from "next/link";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineFormatListBulleted } from "react-icons/md";
import { useSidebar } from '@/context/LayoutContext';


export default function Sidebar() {
    const { isOpen } = useSidebar();

    // const [isSubMenu, setSubMenu] = useState<Record<string, boolean>>({});

    // const ShowSubMenuItem = (index: number) => {
    //     setSubMenu((prevState: Record<number, boolean>) => {
    //         const newState: Record<number, boolean> = {};
    //         Object.keys(prevState).forEach((key) => {
    //             newState[parseInt(key)] = false;
    //         });
    //         newState[index] = !prevState[index];
    //         return newState;
    //     });
    // };

    return (
        <>
            <aside className={`min-h-screen bg-gray-800 text-white transition-all duration-300 ltr ${isOpen ? 'max-w-0 min-w-0' : 'max-w-[260px] min-w-[260px]'}`}>
                <div id='sidebar-content' className="sticky min-h-screen top-0 left-0 ">
                    <div className='min-h-screen'>
                        {/* scrollbar-thumb-[#9397A0] h-2 */}
                        <div className='sticky relative mx-auto scrollbar hover:scrollbar-thin hover:scrollbar-thumb-[#9397A0] scrollbar-track-gray-800 h-32 overflow-y-auto min-h-screen' >
                            <div className="p-10">
                                <Link href="/">
                                    <h1 className="text-2xl font-bold text-white">Logo</h1>
                                    {/* <span>{data.username}</span> */}
                                </Link>
                            </div>
                            <ul className='pl-0 list-none'>
                                <li className='flex text-xs py-1 px-6 pt-1.5' style={{ alignItems: "flex-end" }}>Navigation</li>
                                <li>
                                    <Link href="" className='flex cursor-pointer font-normal relative px-6 py-2.5 no-underline transition-colors duration-75 ease-in-out'>
                                        <div className='self-center'><MdOutlineFormatListBulleted className='h-[18px] w-[18px] mr-3' /></div>
                                        <span className='align-middle'>Dashboard</span>
                                        <span className='absolute right-5 top-3 text-white bg-blue-500 inline-block text-xs font-medium text-white leading-none text-center align-baseline rounded px-1.5 py-1 whitespace-nowrap'>5</span>
                                    </Link>
                                    <ul>
                                        <li className=''><Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Default</Link></li>
                                        <li className=''><Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Analytics</Link></li>
                                        <li className=''><Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Saas</Link></li>
                                    </ul>
                                </li>
                                <li className='flex text-xs py-1 px-6 pt-1.5' style={{ alignItems: "flex-end" }}>Apps</li>
                                <li>
                                    <Link className='flex cursor-pointer font-normal relative px-6 py-2.5 no-underline transition-colors duration-75 ease-in-out'>
                                        <div className='self-center'><MdOutlineFormatListBulleted className='h-[18px] w-[18px] mr-3' /></div>
                                        <span className='align-middle'>E-Commerce</span>

                                    </Link>
                                    <ul>
                                        {/* <li className='flex'>
                                            <Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md w-full justify-between'>
                                                <span>Product</span>
                                                <span className='right-5 top-5 text-white bg-blue-500 inline-block text-xs font-medium text-white leading-none text-center align-baseline rounded px-1.5 py-1 whitespace-nowrap'>NEW</span>
                                            </Link>

                                        </li> */}
                                        <li className=''>
                                            <Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Product Details</Link>
                                        </li>
                                        <li className=''><Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Orders</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            {/* <ul className='w-[245px]'>
                            {MenuItem.map((list, index) => (
                                <React.Fragment key={index}>
                                    <>
                                    <li className='p-4'><span className="">{list.header}</span></li>
                                        {list.titleItems.map((list, idx) => (
                                            <React.Fragment key={idx}>
                                                {list.isSubMenu && (
                                                    <>
                                                    <li>
                                                        <Link href='#' className='flex justify-between w-full px-[26px] py-[10px]' onClick={() => ShowSubMenuItem(index * 100 + idx)}>
                                                            <div className='mr-2'>{list.icon}</div>
                                                            <div className='text-left grow'><span>{list.description}</span></div>
                                                            {list.isSubMenu && !isSubMenu[index * 100 + idx] && list.isSubMenu && (
                                                                <>
                                                                    <div><ChevronDownIcon className="size-4 " /></div>
                                                                </>
                                                            )}
                                                            {list.isSubMenu && isSubMenu[index * 100 + idx] && list.isSubMenu && (
                                                                <>
                                                                    <div><ChevronUpIcon className="size-4 " /></div>
                                                                </>
                                                            )}
                                                        </Link>
                                                        {list.isSubMenu && isSubMenu[index * 100 + idx] && (
                                                            <>
                                                                <ul className='submenu'>
                                                                    {list.subMenuItem?.map((list, index) => (
                                                                        <React.Fragment key={index}>
                                                                            <>
                                                                                <Link href={`${list.link}`}>
                                                                                    <li className="text-gray-300 text-md items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md pt-[8px] pr-[24px] pb-[8.8px] pl-[59.2px]">
                                                                                        <span>{list.description}</span>
                                                                                    </li>
                                                                                </Link>
                                                                            </>
                                                                        </React.Fragment>
                                                                    ))}
                                                                </ul>
                                                            </>
                                                        )}
                                                    </li>
                                                    </>
                                                )}
                                                {!list.isSubMenu && (
                                                    <>
                                                    <li>
                                                        <Link href={`${list.link}`} className='flex justify-between w-full px-[26px] py-[10px]'>
                                                            <div className='mr-2'>{list.icon}</div>
                                                            <div className='text-left grow'><span>{list.description}</span></div>
                                                        </Link>
                                                    </li>
                                                    </>
                                                )}
                                            </React.Fragment>
                                        ))}
                                    </>
                                </React.Fragment>
                            ))}
                        </ul> */}
                        </div>
                    </div>
                </div>
            </aside>

        </>
    )
}
