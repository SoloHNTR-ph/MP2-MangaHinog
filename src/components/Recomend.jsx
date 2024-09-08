import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/Carousel";

export function Recomend() {
  return (
    <div className="mx-100 mb-2">
      <Carousel className="relative w-full h-auto ">
        <CarouselContent className="flex">
          <CarouselItem className="flex-shrink-0 w-full h-96 flex items-center justify-center">
            <img
              alt=""
              src="https://wallpaper.dog/large/17176644.jpg"
              className="w-full h-full object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 w-full h-96 flex items-center justify-center">
            <img
              alt=""
              src="https://images.alphacoders.com/135/1352186.png"
              className="w-full h-full object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 w-full h-96 flex items-center justify-center">
            <img
              alt=""
              src="https://images8.alphacoders.com/135/1352188.png"
              className="w-full h-full object-cover"
            />
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 w-full h-96 flex items-center justify-center">
            <img
              alt=""
              src="https://images6.alphacoders.com/135/1352189.png"
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer" />
      </Carousel>
    </div>
  );
}
