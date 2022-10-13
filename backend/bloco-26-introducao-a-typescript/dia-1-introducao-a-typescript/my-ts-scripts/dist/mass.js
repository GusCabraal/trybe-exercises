"use strict";
const mass = ["km", "hm", "dam", "m", "dm", "cm", "mm"];
// enum mass {
//     kg,
//     hg,
//     dag,
//     g,
//     dg,
//     cg,
//     mg,
//   }
function convertMass(value, baseUnit, convertUnit) {
    const fromIndex = mass.indexOf(baseUnit);
    const toIndex = mass.indexOf(convertUnit);
    const exponent = (toIndex - fromIndex);
    return value * Math.pow(10, exponent);
}
