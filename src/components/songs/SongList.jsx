import SongItem from "./SongItem";

function SongList({ songs }) {
  if (!songs.length) {
    return <p className="empty-state">No songs found.</p>;
  }

  return (
    <div className="song-list">
      <div className="song-list__header">
        <span className="song-list__col-index">#</span>
        <span className="song-list__col-cover"></span>
        <span className="song-list__col-title">Title</span>
        <span className="song-list__col-album">Album</span>
        <span className="song-list__col-duration">Duration</span>
      </div>
      {songs.map((song, i) => (
        <SongItem key={song._id} song={song} index={i} />
      ))}
    </div>
  );
}

export default SongList;
