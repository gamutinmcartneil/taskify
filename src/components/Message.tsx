import Link from "next/link";
import { SlBubble } from "react-icons/sl";
import { Context } from "@/context/LayoutContext"

export default function Message() {

    const {toggleMessage} = Context();
    const {messageOpen} = Context();

    return (
        <>
            <div className="relative">
                <div className="relative">
                    <Link href='#' onClick={toggleMessage} className="relative inline-block text-gray-600 hover:text-gray-900 focus:text-gray-900 transition-colors duration-200">
                        {/* onClick={() => { setMessageDropdown(!ismessageDropdown); setalertDropdown(false); setProfileDropdown(false); }} */}
                        <SlBubble className='size-6' />
                    </Link>
                    <span className="absolute block -right-2 -top-2 text-xs p-px bg-blue-600 w-[18px] h-[18px] text-center border rounded-[50%]">4</span>
                </div>

                {messageOpen && (
                    <>
                        {/* className={`absolute bg-[#fff] z-[1000] p-[0.5rem 0] min-h-[10rem] p-4 rounded-lg border border-gray-800 text-center 'min-w-[20rem] left-auto right-0'}`} */}
                        <div id="messageDropdown" className={`absolute z-[1000] min-w-[20rem] py-2 list-none text-left text-[0.825rem] text-[#6c757d] bg-white border border-[rgba(0,0,0,0.175)] rounded-[0.2rem] right-0 left-auto mt-[0.125rem] top-full'}`}>
                            <div className="font-medium p-3 text-center"><span className="relative">4 New Messages</span></div>
                            <div className={`flex flex-col rounded-[0.2rem] mb-0 pl-0`}>
                                {/* <MessageList /> */}
                                <Link href="" className="flex relative bg-white border border-[#dee6ed] text-[#6c757d] px-5 py-3 border-b border-x-0 border-t-0 mb-0 no-underline">
                                    <div className="flex flex-wrap mx-[12px] mt-0 flex-none w-1/6">
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gNRChrnzLBNZ9pWKTKBeRdkV_e7kjo2k-aW33gO0R4NXrIApnxI18F0&s" alt="" className="h-auto max-w-full rounded-full"/>
                                        </div>
                                    </div>
                                    <div className="col-10 ps-2">
                                        <div>Ashley Briggs</div>
                                        <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                        <div className="text-muted small mt-1">15m ago</div>
                                    </div>
                                </Link>
                                <Link href="" className="flex relative bg-white border border-[#dee6ed] text-[#6c757d] px-5 py-3 border-b border-x-0 border-t-0 mb-0 no-underline">
                                    <div className="flex flex-wrap mx-[12px] mt-0 flex-none w-1/6">
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gNRChrnzLBNZ9pWKTKBeRdkV_e7kjo2k-aW33gO0R4NXrIApnxI18F0&s" alt="" className="h-auto max-w-full rounded-full"/>
                                        </div>
                                    </div>
                                    <div className="col-10 ps-2">
                                        <div>Ashley Briggs</div>
                                        <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                        <div className="text-muted small mt-1">15m ago</div>
                                    </div>
                                </Link>
                                <Link href="" className="flex relative bg-white border border-[#dee6ed] text-[#6c757d] px-5 py-3 border-b border-x-0 border-t-0 mb-0 no-underline">
                                    <div className="flex flex-wrap mx-[12px] mt-0 flex-none w-1/6">
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gNRChrnzLBNZ9pWKTKBeRdkV_e7kjo2k-aW33gO0R4NXrIApnxI18F0&s" alt="" className="h-auto max-w-full rounded-full"/>
                                        </div>
                                    </div>
                                    <div className="col-10 ps-2">
                                        <div>Ashley Briggs</div>
                                        <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                        <div className="text-muted small mt-1">15m ago</div>
                                    </div>
                                </Link>
                                <Link href="" className="flex relative bg-white border border-[#dee6ed] text-[#6c757d] px-5 py-3 border-b border-x-0 border-t-0 mb-0 no-underline">
                                    <div className="flex flex-wrap mx-[12px] mt-0 flex-none w-1/6">
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8gNRChrnzLBNZ9pWKTKBeRdkV_e7kjo2k-aW33gO0R4NXrIApnxI18F0&s" alt="" className="h-auto max-w-full rounded-full"/>
                                        </div>
                                    </div>
                                    <div className="col-10 ps-2">
                                        <div>Ashley Briggs</div>
                                        <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                        <div className="text-muted small mt-1">15m ago</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="block text-[0.75rem] p-2 text-center">
                                <Link href="#" className="text-muted">Show all messages</Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}