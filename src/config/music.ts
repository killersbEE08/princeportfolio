// Favorite song shown in the hero card (Apple Music).
// Values come from Apple's free iTunes API — album art, track link, and a
// 30-second preview clip for on-site playback (no developer account needed).
//
// To change the song:
//   1. Hit https://itunes.apple.com/search?term=SONG+ARTIST&entity=song
//   2. Copy `trackViewUrl` -> songUrl, `previewUrl` -> audioSrc
//   3. Take `artworkUrl100` and swap `100x100bb.jpg` for `400x400bb.jpg` -> albumArt
export const favoriteTrack = {
  title: "Hamari Saanson Mein Aaj Tak",
  artist: "Mehdi Hassan",
  album: "The Definitive Collection, Vol. 3",
  albumArt:
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/06/ab/18/06ab1860-b85b-3eb2-4492-a6dcea7b9f9b/197187357413.jpg/400x400bb.jpg",
  songUrl:
    "https://music.apple.com/us/album/hamari-saanson-mein-aaj-tak/1653187009?i=1653187033",
  /** 30s Apple Music preview clip used for the on-site play button. */
  audioSrc:
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/f4/70/75/f4707574-e5e8-26ee-7fd6-836e5766e8f0/mzaf_13814618967937012180.plus.aac.p.m4a",
};
