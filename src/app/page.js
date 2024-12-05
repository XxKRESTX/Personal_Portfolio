import React from 'react';
import TopCornerBlack from './components/TopCardArrowBlack';
import BottomCornerBlack from './components/BottomCardArrowBlack';
import ComputerMockup from './components/ComputerMockup';
import Button from './components/Button';
import NavBar from './components/NavBar';
import TopArrows from './components/TopArrows';
import BottomArrows from './components/BottomArrows';
import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
import Image from 'next/image';

export default function App() {
  return (
    <>
      <div className="flex justify-center bg-black h-full relative p-6 scroll-smooth">
        <div className='max-w-[64rem] w-full'>
        <section className="flex flex-col gap-10 relative mb-20">   
          <NavBar></NavBar>
          <div className="flex justify-center gap-4 h-screen">
            <div className='flex flex-col justify-center items-center h-screen md:flex-row'>
              <div className='absolute top-[10rem] right-0 z-10 w-full'>
                <h1 className="text-white font-display text-xl md:text-2xl xl:text-3xl">Nathan Wong</h1>
                <p className="text-white pb-8 font-body text-[.75rem] w-full sm:max-w-[25rem] md:text-base whitespace-normal">
                Frustrated with designs that confuse users? I create intuitive UX and UI experiences that captivate and connect, helping your brand grow effortlessly.</p>
                <a href="#works" className="w-fit pt-4">
                  <Image
                    src='/arrow_down.svg'
                    alt="arrow down"
                    width={35}
                    height={35}
                    >
                  </Image>
                </a>
              </div>
   
            </div>
            <Spline
        scene="https://prod.spline.design/S7YIZABSQPlTFah9/scene.splinecode" 
      />
          </div>
        </section>
        <section>
          <h1 id="works" className="text-white font-display text-2xl">Works</h1>
          <div className="relative h-fit py-4 my-4">
            <TopArrows />
            <div className="lg:flex lg:items-center p-4">
              <ComputerMockup />
              <div className="flex flex-col p-4 pb-0 gap-4 ">
                <div>
                  <h2 className="text-white font-display text-xl">Hiro</h2>
                  <p className="text-white font-body text-sm sm:text-base lg:pb-4">
                    The Hiro Bikes e-commerce website offers a user-friendly platform for cycling enthusiasts.
                  </p>
                </div>
                <Button href="/hiro-project-page" >View Project</Button>
                </div>
            </div>
            <BottomArrows />
          </div>
        </section>
        </div>
      </div>
      <div className='flex justify-center bg-white px-4 lg:px-8'>
      <footer className="max-w-[64rem] w-full h-auto bg-white py-6">
        <div className="flex flex-col gap-4 relative h-full py-4">
          <TopCornerBlack />
          <h1 className="text-black font-display text-[1.25rem] text-center md:text-xl lg:text-2xl">Thanks for stopping by! <span className='text-orange'>✌</span></h1>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base lg:text-xl">Pages</h2>
              <ul className="list-none text-black">
                <li className="font-body"><Link href='/'>Home</Link></li>
                <li className="font-body"><Link href="#works">Works</Link></li>
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
