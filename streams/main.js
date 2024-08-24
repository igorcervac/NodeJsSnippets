const fs = require('fs');

const readStream = fs.createReadStream('./data/in.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./data/out.txt');
readStream.on('data', (chunk) => {
    writeStream.write('\nChunk\n');
    writeStream.write(chunk);
});

const readStreamForPipe = fs.createReadStream('./data/in2.txt', { encoding: 'utf8' });
const writeStreamForPipe = fs.createWriteStream('./data/out2.txt');
readStreamForPipe.pipe(writeStreamForPipe);