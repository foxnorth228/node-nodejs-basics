import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    fs.open(path.join(__dirname, "files/fresh.txt"), "wx", (err, fd) => {
        if(err) {
            if(err.code == "EEXIST") {
                err.message = "FS operation failed";
            }
            throw err;
        }

        try {
            fs.write(fd, "I am fresh and young", (err, written, string) => {
                if(err) {
                    throw err;
                }
            });
        } finally {
            fs.close(fd, (err) => {
                if (err) {
                    throw err;
                }
            });
        }
    });
};