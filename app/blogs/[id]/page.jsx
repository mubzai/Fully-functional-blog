'use client';

import { blog_Data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { Footer } from '@/Components/Footer';
import { useRouter } from 'next/navigation'; // For navigation
const Page = ({ params }) => {
    const router = useRouter();
    const [data, setData] = useState(null);
    const [blogs, setBlogs] = useState([]);

    // Load blogs from localStorage
    const loadBlogsFromLocalStorage = () => {
        const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || blog_Data; // Default to blog_Data
        setBlogs(storedBlogs);
    };

    // Save blogs to localStorage
    const saveBlogsToLocalStorage = (updatedBlogs) => {
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    // Fetch the blog data for the current ID
    useEffect(() => {
        const unwrapParams = async () => {
            const unwrappedParams = await params;
            loadBlogsFromLocalStorage();
            const blog = blog_Data.find((b) => Number(unwrappedParams.id) === b.id);
            setData(blog);
        };
        unwrapParams();
    }, [params]);

    // Handle blog edit
    const handleEdit = (id) => {
        const updatedTitle = prompt('Enter the new title:', data.title);
        if (updatedTitle) {
            const updatedBlogs = blogs.map((blog) =>
                blog.id === id ? { ...blog, title: updatedTitle } : blog
            );
            setBlogs(updatedBlogs);
            saveBlogsToLocalStorage(updatedBlogs);
            setData({ ...data, title: updatedTitle });
            alert('Blog updated successfully!');
        }
    };

    // Handle blog delete
    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this blog?')) {
            const updatedBlogs = blogs.filter((blog) => blog.id !== id);
            setBlogs(updatedBlogs);
            saveBlogsToLocalStorage(updatedBlogs);
            alert('Blog deleted successfully!');
            router.push('/'); // Redirect to the home page
        }
    };

    return data ? (
        <>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Link href='/'><img src="/logo.png" alt="Logo" width={180} className="w-[130px]" /></Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <FaArrowRight /></button>
                </div>

                <div className='flex justify-between my-5'>
                    <button onClick={() => handleEdit(data.id)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                    <button onClick={() => handleDelete(data.id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                </div>

                <div className='text-center my-24'>
                    <h1 className='text-[28px] font-bold'>{data.title}</h1>
                    <Image className='mx-auto my-6 border border-black rounded-full' src={data.author_img || null} width={60} height={60} alt='Author Image' />
                    <p className='mt-1 pb-2 text-lg mx-auto'>{data.author}</p>
                </div>
            </div>
            <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
                <Image className='border-4 border-white' src={data.image || null} width={1280} height={720} alt='Blog Image' />
                <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
                <p>{data.description}</p>
                <h3 className='my-5 text-[18px] font-semibold'>Step 1: Self Reflection and Goal</h3>
                <p>Before you can manage your lifestyle, you must have a clear understanding of everything. Start by reflecting on your values, aspirations and long term goals.</p>
                <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
                <p>Managing your lifestyle is a journey that requires awareness and self-commitment. You can take control of your life and make meaningful changes.</p>
                <div className='my-24'>
                    <p className='text-black font-semibold'>Share this article on social media</p>
                    <div className='flex text-[24px] gap-2'>
                        <FaFacebook className='hover:cursor-pointer' />
                        <FaInstagram className='hover:cursor-pointer' />
                        <FaTwitter className='hover:cursor-pointer' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    ) : (
        <></>
    );
};

export default Page;