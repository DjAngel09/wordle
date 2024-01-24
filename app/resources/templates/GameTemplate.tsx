'use client'
import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Game } from '../components'
import { words } from '../utils/words'
import { useTimer } from 'react-timer-hook'

export const GameTemplate = () => {

  let finalWords: Array<string> = [];
  const timeStamp = new Date(Date.now() + 300 * 1000)
  const [word, setWord] = useState('perro');
  const [listWordle, setListWordle] = useState([['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']]);
  const {
    seconds,
    minutes,
    restart
  } = useTimer({
    expiryTimestamp: timeStamp,
    onExpire: () => console.warn('onExpire called')
  });

  useEffect(() => {
    finalWords = [];
    words.forEach(word => {
      if (word.length === 5) {
        finalWords.push(word.normalize('NFD').replace(/[\u0300-\u036f]/g,""))
      }
    });
    setWord(finalWords[0]);
    console.log(finalWords, word);
  }, []);

  const addWord = (newWord: string) => {
    let arrWord = word.split('');
    let TempList = listWordle;
    TempList.some((list, index) => {
      let tem = false; 
      list.some((wordArg, i) => {
        if(wordArg === ''){
          TempList[index][i] = newWord.toLowerCase();
          tem = true;
          return true;
        }
      });
      
      if(JSON.stringify(arrWord) === JSON.stringify(list)){
        console.log('tu eres el ganador');
        return true;
      } else if(tem){
        return true;
      }
    });
    
  }

  const winner = () => {
    console.log('ganaste');
  }

  return (
    <>
      <Navbar seconds={seconds} minutes={minutes}/>
      <Game 
        word={word} 
        listWordle={listWordle}
        addWord={addWord}
      />
    </>
  )
}
