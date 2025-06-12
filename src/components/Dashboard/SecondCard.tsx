import {ReactNode} from "react";


type FirstCardProps = {
    children?: ReactNode;
};

export default function SecondCard({ children }: FirstCardProps) {
    return (
        <>
            
            <div id="card flex-fill w-100" className="flex flex-col flex-1 min-w-0 relative break-words rounded shadow-sm mb-6 p-5 bg-white">
                    <div id="card-header" className="bg-white border-b border-transparent mb-0 px-5 py-4">
                        {children}
                    </div>
            </div>
        </>
    );
}