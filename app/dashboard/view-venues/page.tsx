"use client";

import { CarouselCard } from "@/app/components/CarouselCard";

export default function Page() {
  const venues: string[] = [
    "Croke Park",
    "Thomond Park",
    "3 Arena",
    "O2 Arena",
    "Slane Castle",
  ];
  // make this grid better.. more space and bigger cards
  return (
    <div className="flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-cols-min">
        {venues.map((item, index) => (
          <CarouselCard
            key={index}
            venue={item}
            desc={"bruh"}
            imgSrc={"https://flowbite.com/docs/images/carousel/carousel-1.svg"}
          />
        ))}
      </div>
    </div>
  );
}
