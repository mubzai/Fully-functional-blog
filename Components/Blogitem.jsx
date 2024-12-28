
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { blog_Data } from '@/Assets/assets'
import { FaArrowRight } from "react-icons/fa";


export const Blogitem = ({title,description,category,image,id}) => {
  return (
    <div className='max-w-[300px] sm:max-w-[270px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
        <Link href={`/blogs/${id}`}>
        <Image src={image} alt=''  className='w-[300px] h-[200px] border-b border-black' />
        </Link>
        <p className='ml-5 mt-5 px-1 inline-block text-white bg-black text-sm'>{category}</p>
        <div className="p-5">
            <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
            <p className='mb-2 text-sm tracking-tight text-gray-700'>{description}</p>
          <Link href={`/blogs/${id}`}>
           <div className='inline-flex items-center py-2 font-semibold text-center'>Read more<FaArrowRight className='ml-2'/></div>
           </Link>
        </div>
    </div>
  )
}
