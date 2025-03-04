
"use client";

import { Card, Button } from "flowbite-react";
import { useRouter } from "next/navigation";


export default function Page() {
const router = useRouter() 

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8">
    <div className="flex flex-col md:flex-row gap-8">
     
    <Card
     className="h-200 flex flex-col shadow-lg"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/view-venue.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Venues
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Look for your event's perfect venue here!
      </p>
      <Button gradientDuoTone="purpleToBlue" onClick={() => router.push('/create/view-venues')}>Browse Venues</Button>
    </Card>

    <Card
         className="h-200 flex flex-col shadow-lg"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="/images/create-event.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Events
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Create and customise your own event!
      </p>
      <Button  gradientDuoTone="purpleToBlue" onClick={() => router.push('/create/create-event')}>Start Creating</Button>
    </Card>
    </div>
    </div>
  );
}
