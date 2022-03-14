const image = document.querySelector('img');
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const music = document.querySelector('audio');
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Check if Playing 
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause')
  music.play()
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play')
  music.pause();
}

// Music 
const songs = [
  {
    name: 'jacinto-1',
    displayName: "Electric Chill Machine",
    artist: 'Jacinto Design'
  },
  {
    name: 'jacinto-2',
    displayName: "Seven Nation Army (Remix)",
    artist: 'Jacinto Design'
  },
  {
    name: 'jacinto-3',
    displayName: "Psycho Tommy & His Mom",
    artist: 'Jacinto Design'
  },
  {
    name: 'metric-1',
    displayName: "Safe Haven, Holly Hell",
    artist: 'Jacinto Design'
  }
];

// Update DOM
function loadSong(song) {
  music.setAttribute('src', `./${song.name}.mp3`);
  image.setAttribute('src', `/img/${song.name}.jpg`);
  title.textContent = song.displayName;
}

// Current Song
let songIndex = 0;

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex])
  playSong()
  console.log("songIndex = ", songIndex);
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length -1) {
    songIndex = 0
  }
  loadSong(songs[songIndex]);
  playSong()
  console.log("songIndex = ", songIndex);
}

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong() ));
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);