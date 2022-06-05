import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const remove = async () => {
    try{
        await fs.rm(join(__dirname, "files", "fileToRemove.txt"));
    } catch(err) {
        if(err.code === "ENOENT") {
            const err = new Error("FS operation failed");
            throw err;
        } else {
            throw err;
        }
    }
};