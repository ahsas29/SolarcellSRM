import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';


const Services = () => {
  return (
    <section>
      <section>
        <div className="container">
          <div className="lg:w-[500px] mx-auto">
            <h2 className="heading text-center lg:w-[500px]">
            Revolutionizing Solar Energy
            </h2>
            <p className="text__para text-center">Unrivaled Performance, Unmatched Sustainability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
             

              <div className="mt-[30px]">
                <h2 className="text [26px] leading-9 text-headingColor font-[700] text-center">
                  Service Hub
                </h2>
                <p className="text [16px] leading-7 text-textColor font-[400] mt-4 text-center">
                We have pioneered a revolutionary approach, eliminating the environmental risks associated with cadmium while enhancing efficiency and stability.
                </p>
                <Link to='/efficiency' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              

              <div className="mt-[30px]">
                <h2 className="text [26px] leading-9 text-headingColor font-[700] text-center">
                  Design Hub
                </h2>
                <p className="text [16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Whether you're a homeowner, business, or industry, we offer personalized consultations to design solar solutions that align with your goals and environmental values.                </p>
                <Link to='/contact' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              

              <div className="mt-[30px]">
                <h2 className="text [26px] leading-9 text-headingColor font-[700] text-center">
                  Device Structure
                </h2>
                <p className="text [16px] leading-7 text-textColor font-[400] mt-4 text-center">
                From regular maintenance to in-depth performance assessments, we ensure that your solar infrastructure operates at peak efficiency, providing you with the best return on investment                </p>
                <Link to='/structure' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Services;