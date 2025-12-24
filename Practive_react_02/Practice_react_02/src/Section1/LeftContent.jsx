import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col pt-10  gap-8 w-1/3'>
        <h1 className='text-black flex flex-wrap text-[80px] w-min leading-22 font-semibold'>
            Prospective <span className='bg-gray-200 px-2 py-1 rounded-full'>customer</span> segmentation
        </h1>
        <p className='text-gray-800 flex flex-wrap w-85 text-[22px] font-light tracking-widest  '>
            Depending on the Customer Satisfaction and Access to banking Products, Potentials, target Audience can be divided into three groups
        </p>
        <span className=' mt-auto w-fit '>
            <ArrowUpRight color='black' size={70}/>
        </span>
    </div>
  )
}

export default LeftContent