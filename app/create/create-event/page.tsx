"use client"

import { Button, Label, TextInput, Textarea } from "flowbite-react"
import React from "react";
import { useState } from "react";

export default function Page() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        location: "",

    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Event Created:", formData);
      };

      return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Create Event</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Event Title</Label>
              <TextInput id="title" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <TextInput id="date" type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <TextInput id="location" name="location" value={formData.location} onChange={handleChange} required />
            </div>
            <Button type="submit">Create Event</Button>
          </form>
        </div>
      );
    }

