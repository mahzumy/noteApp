'use client'

import React from 'react'
import { useContext, useState } from 'react'
import { NoteDataContext } from './NoteEditor'

export const NoteCard = ({id, content}) => {
  const {deleteNote} = useContext(NoteDataContext);
  const {updateNote} = useContext(NoteDataContext);

    const [newContent, setNewContent] = useState(content);
    const handleDeleteNote = async () => {
      const res = await deleteNote(id);
    }
    
    const handleUpdate = async () =>{
      const res = await updateNote(id, newContent);
    }

  return (
    <div className='bg-rose-400 p-4 rounded-xl h-fit'>
      <textarea value={newContent} onChange={(e) => setNewContent(e.target.value)}  className='w-full h-[220px] bg-transparent focus:outline-none'/> 
        <div className='flex space-x-2 justify-end'>
            <button onClick={handleUpdate} className='btnUpdate'>Update</button>
            <button onClick={handleDeleteNote} className='btnDelete'>Delete</button>
        </div>
    </div>
  )
}
