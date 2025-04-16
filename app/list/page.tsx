"use client"
import StudentItem from '@/components/StudentItem'
import StudentLoading from '@/components/StudentLoading'
import { clearStudentsFromLocalStorage, getDataFromLocalStorage } from '@/lib/localStorageUtils'
import { student } from '@/types/student'
import React, { useEffect, useState } from 'react'

function page() {

    const [students, setStudents] = useState<student[]>([])
    const [filteredstudents, setfilteredStudents] = useState<student[]>([])
    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [sort, setSort] = useState<string>('asc')

    useEffect(() => {
        const dataFetch = async () => {
            const res = await getDataFromLocalStorage()
            setStudents(res)
            setfilteredStudents(res)
        }
        dataFetch()
    }, [])

    const handleReset = async () => {
        clearStudentsFromLocalStorage()
        setStudents([])
        const res = await getDataFromLocalStorage()
        setStudents(res)
        setfilteredStudents(res)
    }

    useEffect(() => {
        if (!firstname && !lastname) {
            setfilteredStudents([...students])
        } else {
            const filtered = students.filter((stu) => {
                const matchesFirst = stu.first_name.toLowerCase().includes(firstname.toLowerCase())
                const matchesLast = stu.last_name.toLowerCase().includes(lastname.toLowerCase())
                return (
                    (!firstname || matchesFirst) &&
                    (!lastname || matchesLast)
                )
            })
            setfilteredStudents(filtered)
        }
    }, [firstname, lastname, students])

    const handleSort = () => {
        const sorted = [...filteredstudents].sort((a, b) =>
            sort === 'asc' ? a.score - b.score : b.score - a.score
        )
        setfilteredStudents(sorted)
        setSort(sort === 'asc' ? 'desc' : 'asc')
    }


    return (
        <div className='flex flex-col w-full items-center'>
            <div className='w-full flex justify-center' >
                <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200 mt-6 w-[950px]">
                    <table className="min-w-full text-sm text-left text-gray-800">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="px-4 py-3">Photo</th>
                                <th>
                                    <input value={firstname} onChange={(e) => setFirstname(e.target.value)} className="px-4 py-3 font-extrabold" placeholder='First Name / Search...' />
                                </th>
                                <th>
                                    <input value={lastname} onChange={(e) => setLastname(e.target.value)} className="px-4 py-3 font-extrabold" placeholder='Last Name / Search...' />
                                </th>
                                <th className="px-4 py-3">National Code</th>
                                <th className="px-4 py-3">PhoneNumber</th>
                                <th className="px-4 py-3 cursor-pointer" onClick={handleSort}>
                                    Score ↕️
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length === 0
                                ? Array.from({ length: 6 }).map((_, index) => <StudentLoading key={index} />)
                                : filteredstudents.map((student) => (
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