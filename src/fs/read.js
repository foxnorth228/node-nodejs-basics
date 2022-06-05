import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const read = async () => {
    try{
        const file = await fs.readFile(join(__dirname, "files", "fileToRead.txt"));
        console.log(file.toString('utf-8'));
    } catch(err) {
        if(err.code === "ENOENT") {
            const err = new Error("FS operation failed");
            throw err;
        } else {
            throw err;
        }
    } 
};