import React from 'react'

const StudentLoading = () => {
    return (
        <tr className="animate-pulse border-t">
            <td className="px-4 py-2">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
            </td>
            <td className="px-4 py-2">
                <div className="h-4 w-20 bg-gray-300 rounded" />
            </td>
            <td className="px-4 py-2">
                <div className="h-4 w-24 bg-gray-300 rounded" />
            </td>
            <td className="px-4 py-2">
                <div className="h-4 w-28 bg-gray-300 rounded" />
            </td>
            <td className="px-4 py-2">
                <div className="h-4 w-24 bg-gray-300 rounded" />
            </td>
            <td className="px-4 py-2">
                <div className="h-4 w-12 bg-gray-300 rounded" />
            </td>
        </tr>
    )
}

export default StudentLoading
