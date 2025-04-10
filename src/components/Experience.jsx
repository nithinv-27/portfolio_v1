import React from 'react';

const Experience = () => {
  return (
    <>
      <div className="text-slate-300 pt-52 px-10 lg:px-32 font-bold text-3xl" id='experience'>
        My Work Experience
      </div>

      <div className="px-10 lg:px-32 py-12 text-slate-500">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="md:w-1/3 space-y-2">
            <h3 className="text-slate-300 text-xl font-semibold">
              Summer Research Intern
            </h3>
            <p>Indian Institute of Technology Roorkee (IITR)</p>
            <p className="text-sm">May 2024 — Jul 2024</p>
            <p className="text-sm">Roorkee, Uttarakhand, IN</p>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 space-y-3 leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Worked on a research project titled <span className="text-slate-300 font-medium">“Urban Flood Modeling using Generative AI”</span>, under the guidance of Dr. Sudip Roy in his CoDA Lab.
              </li>
              <li>
                Developed a physics-based Conditional Generative Adversarial Network (<span className="text-slate-300 font-medium">cGAN-Flood</span>) to generate flood depth maps using spatial inputs such as DEM, slope, and imperviousness maps.
              </li>
              <li>
                Used a <span className="text-slate-300 font-medium">Pix2Pix model with U-Net architecture</span> to transform spatial input maps into a flood depth map while preserving spatial details.
              </li>
              <li>
                Utilized GIS software <span className="text-slate-300 font-medium">HEC-RAS</span> for collecting, analyzing, and visualizing digital elevation, slope, flow accumulation, and imperviousness data.
              </li>
              <li>
                Implemented data normalization and augmentation techniques to enhance model performance.
              </li>
              <li>
                Achieved a balance between accuracy and computational efficiency, significantly reducing flood prediction time compared to traditional hydrodynamic models.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
