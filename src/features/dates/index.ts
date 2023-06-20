export const isLeapYear = (year: number): boolean => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export const isFutureDate = (date: Date): boolean => {
    const currentDate = new Date();
    return date.getTime() > currentDate.getTime();
}

export const getCurrentTime = (): string => {
    const currentTime = new Date();
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

export const formatTime = (time: Date, format: string): string => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    format = format.replace('HH', hours);
    format = format.replace('mm', minutes);
    format = format.replace('ss', seconds);

    return format;
}

export const isValidTime = (time: string): boolean => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return !isNaN(hours) && !isNaN(minutes) && !isNaN(seconds) &&
        hours >= 0 && hours < 24 &&
        minutes >= 0 && minutes < 60 &&
        seconds >= 0 && seconds < 60;
}

export const convertTo24HourFormat = (time12h: string): string => {
    const [time, period] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (period.toLowerCase() === 'pm') {
        hours = (parseInt(hours, 10) + 12).toString();
    }

    return `${hours}:${minutes}`;
}

export const calculateAge = (birthDate: Date): number => {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - birthDate.getTime();
    const ageDate = new Date(diffInMilliseconds);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export const isWeekend = (date: Date): boolean => {
    const day = date.getDay();
    return day === 0 || day === 6;
}

export const formatTime12h = (hours: number, minutes: number): string => {
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes} ${period}`;
}