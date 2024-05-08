import structure from "../../assets/images/structure_image1.jpg";
import table from "../../assets/images/table.png";
import EnergyBand from "../../assets/images/EnergyBand.jpg";
import performance from "../../assets/images/Performance.png";

import React from 'react';

const Structure = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-headingColor text-4xl font-bold my-8"> Proposed Structure</h2>
        <div className="flex items-center">
          <img src={structure} alt="Structure 1" className="w-64 h-auto mb-4" />
          
          <div className="rounded-lg p-6 flex-grow">
            <p className="text-lg text-gray-800">
              ZnO acts as the window layer, facilitating contact formation, enhancing light transmission, and providing electrical conductivity. CdS serves as the buffer layer, aligning the absorber and window layers, especially effective with kesterite materials. CZTSxSe1-x forms the well region, with varying compositions (x=0.2 to 0.8) providing different bandgaps. CZTS (x=1) acts as the p-type and barrier region in quantum well layers, with a fixed bandgap of 1.5 eV. 
            </p>
          </div>
        </div>
        <img src={table} alt="Table" className="w-64 h-auto mb-4" />
        {/* Repeat the above structure for other sections */}
        <h2 className="text-center text-headingColor text-4xl font-bold my-8"> Schematic of EB diagram & carrier separation mechanism in MQW solar cell.</h2>
        <div className="flex items-center">
          <img src={EnergyBand} alt="Energy Band" className="w-64 h-auto mb-4" />
          <div className=" rounded-lg p-6 flex-grow">
            <p className="text-lg text-gray-800">
            The photogenerated carriers are able to contribute to the current due to the quantized energy level of quantum wells (QWs) and the presence of high electric field, which facilitates their escape from the wells. 
            </p>
          </div>
        </div>
        {/* Repeat the above structure for other sections */}
        <h2 className="text-center text-headingColor text-4xl font-bold my-8"> Performance Measuring Parameters </h2>
        <div className="flex items-center">
          <img src={performance} alt="Performance" className="w-110 h-auto mb-4 align-center" />
        </div>
        {/* Repeat the above structure for other sections */}
        <h2 className="text-center text-headingColor text-4xl font-bold my-8"> Enter your desired values 🌞 </h2>
        <div className="flex items-center">
          <img src={structure} alt="Structure 1" className="w-64 h-auto mb-4" />
          <div className="rounded-lg p-6 flex-grow">
            <p className="text-lg text-gray-800">
              ZnO acts as the window layer, facilitating contact formation, enhancing light transmission, and providing electrical conductivity. CdS serves as the buffer layer, aligning the absorber and window layers, especially effective with kesterite materials. CZTSxSe1-x forms the well region, with varying compositions (x=0.2 to 0.8) providing different bandgaps. CZTS (x=1) acts as the p-type and barrier region in quantum well layers, with a fixed bandgap of 1.5 eV. 
            </p>
          </div>
        </div>
        {/* Repeat the above structure for other sections */}
        <h2 className="text-center text-headingColor text-4xl font-bold my-8"> Enter your desired values 🌞 </h2>
        <div className="flex items-center">
          <img src={structure} alt="Structure 1" className="w-64 h-auto mb-4" />
          <div className=" rounded-lg p-6 flex-grow">
            <p className="text-lg text-gray-800">
              ZnO acts as the window layer, facilitating contact formation, enhancing light transmission, and providing electrical conductivity. CdS serves as the buffer layer, aligning the absorber and window layers, especially effective with kesterite materials. CZTSxSe1-x forms the well region, with varying compositions (x=0.2 to 0.8) providing different bandgaps. CZTS (x=1) acts as the p-type and barrier region in quantum well layers, with a fixed bandgap of 1.5 eV. 
            </p>
          </div>
        </div>
    </div>
  );
};

export default Structure;

