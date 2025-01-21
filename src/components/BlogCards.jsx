import React from 'react';
import { useState } from 'react';
import '@cscfi/csc-ui-react/css/theme.css';
import { CCard, CIcon, CCardContent } from '@cscfi/csc-ui-react';
import { mdiArrowRight } from '@mdi/js';

const BlogCardComponent = ({ title, date, type }) => {
    return (
<CCard className="flex flex-col border border-gray-200 rounded-none shadow-md overflow-hidden hover:shadow-lg p-0 m-0 w-full"> {/* Adjusted card width */}
            <img src='/assets/images/topology/thumbnail.png' alt="Logo" className="w-full h-28 scale-125 object-cover m-0 p-0" /> {/* Reduced image height */}
            <CCardContent className="flex flex-col border-none m-0">
                <div>
                    <a
                        href="#"
                        className="text-md text-black-500 hover:underline font-medium"
                    >
                        {title}
                    </a>
                    <p className="text-sm text-gray-500 pb-2 pt-1">
                        {type} | {date}
                    </p>
                </div>
            </CCardContent>
        </CCard>
    );
};



export const BlogCard = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">Blogs and instructions</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <BlogCardComponent
                    title="Why Qubit Layout Should Be Considered when Designing Quantum Circuits"
                    date="12.4.2023"
                    type="Blog"
                />
                <BlogCardComponent
                    title="Why Qubit Layout Should Be Considered when Designing Quantum Circuits"
                    date="12.4.2023"
                    type="Instruction"
                />
                <BlogCardComponent
                    title="Why Qubit Layout Should Be Considered when Designing Quantum Circuits"
                    date="12.4.2023"
                    type="News"
                />
                <BlogCardComponent
                    title="Why Qubit Layout Should Be Considered when Designing Quantum Circuits"
                    date="12.4.2023"
                    type="News"
                />
                <BlogCardComponent
                    title="Why Qubit Layout Should Be Considered when Designing Quantum Circuits"
                    date="12.4.2023"
                    type="News"
                />
            </div>
            <div className="mt-4">
            <a
                    href="#"
                    className="text-sky-800 hover:underline font-bold"
                >
                    <div className="flex items-center gap-3">
                        <div className="text-sm">All blogs and instructions</div>
                        <CIcon className="text-lg" path={mdiArrowRight} />
                    </div>
                </a>
            </div>
        </div>
    );
};
