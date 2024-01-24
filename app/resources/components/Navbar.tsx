'use client'

import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import { HowToPlay } from './HowToPlay'
import { Statistics } from './Statistics';

interface navbarInterface {
    seconds: number;
    minutes: number;
    plays: number;
    victories: number;
    showWord: boolean;
    restartGame: () => void;
    word: string
}

export const Navbar: FC<navbarInterface> = ({ seconds, minutes, victories, plays, showWord, restartGame, word }) => {

    return (
        <div className='felx bg-[#F3F3F3] dark:bg-[#DADCE008] py-2 px-4 rounded-2xl' >
            <nav className="flex justify-between w-full items-center">
                <HowToPlay />
                <p className=' text-4xl text-[#202537] dark:text-[#DADCE0] text-center font-semibold' >WORDLE</p>
                <div className='flex items-center text-[#818181] gap-2' >
                    <Statistics
                        seconds={seconds}
                        minutes={minutes}
                        plays={plays}
                        victories={victories}
                        showWord={showWord}
                        restartGame={restartGame}
                        word={word}
                    />
                    <ThemeSwitcher />
                </div>
            </nav>
        </div>
    )
}
