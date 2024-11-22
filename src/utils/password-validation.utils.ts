const hasNumber = /\d/;
const hasSymbols = /[^a-zA-Zа-яА-Я\d]/;
const hasAnyLetter = /\p{L}/u;

export const validationsArray: RegExp[] = [hasNumber, hasSymbols, hasAnyLetter];
