"use client"
import StudentItem from '@/components/StudentItem'
import StudentLoading from '@/components/StudentLoading'
import { clearStudentsFromLocalStorage, getDataFromLocalStorage } from '@/lib/localStorageUtils'
import { student } from '@/types/student'
import React, { useEffect, useState } from 'react'

function page() {

    const [students, setStudents] = useState<student[]>([])

    useEffect(() => {
        const dataFetch = async () => {
            const res = await getDataFromLocalStorage()
            setStudents(res)
        }
        dataFetch()
    }, [])

    const handleReset = async () => {
        clearStudentsFromLocalStorage()
        const res = await getDataFromLocalStorage()
        setStudents(res)
    }

    return (
        <div className='flex flex-col w-full items-center'>
            <div className='w-full flex justify-center' >
                <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200 mt-6 w-[900px]">
                    <table className="min-w-full text-sm text-left text-gray-800">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3">Photo</th>
                                <th className="px-4 py-3">First Name</th>
                                <th className="px-4 py-3">Last Name</th>
                                <th className="px-4 py-3">National Code</th>
                                <th className="px-4 py-3">PhoneNumber</th>
                                <th className="px-4 py-3">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length === 0
                                ? Array.from({ length: 6 }).map((_, index) => <StudentLoading key={index} />)
                                : students.map((student) => (
                                    <StudentItem key={student.id} student={student} />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <button onClick={handleReset} className='mt-5  text-white bg-red-500 p-2 px-4 rounded-3xl cursor-pointer hover:bg-red-700 transition-all'>Reset</button>
        </div>
    )
}

export default page