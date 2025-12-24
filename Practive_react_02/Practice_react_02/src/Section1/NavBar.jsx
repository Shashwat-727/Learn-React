import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className=' flex text-black w-full h-14 bg-white items-center justify-between px-18 py-11'>
            <h4 className='bg-black text-white px-5 uppercase py-2 rounded-full'>Target Audience</h4>
            <button className='bg-gray-200 px-5 py-2 uppercase rounded-full tracking-widest text-sm'>Digital Banking Platform</button>
        </div>
    </div>
  )
}

export default NavBar