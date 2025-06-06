'use client'

import Link from 'next/link';
import Image from 'next/image';
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import Button from './components/Button';
import { FaApple } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }){
    return(
        <>
        <div className='min-h-screen flex'>
            <div className='m-auto max-w-lg w-full p-4 '>
                <div className='justify-items-center'>
                    {/* <Image
                        className='mb-5'
                        src="/assets/logo/logo.png"
                        width={200}
                        height={200}
                        alt='logo'
                        property='priority'
                    /> */}
                </div>
                <div className='mb-3'>
                    <div className='grid gap-2 mb-4'>
                        <Button>
                        <CiFacebook className='size-6 text-white'/>
                        <span className='w-full'>Continue with Facebook</span>
                        </Button>
                        <Link className='' href="/">
                            <div className='flex items-center sshadow-custom border-[#1877f2] hover:white focus:shadow-[0_0_0_3px_rgb(59, 139, 244)] active:text-white active:bg-white active:border-white active:shadow-[inset_0_3px_5px_rgba(0, 0, 0, 0.125)] disabled:text-white disabled:bg-white disabled:border-white relative shadow-[0_1.6px_3.2px_rgba(0,   0,0,.05)] py-2 px-4 text-center text-sm rounded-md'>
                                <FcGoogle className='size-6'/>
                                <span className='w-full'>Continue with Google</span>
                            </div>
                        </Link>
                        <Link href="/" >
                            <div className='flex items-center shadow-custom text-white bg-black border-[#1877f2] focus:shadow-[0_0_0_3px_rgb(59, 139, 244)] active:text-white active:bg-white active:border-white active:shadow-[inset_0_3px_5px_rgba(0, 0, 0, 0.125)] disabled:text-white disabled:bg-white disabled:border-white relative shadow-[0_1.6px_3.2px_rgba(0,0,0,.05)] py-2 px-4 text-center text-sm rounded-md'>
                                <FaApple className='size-6'/>
                                <span className='w-full'>Continue with Apple</span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex ml-custom-gutter items-center gap-4'>
                        <div className='col w-full border border-gray-200'></div>
                        <div className='col-auto'>OR</div>
                        <div className='col w-full border border-gray-200'></div>
                    </div>
                    {children}
                </div>
            </div>
        </div >
        
        </>
    )
}