'use client'
import React, { useEffect } from 'react'
import { CharacterCube, Keyboard } from '.';

export const Game = () => {

    const word = 'perro';

    const data = [['P', 'G', 'Y', 'R', 'M'], ['A', 'J', 'O', 'L', 'E'], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']];

    return (
        <>
            <div className='pt-16 pb-12 flex justify-center' >
                <div>
                    {
                        data.map(list =>
                            <div className='flex gap-3 pb-3' >
                                {
                                    list.map(letter =>
                                        <CharacterCube styles={`flex justify-center items-center w-[76px] h-[76px] ${letter === '' ? 'bg-[#939B9F4D]' : 'bg-[#6AAA64]'}`}>
                                            <p className='text-3xl font-semibold' >{letter}</p>
                                        </CharacterCube>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <Keyboard />
        </>
    )
}
