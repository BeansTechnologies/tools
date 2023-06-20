export const encodeBase64 = (str: string): string => {
    return btoa(str);
}

export const decodeBase64 = (str: string): string => {
    return atob(str);
}