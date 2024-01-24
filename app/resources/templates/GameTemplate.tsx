'use client'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Game } from '../components'
import { useTimer } from 'react-timer-hook'
import { generateWords, getRandomWord } from '../utils'

export const GameTemplate = () => {

  let finalWords: Array<string> = [];
  const words = generateWords();
  const timeStamp = new Date(Date.now() + 300 * 1000)
  const [word, setWord] = useState('');
  const [plays, setPlays] = useState(0);
  const [victories, setVictories] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const [clean, setClean] = useState(false);

  const {
    seconds,
    minutes,
    restart,
    pause,
    start
  } = useTimer({
    expiryTimestamp: timeStamp,
    onExpire: () => notWinner()
  });

  useEffect(() => {

    getWord();
    
  }, []);

  const winner = () => {
    setPlays(plays + 1);
    setVictories(victories + 1);
    pause();
    setShowWord(true);
  }

  const notWinner = () => {
    setPlays( plays + 1 );
    pause();
    setShowWord(true);
    getWord();
  }

  const restartGame = () => {
    restart(timeStamp, true);
    setClean(true);
    setShowWord(false);
    getWord();
  }

  const getWord = () => {
    setWord(getRandomWord(words));    
  }

  return (
    <>
      <Navbar 
        seconds={seconds} 
        minutes={minutes} 
        victories={victories}
        plays={plays}
        showWord={showWord}
        restartGame={restartGame}
        word={word}
      />
      <Game 
        word={word} 
        winner = {winner}
        notWinner = {notWinner}
        clean = {clean}
        setClean = {setClean}
      />
    </>
  )
}
