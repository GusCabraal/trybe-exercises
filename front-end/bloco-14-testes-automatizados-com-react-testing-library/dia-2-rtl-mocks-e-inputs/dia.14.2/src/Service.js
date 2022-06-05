const randomNumberGenerator = () => {
    return Math.floor(Math.random() * 100 )
}

const convertToUpperCase = (palavra) => {
    return palavra.toUpperCase();
} 

const firstString = (palavra) => {
    return palavra[0];
}

const concatStrings = (p1, p2) => {
    return `${p1}${p2}`;
} 

module.exports = {
    randomNumberGenerator,
    convertToUpperCase,
    firstString,
    concatStrings
};