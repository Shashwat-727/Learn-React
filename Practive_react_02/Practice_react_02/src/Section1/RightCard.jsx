import React from 'react'
import { MoveRight } from 'lucide-react'
import CardContent from './CardContent'

const RightCard = () => {
  return (
    <div className='flex h-full overflow-hidden relative w-80 rounded-4xl'>
        <img className='h-full flex object-cover blur-[2px]' src="https://images.unsplash.com/photo-1766391374856-eccaa085b661?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt='bgimg'/>
        <CardContent />
    </div>
  )
}

export default RightCard