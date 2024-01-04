import React from 'react';
import headerImg from '../assets/images/illustration-article.svg';
import profileImg from '../assets/images/image-avatar.webp';
export default function Card() {
  return (
    <div className='w-full max-w-[24rem] p-[1.5rem] bg-white rounded-[1rem] border border-blackAccent shadow-bx'>
        <div className='w-full'>
            <img src={headerImg} alt="Header Image" className='w-full rounded-[0.5rem]' />
        </div>
        <span className='font-figtree inline-block mt-[1.5rem] rounded-[0.3rem] font-extrabold bg-bgMain px-[0.5rem] py-[0.1rem]'>Learning</span>
        <p className='font-figtree text-blackAccent mt-[0.5rem] text-[0.9rem]'>Published 21 Dec 2023</p>
        <h1 className='font-figtree text-blackAccent font-extrabold text-[1.5rem] my-[1rem] cursor-pointer hover:text-bgMain'>HTML & CSS foundations</h1>
        <p className='font-figtree text-fontGrey'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <section className='mt-[1.5rem] mb-[0.5rem] flex items-center gap-[0.5rem]'>
            <img src={profileImg} alt="User Profile" className='w-[2rem] h-[2rem]' />
            <h2 className='font-extrabold text-[0.9rem]'>Greg Hooper</h2>
        </section>
    </div>
  )
}
