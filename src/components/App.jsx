import React from 'react';
import MusicPlayer from './MusicPlayer';
import Footer from './Footer';
import LoadingSkeleton from './Loading Skeleton';


function App() {
  return (
    <div className="flex flex-col w-full h-screen">
      {/* Skeleton Test
      <LoadingSkeleton />
      */}
      <div className="flex-grow flex flex-col">
        <MusicPlayer />
      </div>   
      <div className="bg-[#ffd480] dark:bg-chartreuse-300 dark:text-rose-50">   
        <Footer />
      </div>
    </div>
  );
};

export default App;
