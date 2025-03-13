'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import 'flowbite/dist/flowbite.css';

interface Ticket {
    id: string;
    info: string;
}

const RefundTicketsPage: React.FC = () => {
    const [ticket] = useState<Ticket>({ id: '12345', info: 'Ticket information goes here' });
    const [confirmation, setConfirmation] = useState<boolean | null>(null);
    const [finalConfirmation, setFinalConfirmation] = useState<boolean | null>(null);
    const router = useRouter();

    const handleConfirmation = (choice: boolean) => {
        setConfirmation(choice);
        if (!choice) {
            setTimeout(() => {
                alert('Refund cancelled.');
                router.push('/dashboard/manage-tickets');
            }, 2000);
        }
    };

    const handleFinalConfirmation = (choice: boolean) => {
        setFinalConfirmation(choice);
        setTimeout(() => {
            if (choice) {
                alert('Refund processed.');
            } else {
                alert('Refund cancelled.');
            }
            router.push('/dashboard/manage-tickets');
        }, 2000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            {confirmation === null ? (
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Confirm Refund</h1>
                    <p className="mb-2 text-gray-700">Ticket ID: {ticket.id}</p>
                    <p className="mb-4 text-gray-700">{ticket.info}</p>
                    <button 
                        className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={() => handleConfirmation(true)}
                    >
                        Yes
                    </button>
                    <button 
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                        onClick={() => handleConfirmation(false)}
                    >
                        No
                    </button>
                </div>
            ) : confirmation && finalConfirmation === null ? (
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <h1 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">Are you sure?</h1>
                    <button 
                        className="px-4 py-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                        onClick={() => handleFinalConfirmation(true)}
                    >
                        Yes
                    </button>
                    <button 
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700"
                        onClick={() => handleFinalConfirmation(false)}
                    >
                        No
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default RefundTicketsPage;