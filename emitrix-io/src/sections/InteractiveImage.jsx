import React from 'react';
import InteractiveImage from '../components/InteractiveImage';
import exampleImage from '../assets/3.png';

const InteractiveImageSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <InteractiveImage 
        src={exampleImage}
        alt="Interactive diagram"
        width={800}
        height={500}
        className="border-2 border-[#001E80]"
      />
    </section>
  );
};

export default InteractiveImageSection;