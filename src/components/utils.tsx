import { Word } from "react-wordcloud";

export const convertWordsToJumbled = (word: string): Word[] => {
    const temp = word.split('').map((char: string) => {
        return {
            text: char.toUpperCase(),
            value: 100
        }
    })
    return temp;
}
