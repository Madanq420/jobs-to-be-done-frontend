'use client'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import LoadingButton from '@/app/_components/Loading/Loading'

type Inputs = {
  name: string
  email: string
  phone: string
  message: string
}

function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_1c6azdc'
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_nw2zesh'
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'vVF_Frs8OPZ80jaQD'
    setIsLoading(true)
    try {
      const emailParams = {
        from_name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      }

      const res = await emailjs.send(serviceID, templateID, emailParams, userID)

      if (res.status === 200) {
        toast.success('Thank you for contacting us. We will respond you as soon as possible.')
        reset({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
        setIsLoading(false)
      }
    } catch (error) {
      setIsLoading(false)
      toast.error('Failed to send email. Please send email to info@jobstobeok.org')
    }
  }

  return (
    <div className="animated-wrapper relative">
      <div className="grid grid-cols-8 h-[100vh] w-full">
        <div className="border-r"></div>
        <div className="border-r"></div>
        <div className="border-r"></div>
        <div className="border-r"></div>
        <div className="border-r"></div>
        <div className="border-r"></div>
        <div className="border-r"></div>
        <div className="border-r"></div>
      </div>
      <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-40%] md:translate-y-[-40%]">
        <div className="text-center ">
          <h1 className="text-4xl md:text-5xl text-[#333]">We've been waiting </h1>
          <h1 className="text-4xl md:text-5xl text-[#333]">for you.</h1>
          <p className="my-4">We want to hear from you. Let us know how we can help.</p>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
          gutter={8}
          containerStyle={{}}
          toastOptions={{
            duration: 5000,
            success: {
              style: {
                background: 'green',
                color: 'white'
              }
            },
            error: {
              style: {
                background: 'red'
              }
            }
          }}
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="contact_us_circle rounded-[50%] mt-6">
            <div className="w-full flex justify-center items-center flex-col h-full">
              <div className="w-full flex items-center flex-col mt-8">
                <input
                  type="text"
                  {...register('name', { required: '*Full name is required' })}
                  placeholder="Full Name"
                  className="px-3 jtbd-bg-primary py-2 w-[70%]"
                />
                {errors.name && (
                  <p className="text-red-500 mt-1 text-sm w-[70%]">{errors.name?.message}</p>
                )}
              </div>
              <div className="w-full mt-3 flex items-center flex-col">
                <input
                  type="text"
                  {...register('email', {
                    required: '*Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: '*Invalid email format'
                    }
                  })}
                  placeholder="Email Address"
                  className="px-3 jtbd-bg-primary py-2 w-[70%]"
                />
                {errors.email && (
                  <p className="text-red-500 mt-1 text-sm w-[70%]">{errors.email?.message}</p>
                )}
              </div>
              <div className="w-full mt-3 flex justify-center">
                <input
                  type="text"
                  {...register('phone')}
                  placeholder="Phone Number"
                  className="px-3 jtbd-bg-primary py-2 w-[70%]"
                />
              </div>
              <div className="w-full mt-3 flex flex-col items-center">
                <textarea
                  rows={3}
                  {...register('message', { required: '*Message is required' })}
                  placeholder="Message"
                  className="px-3 jtbd-bg-primary py-2 w-[70%]"
                />
                {errors.message && (
                  <p className="text-red-500 mt-1 text-sm w-[70%]">{errors.message?.message}</p>
                )}
              </div>
              <div className="flex justify-center">
                {isLoading ? (
                  <div>
                    <LoadingButton title="Sending..." />
                  </div>
                ) : (
                  <button className="bg-jtbd text-jtbd-bg-primary hover:text-white hover:bg-slate-600 px-8 py-2 mt-4 rounded-[25px]">
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page
