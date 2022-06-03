import { argv } from "process";

export const parseArgs = () => {
    const arg = argv.slice(2);
    let str = "";
    for(let i = 0; i < arg.length; i+=2) {
        str += `${arg[i].slice(2)} is ${arg[i + 1]}, `;
    }
    console.log(str.slice(0, -2));
};
