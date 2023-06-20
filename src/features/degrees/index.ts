export const kelvinToCelsius = (kelvin: number): number => {
    return parseFloat((kelvin - 273.15).toFixed(2));
};

export const kelvinToFahrenheit = (kelvin: number): number => {
    return parseFloat(((kelvin - 273.15) * 9/5 + 32).toFixed(2));
};

// Fahrenheit to others
export const fahrenheitToCelsius = (fahrenheit: number): number => {
    return parseFloat(((fahrenheit - 32) * 5/9).toFixed(2));
};

export const fahrenheitToKelvin = (fahrenheit: number): number => {
    return parseFloat(((fahrenheit - 32) * 5/9 + 273.15).toFixed(2));
};

// Celsius to others
export const celsiusToKelvin = (celsius: number): number => {
    return parseFloat((celsius + 273.15).toFixed(2));
};

export const celsiusToFahrenheit = (celsius: number): number => {
    return parseFloat(((celsius * 9/5) + 32).toFixed(2));
};

//others
export const getRange = (value: number, unit: 'C' | 'K' | 'F', ranges: { min: number, max: number, label: string }[]): string => {
    let convertedValue = value;

    if (unit === 'K') {
        convertedValue = kelvinToCelsius(value);
    } else if (unit === 'F') {
        convertedValue = fahrenheitToCelsius(value);
    }

    const range = ranges.find(range => convertedValue >= range.min && convertedValue <= range.max);
    return range ? range.label : '';
}