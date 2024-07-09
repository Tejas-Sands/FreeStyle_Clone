import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { Button } from '@mui/material';
import { useState, useRef, useEffect } from 'react'

export default function Title(){

const text1 = useRef<HTMLDivElement>(null);
const text2 = useRef<HTMLDivElement>(null);
const text3 = useRef<HTMLDivElement>(null);
const text4 = useRef<HTMLDivElement>(null);
const text5 = useRef<HTMLDivElement>(null);
const imgref = useRef<HTMLImageElement>(null);

useGSAP(() => {
const tl = gsap.timeline();
    tl.from(text1.current, {
      opacity: 0,
      x: 200,
      duration: 1,
      delay: 0.1,
    })
    .from(text2.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: -0.2,
      })
      .from(text3.current, {
        opacity: 0,
        y: -50,
        duration: 2,
        delay: 0.1,
      })
      .from(text4.current, {
        opacity: 0,
        x: -90,
        duration: 2,
        delay: -0.7,
      })
      .from(text5.current, {
        opacity: 0,
        x: -90,
        duration: 2,
        delay: -0.7,
      })
      .from(imgref.current, {
        duration: 1.5,  opacity: 0, scale: 1.6 
      });
  });

  return (
    <>
    <div className='flex flex-wrap  items-center justify-center pt-48 space-x-6 text-7xl font-bold'>
        <div ref={text1} className='dark:text-white'> The</div>
        <div ref={text2} className='text-white bg-sky-500 rounded-lg p-3'> TypeScript</div>
        <div ref={text3} className='dark:text-white'> native </div>
        <div ref={text4} className='dark:text-white'>cloud.</div>
   </div>
   <div className='flex p-10  justify-center space-x-4 mt-4'>
      <a href="https://docs.freestyle.dev/getting-started/astro"><Button sx={{ padding: '10px', backgroundColor: '#0e0e0f', color: 'white', '&:hover': { backgroundColor: '#2b2b2b' }, borderRadius: '10px', textTransform: 'none', fontWeight: 'lighter'}} >Get Started</Button></a>
      <a href="https://www.freestyle.sh/join"><Button sx={{ padding: '10px', backgroundColor: '#e8e9eb', color: 'black', '&:hover': { backgroundColor: '#dcdcde' },  borderRadius: '10px', textTransform: 'none', fontWeight: 'lighter' }}>Get a Demo</Button></a> 
   </div>
        <div className="flex flex-col justify-center items-center mt-20">
        <div className="  w-2/3 border-t border-gray-300 p-2 mt-4"></div>
        <div className="font-semibold dark:text-slate-400" ref={text5} >Backed By</div>
        <div className='w-56'><a href='https://www.ycombinator.com/companies/freestyle/'><img ref={imgref} src='https://www.freestyle.sh/ycombinator-logo.png?__frsh_c=3fb8e8499bf5aaab3bd8db878111d5d11b61dfb0'/></a></div>
        <div className="  w-2/3 border-t border-gray-300 p-5 mt-4 "></div>
   </div>
   </>
  )
}