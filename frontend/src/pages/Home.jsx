import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* {===== Hero Section =====} */}
      <section className="hero__section pt-[60px] 2l:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* {===== Hero Content =====} */}
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
              AI-Driven Energy Transition For Solar Industry.
              </h1>
              <p className="text__para">
              The global demand for sustainable energy solutions has never been more critical. As the world seeks alternatives to traditional solar materials, our project steps into the forefront, aiming to surpass the limitations of existing technologies and contribute to the ongoing renewable energy revolution.
              </p>
              <button className="btn">Learn More</button>
            </div>
            {/* {===== Hero Content Ends =====} */}

            {/* {==========Hero Counter=========} */}
            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  50+
                </h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                <p className="text__para">Journals Published</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  4000+
                </h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                <p className="text__para">Predefined Datasets</p>
              </div>

              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                  98%
                </h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                <p className="text__para">Efficient Model</p>
              </div>
            </div>
            {/* {==========Hero Counter Ends=========} */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="" />
              </div>
              <div className="mt-[30px]">
                {/* <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {===== Hero Section Ends =====} */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best solar cell analysis services platform.
            </h2>
            <p className="text__para text-center">Our project is dedicated to creating a revolutionary solution, offering top-tier performance and environmental sustainability in the realm of solar energy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt=""/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text [26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Journal
                </h2>
                <p className="text [16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Explore our project, learn about our groundbreaking research, and join us in shaping the future of solar energy.
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt=""/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text [26px] leading-9 text-headingColor font-[700] text-center">
                  Get Services
                </h2>
                <p className="text [16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Similar to world-class medical services, our project promises an unparalleled level of expertise in the field of solar technology.
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt=""/>
              </div>

              <div className="mt-[30px]">
                <h2 className="text [26px] leading-9 text-headingColor font-[700] text-center">
                  Join Us
                </h2>
                <p className="text [16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Just as quality healthcare is a fundamental right, we believe that access to efficient and eco-friendly solar energy should be available to all.
                </p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About/>

      {/* {===== Services Section =====} */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text__para text-center">
            Our believe in cutting-edge research and a commitment to pushing the boundaries of what's possible in solar technology.
            </p>
          </div>

          <ServiceList/>
        </div>
      </section>
      {/* {===== Services Section Ends=====} */}

      
      {/* {===== Our great Doctors=====} */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great team</h2>
            <p className="text__para text-center">
              World Class care for everyone. Our health System offers unmatched, expert health care.
            </p>
          </div>

          <DoctorList/>
        </div>
      </section>
      {/* {===== Our great Doctors Ends=====} */}

      {/* {===== FAQ Section=====} */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt=""/>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most asked questions</h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>
      {/* {===== FAQ Section Ends=====} */}

      {/* {===== Testimonial Section =====} */}
      {/* <section>
        <div className="container">
        <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our users say</h2>
            <p className="text__para text-center">
              World Class tool for everyone. Our System offers unmatched, expert solutions to your problems.
            </p>
          </div>
          <Testimonial/>
        </div>
      </section> */}
      {/* {===== Testimonial Section Ends=====} */}

    </>
  );
};

export default Home;
