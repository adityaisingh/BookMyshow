import React from "react";
import { Card } from "flowbite-react";

const eventCategories = [
  {
    title: "AMUSEMENT PARK",
    events: "10+ Events",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTArIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-amusement-park-collection-202404190106.png",
    color: "bg-blue-300",
  },
  {
    title: "WORKSHOPS & MORE",
    events: "260+ Events",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjYwKyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/workshop-and-more-web-collection-202211140440.png",
    color: "bg-red-300",
  },
  {
    title: "KIDS",
    events: "25+ Events",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MjUrIEV2ZW50cw%3D%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/bmshp-desktop-kids-collection-202404190106.png",
    color: "bg-blue-200",
  },
  {
    title: "COMEDY SHOWS",
    events: "175+ Events",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTc1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/comedy-shows-collection-202211140440.png",
    color: "bg-purple-400",
  },
  {
    title: "MUSIC SHOWS",
    events: "155+ Events",
    image:
      "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:l-text,ie-MTU1KyBFdmVudHM%3D,co-FFFFFF,ff-Roboto,fs-64,lx-48,ly-320,tg-b,pa-8_0_0_0,l-end:w-300/music-shows-collection-202211140440.png",
    color: "bg-indigo-300",
  },
];

const LiveEventsCarousel = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-20">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center">
          The Best Of Live Events
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-center justify-center pb-8">
          {eventCategories.map((category, index) => (
            <div key={index} className="w-full">
              <Card
                imgSrc={category.image}
                className="h-[25vh] sm:h-[20vh] md:h-[18vh] lg:h-[19vh] shadow-md transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveEventsCarousel;
