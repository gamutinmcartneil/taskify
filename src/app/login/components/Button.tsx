import Link from "next/link";

import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <Link className='btn btn-facebook btn-lg position-relative shadow' href="/">
            <div className='flex items-center shadow-custom text-white bg-[#1877f2] border-[#1877f2] hover:white hover:bg-[#135fc2] hover:border-[#135fc2] focus:shadow-[0_0_0_3px_rgb(59, 139, 244)] active:text-white active:bg-white active:border-white active:shadow-[inset_0_3px_5px_rgba(0, 0, 0, 0.125)] disabled:text-white disabled:bg-white disabled:border-white relative shadow-[0_1.6px_3.2px_rgba(0,0,0,.05)] py-2 px-4 text-center text-sm rounded-md' {...props} >
            {children}
            </div>
            

        </Link>
    )
}

export default Button;