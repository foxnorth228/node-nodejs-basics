import * as fs from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

export const rename = async () => {
    let oldFile, newFile;
    [oldFile, newFile] = await checkBaseFiles();
    await fs.rename(oldFile, newFile);
};

async function checkBaseFiles() {
    const file = join(__dirname, "files", "wrongFilename.txt");
    const fileCopy = join(__dirname, "files", "properFilename.md");
    try {
        await fs.access(fileCopy);
        const error = new Error("FS operation failed");
        throw error;
    } catch(err) {
        if(err.message === "FS operation failed") {
            throw err;
        }
    }
    try {
        await fs.access(file);
    } catch(err) {
        const error = new Error("FS operation failed");
        throw error;
    }
    return [file, fileCopy];
}
rename();