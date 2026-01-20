const fs = require('fs');
const https = require('https');

const download = (url, dest) => {
    const file = fs.createWriteStream(dest);
    const options = {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
    };

    https.get(url, options, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
            download(response.headers.location, dest);
            return;
        }
        response.pipe(file);
        file.on('finish', () => {
            file.close(() => console.log('Download completed: ' + dest));
        });
    }).on('error', (err) => {
        console.error('Error downloading ' + dest + ': ' + err.message);
    });
};

// Alternative URL for Pop sound (SoundJay is usually reliable)
download('https://www.soundjay.com/misc/sounds/party-horn-1.mp3', 'public/audio/pop.mp3');
// Note: User wanted "pop", this is "horn". Let's try to find a better "pop" or stick with myinstants if header fix works.
// Let's try the myinstants one again with headers.
download('https://www.myinstants.com/media/sounds/party-popper.mp3', 'public/audio/pop_real.mp3');

// Clapping sound
download('https://www.soundjay.com/human/sounds/applause-01.mp3', 'public/audio/clap.mp3');

// Firework/Cracker Burst
download('https://www.soundjay.com/misc/sounds/fireworks-01.mp3', 'public/audio/burst.mp3');
