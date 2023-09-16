'use client'

import React from 'react'
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Github } from 'lucide-react';

export const Footer = () => {
  return (
    <>
      <div className='flex gap-4 p-3 justify-items-center m-auto w-fit'>
        <div className='flex items-start'>
          <div className='text-white font-bold'>Follow Me :</div>
        </div>
        <div className='flex gap-20'>
          <Twitter color='white' className='hover:scale-125 ease-in-out duration-300' />
          <Instagram color='white' className='hover:scale-125 ease-in-out duration-300' />
          <Youtube color='white' className='hover:scale-125 ease-in-out duration-300' />
          <Facebook color='white' className='hover:scale-125 ease-in-out duration-300' />
          <Github color='white' className='hover:scale-125 ease-in-out duration-300' />
        </div>
      </div>
      <div className='bg-blue-950 w-full h-3'></div>
    </>
  )
}
