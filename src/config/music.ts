// Favorite song shown in the hero card (Apple Music).
// Values come from Apple's free iTunes API — album art, track link, and a
// 30-second preview clip for on-site playback (no developer account needed).
//
// To change the song:
//   1. Hit https://itunes.apple.com/search?term=SONG+ARTIST&entity=song
//   2. Copy `trackViewUrl` -> songUrl, `previewUrl` -> audioSrc
//   3. Take `artworkUrl100` and swap `100x100bb.jpg` for `400x400bb.jpg` -> albumArt
export const favoriteTrack = {
  title: "God Mode Begins",
  artist: "Sai Abhyankkar",
  album: "Karuppu (Original Motion Picture Soundtrack)",
  albumArt:
    "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d4/c4/38/d4c43885-7866-3ac4-e323-b9ca6a7621ec/cover.jpg/400x400bb.jpg",
  songUrl:
    "https://music.apple.com/us/album/god-mode-begins/6773013206?i=6773013478",
  /** 30s Apple Music preview clip used for the on-site play button. */
  audioSrc:
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/86/d0/3886d08d-1e96-dc45-d4fd-9138fc7748a3/mzaf_13976698916373719684.plus.aac.p.m4a",
};
