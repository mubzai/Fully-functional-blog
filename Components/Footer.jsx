import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='flex justify-around bg-black flex-col gap-2 sm:gap-0 sm:flex-row text-center'>
        <div><Link href='/'><img src="/logo.png" alt="" className='w-[120px]'/></Link></div>
        <p className='flex items-center justify-center text-white text-sm'>All rights reserved. @blogger</p>
        <div className='flex flex-row gap-2 items-center text-[20px]'>
          <FaFacebook className='text-white hover:cursor-pointer'/>
          <FaInstagram className='text-white hover:cursor-pointer'/>
          <FaTwitter className='text-white hover:cursor-pointer'/>
        </div>
    </div>
 )
}
