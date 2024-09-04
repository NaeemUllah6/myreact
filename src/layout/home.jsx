import React from 'react'
import Headervideo from '../images/1113f6c9b641b05eacb1d7e596f20553_7887992.mp4';
import Cardimg1 from '../images/1.svg';
import Cardimg2 from '../images/2.svg';
import Cardimg3 from '../images/3.svg';
import Cardimg4 from '../images/4.svg';
import Cardimg5 from '../images/5.svg';
import Cardimg6 from '../images/6.svg';
import Cardimg7 from '../images/7.svg';
import Cardimg8 from '../images/8.svg';
import practicimg from '../images/Group 1261224017.svg';
import chooseimg from '../images/Group 1000004582.svg';
import choosecard from '../images/tick.svg';
const home = () => {
  const video = {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
    zIndex: '1',
  }
  return (
    //Hero Section
    <section>
      <div>
        <video style={video} muted autoPlay loop src={Headervideo}>
        </video>
        <div className='absolute top-0 h-[100vh] w-full' style={{ backgroundColor: 'rgba(0, 0, 0, 0.329)' }}>
          <div className="container">
          <div className='flex h-[100vh] justify-center flex-col sm:w-[80%] md:w-[70%] lg:w-[60%] gap-4 lg:gap-5 md:gap-5'>
            <p className='text-white text-[16px]'>
              Welcome to Preach Technologies
            </p>
            <h2 className='text-[26px] leading-[35px] md:text-[40px] lg:text-[56px] font-bold text-white md:leading-[60px]'>
              Your Partner in <span className='text-sky-600'>SaaS</span> Product Management and Software Development
            </h2>
            <p className='text-white text[15px] md:text-[18px]'>
              At Preach Concepts LLC, we turn innovative ideas into successful, scalable products, ensuring market fit and top-notch development for competitive success.
            </p>
            <button className='bg-transparent  border hover:bg-white hover:text-black text-white  py-3 md:py-3 lg:py-3   rounded  lg:w-1/3'>Start Your Project Today</button>
          </div>
          </div>
        </div>
      </div>
      {/* managements services section */}


      <div className='py-8 md:py-16 lg:py-16 container'>
        <div className='pb-8'>
          <h2 className="text-2xl md:text-3xl font-medium">Product Management <span className="text-sky-600">Services</span></h2>
          <p className="py-3">Our seasoned product managers work closely with you to</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500">
            <img src={Cardimg1}
              alt="" />
            <p className="text-xl font-medium py-2">Identify Product-Market Fi</p>
            <p className="">We conduct market, competitor, and user research to ensure your product meets needs and stands out.

            </p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500">
            <img src={Cardimg2}
              alt="" />
            <p className="text-xl font-medium py-2">Project Preparation</p>
            <p className="">We meticulously prepare projects for development, ensuring all requirements are clear & actionable.</p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500">
            <img src={Cardimg3}
              alt="" />
            <p className="text-xl font-medium py-2">Data Analysis and Research</p>
            <p className="">We leverage data to provide actionable insights, helping you make informed decisions.</p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500">
            <img src={Cardimg4}
              alt="" />
            <p className="text-xl font-medium py-2">Cost Analysis</p>
            <p className="">We provide detailed cost analyses optimize your budget and maximize ROI

            </p>
          </div>
        </div>
        <div className='py-8'>
          <h2 className="text-2xl md:text-3xl font-medium">Product Management <span className="text-sky-600">Services</span></h2>
          <p className="py-3">Our seasoned product managers work closely with you to</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500 ">
            <img src={Cardimg5}
              alt="" />
            <p className="text-xl font-medium py-2">Website Development</p>
            <p className="">Crafting responsive, user-friendly websites that engage and convert. </p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500">
            <img
              src={Cardimg6} alt="" />
            <p className="text-xl font-medium py-2">SaaS Web Applications</p>
            <p className="">Building robust SaaS applications that scale seamlessly.</p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500">
            <img src={Cardimg7}
              alt="" />
            <p className="text-xl font-medium py-2">Mobile App Development</p>
            <p className="">Creating intuitive mobile apps for both iOS and Android platforms.</p>
          </div>
          <div className="py-5 px-4 shadow shadow-[0px 0px 40px 0px] rounded-xl hover:scale-110 ease-out transition-all duration-500">
            <img
              src={Cardimg8} alt="" />
            <p className="text-xl font-medium py-2">UI/UX Design</p>
            <p className="">Designing captivating user interfaces and experiences that delight users.</p>
          </div>
        </div>
      </div>

      {/* Practices section */}
      <div className='py-8 md:py-16 lg:py-16 bg-[#012842]'>
        <div className='container'>
          <div className='sm:w-full md:w-[60%] lg:w-[992px] mx-auto py-3'>
            <div className='items-center justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
              <div>
                <h2 className='text-[28px] text-white font-medium'>
                  Agile <span className='text-sky-600'>Best Practices</span>
                </h2>
                <p className='text-white text-lg'>
                  We help you implement Agile best practices, fostering a collaborative and efficient development environment. Our approach ensures quick iterations, continuous feedback, and rapid delivery of high-quality products.
                </p>
              </div>
              <div>
                <img src={practicimg} alt="Agile Best Practices" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* choose us section */}
      <div className='py-8 md:py-16 lg:py-16'>
        <div className='container'>
          <h2 className='text-2xl md:text-3xl font-medium py-4'>Why Choose <span className='text-sky-600'>Preach Concept</span> LLC</h2>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-col-2 gap-10 items-center justify-center'>
            <div>
              <img className='w-full h-auto' src={chooseimg} alt="" />
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center row gap-y-10 gap-5'>

              <div className="text-center md:text-left lg:text-left">
                <img className="w-1/5 h-auto mx-auto block md:mx-0" src={choosecard} alt="" />
                <p className="text-xl font-medium py-2">Expertise and Experience</p>
                <p className="">We deliver top-tier services at a fraction of the cost, ensuring you get the best value for your investment..</p>
              </div>

              <div className="text-center md:text-left lg:text-left">
                <img className="w-1/5 h-auto mx-auto block md:mx-0" src={choosecard} alt="" />
                <p className="text-xl font-medium py-2">Cost-Effective Solutions</p>
                <p className="">We deliver top-tier services at a fraction of the cost, ensuring you get the best value for your investment.</p>
              </div>

              <div className="text-center md:text-left lg:text-left">
                <img className="w-1/5 h-auto mx-auto block md:mx-0" src={choosecard} alt="" />
                <p className="text-xl font-medium py-2">Customer-Centric Approach</p>
                <p className="">We build products designed to grow with your business, ensuring long-term success.</p>
              </div>

              <div className="text-center md:text-left lg:text-left">
                <img className="w-1/5 h-auto mx-auto block md:mx-0" src={choosecard} alt="" />
                <p className="text-xl font-medium py-2">Scalable Solutions</p>
                <p className="">Our team comprises experts with extensive experience in product management, development, and design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default home
