import React from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { HowToPlay } from './HowToPlay'
import { Statistics } from './Statistics';

export const Navbar = () => {
    return (
        <div className='felx bg-[#F3F3F3] py-2 px-4 rounded-2xl' >
            <nav className="flex justify-between w-full items-center">
                <HowToPlay />
                <p className=' text-4xl text-[#202537] text-center font-semibold' >WORDLE</p>
                <div className='flex items-center text-[#818181] gap-1' >
                    <Statistics/>
                    <ThemeSwitcher />
                </div>
            </nav>
        </div>
    )
}
