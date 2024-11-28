import React from 'react';
import NavBar from '../components/NavBar';
import ComputerMockup from '../components/ComputerMockup';
import InfoSection from '../components/InfoSection';
import TopArrows from '../components/TopArrows';
import BottomArrows from '../components/BottomArrows';
import TopCornerBlack from '../components/TopCardArrowBlack';
import BottomCornerBlack from '../components/BottomCardArrowBlack';
import Link from 'next/link';
import Image from 'next/image';

export default function Hiro() {
  const infoItems = [
    { label: 'Tools', value: 'Figma, HTML, CSS and JavaScript' },
    { label: 'Timeline', value: 'Oct 2024 - Nov 2024' },
    { label: 'Members', value: 'Nathan (Designer & Developer), Shixuan (Developer)' },
    { label: 'Responsibilities', value: 'UI/UX Design & Web Development' },
  ];

  return (
    <>
      <div className="flex bg-black h-full relative p-6 scroll-smooth justify-center">
      <div className='max-w-[64rem]'>
        <section className="flex flex-col gap-10 relative mb-20">   
          <NavBar />
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-white font-display text-3xl">Hiro</h1>
            <p className='text-white font-satoshilight text-sm sm:text-base'>The Hiro Bikes website offers a user-friendly platform for cycling enthusiasts & newcomers.</p>
            
            <ComputerMockup />
          </div>
          {/* The Image component already lazy loads and uses srcset automatically. Referenced from https://nextjs.org/docs/app/building-your-application/optimizing/images */}
          <Image
            src='/Finished_mockup.jpg'
            alt='a screenshot of the hiro website'
            width={1337}
            height={100}
            priority
            className='h-auto w-full outline outline-4 outline-white'>
          </Image>
          <div className="flex items-center justify-center bg-black">
            <InfoSection items={infoItems} />
          </div>
          
        </section>
        <section id="overview">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm sm:text-base">01</p>
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Overview</h1>
              <p className="text-white font-body text-sm sm:text-base">
              The Hiro Bikes website was developed as the second major project for IAT 339: Web Development, focusing on creating a seamless and user-friendly e-commerce platform  for cycling enthusiasts. The project emphasizes responsive design, ensuring the site adapts beautifully and functions optimally across  desktops, tablets, and smartphones. As I as the main developer and designer, I showcased a curated selection of bike models, including road, mountain, sport, and casual bikes, using  high-quality images and concise descriptions across various screen sizes. 
              </p>
            </div>
            <div className="p-4 my-4">
                <h2 className="font-piersansmedium text-white text-xl">Goal</h2>
                <p className="font-body text-white text-sm sm:text-base">
                I needed to design a website to adapt to various screen sizes without compromising usability or design.</p>
              </div>
            <BottomArrows />
          </div>
        </section>
        <section id="process">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm sm:text-base">02</p>
            <TopArrows />
            <div className="p-4">
              <div className='flex flex-row gap-2'>
              <Image
                src="/design_logo.svg" 
                alt="block logo"
                width={30} 
                height={30} 
                className='h-auto'
              />
                <h1 className="text-white font-display text-2xl">Process</h1>
              </div>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Design Objectives</h2>
                <p className="font-body text-white text-sm sm:text-base">
                My role involved ensuring the site provided a seamless and engaging shopping experience across all devices, with a focus on showcasing products effectively while promoting Hiro’s brand values. By designing and coding the homepage, I emphasized creating a visually appealing and intuitive interface that adapts to various screen sizes, enabling users to explore and interact with Hiro’s range of bicycles effortlessly.                </p>
              </div>
              <div className='my-4'>
                <h2 className="font-piersansmedium text-white text-xl">Design</h2>
                <p className="text-white font-body text-sm sm:text-base">
                There were a few things first that I needed to design before coding. For example, designing pages that fit seamlessly within mobile to desktop resolutions. To begin, I used tools like Figma to create low-fidelity mockups, which illustrate my initial thinking and help ensure a smooth transition to development.</p>
              </div>
              
              <div className="flex flex-col my-4 gap-4">
              <Image
                  src="/low_mockups.jpg" 
                  alt="Figma low mockups of Hiro"
                  width={986} 
                  height={674} 
                  priority 
                />       
              <Image
                src="/mid mockup whole.jpg" 
                alt="Figma medium mockups of Hiro"
                width={1180} 
                height={1539} 
              />              
              </div>
              <div className="flex flex-col gap-2 pt-8">
                <h2 className='font-piersansmedium text-white text-xl'>Style Guide</h2>
                <p className="text-white font-body text-sm sm:text-base">
                Creating a style guide allows me to ensure consistency across all design elements, strengthening the brand identity while streamlining both the design and development processes. It helps me collaborate effectively with others by providing a clear reference point, ensuring that new features align with the existing design. By promoting cohesive visuals, enhancing the user experience, and improving accessibility, my style guide simplifies scaling and supports future updates, making it an essential tool for maintaining professionalism and efficiency in my projects.</p>
                <Image
                  src="/style_guide.jpg" 
                  alt="Hiro style guide"
                  layout="responsive" 
                  width={1920} 
                  height={1080} 
              />              
              </div>

             
            </div>
            <BottomArrows />
          </div>
        </section>
        <section id="Challenges">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm sm:text-base">03</p>
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Challenges</h1>
              <p className="text-white font-body text-sm sm:text-base">
              Given that I had only one month to design and code Hiro Bikes,there were a few limitations I encountered. When designing a responsive website, I faced challenges with high-resolution SVGs. While they are ideal for scalability, ensuring they didn’t lose sharpness on smaller screens or appear too large required careful resizing and testing. Creating a hamburger menu was another difficulty—I struggled with implementing an intuitive design that worked well across devices, as I was unsure how to balance aesthetics with functionality for mobile users and also implementation during development. Finally, maintaining a cohesive and consistent look was challenging as I worked to align fonts, buttons, and colors across all layouts. Ensuring elements matched the style guide and remained visually balanced on different screen sizes required extra attention to detail and iteration. These challenges highlighted areas for growth in both design precision and problem-solving.</p>
            </div>
 
            <BottomArrows />
          </div>
        </section>
        <section id="reflection">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm sm:text-base">04</p>
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Reflection</h1>
              <p className="text-white font-body text-sm sm:text-base">
              This project strengthened my skills in designing for responsive layouts, maintaining visual consistency, and aligning design elements with brand values, while shaping my UX mindset to prioritize user needs. Challenges like managing high-resolution SVGs, creating an intuitive hamburger menu, and ensuring cohesive elements across different screen sizes highlighted areas for growth. These experiences motivated me to refine my design precision and learn more about scalable and accessible design techniques. Looking ahead, I aim to improve accessibility, create visually balanced designs for all devices, and explore advanced tools for maintaining consistency across components. Building on these lessons, I’m excited to tackle new challenges and deliver impactful, user-centered designs in future projects.</p>
            </div>
            <BottomArrows />
          </div>
        </section>
        </div> 
      </div>
      
      <div className='flex justify-center bg-white px-6 lg:px-8 '>
      <footer className="max-w-[64rem] w-full h-auto bg-white py-6">
        <div className="flex flex-col gap-4 relative h-full py-4">
          <TopCornerBlack />
          <h1 className="text-black font-display text-lg md:text-2xl text-center">Thanks for stopping by! <span className='text-orange'>✌</span></h1>
          <nav className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base">Pages</h2>
              <ul className="list-none text-black">
                <li className="font-body"><Link href='/'>Home</Link></li>
                <li className="font-body">  <Link href="/#works">Works</Link></li>
                <li className="font-body"><a href="/about-me">About Me</a></li>
                <li className="font-body"><a href="/resume.pdf">Resume</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base">Works</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="/hiro-project-page">Hiro</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base">Let&#39;s Connect</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="">Email</a></li>
                <li className="font-body"><a href="">LinkedIn</a></li>
              </ul>
            </div>
          </nav>
          <BottomCornerBlack />
        </div>
       
      </footer>
      </div>
    </>
  );
}
