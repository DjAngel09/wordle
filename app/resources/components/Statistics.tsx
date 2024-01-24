'use client'
import React, { useState } from 'react'
import { ModalComponent } from './ModalComponent';

export const Statistics = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <i
                className="fa-solid fa-square-poll-vertical dark:text-[#DADCE0]"
                onClick={() => setShowModal(true)}
            ></i>

            <ModalComponent open={showModal} >
                <div className='text-lg font-normal text-black dark:text-[#ffffff]' >
                    <p className='text-center text-4xl font-extrabold mx-14 ' >Estadísticas</p>

                    <div className='flex justify-between text-center pb-14 pt-8' >
                        <div>
                            <p className='font-bold' >8</p>
                            <p>Jugadas</p>
                        </div>
                        <div>
                            <p className='font-bold' >2</p>
                            <p>Victorias</p>
                        </div>
                    </div>

                    <p className='text-center' >SIGUIENTE PALABRA</p>
                    <p className='text-center font-bold' >04:10</p>

                    <div className='flex justify-center pt-8' >
                        <button
                            className='bg-[#6AAA64] px-16 py-1 m-auto text-white rounded-md text-2xl font-extrabold cursor-pointer'
                            onClick={() => setShowModal(false)}
                        >Aceptar</button>
                    </div>

                </div>
            </ModalComponent>
        </>
    )
}
