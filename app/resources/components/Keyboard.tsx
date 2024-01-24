import React, { FC } from 'react'
import { CharacterCube } from '.'

interface keyboardInterface {
    addWord: (newWord: string) => void;
}

export const Keyboard: FC<keyboardInterface> = ({ addWord }) => {

    const keyboard = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'], ['ENTRER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']]

    return (
        <div className='bg-[#DADCE04D] px-5 py-8 rounded-xl' >
            {
                keyboard.map((keyList, index) =>
                    <div
                        key={index}
                        className={`flex gap-3 pb-3 ${index === 0 && 'pl-8'} ${index === 1 && 'pl-12'}`}
                    >
                        {
                            keyList.map((key, i) =>
                                <div
                                    key={i}
                                    className='cursor-pointer'
                                    onClick={() => addWord(key)}
                                >
                                    <CharacterCube styles='bg-[#D3D6DA] px-3 py-3 min-w-[44px] text-center text-[#56575E] dark:bg-[#565F7E] dark:text-[#FFFFFF]' >
                                        <p className='text-lg font-semibold' >{key}</p>
                                    </CharacterCube>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
