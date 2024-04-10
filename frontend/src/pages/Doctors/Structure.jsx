import structure from "../../assets/images/structure_image1.jpg";
import React from 'react';

const Structure = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex items-center">
          <img src={structure} alt="Structure 1" className="w-64 h-auto mb-4" />
          <div className="bg-gray-200 rounded-lg p-6 flex-grow">
            <p className="text-lg text-gray-800 text-justify">ZnO acts as the window layer, facilitating contact formation, enhancing light transmission, and providing electrical conductivity. CdS serves as the buffer layer, aligning the absorber and window layers, especially effective with kesterite materials. CZTSxSe1-x forms the well region, with varying compositions (x=0.2 to 0.8) providing different bandgaps. CZTS (x=1) acts as the p-type and barrier region in quantum well layers, with a fixed bandgap of 1.5 eV.</p>
          </div>
        </div>
        {/* Repeat the above structure for other sections */}
      </div>
    </div>
  );
};

export default Structure;
