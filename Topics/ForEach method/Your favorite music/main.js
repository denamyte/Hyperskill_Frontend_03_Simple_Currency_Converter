const music = ["rock", "pop", "hip-hop", "electronic"];

const myFavoriteMusic = music =>
    music.forEach((genre, _, genres) =>
        console.log(`My favorite music is ${genre} choosing from ${genres}`));