'use client'
import { useState } from 'react';
import { CharacterCube } from './CharacterCube'
import { ModalComponent } from './ModalComponent'

export const HowToPlay = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <i
        className="fa-solid fa-circle-question text-[#818181]"
        onClick={() => setShowModal(true)}
      ></i>
      
      <ModalComponent open={showModal} >
        <div>
          <p>Cómo jugar</p>
          <p>Adivina la palabra oculta en cinco intentos.</p>
          <p>Cada intento debe ser una palabra válida de 5 letras.</p>
          <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>

          <span>Ejemplos</span>
          <CharacterCube styles='' >
            G
          </CharacterCube>

        </div>
      </ModalComponent>
    </>
  )
}
