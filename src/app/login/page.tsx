"use client";

import Link from "next/link";

export default function LoginForm() {
  
  return (
    <form className='block class'>
      <div className='mb-3'>
        <label className='mb-2'>Username</label>
        {/* onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} */}
        <input className='rounded-md text-sm min-h-10 pt-2 pb-2 block w-full' type="text" required name="username" placeholder="Enter your username" />
      </div>
      <div className='mb-3'>
        <label className='mb-2'>Password</label>
        {/* onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} */}
        <input className='rounded-md text-sm min-h-10 pt-2 pb-2 block w-full' type="password" required name="password" placeholder="Enter your password" />
        <small>
          <Link href="/reset-password">
            <span>Forgot password?</span>
          </Link>
        </small>
      </div>
      <div>
        <div className='mb-5'>
          <input id="customControlInline" className='mr-2' type="checkbox" value="remember-me" name="remember-me" />
          <label htmlFor="customControlInline">Remember me</label>
        </div>
      </div>
      <div className='grid gap mb-4'>
        <button type="submit">
          <span className='shadow-custom text-white bg-[#1877f2] border-[#1877f2] hover:white hover:bg-[#135fc2] hover:border-[#135fc2] focus:shadow-[0_0_0_3px_rgb(59, 139, 244)] active:text-white active:bg-white active:border-white active:shadow-[inset_0_3px_5px_rgba(0, 0, 0, 0.125)] disabled:text-white disabled:bg-white disabled:border-white relative shadow-[0_1.6px_3.2px_rgba(0,0,0,.05)] py-2 px-4 text-center text-sm rounded-md'>Sign in</span>
        </button>
      </div>
    </form>
  );
}
