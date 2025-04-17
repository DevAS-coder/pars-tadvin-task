import { student } from '@/types/student'
import Image from 'next/image'
import React from 'react'

function StudentItem({ student }: { student: student }) {
    return (
        <tr
            className="border-t hover:bg-gray-50 transition-colors cursor-pointer"
        >
            <td className="px-4 py-2">
                {student.image
                    ? <Image
                        src={student.image}
                        alt={`${student.first_name} ${student.last_name}`}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                    />
                    : <div className='w-[40px] h-[40px] flex justify-center items-center'>N/A</div>
                }
            </td>
            <td className="px-4 py-2">{student.first_name}</td>
            <td className="px-4 py-2">{student.last_name}</td>
            <td className="px-4 py-2">{student.national_code}</td>
            <td className="px-4 py-2">{student.phone}</td>
            <td className="px-4 py-2 font-semibold">{student.score}</td>
        </tr>
    )
}

export default StudentItem