"use client"
  
import Link from 'next/link';
import React from 'react';


const navbar = () => {
    return (
        <header className='fixed top-0 flex justify-between items-center bg-primary-black text-tertiary w-full py-12 px-2 h-20'>
            <div><h1 className='text-3xl font-bold ml-9' >Fareha Hassan</h1></div>
           <ul className='md:flex flex justify-center mr-20 text-[20px]'>
            <li className='pl-3'>
                <Link href="/">Home</Link>
            </li>
            <li className='pl-3'>
                <Link href="/about">About</Link>
            </li>
            <li className='pl-3'>
                <Link href="/skills">Skills</Link>
            </li>
            <li className='pl-3'>
                <Link href="/blog">Blogs</Link>
            </li>
            <li className='pl-3'>
                <Link href="/contact">Contact</Link>
            </li>
           </ul>
        </header>
    );
};

export default navbar;