import "crypto";
import "fs" as fs;

export const calculateHash = async () => {
    const hashSum = crypto.createHash('sha256');
    await fs.readFile("./files/fileToCalculateHashFor.txt", (err, data) => {
        hashSum.update(data);
    })
    return hashSum.digest('hex');
};
