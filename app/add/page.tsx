'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { studentSchema } from '@/lib/studentSchema'
import * as yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getDataFromLocalStorage, saveDataToLocalStorage } from '@/lib/localStorageUtils'

type FormData = yup.InferType<typeof studentSchema>

export default function Page() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(studentSchema),
  })

  const onSubmit = async (data: FormData) => {
    toast.success('Student Added Successfully!', {
      position: 'bottom-center',
      autoClose: 5000,
    })
      const localData = await getDataFromLocalStorage()
      const finaldata = { id:localData.length + 1,...data}
      saveDataToLocalStorage([...localData, finaldata])
    reset()
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
        <input {...register('image')} placeholder="Image URL" className="border p-2 mb-5" />
        <input {...register('first_name')} placeholder="First Name" className="border p-2" />
        <p className="text-red-500 text-sm">{errors.first_name?.message}</p>

        <input {...register('last_name')} placeholder="Last Name" className="border p-2" />
        <p className="text-red-500 text-sm">{errors.last_name?.message}</p>

        <input {...register('national_code')} maxLength={10} placeholder="National Code" className="border p-2" />
        <p className="text-red-500 text-sm">{errors.national_code?.message}</p>

        <input {...register('phone')} maxLength={11} placeholder="Phone Number" className="border p-2" />
        <p className="text-red-500 text-sm">{errors.phone?.message}</p>

        <input type="number" {...register('score')} placeholder="Score" className="border p-2" />
        <p className="text-red-500 text-sm">{errors.score?.message}</p>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition-all">Submit</button>
      </form>
    </>
  )
}
