import 'path';
import { release, version } from "os";
import { createServer as createServerHttp } from 'http';
import './files/c';
import './files/a.json' as fileA;
import './files/b.json' as fileB;

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = fileA;
} else {
    unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});
