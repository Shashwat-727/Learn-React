import React, { useState } from 'react'
import NotesCard from './NotesCard'

const NotesPad = () => {

  const [title, settitle] = useState("")
  const [notes, setnotes] = useState("")
  const [details, setdetails] = useState([])
  function collectData(e) {
    e.preventDefault();
    const copy_details = [...details]
    copy_details.unshift({ Title: title, Notes: notes })
    setdetails(copy_details)
    console.log(copy_details);
    settitle("")
    setnotes("")
  }

  function del(index){
    const updated = [...details]
    updated.splice(index,1)
    setdetails(updated)
  }

  return (
    <>
      <div className='flex flex-col text-white items-center  h-fit p-5'>
        <form className='min-w-fit flex flex-col items-center border gap-2 p-2 rounded-2xl' onSubmit={(e) => {
          collectData(e)
        }}>
          <input type='text' placeholder='Title..' value={title} className='border-2 min-w-150 p-2 rounded-2xl bg-white text-black border-gray-200' onChange={(val) => {
            settitle(val.target.value)
          }} />
          <textarea placeholder='Write...' value={notes} className='border-2 min-w-150 min-h-50 p-2 rounded-2xl  bg-white text-black border-gray-200' onChange={(val) => {
            setnotes(val.target.value)
          }} />
          <div className='ml-134 border-2 items-center px-4 py-1 rounded-xl bg-white text-black border-gray-200'>
            <button type='submit'>Add</button>
          </div>
        </form>
      </div>
      <div className='grid grid-cols-6 gap-2 overflow-x-auto '>
        {
          details.map((val,index) => {
            return <NotesCard key={index}Title = {val?.Title} Notes = {val?.Notes} updat={()=>del(index)}/>
          })
        }
      </div>
    </>
  )
}

export default NotesPad