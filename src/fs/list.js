import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const list = async () => {
    const files = join(__dirname, "files");
    try {
        const dir = await fs.opendir(files);
        for await (const direct of dir) {
            console.log(direct.name);
        }
    } catch(err) {
        if(err.code === "ENOENT") {
            const err = new Error("FS operation failed");
            throw err;
        } else {
            throw err;
        }
    }
};
list();