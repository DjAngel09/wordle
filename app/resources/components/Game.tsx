'use client'
import React, { FC, useEffect, useState } from 'react'
import { CharacterCube, Keyboard } from '.';

interface gameInterface { 
    word: string;
    listWordle: Array<string[]>
    addWord:(newWord: string) => void;
}

export const Game:FC<gameInterface> = ({ word, listWordle, addWord }) => {
    const [arrayWord, setArrayWord] = useState(word.split(''))

    useEffect(() => {
      setArrayWord(word.split(''));
    }, [word])
    
    

    return (
        <>
            <div className='pt-16 pb-12 flex justify-center' >
                <div>
                    {
                        listWordle.map((list, i) =>
                            <div key={i} className='flex gap-3 pb-3' >
                                {
                                    list.map((letter, index) =>
                                        <CharacterCube key={index} styles={`flex justify-center items-center w-[76px] h-[76px] ${letter === '' ? 'bg-[#939B9F4D]' : 'bg-[#939B9F]'} ${letter === arrayWord[index] ? 'bg-[#66A060]' : arrayWord.includes(letter) ?  'bg-[#CEB02C]' : ''}`}>
                                            <p className='text-3xl font-semibold' >{letter.toUpperCase()}</p>
                                        </CharacterCube>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            <Keyboard addWord={addWord}/>
        </>
    )
}
