import React from "react";
import { FaArrowRight } from "react-icons/fa";


export const Header = () => {
  return (
    <div className="py-5 px-5 md:px-10 lg:px-28 ">
        <div className="flex justify-between items-center">
            <img src="/logo.png" alt="" width={180} className="w-[130px]" />
            <button className="flex items-center gap-2 py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">Get Started<FaArrowRight />
            </button>
        </div>
        <div className="text-center my-8">
            <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
            <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, animi adsdasdsad adasd asdsadsad dss3gqad asdsadsds sda.</p>
            <form className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-solid border-black shadow-[-7px_7px_0px_#000000]" action="">
                <input type="email" placeholder="Enter your Email" className="pl-4 outline-none"/>
                <button type="submit" className="py-4 px-4 sm:px-8 border-l border-black active:bg-gray-600 active:text-white">Subscribe</button>
            </form>
        </div>
    </div>
  )
}
