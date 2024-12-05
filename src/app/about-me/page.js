import React from 'react';
import NavBar from '../components/NavBar';
import TopArrows from '../components/TopArrows';
import BottomArrows from '../components/BottomArrows';
import TopCornerBlack from '../components/TopCardArrowBlack';
import BottomCornerBlack from '../components/BottomCardArrowBlack';
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';



export default function Hiro() {


  return (
    <>
      <div className="flex bg-black relative p-6 scroll-smooth justify-center">
        <div className='max-w-[64rem]'>
          
          <section className="flex flex-col relative mb-20">   
            <NavBar />
            <div className="flex flex-col justify-center gap-4 mt-16">
              <h1 className="text-white font-display text-3xl">About Me</h1>
              <TopArrows></TopArrows>
              <p className='text-white font-satoshilight p-4 text-sm sm:text-base lg:leading-loose'>Hi! I&#39;m Nathan, a second-year design student at Simon Fraser University. With a unique blend of front-end development skills and design experience, I bring bold ideas to life in practical, impactful ways. Outside of my studies, I enjoy gaming, badminton, and exploring new mountains to hike. I plan to work in the UX Design space and am passionate about using design as a tool for social impact and am always open to collaborating who share this vision. Let&#39;s explore opportunities to collaborate and make a difference through thoughtful, user-centered design!</p>
                <div className='w-full h-[550px]'>
                <Spline
        scene="https://prod.spline.design/5TdnM2U58Pb-43Mf/scene.splinecode" 
      />
              </div>
            </div>
            
              <BottomArrows></BottomArrows>
          </section>

          </div> 
      </div>
      
      <div className='flex justify-center bg-white px-4 lg:px-0'>
      <footer className="max-w-[64rem] w-full h-auto bg-white py-6">
        <div className="flex flex-col gap-4 relative h-full py-4">
          <TopCornerBlack />
          <h1 className="text-black font-display text-[1.25rem] text-center md:text-xl lg:text-2xl">Thanks for stopping by! <span className='text-orange'>✌</span></h1>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base lg:text-xl">Pages</h2>
              <ul className="list-none text-black">
              <li className="font-body"><Link href='/'>Home</Link></li>
                <li className="font-body"><Link href="/#works">Works</Link></li>
                <li className="font-body"><Link href="/about-me">About Me</Link></li>
                <li className="font-body"><Link href="/resume.pdf">Resume</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base lg:text-xl">Works</h2>
              <ul className="list-none text-black">
                <li className="font-body"><Link href="/hiro-project-page">Hiro</Link></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base lg:text-xl">Let&#39;s Connect</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="https://www.google.com/">Email</a></li>
                <li className="font-body"><a href="https://www.google.com/">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <BottomCornerBlack />
        </div>
       
      </footer>
      </div>
    </>
  );
}
