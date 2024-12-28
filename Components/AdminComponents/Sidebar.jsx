import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import Link from 'next/link';


const Sidebar = () => {
    return(
        <div className='flex flex-col bg-slate-100'>
            <div className=' flex items-center px-2 pl:14 py-3 border border-black max-h-[60px]'>
                <Image src={assets.logo} width={120}/>
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                 <Link href='/admin/addProduct'><div className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                 <IoMdAddCircleOutline className='text-3xl'/><p>Add logo</p>
                 </div></Link>

                 <Link href='/admin/blogList'><div className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                 <MdOutlineFeaturedPlayList className='text-3xl'/><p>BlogList</p>
                 </div></Link>

                 <Link href='/admin/subscriptions'><div className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                 <FaRegEnvelope className='text-3xl'/><p>Subscriptions</p>
                 </div></Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;