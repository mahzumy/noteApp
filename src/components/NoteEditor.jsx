'use client'

import React from 'react'
import { Header } from './Header'
import { NoteCard } from './NoteCard'
import { createContext } from 'react'
import { useRouter } from 'next/navigation'
import { Footer } from './Footer'

export const NoteDataContext = createContext();

export const NoteEditor = ({notedData}) => {
    const router = useRouter();
  
    const createNote = async () => {
      const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({content: "", user: "me@mahzumy.com"})
      });
      const data = await res.json();
      router.refresh();
      return data;
    }

    const deleteNote = async (id) => {
      const res = await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
        method: "DELETE",
      });
      router.refresh();
    }

    const updateNote = async (id, newCont) => {
      const res = await fetch(`https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({content: newCont})
      });
      const data = await res.json();
      router.refresh();
      return data;
    }
   
  return (
    <NoteDataContext.Provider value={{createNote, deleteNote, updateNote}}>
      <Header />
      <section className='grid grid-cols-2 gap-6 min-h-screen'>
        {notedData.slice(0).reverse().map(({id, content}) => {
          return <NoteCard key={id} id={id} content={content}/>
        })}
      </section>
      <Footer />
    </NoteDataContext.Provider>
    )
}

