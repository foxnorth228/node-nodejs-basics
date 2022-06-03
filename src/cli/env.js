import { env } from "process";

export const parseEnv = () => {
    let str = "";
    for(const name in env) {
        if(name.startsWith("RSS_")) {
            str += `${name}=${env[name]}; `;
        }
    }
    console.log(str.slice(0, -2));
};
