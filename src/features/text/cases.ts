export const sentenceCase = (str: string): string => {
    const sentences = str.split(/([.!?])\s*/);
    const newSentences = sentences.map((sentence, index) => {
        if (index % 2 === 0) {
            return sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1);
        } else {
            return sentence + " ";
        }
    });
    return newSentences.join("");
};

export const titleCase = (str: string): string => {
    const words = str.split(" ");
    const newWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return newWords.join(" ");
}

export const mixedCase = (str: string): string => {
    let mixedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            mixedStr += str[i].toUpperCase();
        } else {
            mixedStr += str[i].toLowerCase();
        }
    }
    return mixedStr;
};

export const inverseCase = (str: string): string => {
    let inverseStr = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            inverseStr += str[i].toLowerCase();
        } else {
            inverseStr += str[i].toUpperCase();
        }
    }
    return inverseStr;
}

export const camelCase = (str: string): string => {
    const words = str.split(" ");
    const newWords = words.map((word, index) => {
        if (index === 0) {
            return word.toLowerCase()
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1)
        }
    });
    return newWords.join("").replace(/[^a-zA-Z0-9]/g, "");;
};
