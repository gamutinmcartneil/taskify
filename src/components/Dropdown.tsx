import Link from 'next/link';

export default function Dropdown() {
    return (
        <>
            {/* class="dropdown-menu dropdown-menu-end" */}
            <div id="profileDropdown" className="absolute z-[1000] min-w-[10rem] py-2 list-none text-left text-[0.825rem] text-[#6c757d] bg-white border border-[rgba(0,0,0,0.175)] rounded-[0.2rem] right-0 left-auto mt-[0.125rem] top-full">
                <Link href='' className="flex block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">
                    Profile
                </Link>
                <Link href='' className="flex block w-full bg-transparent border-0 rounded-none clear-both text-[#6c757d] font-normal px-6 py-[0.35rem] text-inherit whitespace-nowrap">
                    Analytics
                </Link>
            </div>
        </>
    )
}
