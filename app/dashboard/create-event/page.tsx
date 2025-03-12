"use client";

import Footer from "@/app/components/Footer";
import { Button, TextInput, Textarea, Select, Card } from "flowbite-react";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface Venue {
  name: string;
  location: string;
  capacity: number;
  image_one: string;
  image_two: string;
}

const venues: Venue[] = [
  {
    name: "Croke Park",
    location: "Dublin",
    capacity: 80000,
    image_one: "/etp-caragh/images/croke-park-1.jpg",
    image_two: "/etp-caragh/images/croke-park-2.jpg",
  },
  {
    name: "Thomond Park",
    location: "Limerick",
    capacity: 26000,
    image_one: "/etp-caragh/images/thomond_1.jpg",
    image_two: "/etp-caragh/images/thomond_2.jpeg",
  },
  {
    name: "3 Arena",
    location: "Dublin",
    capacity: 13500,
    image_one: "/etp-caragh/images/3arena_1.jpg",
    image_two: "/etp-caragh/images/3arena_2.jpg",
  },
  {
    name: "O2 Arena",
    location: "London",
    capacity: 20000,
    image_one: "/etp-caragh/images/o2_2.jpg",
    image_two: "/etp-caragh/images/o2_1.jpg",
  },
  {
    name: "Slane Castle",
    location: "Meath",
    capacity: 80000,
    image_one: "/etp-caragh/images/slane_1.jpg",
    image_two: "/etp-caragh/images/slane_2.jpg",
  },
];

interface FormData {
  title: string;
  description: string;
  date: string;
  location: string;
  tickets: number | string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    date: "",
    location: "",
    tickets: "",
  });

  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "location") {
      const venue = venues.find((v) => v.name === value);
      setSelectedVenue(venue || null);
    }

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "tickets"
          ? value === ""
            ? ""
            : Math.max(0, parseInt(value) || 0)
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const venueCapacity = selectedVenue ? selectedVenue.capacity : Infinity;

    if (Number(formData.tickets) > venueCapacity) {
      alert(`Ticket count exceeds venue capacity of ${venueCapacity}.`);
      return;
    }
    alert("Event successfuy created");
    console.log("Event Created:", formData);
    setFormData({
      title: "",
      description: "",
      date: "",
      location: "",
      tickets: "",
    });
  };

  return (
    <div className="bg-gray-100">
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Fix the narrow issue by making this div take full width */}
        <div className="flex w-full max-w-screen-lg bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left: Form Section */}
          <div className="w-1/2 p-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Create Event
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <TextInput
                id="title"
                name="title"
                placeholder="Event Title"
                required
              />
              <Textarea
                id="description"
                name="description"
                placeholder="Description"
                required
              />
              <TextInput id="date" type="date" name="date" required />
              <Select
                id="location"
                name="location"
                onChange={handleChange}
                required
              >
                <option value="">Select a venue</option>
                {venues.map((venue) => (
                  <option key={venue.name} value={venue.name}>
                    {venue.name} ({venue.location})
                  </option>
                ))}
              </Select>
              <TextInput
                id="tickets"
                type="number"
                name="tickets"
                placeholder="Number of Tickets"
                value={formData.tickets}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full">
                Create Event
              </Button>
            </form>
          </div>

          {/* Right: Image Section */}
          <div className="w-1/2 flex items-center justify-center bg-gray-200 rounded-lg">
            <img
              src={
                selectedVenue
                  ? selectedVenue.image_one
                  : "/etp-caragh/images/map_placeholder.jpg"
              }
              alt="Venue"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
