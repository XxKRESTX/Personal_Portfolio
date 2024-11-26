import React from 'react';
import NavBar from '../components/NavBar';
import ComputerMockup from '../components/ComputerMockup';
import InfoSection from '../components/InfoSection';
import TopArrows from '../components/TopArrows';
import BottomArrows from '../components/BottomArrows';
import TopCornerBlack from '../components/TopCardArrowBlack';
import BottomCornerBlack from '../components/BottomCardArrowBlack';

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
          <img src='../../Finished_mockup.jpg' alt='a screenshot of the hiro website'></img>
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
            <BottomArrows />
          </div>
        </section>
        <section id="research">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm sm:text-base">02</p>
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Research</h1>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Design Objectives</h2>
                <p className="font-body text-white text-sm sm:text-base">
                My role involved ensuring the site provided a seamless and engaging shopping experience across all devices, with a focus on showcasing products effectively while promoting Hiro’s brand values. By designing and coding the homepage, I emphasized creating a visually appealing and intuitive interface that adapts to various screen sizes, enabling users to explore and interact with Hiro’s range of bicycles effortlessly.                </p>
              </div>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Competitive Analysis</h2>
                <p className="font-body text-white text-sm sm:text-base">
                  I reviewed leading e-commerce websites to identify key elements like streamlined navigation, strong branding, and clear information hierarchy.
                </p>
                <figure className='pt-8'>
                  <img src="../../../competitive_analysis.jpg" alt="screen shot of competitive analysis" className='w-full'/>
                </figure>
              </div>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Takeaways</h2>
                <p className="font-body text-white text-sm sm:text-base">
                With users increasingly accessing websites from mobile devices, the Hiro homepage needed to adapt seamlessly to various screen sizes without  compromising usability or aesthetics. The challenge was to maintain the site&apos;s functionality, visual hierarchy, and branding across desktops,  tablets, and smartphones.</p>
              </div>
 
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Problem</h2>
                <p className="font-body text-white text-sm sm:text-base">
                To define the problem, I needed to design a website to adapt to various screen sizes without compromising usability or design.</p>
              </div>
            </div>
            <BottomArrows />
          </div>
        </section>
        <section id="design">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm sm:text-base">03</p>
            <TopArrows />
            <div className="p-4">
              <div className='flex flex-row gap-2'>
                <img src="../../../design_logo.svg" alt="block logo" />
                <h1 className="text-white font-display text-2xl">Design</h1>
              </div>
              <p className="text-white font-body text-sm sm:text-base">
              There were a few things first that I needed to 
              design before coding. For example, designing pages that fit seamlessly within mobile to desktop resolutions.</p>
              <div className="flex flex-col my-4 gap-4">
                <img src='../../../low_mockups.jpg' alt='figma low mockups of hiro'></img>               
                <img src='../../../mid mockup whole.jpg' alt='figma medium mockups of hiro'></img>               
              </div>
              <div className="flex flex-col gap-2 pt-8">
                <h2 className='font-piersansmedium text-white text-xl'>Style Guide</h2>
                <img src="../../../style_guide.jpg" alt="hiro style guide" className='w-full'/>
              </div>
              <div className="pt-8">
                <h2 className='font-piersansmedium text-white text-xl pt-8'>Development</h2>
                <div className='flex flex-row py-8'>
                  <img src="../../../mobile_final.jpg" alt="final about us page mobile version" className='w-1/2 h-auto'/>
                  <div>
                    <h3 className='font-piersansmedium text-white'>Mobile</h3>
                    <ul className='py-8'>
                      <li className="text-white font-body text-sm pt-4">Single-column layout for categories</li>
                      <li className="text-white font-body text-sm pt-4">Consistent readable fonts and clear color contrast</li>
                    </ul>
                  </div>

                </div>
                <div className='flex flex-row py-8'>
                  <img src="../../../tablet_final.jpg" alt="final about us page tablet version" className='w-1/2 h-auto'/>
                  <div>
                    <h3 className='font-piersansmedium text-white'>Tablet</h3>
                    <ul className='py-8'>
                      <li className="text-white font-body text-sm pt-4">Two-column grids for products to balance content density and readability.</li>
                    </ul>
                  </div>
                </div>
                <div className='flex flex-row py-8'>
                  <img src="../../../desktop_final.jpg" alt="final about us page desktop version" className='w-1/2 h-auto'/>
                  <div>
                    <h3 className='font-piersansmedium text-white'>Desktop</h3>
                    <ul className='py-8'>
                      <li className="text-white font-body text-sm pt-4">Effective use of layout</li>
                    </ul>
                  </div>

                </div>
              </div>
              <div className='flex flex-col gap-4 pt-8'>
                <h2 className='font-piersansmedium text-white text-xl'>Key Features</h2>
                <div>
                  <h3 className='font-piersansmedium text-white'>Flexible Layouts</h3>
                  <p className="text-white font-body text-sm pt-4 sm:text-base">Utilized CSS Grid and Flexbox to create layouts that adapt seamlessly to different screen sizes. </p>
                </div>
                <div>
                  <h3 className='font-piersansmedium text-white'>Fluid Images</h3>
                  <p className="text-white font-body text-sm pt-4 sm:text-base">Used 
                    max-width: 100%; 
                    height:auto; 
                    to ensure images resize proportionally without losing quality.</p>
                </div>
                <div>
                  <h3 className='font-piersansmedium text-white'>Media Queries</h3>
                  <p className="text-white font-body text-sm pt-4 sm:text-base">Developed CSS rules for specific breakpoints, enabling tailored styles for devices like desktops, tablets, and smartphones.</p>
                </div>
                <div>
                  <h3 className='font-piersansmedium text-white'>Accessibility Check</h3>
                  <p className="text-white font-body text-sm pt-4 sm:text-base">Used Google Lighthouse to assess accessibility and ensure the design adhered to best practices for inclusivity.</p>
                  <div className='flex flex-row gap-2 w-fit pt-4'>                  
                    <img src='../../../accesbility_check1.jpg' alt='accessibility score of 95' className='w-1/4 h-auto'></img>
                    <img src='../../../best_practices1.jpg' alt='best practices score of 96' className='w-1/4 h-auto'></img>
                  </div>
                  <p className="text-white font-body text-sm pt-4 sm:text-base">The final website design prioritized responsive layouts. I ensured high-quality visuals tailored to various screen sizes, and reinforced brand identity with consistent aesthetics and concise content presentation. Accessibility was further enhanced using Google Lighthouse to optimize for inclusivity.</p>
                </div>
              </div>
            </div>
            <BottomArrows />
          </div>
        </section>
        <section id="Challenges">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm sm:text-base">04</p>
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Challenges</h1>
              <p className="text-white font-body text-sm sm:text-base">
              Given that I had only one month to design and code Hiro Bikes,there were a few limitations I encountered. My limited experience with JavaScript prevented me from implementing a menu for mobile navigation, which I would prioritize in future projects. Additionally, I regret not fully optimizing the website for web images. Leveraging features like the srcset attribute would have improved page optimization and significantly reduced loading  times, especially on mobile devices. These challenges highlight areas I’m eager to refine in future projects to create better designs.</p>
            </div>
            <BottomArrows />
          </div>
        </section>
        <section id="reflection">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm sm:text-base">05</p>
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
      
      <div className='flex justify-center bg-white px-4 lg:px-0'>
      <footer className="max-w-[64rem] w-full h-auto bg-white py-6">
        <div className="flex flex-col gap-4 relative h-full py-4">
          <TopCornerBlack />
          <h1 className="text-black font-display text-[1.25rem] text-center">Thanks for stopping by!</h1>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col gap-4">
              <h2 className="text-black font-subheader text-sm">Pages</h2>
              <ul className="list-none text-black">
                <li className="font-body"><a href="/">Home</a></li>
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
