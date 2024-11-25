import React from 'react';
import TopCornerBlack from './components/TopCardArrowBlack';
import BottomCornerBlack from './components/BottomCardArrowBlack';
import ComputerMockup from './components/ComputerMockup';
import Button from './components/Button';
import NavBar from './components/NavBar';
import TopArrows from './components/TopArrows';
import BottomArrows from './components/BottomArrows';

export default function App() {
  return (
    <>
      <div className="flex justify-center bg-black h-full relative p-6 scroll-smooth">
        <div className='max-w-3xl'>
        <section className="flex flex-col gap-10 relative mb-20">   
          <NavBar></NavBar>
          <div className="flex flex-col justify-center gap-4">
            <div>
              <h1 className="text-white font-display text-2xl">Nathan Wong</h1>
              <p className="text-white font-body text-[.75rem] max-w-[11.625rem] sm:text-base whitespace-normal">
                Through design and development, I craft engaging digital experiences that inspire and connect with users.
              </p>
            </div>
            <a href="#works" className="max-w-fit">
              <img src="../../../arrow_down.svg" alt="arrow down" className="w-8 max-w-fit" />
            </a>
          </div>
        </section>
        <section>
          <h1 id="works" className="text-white font-display text-2xl">Works</h1>
          <div className="relative h-fit py-4 my-4">
            <TopArrows />
            <div className="py-4">
              <ComputerMockup />
              <div className="flex flex-col p-4 pb-0 gap-4 ">
                <div>
                  <h2 className="text-white font-display text-xl">Hiro</h2>
                  <p className="text-white font-body text-base">
                    The Hiro Bikes e-commerce website offers a user-friendly platform for cycling enthusiasts.
                  </p>
                </div>
                <Button href="/hiro-project-page">View Project</Button>
                </div>
            </div>
            <BottomArrows />
          </div>
        </section>
        </div>
      </div>
      <div className='flex justify-center bg-white'>
      <footer className="max-w-2xl w-full h-auto bg-white py-6">
        <div className="flex flex-col gap-4 relative h-full py-4">
          <TopCornerBlack />
          <h1 className="text-black font-display text-[1.25rem] text-center">Thanks for stopping by!</h1>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm">Pages</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="">Home</a></li>
                <li className="font-body"><a href="">Works</a></li>
                <li className="font-body"><a href="">About Me</a></li>
                <li className="font-body"><a href="">Resume</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm">Works</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="">Hiro</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm">Let&#39;s Connect</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="">Email</a></li>
                <li className="font-body"><a href="">LinkedIn</a></li>
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
