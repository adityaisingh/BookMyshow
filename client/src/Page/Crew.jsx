import React, { useEffect, useState } from "react";
//

const CastCrewSection = ({ castcrew }) => {
 
  
  return (
    <div className="py-8 px-4">
      <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-black font-semibold">
            About the movie
          </div>
          <p className="mt-2 text-gray-500">
            The film's backdrop is centered around the far and forgotten coastal
            lands of India. The people or rather the villains in the film
            neither fear death nor god and there is no sense of humanity among
            them. Devara changes this scenario in his inimitable style.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200"></div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4 p-6">
        <h2 className="text-xl font-semibold mb-4">Cast</h2>
        <div className="flex items-center justify-center md:grid-cols-4 gap-6">
          {castcrew.cast &&
            castcrew.cast.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg">
                <img
                  className="w-12 h-90 rounded-full object-cover mb-4"
                  src={
                    "data:image/png;base64,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"
                  }
                  alt={member.name}
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.character}</p>
              </div>
            ))}
        </div>

        <h2 className="text-xl font-semibold mb-4">Crew</h2>
        <div className="flex items-center justify-center  md:grid-cols-4 gap-6">
          {castcrew.crew &&
            castcrew.crew.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
                <img
                  className="w-10 h-10 rounded-full object-cover mb-4"
                  src={
                    "data:image/png;base64,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"
                  }
                  alt={member.name}
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.job}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CastCrewSection;
