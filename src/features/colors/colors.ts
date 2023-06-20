export const randomHex = (): string => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export const randomRGB = (): string => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}

export const randomRGBA = (): string => {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random().toFixed(1)})`;
}

export const randomHSL = (): string => {
    return `hsl(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%)`;
}

export const randomHSLA = (): string => {
    return `hsla(${Math.floor(Math.random() * 360)}, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 100)}%, ${Math.random().toFixed(1)})`;
}

export const randomColor = (): string => {
    const random = Math.floor(Math.random() * 5);
    switch (random) {
        case 0:
            return randomHex();
        case 1:
            return randomRGB();
        case 2:
            return randomRGBA();
        case 3:
            return randomHSL();
        case 4:
            return randomHSLA();
        default:
            return randomHex();
    }
}

export * from "./colorConverter"