//binary to others
export const binaryToOctal = (binary: string): string => {
    const padding = binary.length % 3 === 0 ? "" : "0".repeat(3 - (binary.length % 3));
    const paddedBinary = padding + binary;

    let octal = "";
    for (let i = 0; i < paddedBinary.length; i += 3) {
        const group = paddedBinary.substr(i, 3);
        const decimalValue = parseInt(group, 2);
        octal += decimalValue.toString(8);
    }

    return octal;
}

export const binaryToDecimal = (binary: string): number => {
    return parseInt(binary, 2);
};

export const binaryToHex = (binary: string): string => {
    const decimal = binaryToDecimal(binary);
    return decimal.toString(16).toUpperCase();
};

//octal to others
export const octalToBinary = (octal: string): string => {
    const decimal = parseInt(octal, 8);
    return decimal.toString(2);
};

export const octalToDecimal = (octal: string): number => {
    return parseInt(octal, 8);
};

export const octalToHex = (octal: string): string => {
    const decimal = parseInt(octal, 8);
    return decimal.toString(16).toUpperCase();
};

//decimal to others
export const decimalToBinary = (decimal: number): string => {
    return decimal.toString(2);
};

export const decimalToOctal = (decimal: number): string => {
    return decimal.toString(8);
};

export const decimalToHex = (decimal: number): string => {
    return decimal.toString(16).toUpperCase();
};

//hex to others
export const hexToBinary = (hex: string): string => {
    const decimal = parseInt(hex, 16);
    return decimal.toString(2);
};

export const hexToOctal = (hex: string): string => {
    const decimal = parseInt(hex, 16);
    return decimal.toString(8);
};

export const hexToDecimal = (hex: string): number => {
    return parseInt(hex, 16);
};
