//hex to other colors
export function hexToRgb(hex: string): [number, number, number] | null {
    if (!hex.startsWith("#")) {
        return null;
    }
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) return null;

    const [, hexR, hexG, hexB] = match;
    const r = parseInt(hexR, 16);
    const g = parseInt(hexG, 16);
    const b = parseInt(hexB, 16);
    return [r, g, b];
}

export function hexToHsl(hex: string): [number, number, number] | null {
    if (!hex.startsWith("#")) {
        return null;
    }

    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    return rgbToHsl(...rgb);
}

export function hexToCmyk(hex: string): [number, number, number, number] | null {
    if (!hex.startsWith("#")) {
        return null;
    }

    const rgb = hexToRgb(hex);
    if (!rgb) return null;
    return rgbToCmyk(...rgb);
}

//cmyk to other colors

export function cmykToRgb(c: number, m: number, y: number, k: number): [number, number, number] {
    const r = Math.round((1 - c) * (1 - k) * 255);
    const g = Math.round((1 - m) * (1 - k) * 255);
    const b = Math.round((1 - y) * (1 - k) * 255);
    return [r, g, b];
}

export function cmykToHex(c: number, m: number, y: number, k: number): string {
    const [r, g, b] = cmykToRgb(c, m, y, k);
    return rgbToHex(r,g,b)
}

export function cmykToHsl(c: number, m: number, y: number, k: number): [number, number, number] {
    const [r, g, b] = cmykToRgb(c, m, y, k);
    return rgbToHsl(r, g, b);
}

// rgb/rgba to other colors
export function rgbToCmyk(r: number, g: number, b: number): [number, number, number, number] {
    const c = 1 - r / 255;
    const m = 1 - g / 255;
    const y = 1 - b / 255;
    const k = Math.min(c, m, y);
    return [c, m, y, k];
}

export function rgbToHex(r: number, g: number, b: number): string {
    const componentToHex = (c: number) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hexR = componentToHex(r);
    const hexG = componentToHex(g);
    const hexB = componentToHex(b);
    return `#${hexR}${hexG}${hexB}`;
}

export function rgbToRgba(r: number, g: number, b: number, a: number): [number, number, number, number] {
    return [r, g, b, a];
}

export function rgbaToRgb(r: number, g: number, b: number, a: number): [number, number, number] {
    return [r, g, b];
}

export function rgbToHsl(rr: number, gg: number, bb: number): [number, number, number] {
    const r = rr / 255;
    const g = gg / 255;
    const b = bb / 255;
    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const delta = max - min;
    let h;
    let s;

    if (max === min) {
        h = 0;
    } else if (r === max) {
        h = (g - b) / delta;
    } else if (g === max) {
        h = 2 + (b - r) / delta;
    } else if (b === max) {
        h = 4 + (r - g) / delta;
    }

    // @ts-ignore
    h = Math.min(h * 60, 360);

    if (h < 0) {
        h += 360;
    }

    const l = (min + max) / 2;

    if (max === min) {
        s = 0;
    } else if (l <= 0.5) {
        s = delta / (max + min);
    } else {
        s = delta / (2 - max - min);
    }

    return [h, s * 100, l * 100];
}

//hsl to other colors
export function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
}

export function hslToHex(h: number, s: number, l: number): string {
    const [r, g, b] = hslToRgb(h, s, l);
    return rgbToHex(r, g, b);
}

export function hslToCmyk(h: number, s: number, l: number): [number, number, number, number] {
    const [r, g, b] = hslToRgb(h, s, l);
    return rgbToCmyk(r, g, b);
}