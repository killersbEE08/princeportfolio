// Recently played tracks shown in the hero card (Apple Music).
// Values come from Apple's free iTunes API — album art, track link, and a
// 30-second preview clip for on-site playback (no developer account needed).
//
// To change a track:
//   1. Hit https://itunes.apple.com/search?term=SONG+ARTIST&entity=song
//   2. Copy `trackViewUrl` -> songUrl, `previewUrl` -> previewUrl
//   3. Take `artworkUrl100` and swap `100x100bb.jpg` for `200x200bb.jpg` -> albumArt
export type Track = {
  title: string;
  artist: string;
  albumArt: string;
  songUrl: string;
  previewUrl: string;
};

export const recentTracks: Track[] = [
  {
    title: "God Mode Begins",
    artist: "Sai Abhyankkar",
    albumArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/d4/c4/38/d4c43885-7866-3ac4-e323-b9ca6a7621ec/cover.jpg/200x200bb.jpg",
    songUrl:
      "https://music.apple.com/us/album/god-mode-begins/6773013206?i=6773013478",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/86/d0/3886d08d-1e96-dc45-d4fd-9138fc7748a3/mzaf_13976698916373719684.plus.aac.p.m4a",
  },
  {
    title: "Raga of Revenge",
    artist: "Anirudh Ravichander",
    albumArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/55/25/b4/5525b4ec-5854-7526-a2c9-df9d78fc89ec/885288108606.jpg/200x200bb.jpg",
    songUrl:
      "https://music.apple.com/us/album/raga-of-revenge/6794258483?i=6794258484",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f9/75/44/f9754404-0f9a-aa7a-47be-c5fe43989616/mzaf_6102729765026866745.plus.aac.p.m4a",
  },
  {
    title: "Closer (feat. Halsey)",
    artist: "The Chainsmokers",
    albumArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/200x200bb.jpg",
    songUrl:
      "https://music.apple.com/us/album/closer-feat-halsey/1170699510?i=1170699703",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/bd/f9/b9/bdf9b9b2-eaa4-4461-6079-aaacc6df7316/mzaf_17327312786932455493.plus.aac.p.m4a",
  },
  {
    title: "changes",
    artist: "XXXTENTACION",
    albumArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/f0/b0/21/f0b021d2-8bfb-e2ff-93f9-17c64147f971/18UMGIM14845.rgb.jpg/200x200bb.jpg",
    songUrl: "https://music.apple.com/us/album/changes/1359292515?i=1359294051",
    previewUrl:
      "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d5/1a/6c/d51a6cd7-f4b7-bd35-e014-0e81a1303daa/mzaf_3621842314415643868.plus.aac.p.m4a",
  },
];
