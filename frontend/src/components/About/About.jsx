import React from "react";
import aboutImg from "../../assets/images/about.jpg";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section>
        <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* {========== about img ==========} */}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt=""/>
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                    {/* <img src={aboutCardImg} alt=""/> */}
                    </div>
                </div>

            {/* {========== about content ==========} */}
            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
  <h2 className="heading">About Our Research</h2>

  <p className="text_para">
  This project pioneers the application of quantum engineering to kesterite solar cells, presenting 
a revolutionary approach to meet the growing demand for alternatives to copper indium gallium 
selenide (CIGS) in solar technology. The study introduces quantum well-solar cells (QWSCs) 
on kesterite, employing copper zinc tin sulfide (CZTS) with varying sulfur (S) and selenium 
(Se) content as barrier and well materials. Through a comprehensive investigation of optical, 
electrical, and material properties, the study explores the profound impact of quantum well 
variations (2 to 5 QWs) and diverse compositions (0.2, 0.4, 0.6, and 0.8). 
  </p>

  <p className="text_para mt-[30px]">
  This exhaustive 
analysis spans 16 distinct combinations, promising unique and invaluable insights. The 
outcomes, including efficiency (η), open-circuit voltage (Voc), fill factor (FF), and short-circuit 
current (Jsc), are poised to reveal a transformative trajectory for next-generation solar cells. Our 
initiative extends beyond scientific exploration we are developing a dedicated website to 
showcase the project's findings and methodologies. This online platform will serve as an 
interactive hub, offering in-depth information, visual representations, and data visualization 
tools to engage researchers, industry professionals, and enthusiasts. This website aims to not 
only disseminate our research but also foster collaboration and spark conversations that drive 
the advancement of solar energy technologies.
  </p>

  <Link to="/">
    <button className="btn">Learn More</button>
  </Link>
</div>

            </div> 
        </div>
  </section>   
  )
};

export default About