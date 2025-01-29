import React from "react";
import MusicPlayer from "./MusicPlayer";
import ThemeToggle from "./ThemeToggle";

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex h-[95vh]">
        <MusicPlayer />
      </div>
      {/* Footer Here */}
      <div className="bg-light-footer dark:bg-dark-footer mt-auto w-full py-2 text-black md:hidden dark:text-white">
        <footer className="text-center">&copy; 2025 Atlas School</footer>
      </div>
    </div>
  );
};

export default App;
