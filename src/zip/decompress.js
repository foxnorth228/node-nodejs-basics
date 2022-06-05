import "zlib";
import "fs";

export const decompress = async () => {
    const gzip = createGunzip();
    const source = createReadStream('./files/archive.gz');
    const destination = createWriteStream('./files/fileToCompress.txt');
    source.pipe(gzip).pipe(destination);
};
