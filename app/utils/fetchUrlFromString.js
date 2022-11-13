const URL_REGEX = /(https?:\/\/[^ ]*)/;

export const fetchUrlFromString = (data) => {
    return input.match(urlRegex)[0];
}