import React from 'react'
import { CharacterCube } from '.'

export const Keyboard = () => {

    const keyboard = [['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'], ['ENTRER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']]

    return (
        <div className='bg-[#DADCE04D] px-5 py-8 rounded-xl' >
            {
                keyboard.map((keyList, index) =>
                    <div className={`flex gap-3 pb-3 ${index === 0 && 'pl-8'} ${index === 1 && 'pl-12'}`} >
                        {
                            keyList.map((key) =>
                                <CharacterCube styles='bg-[#D3D6DA] px-3 py-3 min-w-[44px] text-center cursor-pointer text-[#56575E]' >
                                    <p className='text-lg font-semibold' >{key}</p>
                                </CharacterCube>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}
