import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer(){

  const titleRef = useRef<HTMLDivElement>(null);
  const commandRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const elements = [titleRef.current, commandRef.current];
    const scrollTriggers = [];

    elements.forEach((element) => {
      const trigger = gsap.from(element, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 95%', 
          end: 'bottom 90%', 
          scrub: true, 
          toggleActions: 'play none none reset', 
        },
      });
      scrollTriggers.push(trigger.scrollTrigger);
    });

    return () => {
      scrollTriggers.forEach((st) => st.kill());
    };
  })

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6 dark:bg-slate-900">
      <h1 ref={titleRef} className="text-5xl font-bold text-center mb-4 dark:text-slate-400">
        One Command to Rule Them All
      </h1>
      <p className="text-center text-gray-500 mb-8">No config needed.</p>
      <div ref={commandRef} className="bg-gray-900 text-green-400 p-4 rounded-lg shadow-lg mb-12 w-2/5">
        <div className="flex items-center space-x-2 mb-2 ">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <code>
            <span className="text-green-400">computer:~$ </span>
            <span className="text-white">npx freestyle deploy</span>
        </code>
      </div>
      <div className="w-2/3 border-t border-gray-300 p-2 mt-4 mx-auto py-10"></div>
      <div className="w-3/4 flex flex-col justify-center text-center bg-indigo-950 rounded-lg">
        <div className='font-bold text-slate-200 text-2xl py-5  px-6'>Ready to try the cloud of the future?</div>
        <div className='py-3 px-6 '><a href="https://docs.freestyle.dev/getting-started/astro"><button  className="bg-white text-indigo-950  hover:bg-gray-200 rounded-lg py-2 px-6 w-3/5">
          Get Started
        </button></a>
        </div>
      </div>
      <div className='mt-10 dark:text-slate-400'> 2024 Freestyle</div>
    </div>
  );
};
