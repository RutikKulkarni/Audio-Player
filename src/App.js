import React, { useState, useEffect } from "react";
import FileUpload from "./components/FileUpload/FileUpload";
import Playlist from "./components/Playlist/Playlist";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Alert from "@mui/material/Alert";
import "./App.css";

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [duplicateSongAlert, setDuplicateSongAlert] = useState(false);

  useEffect(() => {
    const savedPlaylist = JSON.parse(localStorage.getItem("playlist")) || [];
    setPlaylist(savedPlaylist);
  }, []);

  const handleFileChange = (file) => {
  };

  const handleUpload = (file) => {
    if (file) {
      const isSongAlreadyExists = playlist.some(
        (song) => song.name === file.name
      );

      if (isSongAlreadyExists) {
        setDuplicateSongAlert(true);
        setTimeout(() => {
          setDuplicateSongAlert(false);
        }, 3000);
      } else {
        const updatedPlaylist = [
          ...playlist,
          { name: file.name, url: URL.createObjectURL(file) },
        ];
        setPlaylist(updatedPlaylist);
        localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));
      }
    }
  };

  const handlePlay = (index) => {
    setCurrentSongIndex(index);
  };

  const handleDelete = (index) => {
    const updatedPlaylist = [...playlist];
    updatedPlaylist.splice(index, 1);
    setPlaylist(updatedPlaylist);
    localStorage.setItem("playlist", JSON.stringify(updatedPlaylist));

    if (index === currentSongIndex) {
      setCurrentSongIndex(0);
    }
  };

  const handleSongEnd = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  return (
    <div className="app">
      <h1>Audio Player</h1>
      <FileUpload onFileChange={handleFileChange} onUpload={handleUpload} />
      {duplicateSongAlert && (
        <Alert severity="warning">
          This song already exists in the playlist
        </Alert>
      )} <br></br>
      <Playlist
        playlist={playlist}
        onPlay={handlePlay}
        onDelete={handleDelete}
      />
      <AudioPlayer
        currentSong={playlist[currentSongIndex]}
        onSongEnd={handleSongEnd}
        isPlaylistEmpty={playlist.length === 0}
      />
    </div>
  );
};

export default App;
