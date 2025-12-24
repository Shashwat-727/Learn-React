import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full flex justify-between overflow-x-auto flex-row w-2/3 p-4 '>
        <div className='flex flex-row gap-4'>
            <RightCard />
            <RightCard />
            <RightCard />
            <RightCard />
            <RightCard />
        </div>
    </div>
  )
}

export default RightContent