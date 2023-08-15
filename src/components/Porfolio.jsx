import React from 'react';
import nextflix from '../assets/portfolio/nextflix.png';
import airstays from '../assets/portfolio/airstays.png';
import dalle from '../assets/portfolio/dalle.png';
import minecraft from '../assets/portfolio/minecraft.png';

const Porfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: nextflix,
    },
    {
      id: 2,
      src: airstays,
    },
    {
      id: 3,
      src: dalle,
    },
    {
      id: 4,
      src: minecraft,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className=" w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-blue-500 rounded-lg ">
                  Deployed Link
                </button>
                <button className="px-6 py-3 w-1/2 m-4 duration-200 hover:bg-blue-500 rounded-lg hover:scale-105">
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Porfolio;
