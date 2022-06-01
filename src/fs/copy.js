import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const copy = async (files=undefined, filesCopy=undefined) => {
    if(files === undefined || filesCopy === undefined) {
        [files, filesCopy] = await checkBaseDirs(); 
    }
    const dir = await fs.opendir(files);
    await fs.mkdir(filesCopy);
    for await (const direct of dir) {
        if(direct.isDirectory()) {
            await copy(join(files, direct.name), join(filesCopy, direct.name));
        } else if (direct.isFile()) {
            fs.copyFile(join(files, direct.name), join(filesCopy, direct.name));
        }
    }
};

async function checkBaseDirs() {
    const files = join(__dirname, "files");
    const filesCopy = join(__dirname, "files_copy");
    try {
        await fs.access(filesCopy);
        const error = new Error("FS operation failed");
        throw error;
    } catch(err) {
        if(err.message === "FS operation failed") {
            throw err;
        }
    }
    try {
        await fs.access(files);
    } catch(err) {
        const error = new Error("FS operation failed");
        throw error;
    }
    return [files, filesCopy];
}