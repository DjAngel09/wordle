'use client'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { ModalComponent } from './ModalComponent';

interface statisticsInterface {
    seconds: number;
    minutes: number;
    plays: number;
    victories: number;
    showWord: boolean;
    restartGame: () => void
    word: string
}

export const Statistics:FC<statisticsInterface> = ({seconds, minutes, plays, victories, showWord, restartGame, word}) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      if(plays > 0  || victories > 0){
        setShowModal(true);
      }
    }, [plays, victories]);

    const acept = () => {
        if(showWord){
            restartGame();
        }

        setShowModal(false)
    }
    

    return (
        <>
            <i
                className="fa-solid fa-square-poll-vertical dark:text-[#DADCE0] text-xl"
                onClick={() => setShowModal(true)}
            ></i>

            <ModalComponent open={showModal} >
                <div className='text-lg font-normal text-black dark:text-[#ffffff]' >
                    <p className='text-center text-4xl font-extrabold mx-14 ' >Estadísticas</p>

                    <div className='flex justify-between text-center pb-14 pt-8' >
                        <div>
                            <p className='font-bold' >{plays}</p>
                            <p>Jugadas</p>
                        </div>
                        <div>
                            <p className='font-bold' >{victories}</p>
                            <p>Victorias</p>
                        </div>
                    </div>

                    {
                        showWord &&
                        <p className='text-center mb-4' >La palabra era: <span className='font-bold' >{word}</span></p>
                    }

                    <p className='text-center' >SIGUIENTE PALABRA</p>
                    <p className='text-center font-bold' >{`${minutes}:${seconds}`}</p>

                    <div className='flex justify-center pt-8' >
                        <button
                            className='bg-[#6AAA64] px-16 py-1 m-auto text-white rounded-md text-2xl font-extrabold cursor-pointer'
                            onClick={() => acept()}
                        >Aceptar</button>
                    </div>

                </div>
            </ModalComponent>
        </>
    )
}
