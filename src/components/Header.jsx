'use client'

import React from 'react'
import { useContext } from 'react'
import { NoteDataContext } from './NoteEditor'
import { FilePlus } from 'lucide-react';

export const Header = () => {
    const {createNote} = useContext(NoteDataContext);

    const handleCreateNote = async () => {
      const res = await createNote();

    }

  return (
    <div className='flex justify-between items-center'>
        <div className='font-bold text-lg tracking-tight text-white'>NoteMe</div>
        <div className='flex items-center justify-center'>
            <button onClick={handleCreateNote}  className='bg-blue-950 hover:scale-105 transition duration-200 border-2 rounded-lg p-0 w-8 h-8 text-white text-center'>
              <FilePlus size={22} className='m-auto items-center'/>
            </button> 
        </div>
    </div>
  )
}
