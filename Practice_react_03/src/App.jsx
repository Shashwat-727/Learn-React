import React from 'react'
import NotesPad from './components/NotesPad'
import NotesCard from './components/NotesCard'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-black p-2'>
      <NotesPad />
    </div>
  )
}

export default App