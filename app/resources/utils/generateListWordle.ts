import { palabras } from "./words";

interface formatInterface {
    className: string;
    value: string;
}

export const formatListWordle = (arrayWord: Array<string>) => {

    let format: Array<formatInterface[]> = []

    for (let i = 0; i < 5; i++) {
        format.push([])
        for (let y = 0; y < 5; y++) {

            format[i].push({
                className: '',
                value: ''
            })

        }

    }

    return generateClassName(format, arrayWord);

}

export const generateClassName = (listWordle: Array<formatInterface[]>, arrayWord: Array<string>) => {

    let format: Array<formatInterface[]> = []

    listWordle.forEach((list, i) => {
        format.push([])
        list.forEach((word, y) => {
            format[i].push({
                className: `${word.value === '' ? 'bg-[#939B9F4D]' : word.value === arrayWord[y] ? 'bg-[#66A060]' : arrayWord.includes(word.value) ? 'bg-[#CEB02C]' : 'bg-[#939B9F]'}`,
                value: word.value
            })
        })
    })


    return format;
}

export const deleteClassToList = (list: Array<formatInterface>) => {

    let simpleList: Array<string> = [];
    list.forEach(obj => {
        simpleList.push(obj.value);
    });

    return simpleList;

}

export const generateWords = () => {

    const textWords = palabras.replace(/\s+/g, ',');
    let array = textWords.split(',');
    let filterArray = array.filter(element => element.length === 5);
    
    
    return filterArray;

}

export const getRandomWord = (words:Array<string>) => {

    const random = Math.floor(Math.random() * words.length);

    return words[random].normalize('NFD').replace(/[\u0300-\u036f]/g,"");

}