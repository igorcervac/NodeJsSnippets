const fs = require('fs');

if (fs.existsSync('./data.json')){
    fs.unlink('./data.json', (err) => {
        if (err) {
            console.error(err);
        }else {
            console.info('File deleted');
        }
    })
}

let certificate = { title:'AZ-204', year: 2023 };
const json = JSON.stringify(certificate);
fs.writeFile('./data.json', json, () => {
    console.info('File saved');
});

fs.readFile('./data.json', (err, data) => {
    if (err){
        console.error(err);
    } else {
        certificate = JSON.parse(data);
        console.info('File opened');
        console.info(certificate);
    }
});