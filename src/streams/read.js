import "fs";
import "stream";

export const read = async () => {
    const readableStream = fs.createReadStream("./files/fileToRead.txt", "utf8");

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })

    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    }) 
};
