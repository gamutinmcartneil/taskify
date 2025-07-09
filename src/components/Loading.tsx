import React from 'react'

const Loading = () => {
    return (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-blue-300 border-gray-200"></div>
        </div>
        </>
    )
}

export default Loading