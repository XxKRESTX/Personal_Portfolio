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
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Overview</h1>
              <p className="text-white font-body text-sm sm:text-base">
              The <span className='text-orange'>Hiro Bikes website</span> was developed as the second major project for <span className='text-orange'>IAT 339: Web Development</span>, focusing on creating a <span className='text-orange'>seamless</span> and <span className='text-orange'>user-friendly e-commerce platform</span> for <span className='text-orange'>cycling enthusiasts</span>. The project emphasizes <span className='text-orange'>responsive design</span>, ensuring the site <span className='text-orange'>adapts beautifully</span> and <span className='text-orange'>functions optimally</span> across <span className='text-orange'>desktops, tablets, and smartphones</span>. As I was the <span className='text-orange'>main developer</span> and <span className='text-orange'>designer</span>, I showcased a curated selection of bike models, including road, mountain, sport, and casual bikes, using <span className='text-orange'>high-quality images</span> and <span className='text-orange'>concise descriptions</span> across various screen sizes.</p>
            </div>
            <div className="p-4 my-4">
                <h2 className="font-piersansmedium text-white text-xl">Goal</h2>
                <p className="font-body text-white text-sm sm:text-base">
                I needed to <span className='text-orange'>design a website</span> to adapt to <span className='text-orange'>various screen sizes</span> without compromising <span className='text-orange'>usability</span> or <span className='text-orange'>design</span>.</p>
              </div>
            <BottomArrows />
          </div>
        </section>
        <section id="process">
          <div className="relative h-fit py-4 my-4">
            <TopArrows />
            <div className="p-4">
              <div className='flex flex-row gap-2'>
                <h1 className="text-white font-display text-2xl">Process</h1>
              </div>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Design Objectives</h2>
                <p className="font-body text-white text-sm sm:text-base">
                My role ensured a <span className='text-orange'>seamless</span> and <span className='text-orange'>engaging shopping experience</span> across devices, showcasing <span className='text-orange'>products effectively</span> while promoting Hiro’s brand values. By designing and coding the homepage, I created a visually appealing and intuitive interface that adapts to various screen sizes, allowing users to explore Hiro’s bicycles effortlessly.</p>
              </div>
              <div className='my-4'>
                <h2 className="font-piersansmedium text-white text-xl">Design</h2>
                <p className="text-white font-body text-sm sm:text-base">
                Before coding, I first designed pages to fit seamlessly across mobile to desktop resolutions. Using tools like Figma, I created low-fidelity mockups to illustrate my initial ideas and ensure a smooth transition to development.</p>
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
                A style guide ensures consistency across design elements, strengthens brand identity, and streamlines the design and development processes. It supports effective collaboration by providing a clear reference, ensuring new features align with the existing design. By promoting cohesive visuals, enhancing the user experience, and improving accessibility, the style guide simplifies scaling and supports future updates, maintaining professionalism and efficiency in my projects.</p>
                <Image
                  src="/style_guide.jpg" 
                  alt="Hiro style guide"
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
            
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Challenges</h1>
              <p className="text-white font-body text-sm sm:text-base">
              With just one month to design and code Hiro Bikes, I faced several challenges. Managing high-resolution SVGs was tricky as they needed resizing and testing to stay sharp on small screens without appearing oversized. Creating an intuitive hamburger menu that balanced aesthetics and functionality across devices was also difficult. Additionally, maintaining consistency in fonts, buttons, and colors across layouts required careful attention to align with the style guide and ensure visual balance. These experiences underscored the need for growth in design and problem-solving.</p>
            </div>
 
            <BottomArrows />
          </div>
        </section>
        <section id="reflection">
          <div className="relative h-fit py-4 my-4">
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Reflection</h1>
              <p className="text-white font-body text-sm sm:text-base">
              This project enhanced my skills in responsive design, visual consistency, and aligning elements with brand values, while creating a user-focused mindset. Challenges with high-resolution SVGs, intuitive menu design, and maintaining cohesive layouts revealed areas for growth, motivating me to refine my precision and explore scalable, accessible techniques. Moving forward, I aim to improve accessibility, ensure balanced designs across devices, and leverage advanced tools for consistency, ready to tackle new challenges and create impactful user-centered designs.</p>
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
          <h1 className="text-black font-display text-[1.25rem] md:text-xl lg:text-2xl text-center">Thanks for stopping by! <span className='text-orange'>✌</span></h1>
          <nav className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base lg:text-xl">Pages</h2>
              <ul className="list-none text-black">
                <li className="font-body"><Link href='/'>Home</Link></li>
                <li className="font-body">  <Link href="/#works">Works</Link></li>
                <li className="font-body"><a href="/about-me">About Me</a></li>
                <li className="font-body"><a href="/resume.pdf">Resume</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base lg:text-xl">Works</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="/hiro-project-page">Hiro</a></li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm md:text-base lg:text-xl">Let&#39;s Connect</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="https://www.google.com/">Email</a></li>
                <li className="font-body"><a href="https://www.google.com/">LinkedIn</a></li>
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
