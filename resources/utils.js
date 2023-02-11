export const replaceSymbols = (value) => {
    return value
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/&/g, "&amp;");
};
