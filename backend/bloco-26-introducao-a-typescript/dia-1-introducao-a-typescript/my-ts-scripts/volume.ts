// import readline from "readline-sync"; // importamos o pacote readline-sync


const volume = ["km", "hm", "dam", "m", "dm", "cm", "mm"];


function convertVolume (value: number, baseUnit: string, convertUnit: string ){
    const fromIndex = mass.indexOf(baseUnit);
    const toIndex = mass.indexOf(convertUnit);
    const exponent = (toIndex - fromIndex);

    return value * Math.pow(10, exponent);

}
