export const stringToSlug = (str: string): string => {
    if (!str) return "";
    str = str.replace(/^\s+|\s+$/g, ""); // trim
    str = str.toLowerCase();

    const from = "àáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaaeeeeiiiioooouuuunc------";
    for (let i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }

    str = str
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    return str;
};

export const getUrlQueryParams = (url: string): { [key: string]: string | string[] } => {
    const queryParams: { [key: string]: string | string[] } = {};
    const urlObj = new URL(url);

    urlObj.searchParams.forEach((value: string, key: string) => {
        if (queryParams.hasOwnProperty(key)) {
            if (Array.isArray(queryParams[key])) {
                //@ts-ignore
                queryParams[key].push(value);
            } else {
                queryParams[key] = [queryParams[key] as string, value];
            }
        } else if (/\[\]$/.test(key)) {
            const arrayKey = key.slice(0, -2);
            queryParams[arrayKey] = [value];
        } else {
            queryParams[key] = value;
        }
    });

    return queryParams;
};

export const buildUrl = (
    protocol: string,
    host: string,
    path: string,
    queryParams: { [key: string]: string | string[] }
): string => {
    const urlObj = new URL(`${protocol}://${host}${path}`);
    Object.entries(queryParams).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((v) => urlObj.searchParams.append(key, v));
        } else {
            urlObj.searchParams.set(key, value);
        }
    });
    return urlObj.href;
};

export const setURLParameter = (url: string, paramName: string, paramValue: string): string => {
    const params = new URLSearchParams(url);

    if (params.has(paramName)) {
        params.set(paramName, paramValue);
    } else {
        params.append(paramName, paramValue);
    }

    const queryParams: string[] = [];
    for (const [key, value] of params.entries()) {
        queryParams.push(`${key}=${value}`);
    }


    const baseUrl = url.split('?')[0];
    return queryParams.length > 0 ? `${queryParams.filter((e) => e !== url).join('&')}` : baseUrl;
}

export const removeURLParameter = (url: string, paramName: string): string => {
    const params = new URLSearchParams(url);

    params.delete(paramName);

    const queryParams: string[] = [];
    for (const [key, value] of params.entries()) {
        queryParams.push(`${key}=${value}`);
    }

    const baseUrl = url.split('?')[0];
    return queryParams.length > 0 ? `${queryParams.filter((e) => e !== url).join('&')}` : baseUrl;
}
