import React from 'react'
import { Button, Input, Textarea } from "@nextui-org/react";
const Page = () => {
  const sizes = ["sm", "md", "lg"];
  return (
    <div className="pr-6 pl-6 md:pr-20 md:pl-20 mb-10 pt-10 w-full h-full flex justify-center">
      <div className="w-full md:w-[60%] gap-6 bg-slate-200 rounded">
        <div className="p-3">
          <h1 className="text-2xl sm:text-4xl font-bold flex items-center space-x-2">
            <span className='flex items-center'>Lets</span>	👋
            <span className="text-blue-500">Work</span>
            <span>Together</span>
          </h1>
          <p className="text-sm sm:text-lg mt-4 text-gray-600">
            Im here to help if youre searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.
          </p>
        </div>
        <div className='w-full bg-slate-200'>
          <div className='w-full p-4 flex items-center flex-col justify-center gap-4'>
            <div className="flex w-[90%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-3">
              <Input size={'lg'} type="text" label="Name" placeholder="Enter your name" />
              <Input size={'lg'} type="email" label="Email" placeholder="Enter your email" />
            </div>
            <div className="flex w-[90%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-3">
              <Input size={'lg'} type="text" label="Subject" placeholder="Subject" />
              <Input size={'lg'} type="text" label="Phone" placeholder="Enter your Phone number" />
            </div>
            <div className="flex w-[90%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-3">
              <Textarea
                label="Description"
                placeholder="type details about your inquiry"
                className=""
              />
            </div>
            <div className="flex w-[90%] flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pt-3">
              <Button color="primary" size='lg' className='w-full p-2'>
                Send Message
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Page