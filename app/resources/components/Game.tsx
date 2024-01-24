'use client'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { CharacterCube, Keyboard } from '.';
import { deleteClassToList, formatListWordle, generateClassName } from '../utils';

interface gameInterface { 
    word: string;
    winner: () => void;
    notWinner: () => void;
    clean: boolean;
    setClean: Dispatch<SetStateAction<boolean>>;
}

export const Game:FC<gameInterface> = ({ word, winner, notWinner, clean, setClean }) => {
    const [arrayWord, setArrayWord] = useState(word.split(''));
    const [listWordle, setListWordle] = useState(formatListWordle(arrayWord));


    useEffect(() => {
      setArrayWord(word.split(''));
      console.log('estas usando esta palabra', word);
      
    }, [word]);

    useEffect(() => {
      if(clean){
        setListWordle(formatListWordle(arrayWord));
        setClean(false);
      }
    }, [clean])

    const addWord = (newWord: string) => {
        let TempList = listWordle.slice();
        TempList.some((list, index) => {
          let tem = false; 
          let finish = false;
          list.some((wordArg, i) => {
            if(newWord.length === 1){
              if(wordArg.value === ''){
                TempList[index][i].value = newWord.toLowerCase();
                
                if(TempList[4][4] === TempList[index][i]){
                  finish = true;
                  tem = false;
                }else {
                  tem = true;
                }
                
                return true;
              }
            }
          });
          
          
          if(JSON.stringify(arrayWord) === JSON.stringify(deleteClassToList(list))){
            setListWordle(generateClassName(TempList, arrayWord));
            winner();
            return true;
          } else if(tem){
            setListWordle(generateClassName(TempList, arrayWord));
            return true;
          } else if (finish){
            setListWordle(generateClassName(TempList, arrayWord));
            notWinner();
            return true;
          }
        });
        
      }
    
    

    return (
        <>
            <div className='pt-16 pb-12 flex justify-center' >
                <div>
                    {
                        listWordle.map((list, i) =>
                            <div key={i} className='flex gap-3 pb-3' >
                                {
                                    list.map((letter, index) =>
                                        <CharacterCube key={index} styles={`flex justify-center items-center w-[76px] h-[76px] ${letter.className}`}>
                                            <p className='text-3xl font-semibold' >{letter.value.toUpperCase()}</p>
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
