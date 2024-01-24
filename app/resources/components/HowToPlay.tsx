'use client'
import { useState } from 'react';
import { CharacterCube } from './CharacterCube'
import { ModalComponent } from './ModalComponent'

export const HowToPlay = () => {

  const [showModal, setShowModal] = useState(true);

  return (
    <>
      <i
        className="fa-solid fa-circle-question text-[#818181] dark:text-[#DADCE0]"
        onClick={() => setShowModal(true)}
      ></i>

      <ModalComponent open={showModal} >
        <div className='text-lg font-normal' >
          <p className='text-center text-4xl font-extrabold mb-8' >Cómo jugar</p>

          <p>Adivina la palabra oculta en cinco intentos.</p>
          <br />
          <p>Cada intento debe ser una palabra válida de 5 letras.</p>
          <br />
          <p className='mb-4' >Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>

          <span className='font-bold' >Ejemplos</span>
          <div className='flex gap-3 justify-center pt-6 pb-5' >
            <CharacterCube styles='bg-[#6AAA64] px-6 py-4' >
              <p className='text-3xl font-extrabold' >G</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >A</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >T</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >O</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >S</p>
            </CharacterCube>
          </div>
          <p>La letra <span className='font-bold' >G</span> está en la palabra y el posición correcta</p>
          <div className='flex gap-3 justify-center py-5' >
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >V</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >O</p>
            </CharacterCube>
            <CharacterCube styles='bg-[#CEB02C] px-6 py-4' >
              <p className='text-3xl font-extrabold' >C</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >A</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >L</p>
            </CharacterCube>
          </div>
          <p>La letra <span className='font-bold' >C</span> está en la palabra pero en la posición incorrecta.</p>
          <div className='flex gap-3 justify-center py-5' >
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >C</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >A</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >N</p>
            </CharacterCube>
            <CharacterCube styles='border border-black dark:border-white px-6 py-4' >
              <p className='text-3xl font-extrabold' >T</p>
            </CharacterCube>
            <CharacterCube styles='bg-[#939B9F] px-6 py-4' >
              <p className='text-3xl font-extrabold' >O</p>
            </CharacterCube>
          </div>
          <p className='mb-8' >La letra <span className='font-bold' >O</span> no está en la palabra.</p>
          <p>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
          <p className='my-8 text-center' >¡Una palabra nueva cada 5 minutos!</p>
          <div className='flex justify-center' >
            <button
              className='bg-[#6AAA64] px-16 py-1 m-auto text-white rounded-md text-2xl font-extrabold cursor-pointer'
              onClick={() => setShowModal(false)}
            >!JUGAR¡</button>
          </div>

        </div>
      </ModalComponent>
    </>
  )
}
