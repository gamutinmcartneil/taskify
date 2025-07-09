'use client'

import React from 'react'
import Link from "next/link";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineFormatListBulleted } from "react-icons/md";
import { Context } from '@/context/LayoutContext';


export default function Sidebar() {

    const { isOpen } = Context();
    const [isOpenSubMenu, setIsOpenSubMenu] = React.useState(false);
    const [isSubMenu, setSubMenu] = React.useState<Record<string, boolean>>({});

    const toggleSubMenuItem = (index: number) => {
        setSubMenu((prevState: Record<number, boolean>) => {
          const newState: Record<number, boolean> = {};
          Object.keys(prevState).forEach((key) => {
            newState[parseInt(key)] = false;
          });
          newState[index] = !prevState[index];
          return newState;
        });
      };


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
                                </Link>
                            </div>
                            <ul className='pl-0 list-none'>
                                <li className='flex text-xs py-1 px-6 pt-1.5' style={{ alignItems: "flex-end" }}>Navigation</li>
                                <li>
                                    <Link href="" className='flex cursor-pointer font-normal relative px-6 py-2.5 no-underline transition-colors duration-75 ease-in-out' onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
                                        <div className='self-center'><MdOutlineFormatListBulleted className='h-[18px] w-[18px] mr-3' /></div>
                                        <span className='align-middle'>Dashboard</span>
                                        <span className='absolute right-5 top-3 text-white bg-blue-500 inline-block text-xs font-medium text-white leading-none text-center align-baseline rounded px-1.5 py-1 whitespace-nowrap'>5</span>
                                        <MdOutlineKeyboardArrowDown className='h-[18px] w-[18px] ml-auto' />
                                        <MdOutlineKeyboardArrowUp className='h-[18px] w-[18px] ml-auto hidden' />
                                    </Link>
                                    {!isOpenSubMenu && (
                                        <>
                                            <ul>
                                                <li className=''><Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Home</Link></li>
                                                {/* <li className=''><Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Analytics</Link></li>
                                                <li className=''><Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Saas</Link></li> */}
                                            </ul>
                                        </>
                                    )}
                                </li>
                                <li className='flex text-xs py-1 px-6 pt-1.5' style={{ alignItems: "flex-end" }}>Apps</li>
                                <li>
                                    <Link href='' className='flex cursor-pointer font-normal relative px-6 py-2.5 no-underline transition-colors duration-75 ease-in-out' onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
                                        <div className='self-center'><MdOutlineFormatListBulleted className='h-[18px] w-[18px] mr-3' /></div>
                                        <span className='align-middle'>E-Commerce</span>
                                        <MdOutlineKeyboardArrowDown className='h-[18px] w-[18px] ml-auto' />
                                        <MdOutlineKeyboardArrowUp className='h-[18px] w-[18px] ml-auto hidden' />
                                    </Link>
                                    <ul>
                                        <li className=''>
                                            <Link href="/project/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Product</Link>
                                        </li>
                                        <li className=''>
                                            <Link href="/project/details/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Product Details</Link>
                                        </li>
                                        <li className=''><Link href="/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Orders</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href='' className='flex cursor-pointer font-normal relative px-6 py-2.5 no-underline transition-colors duration-75 ease-in-out' onClick={() => setIsOpenSubMenu(!isOpenSubMenu)}>
                                        <div className='self-center'><MdOutlineFormatListBulleted className='h-[18px] w-[18px] mr-3' /></div>
                                        <span className='align-middle'>Projects</span>
                                        <MdOutlineKeyboardArrowDown className='h-[18px] w-[18px] ml-auto' />
                                        <MdOutlineKeyboardArrowUp className='h-[18px] w-[18px] ml-auto hidden' />
                                    </Link>
                                    <ul>
                                        <li className=''>
                                            <Link href="/project/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Overview</Link>
                                        </li>
                                        <li className=''>
                                            <Link href="/project/details/" className='text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg light-white rounded-md ml-9'>Details</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>

        </>
    )
}
