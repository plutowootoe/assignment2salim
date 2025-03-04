
"use client";

import { CarouselCard } from "@/app/components/CarouselCard";



export default function Page() {
const venues: string[] =["Croke Park", "Thomond Park", "3 Arena", "O2 Arena", "Slane Castle"]
// make this grid better.. more space and bigger cards
  return (
<div className="grid grid-cols-5 gap-4">
{venues.map((item, index) => 
       <CarouselCard
       key={index}
       venue={item}
       desc={"bruh"}
        imgSrc={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}
       />
  )}

  </div>

  
  );
}
