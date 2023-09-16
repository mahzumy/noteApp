import Image from 'next/image'
import { NoteEditor } from '@/components/NoteEditor'

async function getNotes() {
  const res = await fetch("https://devscale-mockapi.fly.dev/api/collections/notes/records?filter=(user='me@mahzumy.com')", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { items } = await getNotes();
  return (
    <NoteEditor notedData={items} />
  )
}
