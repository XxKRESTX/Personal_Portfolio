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
                There were a few things first that I needed to 
                design before coding. For example, designing pages that fit seamlessly within mobile to desktop resolutions.</p>
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
              Given that I had only one month to design and code Hiro Bikes,there were a few limitations I encountered. My limited experience with JavaScript prevented me from implementing a menu for mobile navigation, which I would prioritize in future projects. Additionally, I regret not fully optimizing the website for web images. Leveraging features like the srcset attribute would have improved page optimization and significantly reduced loading  times, especially on mobile devices. These challenges highlight areas I’m eager to refine in future projects to create better designs.</p>
            </div>
            <div className="my-4 p-4">
                <h2 className="font-piersansmedium text-white text-xl">Takeaways</h2>
                <p className="font-body text-white text-sm sm:text-base">
                With users increasingly accessing websites from mobile devices, the Hiro homepage needed to adapt seamlessly to various screen sizes without  compromising usability or aesthetics. The challenge was to maintain the site&apos;s functionality, visual hierarchy, and branding across desktops,  tablets, and smartphones.</p>
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
              This project strengthened my skills in usability testing, prototyping, and  aligning design with brand values, while shaping my UX mindset to  prioritize user needs. Challenges like limited JavaScript knowledge and missed opportunities for image optimization highlighted areas for  growth, motivating me to expand my technical skills and focus on  performance optimization.

              Looking ahead, I aim to enhance accessibility, improve mobile performance, and explore advanced  interactivity to create inclusive, responsive designs. Building on these lessons, I’m excited to tackle new challenges and deliver impactful user experiences in future projects.              </p>
            </div>
            <BottomArrows />
          </div>
        </section>
        </div> 
      </div>
      
      <div className='flex justify-center bg-white px-4 lg:px-0 '>
      <footer className="max-w-[64rem] w-full h-auto bg-white py-6 lg:p-4">
        <div className="flex flex-col gap-4 relative h-full py-4">
          <TopCornerBlack />
          <h1 className="text-black font-display text-[1.25rem] text-center">Thanks for stopping by!</h1>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm">Pages</h2>
              <ul className="list-none text-black">
                <li className="font-body"><Link href='/'>Home</Link></li>
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
