import { ReactNode } from "react";
import { LuPhilippinePeso } from "react-icons/lu";

type FirstCardProps = {
    children?: ReactNode;
};

export default function FirstCard({ children }: FirstCardProps) {
    return (
        <>
            <div className="w-full sm:w-1/2 2xl:w-1/4 flex px-3">
                <div className="flex flex-col flex-1 min-w-0 relative break-words rounded shadow-sm mb-6 p-5 bg-white">
                    <div className="flex-1 p-5 text-gray-900 p-4">
                        <div className="flex items-start">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}