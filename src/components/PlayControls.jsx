import React from 'react';
import shuffle from '../assets/shuffle.svg';
import rewind from '../assets/rewind.svg';
import play from '../assets/play.svg';
import forward from '../assets/forward.svg';
import speed from '../assets/speed.png';

const PlayControls = () => {
    return (
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
    );
};

export default PlayControls;