const URL_REGEX = /(https?:\/\/[^ ]*)/;

export const fetchUrlFromString = (data) => {
    return data.match(URL_REGEX)[0];
}