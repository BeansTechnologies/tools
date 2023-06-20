import {
    cmykToHex,
    cmykToRgb, hexToHsl,
    hexToRgb, hslToCmyk, hslToHex,
    hslToRgb,
    rgbaToRgb,
    rgbToCmyk,
    rgbToHex,
    rgbToHsl,
    rgbToRgba
} from "./features/colors/colorConverter";
import {
    addOrdinalSuffix,
    binaryToDecimal,
    binaryToHex,
    binaryToOctal,
    calculateAge,
    camelCase,
    celsiusToFahrenheit,
    celsiusToKelvin,
    counter,
    decimalToBinary,
    decimalToHex,
    decimalToOctal,
    decodeBase64,
    encodeBase64, extractURLs,
    fahrenheitToCelsius,
    fahrenheitToKelvin,
    formatBytes,
    formatTime12h,
    generateRandomId,
    getRange,
    hexToBinary,
    hexToDecimal,
    hexToOctal,
    inverseCase,
    isFutureDate,
    isLeapYear,
    isPalindrome,
    isValidEmail,
    isValidIPAddress, isValidPhoneNumber,
    isWeekend,
    kelvinToCelsius,
    kelvinToFahrenheit,
    loremIpsum,
    mixedCase,
    octalToBinary,
    octalToDecimal,
    octalToHex,
    sentenceCase,
    titleCase, truncateText
} from "./features";
import {buildUrl, getUrlQueryParams, removeURLParameter, setURLParameter, stringToSlug} from "./features/coding";
import {convertTo24HourFormat, formatTime, getCurrentTime, isValidTime} from "./features/dates";

/** Colors */
// const cmykColor = cmykToRgb(0.2, 0.4, 0.6, 0.8);
// console.log(cmykColor);
//
// const rgbColor = rgbToCmyk(255, 0, 127);
// console.log(rgbColor);
//
// const hexColor = rgbToHex(0, 128, 255);
// console.log(hexColor);
//
// const rgbColorFromHex = hexToRgb("#ff0000");
// console.log(rgbColorFromHex);
//
// const rgbaColor = rgbToRgba(255, 0, 0, 0.5);
// console.log(rgbaColor);
//
// const rgbColorFromRgba = rgbaToRgb(255, 0, 0, 0.5);
// console.log(rgbColorFromRgba);
//
// const hslColor = rgbToHsl(255, 255, 0);
// console.log(hslColor);
//
// const rgbColorFromHsl = hslToRgb(0.5, 1, 0.4);
// console.log(rgbColorFromHsl);
//
// const hexFromCmykColor = cmykToHex(0.2, 0.4, 0.6, 0.8)
// console.log(hexFromCmykColor);
//
// const hslFromHexColor = hexToHsl("#ff0000");
//
// console.log(hslFromHexColor);
//
// const hexfromHslColor = hslToHex(0.5, 1, 0.4);
// console.log(hexfromHslColor)
//
// const cmykfromhslColor = hslToCmyk(0.5, 1, 0.4);
// console.log(cmykfromhslColor);

/** Numeric systems */
// const binaryNumber = "101010";
// const octalNumber = binaryToOctal(binaryNumber);
// const decimalNumber = binaryToDecimal(binaryNumber);
// const hexNumber = binaryToHex(binaryNumber);
//
// console.log(octalNumber);
// console.log(decimalNumber);
// console.log(hexNumber);
//
//
// const octalNumber = "52";
// const binaryNumber = octalToBinary(octalNumber);
// const decimalNumber = octalToDecimal(octalNumber);
// const hexNumber = octalToHex(octalNumber);
//
// console.log(binaryNumber);
// console.log(decimalNumber);
// console.log(hexNumber);
//
//
// const decimalNumber = 42;
// const binaryNumber = decimalToBinary(decimalNumber);
// const octalNumber = decimalToOctal(decimalNumber);
// const hexNumber = decimalToHex(decimalNumber);
//
// console.log(binaryNumber);
// console.log(octalNumber);
// console.log(hexNumber);
//
//
// const hexNumber = "2A";
// const binaryNumber = hexToBinary(hexNumber);
// const octalNumber = hexToOctal(hexNumber);
// const decimalNumber = hexToDecimal(hexNumber);
//
// console.log(binaryNumber);
// console.log(octalNumber);
// console.log(decimalNumber);

