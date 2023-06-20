import {loremIpsumSentences} from "../../constants";

export const counter = (str: string): {characters: number, words: number, sentences: number} => {
    const sentences = str.split(/[.!?]/).filter((sentence) => sentence !== '');

    return {
        characters: str.trim().length,
        words: str.split(" ").length,
        sentences: sentences.length,
    }
}

export const loremIpsum = (sentencesPerParagraph: number, paragraphs: number): string => {
    return Array(paragraphs)
        .fill(null)
        .map(() => {
            const paragraphSentences = Array(sentencesPerParagraph)
                .fill(null)
                .map(() => {
                    const randomIndex = Math.floor(Math.random() * loremIpsumSentences.length);
                    return loremIpsumSentences[randomIndex];
                });
            return paragraphSentences.join(" ");
        })
        .join("\n\n");
};

export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
        return text;
    }

    return text.slice(0, maxLength) + '...';
}

export const isPalindrome = (str: string): boolean => {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalizedStr === str.split('').reverse().join('');
}

export const addOrdinalSuffix = (number: number): string => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const moduloTen = number % 10;
    const moduloHundred = number % 100;

    if (moduloTen === 1 && moduloHundred !== 11) {
        return number + 'st';
    } else if (moduloTen === 2 && moduloHundred !== 12) {
        return number + 'nd';
    } else if (moduloTen === 3 && moduloHundred !== 13) {
        return number + 'rd';
    } else {
        return number + 'th';
    }
}