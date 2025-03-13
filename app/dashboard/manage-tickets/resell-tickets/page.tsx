'use client';
import React, { useState } from 'react';
import { Card, Dropdown, Button, Textarea } from 'flowbite-react';

const ResellTicketsPage: React.FC = () => {
    const [selectedDuration, setSelectedDuration] = useState('1 day');
    const [sellPrice, setSellPrice] = useState('');
    const [message, setMessage] = useState('');

    const handleDurationChange = (duration: string) => {
        setSelectedDuration(duration);
    };

    const handleSellPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSellPrice(event.target.value);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const handleSubmit = () => {
        alert('Ticket resell submitted successfully!');
        window.location.href = 'assignment2salim/dashboard/manage-tickets';
    };

    return (
        <div className="container mx-auto p-4">
            <Card>
                <h2 className="text-xl font-bold mb-4">Resell Your Ticket</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Duration</label>
                    <Dropdown
                        label={selectedDuration}
                        onChange={(event) => handleDurationChange((event.target as HTMLButtonElement).value)}
                    >
                        <Dropdown.Item onClick={() => handleDurationChange('1 day')}>1 day</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDurationChange('3 days')}>3 days</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDurationChange('7 days')}>7 days</Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Sell Price</label>
                    <input
                        type="number"
                        value={sellPrice}
                        onChange={handleSellPriceChange}
                        placeholder="Enter sell price"
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <Textarea
                        value={message}
                        onChange={handleMessageChange}
                        placeholder="Enter a message"
                    />
                </div>
                <Button onClick={handleSubmit}>Submit</Button>
            </Card>
        </div>
    );
};

export default ResellTicketsPage;