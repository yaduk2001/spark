const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(() => console.log('Download completed: ' + dest));
        });
    }).on('error', (err) => {
        fs.unlink(dest, () => { }); // Delete the file async. (But we don't check the result)
        console.error('Error downloading ' + dest + ': ' + err.message);
    });
};

// URL for Party Popper
const popUrl = 'https://www.myinstants.com/media/sounds/party-popper.mp3';
download(popUrl, 'public/audio/pop.mp3');
