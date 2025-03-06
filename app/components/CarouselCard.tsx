"use client";

interface CarouselCardProps {
    venue: string;
    desc: string;
    imgSrc: string;
  }

import { Carousel, Card } from "flowbite-react";
import Image from "next/image";


export function CarouselCard({venue, desc, imgSrc} : CarouselCardProps) {
  return (
    // my own card div
    <div className="min-w-[280px] max-w-[400px] w-full h-[500px] flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className=" h-[70%] w-full">
        <Carousel leftControl="left" rightControl="right" className="h-full w-full  !p-0 !m-0">
          <div className="relative w-full h-full">
            <Image src={imgSrc} alt="..." fill className="w-full h-full object-cover" />
            </div>
            <div className="relative w-full h-full">
            <Image src={imgSrc} alt="..." fill className="w-full h-full object-cover"/>
            </div>
        </Carousel>
      </div>
      <div className="p-4 flex flex-col gap-1 h-[30%]">
       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {venue}
       </h5>
       <p className="font-normal text-gray-700 dark:text-gray-400">
          {desc}
       </p>
       </div>
 </div>
  );
}
