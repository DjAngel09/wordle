import React from 'react'
import { Navbar } from '../components/Navbar'
import { Game } from '../components'

export const GameTemplate = () => {

  const word = 'perro';

  return (
    <>
      <Navbar />
      <Game />
    </>
  )
}
