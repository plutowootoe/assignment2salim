'use client';

import React from 'react';
import { Card } from 'flowbite-react';
import Link from 'next/link';

const tickets = [
    {
        id: 1,
        artist: 'Artist 1',
        image: '/assignment2salim/images/mj.jpg',
        price: '€50',
    },
    {
        id: 2,
        artist: 'Artist 2',
        image: '/assignment2salim/images/jh.jpg',
        price: '€60',
    },
    {
        id: 3,
        artist: 'Artist 3',
        image: '/assignment2salim/images/outkast.jpg',
        price: '€70',
    },
];

const ManageTickets: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Tickets</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tickets.map((ticket) => (
                    <Card key={ticket.id} className="max-w-sm">
                        <img src={ticket.image} alt={ticket.artist} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{ticket.artist}</h2>
                            <p className="text-gray-700">{ticket.price}</p>
                            <div className="mt-4">
                            <Link href="/dashboard/manage-tickets/resell-tickets">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                                Resell
                            </button>
                            </Link>
                            <Link href="/dashboard/manage-tickets/refund-tickets">
                            <button className="bg-red-500 text-white px-4 py-2 rounded">
                                Refund
                            </button>
                            </Link>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ManageTickets;