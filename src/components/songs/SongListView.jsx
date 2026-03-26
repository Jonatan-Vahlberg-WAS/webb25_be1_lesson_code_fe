import { useEffect, useState } from "react";
import SongList from "./SongList";
import { getSongs } from "../../api/songs";
import CreateSongFormRHF from "./CreateSongFormRHF";

export default function SongListView() {
  const [songs, setSongs] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  async function _getSongs() {
    const _songs = await getSongs();
    setSongs(_songs);
  }

  useEffect(() => {
    _getSongs();
  }, [refreshKey]);

  return (
    <div>
      <CreateSongFormRHF onCreated={() => setRefreshKey((k) => k + 1)} />
      <SongList songs={songs} />
    </div>
  );
}
