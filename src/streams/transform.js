import "stream";
import "readline";
import { Transform } from "stream";

export const transform = async () => { 
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Enter a sentence(use "exit" to exit): '
    });
    
    const reverseStream = new Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
            callback();
        }
    });
    
    rl.prompt();
      
    rl.on('line', (line) => {
        switch (line.trim()) {
            case 'exit':
                rl.close();
                break;
            default:
                sentence = line + '\n'
                process.stdin.pipe(reverseStream).pipe(process.stdout);
                rl.prompt();
                break;
        }
    });
};
