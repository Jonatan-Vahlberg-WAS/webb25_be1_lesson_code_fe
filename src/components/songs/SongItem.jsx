function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function AlbumArt({ album }) {
  if (album?.coverUrl) {
    return <img className="song-cover" src={album.coverUrl} alt={album.title} />;
  }

  return (
    <div className="song-cover song-cover--placeholder">
      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
        <path
          d="M9 18V5l12-2v13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

function SongItem({ song, index }) {
  return (
    <div className="song-row">
      <span className="song-row__index">{index + 1}</span>
      <AlbumArt album={song.album} />
      <div className="song-row__info">
        <span className="song-row__title">{song.title}</span>
        <span className="song-row__artist">{song.artist?.name}</span>
      </div>
      <span className="song-row__album">{song.album?.title ?? "Single"}</span>
      <span className="song-row__duration">{formatDuration(song.length)}</span>
    </div>
  );
}

export default SongItem;
