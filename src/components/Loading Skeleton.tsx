import React from "react";
import shuffle from "../assets/shuffle.svg";
import rewind from "../assets/rewind.svg";
import play from "../assets/play.svg";
import forward from "../assets/forward.svg";
import speed from "../assets/speed.png";
import volume from "../assets/volumeIcon.svg";

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="mx-auto flex h-full w-full animate-pulse flex-col gap-8 rounded-lg bg-white p-4 shadow-md md:flex-row">
      {/* Left Section - Music Player */}
      <div className="h-screen w-full p-4 md:w-1/2">
        <div className="mb-4 aspect-square w-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2 h-4 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-4 h-4 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>

        <div className="flex w-full items-center justify-between">
          <button className="flex items-center justify-center">
            <img src={speed} className="h-6 w-6" />
          </button>
          <button className="flex items-center justify-center">
            <img src={rewind} className="h-6 w-6" />
          </button>
          <button className="flex items-center justify-center">
            <img src={play} className="h-6 w-6" />
          </button>
          <button className="flex items-center justify-center">
            <img src={forward} className="h-6 w-6" />
          </button>
          <button className="flex items-center justify-center">
            <img src={shuffle} className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-2 flex items-center space-x-3">
          {/* Volume Button */}
          <img src={volume} className="h-6 w-6" />
          {/* Slider */}
          <div className="mt-2 h-2 w-full rounded-lg bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
      {/* Right Section - Playlist */}
      <div className="h-screen w-full p-4 md:w-1/2">
        <h2 className="pb-6 text-2xl font-extrabold">Playlist</h2>
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="w-3/4">
              <div className="h-3 w-1/2 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
              <div className="mt-2 h-3 w-1/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="h-3 w-12 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
