"use client";

interface CarouselCardProps {
    venue: string;
    desc: string;
    imgSrc: string;
  }

import { Carousel, Card } from "flowbite-react";


export function CarouselCard({venue, desc, imgSrc} : CarouselCardProps) {
  return (

<Card
className="h-200 flex flex-col shadow-lg"
>
     <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
 <Carousel leftControl="left" rightControl="right">
    <img src={imgSrc} alt="..." />
     <img src={imgSrc} alt="..." />
 </Carousel>
</div>
 <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
 {venue}
 </h5>
 <p className="font-normal text-gray-700 dark:text-gray-400">
{desc}
 </p>

</Card> 
  );
}
