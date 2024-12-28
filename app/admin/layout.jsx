import { assets } from "@/Assets/assets";
import { Children } from "react";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from 'next/image';

export default function layout({Children}){
    return(
        <>
        <div className="flex">
            <Sidebar/>
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                    <h3 className="font-medium">Admin Panel</h3>
                    <Image src={assets.profile_icon} width={60} height={60} alt="" className="border border-black rounded-full"/>
                </div>

            </div>
        </div>
        {Children}
        </>
    )
}