javascript
let player;
let playlist = [
    "VIDEO_ID_1", // Замени со реални ID-еви од YouTube
    "VIDEO_ID_2",
    "VIDEO_ID_3"
];

let jingleId = "";
let adId = "";
let currentSongIndex = 0;
let playedSongsCount = 0;

function onYouTubeIframeAPIReady() {
    shufflePlaylist();
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: playlist[currentSongIndex],
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        playNextSong();
    }
}

function playNextSong() {
    playedSongsCount++;
    if (playedSongsCount % 3 === 0 && jingleId) {
        playJingle();
        return;
    }

    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    player.loadVideoById(playlist[currentSongIndex]);
}

function playJingle() {
    player.loadVideoById(jingleId);
    setTimeout(() => {
        playNextSong();
    }, 10000); // џинглото трае 10 секунди
}

function playRadio() {
    player.playVideo();
}

function stopRadio() {
    player.stopVideo();
}

function shufflePlaylist() {
    playlist.sort(() => Math.random() - 0.5);
    currentSongIndex = 0;
}

// Реклами на секои 5 минути
setInterval(() => {
    if (adId) {
        player.loadVideoById(adId);
        setTimeout(() => {
            playNextSong();
        }, 30000);
    }
}, 300000);
