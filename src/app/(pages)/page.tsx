'use client'

import React from "react";
import { MdOutlineRestartAlt } from "react-icons/md";
import { CiFilter } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuPhilippinePeso } from "react-icons/lu";
import { PiDotsThree } from "react-icons/pi";
import Link from "next/link";
import Dropdown from "@/components/Dropdown";
import FirstCard from "@/components/Dashboard/FirstCard";
import SecondCard from "@/components/Dashboard/SecondCard";


const Dashboard = () => {

  const [openDropdown, setOpenDropdown] = React.useState<null | number>(null);

  const toggleDropdown = (id: number) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  

  return (
    <>
      <div className="flex flex-wrap items-center mb-2 xl:mb-3">
        <div className="hidden sm:block">
          <h3 className="text-xl font-semibold">Dashboard</h3>
        </div>
        <div className="ml-auto text-right -mt-1 flex items-center gap-2">
          <div className="relative inline-block me-2">
            <Link href={''} className="btn bg-white shadow-sm px-4 py-2 border rounded-md flex items-center gap-2" type="button" onClick={(e)=>{e.preventDefault();toggleDropdown(1)}}>
              <CiCalendar className="size-5" />
              Today
            </Link>
            {openDropdown === 1 && (
              <>
              <div className="absolute z-[1000] min-w-[10rem] py-2 list-none text-left text-[0.825rem] text-[#6c757d] bg-white border border-[rgba(0,0,0,0.175)] rounded-[0.2rem] right-0 left-auto mt-[0.125rem] top-full">
              <h6 className="px-4 py-2 text-sm font-semibold text-gray-700">Settings</h6>
              {/* original - <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Action</Link> */}
              <Link href='' className="flex block w-full bg-transparent border-0 rounded-none clear-both font-normal px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-100 text-gray-700">Action</Link>
               <Link href='' className="flex block w-full bg-transparent border-0 rounded-none clear-both font-normal px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-100 text-gray-700">Another Action</Link>
              <Link href='' className="flex block w-full bg-transparent border-0 rounded-none clear-both font-normal px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-100 text-gray-700">Something Else </Link>
              <div className="border-t border-[rgba(0,0,0,0.175)] h-0 my-2 opacity-100 overflow-hidden"></div>
              <Link href='' className="flex block w-full bg-transparent border-0 rounded-none clear-both font-normal px-4 py-2 text-sm whitespace-nowrap hover:bg-gray-100 text-gray-700">Separate Link</Link>
              
            </div>
              </>
            )}
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded shadow-sm">
            <CiFilter className="size-5" />
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded shadow-sm">
            <MdOutlineRestartAlt className="size-5" />
          </button>

        </div>
      </div>
      <div className="flex flex-wrap mx-3">
        <FirstCard>
          <div className="grow">
            <h3 className="mb-2">$ 24.300</h3>
            <p className="mb-2">Total Earnings</p>
            <div className="mb-0">
              <span className="text-green-500 bold bg-green-200 font-bold">100%</span>
              <span className="text-muted"> Since last week</span>
            </div>
          </div>
          <div className="d-inline-block ms-3">
            <div className="stat">
              <LuPhilippinePeso className="size-8 text-blue-600" />
            </div>
          </div>
        </FirstCard>
        <FirstCard>
          <div className="grow">
            <h3 className="mb-2">$ 24.300</h3>
            <p className="mb-2">Total Earnings</p>
            <div className="mb-0">
              <span className="text-green-500 bold bg-green-200 font-bold">100%</span>
              <span className="text-muted"> Since last week</span>
            </div>
          </div>
          <div className="d-inline-block ms-3">
            <div className="stat">
              <LuPhilippinePeso className="size-8 text-blue-600" />
            </div>
          </div>
        </FirstCard>
        <FirstCard>
          <div className="grow">
            <h3 className="mb-2">$ 24.300</h3>
            <p className="mb-2">Total Earnings</p>
            <div className="mb-0">
              <span className="text-green-500 bold bg-green-200 font-bold">100%</span>
              <span className="text-muted"> Since last week</span>
            </div>
          </div>
          <div className="d-inline-block ms-3">
            <div className="stat">
              <LuPhilippinePeso className="size-8 text-blue-600" />
            </div>
          </div>
        </FirstCard>
        <FirstCard>
          <div className="grow">
            <h3 className="mb-2">$ 24.300</h3>
            <p className="mb-2">Total Earnings</p>
            <div className="mb-0">
              <span className="text-green-500 bold bg-green-200 font-bold">100%</span>
              <span className="text-muted"> Since last week</span>
            </div>
          </div>
          <div className="d-inline-block ms-3">
            <div className="stat">
              <LuPhilippinePeso className="size-8 text-blue-600" />
            </div>
          </div>
        </FirstCard>
      </div>
      <div id="row2" className="flex flex-wrap mx-3">
        <div id="col-12 col-lg-8 d-flex" className="w-full lg:w-2/3 flex px-3">
          <SecondCard>
            <div id="card-actions float-end" className="float-end">
              <div id="dropdown position-relative" className="relative">
                <Link href="" data-bs-toggle="dropdown" data-bs-display="static" onClick={(e) => {e.preventDefault(); toggleDropdown(2)}}>
                  <PiDotsThree className="size-4" />
                </Link>
                {openDropdown === 2 && <Dropdown />}
              </div>
            </div>
            <h5 className="card-title mb-0">Sales / Revenue</h5>
          </SecondCard>
        </div>
        <div id="col-12 col-lg-4 d-flex" className="w-full lg:w-1/3 flex">
          <SecondCard>
            <span id="badge bg-info float-end" className="float-end">Today</span>
            <h5 id="card-title mb-0" className="text-gray-900 text-[0.95rem] font-medium">Daily feed</h5>
          </SecondCard>
        </div>
      </div>
      <div id="row3" className="flex flex-wrap mx-3">
        <div id="col-12 col-lg-6 col-xl-4 d-flex" className="w-full lg:w-1/2 xl:w-1/3 flex px-3">
          <SecondCard>
            <div id="card-actions float-end" className="float-end">
              <div id="dropdown position-relative" className="relative">
                <Link href="" data-bs-toggle="dropdown" data-bs-display="static" onClick={(e) => {e.preventDefault(); toggleDropdown(3)}}>
                  <PiDotsThree className="size-4" />
                </Link>
                {openDropdown === 3 && <Dropdown />}
              </div>
            </div>
            <h5 className="card-title mb-0">Calendar</h5>
          </SecondCard>
        </div>
        <div id="col-12 col-xl-4 d-none d-xl-flex" className="xl:flex w-full xl:w-1/3 px-3">
          <div className="flex flex-col flex-1 min-w-0 relative break-words rounded shadow-sm mb-6 p-5 bg-white">
            <div id="card-header" className="bg-white border-b border-transparent mb-0 px-5 py-4">
              <div id="card-actions float-end" className="float-end">
                <div id="dropdown position-relative" className="relative">
                  <Link href="" data-bs-toggle="dropdown" data-bs-display="static" onClick={(e) => {e.preventDefault(); toggleDropdown(4)}}>
                    <PiDotsThree className="size-4" />
                  </Link>
                  {openDropdown === 4 && <Dropdown />}
                </div>
              </div>
              <h5 className="card-title mb-0">Weekly</h5>
            </div>
          </div>
        </div>
        <div id="col-12 col-lg-6 col-xl-4 d-flex" className="w-full lg:w-1/2 xl:w-1/3 flex px-3">
          <SecondCard>
            <div id="card-actions float-end" className="float-end">
              <div id="dropdown position-relative" className="relative">
                <Link href="" data-bs-toggle="dropdown" data-bs-display="static" onClick={(e) => {e.preventDefault(); toggleDropdown(5)}}>
                  <PiDotsThree className="size-4" />
                </Link>
                {openDropdown === 5 && <Dropdown />}
              </div>
            </div>
            <h5 className="card-title mb-0">Appointments</h5>
          </SecondCard>
        </div>
      </div>
      <div className="mx-3 px-3">
        <SecondCard>
          <div id="card-actions float-end" className="float-end">
            <div id="dropdown position-relative" className="relative">
              <Link href="" data-bs-toggle="dropdown" data-bs-display="static" onClick={(e) => {e.preventDefault(); toggleDropdown(6)}}>
                <PiDotsThree className="size-4" />
              </Link>
              {openDropdown === 6 && <Dropdown />}
            </div>
          </div>
          <h5 className="card-title mb-0">Latest Projects</h5>
        </SecondCard>
      </div>
    </>
  )
}

export default Dashboard