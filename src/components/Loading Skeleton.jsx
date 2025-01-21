import React from 'react';
import shuffle from '../assets/shuffle.svg';
import rewind from '../assets/rewind.svg';
import play from '../assets/play.svg';
import forward from '../assets/forward.svg';
import speed from '../assets/speed.png';
import volume from "../assets/volume.svg";


const LoadingSkeleton = () => {
    return (
        <div className="mx-auto p-4 bg-white shadow-md rounded-lg animate-pulse flex flex-col md:flex-row gap-8 w-full h-full">
            {/* Left Section - Music Player */}
            <div className="w-full h-screen md:w-1/2 p-4">
                <div className="bg-gray-200 dark:bg-gray-700 w-full mb-4 aspect-square"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mb-4"></div>

                <div className="flex w-full items-center justify-between">
                            <button className="flex items-center justify-center">
                                <img src={speed} className='w-6 h-6' />
                            </button>
                            <button className="flex items-center justify-center">
                                <img src={rewind} className='w-6 h-6' />
                            </button>
                            <button className="flex items-center justify-center">
                                <img src={play} className='w-6 h-6' />
                            </button>
                            <button className="flex items-center justify-center">
                                <img src={forward} className='w-6 h-6' />
                            </button>
                            <button className="flex items-center justify-center">
                                <img src={shuffle} className='w-6 h-6' />
                            </button>
                        </div>

                <div className="flex items-center space-x-3 mt-2">
                    {/* Volume Button */}
                    <img src={volume} className='h-6 w-6' />
                    {/* Slider */}
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg mt-2"></div>
                </div>
            </div>
            {/* Right Section - Playlist */}
            <div className="w-full h-screen md:w-1/2 p-4">
                <h2 className="text-2xl font-extrabold pb-6">Playlist</h2>
                <div className="space-y-12">
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-3/4">
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-1/4 mt-2"></div>
                        </div>
                        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-sm w-12"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSkeleton;