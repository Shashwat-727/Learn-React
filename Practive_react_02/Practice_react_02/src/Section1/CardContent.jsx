import React from 'react'
import { MoveRight } from 'lucide-react'


const CardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
          <h2 className='bg-white rounded-full w-12 px-4 py-2 text-2xl'>1</h2>
          <div className='text-2xl w-full text-white'>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, impedit placeat sunt labore nam fugit.
            </p>
            <div className='mt-8 flex flex-row justify-between'>
              <button className=' text-[25px] bg-blue-500 px-8 py-2 rounded-full'>Satisfied</button>
              <button className='text-[25px] bg-blue-500 px-4 py-2 rounded-full'><MoveRight /></button>
            </div>
          </div>
    </div>
  )
}

export default CardContent