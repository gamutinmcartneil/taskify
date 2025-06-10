'use client';

import React from 'react';
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home({ children, }: { children: React.ReactNode}) {

  return (
    <>
      <div className='flex items-stretch h-full'>
        <Sidebar />
        <div id="main" className="flex flex-col min-h-full min-w-0 w-full">
          <Navbar />
          <main className='w-full h-full pt-10 pr-10 pb-6 p-10 bg-[#F6F8FB]'>
            <div className='w-full p-0'>
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