/** Cases */
// console.log(sentenceCase("hello world. how are you! what is your name?"))
// console.log(titleCase("hello world. how are you! what is your name?"))
// console.log(mixedCase("hello world. how are you! what is your name?"))
// console.log(inverseCase("hello world. how are you! what is your name?"))
// console.log(camelCase("hello world. how are you! what is your name?"))

/** Text */
// console.log(loremIpsum(10, 3))

// console.log(isPalindrome('Madam'));
// console.log(isPalindrome('Hello'));

// console.log(counter("hello world. how are you! what is your name?"))

// console.log(truncateText("hello world. how are you! what is your name?", 10))

/** URLS */
// console.log(stringToSlug("hello world. how are you! what is your name?"))
//
// const url1 = "https://example.com/path?param1=value1&param2=value2&param2=value3&param3=value4&arrayParam[]=value1&arrayParam[]=value2";
// const queryParams1 = getUrlQueryParams(url1);
//
// console.log(queryParams1);
//
// const protocol = "https";
// const host = "example.com";
// const path = "/path";
// const queryParams = { param1: "value1", param2: ["value2", "value3"] };
// const url2 = buildUrl(protocol, host, path, queryParams);
//
// console.log(url2);
//
// const url3 = 'http://www.example.com/search?query=example&page=1';
// const newUrl = setURLParameter(url3, 'siema', '2');
// console.log(newUrl);
//
// const newerUrl = removeURLParameter(newUrl, 'page');
// console.log(newerUrl)

/** Encoding / Decoding */
// const encodedString = encodeBase64("Hello World!");
// console.log(encodedString)
//
// const decodedString = decodeBase64(encodedString);
// console.log(decodedString)

/** Dates */
// const currentTime = getCurrentTime();
// console.log(currentTime);
//
// const time = new Date();
// const formattedTime = formatTime(time, 'HH:mm');
// console.log(formattedTime);
//
// const convertedTime = convertTo24HourFormat('02:30 PM');
// console.log(convertedTime);
//
// console.log(isValidTime('12:30:45'));
// console.log(isValidTime('25:00:00'));
// console.log(isValidTime('12:60:00'));
// console.log(isValidTime('12:30:60'));
//
// const isLeap = isLeapYear(2023);
// console.log(isLeap);
//
// const futureDate = isFutureDate(new Date('2024-01-01'));
// console.log(futureDate);
//
// const birthDate = new Date(1999, 7, 9);
// const age = calculateAge(birthDate);
// console.log(age);
//
// const currentDate = new Date("2023-06-24");
// console.log(isWeekend(currentDate));
//
// console.log(formatTime12h(9, 30));
// console.log(formatTime12h(18, 45));

/** Degrees */
// console.log(kelvinToCelsius(300));
// console.log(kelvinToFahrenheit(300));
// console.log(celsiusToKelvin(-25));
// console.log(celsiusToFahrenheit(-25));
// console.log(fahrenheitToCelsius(77));
// console.log(fahrenheitToKelvin(77));
//
// console.log(addOrdinalSuffix(1));
// console.log(addOrdinalSuffix(22));
// console.log(addOrdinalSuffix(33));
// console.log(addOrdinalSuffix(41));
//
// const temperature = 120;
// const temperatureUnit = 'F';
// const temperatureRanges = [
//     { min: -Infinity, max: 0, label: 'Freezing' },
//     { min: 1, max: 10, label: 'Cold' },
//     { min: 11, max: 20, label: 'Moderate' },
//     { min: 21, max: 30, label: 'Warm' },
//     { min: 31, max: Infinity, label: 'Hot' }
// ];
//
// console.log(getRange(temperature, temperatureUnit, temperatureRanges));

/** Validators */
console.log(isValidEmail('john@example.com')); //true
console.log(isValidEmail('invalidemail@')); //false

console.log(isValidIPAddress('192.168.0.1')); //true
console.log(isValidIPAddress('256.0.0.1')); //false

console.log(isValidPhoneNumber('+48 123 456 789')); //true
console.log(isValidPhoneNumber('123-456-789')); //true
console.log(isValidPhoneNumber('123456789')); //true
console.log(isValidPhoneNumber('0048 123-456-789')); //true
console.log(isValidPhoneNumber('+1 123-456-789')); //false

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Visit my website at https://www.example.com for more information. You can also check out our blog at http://blog.example.com.';
console.log(extractURLs(text));

/** Other */
const randomId = generateRandomId(15);
console.log(randomId);

console.log(formatBytes(1024));
console.log(formatBytes(1234567890));