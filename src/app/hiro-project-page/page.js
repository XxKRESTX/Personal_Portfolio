import React from 'react';
import NavBar from '../components/NavBar';
import ComputerMockup from '../components/ComputerMockup';
import InfoSection from '../components/InfoSection';
import TopArrows from '../components/TopArrows';
import BottomArrows from '../components/BottomArrows';
import UserPersona from '../components/UserPersona';
import TopCornerBlack from '../components/TopCardArrowBlack';
import BottomCornerBlack from '../components/BottomCardArrowBlack';

export default function Hiro() {
  const infoItems = [
    { label: 'Tools', value: 'Figma, HTML, CSS and JavaScript' },
    { label: 'Timeline', value: 'Oct 2024 - Nov 2024' },
    { label: 'Members', value: 'Shixuan, Nathan' },
    { label: 'Responsibilities', value: 'UI/UX Design & Web Development' },
  ];
  const profileData = {
    imageSrc: '/assets/profile_img1.svg',
    name: 'Emma Peterson',
    age: 35,
    occupation: 'Outdoor Photographer',
    location: 'Vancouver, BC',
    cyclingExperience: 'Intermediate',
    background: 'Emma is a nature enthusiast who spends weekends exploring trails and capturing outdoor landscapes. She cycles primarily on mountain trails and values durable and well-made bikes.',
    goals: [
      'Find a city bike that is low-maintenance and easy to handle in traffic.',
      'Purchase essential commuter gear (e.g., helmet, lock, lights).',
      'Learn more about cycling best practices for urban areas.'
    ],
    preferredFeatures: [
      'Overwhelmed by too many product options.',
      'Difficulty finding reliable information about city bikes suitable for beginners.'
    ]
  };

  return (
    <>
      <div className="bg-black w-screen h-full relative p-6 scroll-smooth">
        <section className="flex flex-col gap-10 relative mb-20">   
          <NavBar />
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-white font-display text-2xl">Hiro</h1>
            <ComputerMockup />
          </div>
          <div className="flex items-center justify-center bg-black">
            <InfoSection items={infoItems} />
          </div>
        </section>
        <section id="overview">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm">01</p>
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Overview</h1>
              <p className="text-white font-body">
                The Hiro Bikes e-commerce website offers a user-friendly platform for cycling enthusiasts. The site showcases various models, including road, mountain, sport, and casual bikes, each accompanied by images and brief descriptions.
              </p>
            </div>
            <BottomArrows />
          </div>
        </section>
        <section id="research">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm">02</p>
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Research</h1>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Design Objectives</h2>
                <p className="font-body text-white font-base">
                  The Hiro Bikes e-commerce website offers a user-friendly platform for cycling enthusiasts. The site showcases various models, including road, mountain, sport, and casual bikes, each accompanied by images and brief descriptions.
                </p>
              </div>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Competitive Analysis</h2>
                <p className="font-body text-white font-base">
                  We reviewed leading bike and outdoor e-commerce sites to understand successful layout patterns, including streamlined navigation, strong visual branding, and information hierarchy.
                </p>
                <figure className='pt-8'>
                  <img src="../../../fuji_bikes_analysis.svg" alt="screen shot home page of fujibikes.com" className='w-full'/>
                  <figcaption>Referenced from <a href="https://www.fujibikes.com/">https://www.fujibikes.com/</a></figcaption>
                </figure>
                <figure className='pt-8'>
                  <img src="../../../bicicletta_analysis.svg" alt="screen shot home page of bicicletta.cc" className='w-full'/>
                  <figcaption>Referenced from <a href="https://bicicletta.cc/">https://bicicletta.cc/</a></figcaption>
                </figure>
              </div>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Takeaways</h2>
                <p className="font-body text-white font-base">
                  The website redesign emphasized Hiro&#39;s brand identity by showcasing the logo prominently and providing more information about the brand&#39;s core values. We highlighted essential sections for &quot;Gear&quot; and &quot;Bikes,&quot; helping users easily explore the various types of gear and bikes available for different cycling needs.
                </p>
              </div>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">User Personas</h2>
                <p className="font-body text-white font-base">
                  To better understand our website goals, I created user personas to represent our target audience. This allows me to create specific product decisions and also find out about their goals and needs.
                </p>
                <div className="flex items-center justify-center">
                  <UserPersona {...profileData} />
                </div>
              </div>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Problems</h2>
                <p className="font-body text-white font-base">
                  To define the problem, I needed to design a brand identity to cater towards experts and newcomers alike. Furthermore, I needed to include bike types for streamlining users for an easier choice and include a place to find high-performance gear.
                </p>
              </div>
            </div>
            <BottomArrows />
          </div>
        </section>
        <section id="design">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm">03</p>
            <TopArrows />
            <div className="p-4">
              <div>
                <img src="../../../design_logo.svg" alt="block logo" />
                <h1 className="text-white font-display text-2xl">Design</h1>
              </div>
              <p className="text-white font-body">
                After conceptualizing a design direction, I began crafting wireframes to visualize my intentions for the layout and content. This primarily focused on the problems and several other key features I aimed to incorporate for a cohesive website experience.
              </p>
              <div className="my-4">
                <h2 className="font-piersansmedium text-white text-xl">Low/Mid Fidelity</h2>
                
                <p className="font-body text-white font-base">
                  The website redesign emphasized Hiro&#39;s brand identity by showcasing the logo prominently and providing more information about the brand&#39;s core values. We highlighted essential sections for &quot;Gear&quot; and &quot;Bikes,&quot; helping users easily explore the various types of gear and bikes available for different cycling needs.
                </p>
              </div>
              <img src="../../../final_home_img.svg" alt="final home page of hiro website" className='pt-8'/>
              <p className="text-white font-body pt-8">The final website design focused on enhancing interactions and accessibility through hover and focus effects, reinforcing brand identity with a clear logotype and emphasis on core values, and improving navigation that highlights different types of gear and bikes. </p>
            </div>
            <BottomArrows />
          </div>
        </section>
        <section id="reflection">
          <div className="relative h-fit py-4 my-4">
            <p className="text-orange font-body text-sm">04</p>
            <TopArrows />
            <div className="p-4">
              <h1 className="text-white font-display text-2xl">Reflection</h1>
              <p className="text-white font-body">
              Throughout the design process, I focused on creating a user-centered experience that would make it easy for visitors to explore Hiro’s range of bikes and accessories. One of the main challenges was ensuring that the website would appeal to a diverse range of users , from beginners to avid cyclists, maintaining simplicity and ease of use. This project strengthened my skills in usability testing, prototyping, and aligning brand values with design elements, all of which helps me approach a more UX mindset before diving into designs. Can’t wait for the next project!
              </p>
            </div>
            <BottomArrows />
          </div>
        </section>
      </div>
      <footer className="h-fit bg-white p-6">
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
    </>
  );
}
