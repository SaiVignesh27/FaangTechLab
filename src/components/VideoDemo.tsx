import React from 'react';
import faangvideo from '../../faangofficevideo.mp4';

const VideoDemo: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="text-center mb-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Explore FAANGTechLab
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        A sneak peek into our workspace and how we empower learners through real-world, immersive tech experiences.
      </p>
    </div>

    <div className="px-10">
      <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <video
          src={faangvideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover bg-black rounded-2xl"
        />
      </div>
    </div>
  </section>
);

export default VideoDemo;
