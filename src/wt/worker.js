import 'worker_threads' as worker;
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    if(worker.isMainThread) {
        const worker1 = new worker.Worker(__filename, { workerData: { n: 17 }});
        worker1.on('message', (msg) => {
            console.log(msg);
        });
    } else {
        parentPort.postMessage(nthFibonacci(workerData.n));
    }
};
