import "zlib";
import "fs";

export const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream('./files/fileToCompress.txt');
    const destination = createWriteStream('./files/archive.gz');
    source.pipe(gzip).pipe(destination);	
};
