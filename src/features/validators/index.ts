export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const isValidIPAddress = (ipAddress: string): boolean => {
    const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return ipRegex.test(ipAddress);
}

export const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^(?:\+?48)?(?:\s|-)?(?:\d{3}\s?-?){3}$/;
    return phoneRegex.test(phoneNumber);
}

export const extractURLs = (text: string): string[] => {
    const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
    return text.match(urlRegex) || [];
}
