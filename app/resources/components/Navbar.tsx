'use client'

import React, { FC, useEffect } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { HowToPlay } from './HowToPlay'
import { Statistics } from './Statistics';

interface navbarInterface {
    seconds: number;
    minutes: number;
}

export const Navbar:FC<navbarInterface> = ({seconds, minutes}) => {

    return (
        <div className='felx bg-[#F3F3F3] dark:bg-[#DADCE008] py-2 px-4 rounded-2xl' >
            <nav className="flex justify-between w-full items-center">
                <HowToPlay />
                <p className=' text-4xl text-[#202537] dark:text-[#DADCE0] text-center font-semibold' >WORDLE</p>
                <div className='flex items-center text-[#818181] gap-2' >
                    <Statistics seconds={seconds} minutes={minutes} />
                    <ThemeSwitcher />
                </div>
            </nav>
        </div>
    )
}
