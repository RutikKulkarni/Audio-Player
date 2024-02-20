import React, { useRef, useState, useEffect } from "react";
import styles from "./AudioPlayer.module.css";

const AudioPlayer = ({ currentSong, onSongEnd, isPlaylistEmpty }) => {
  const audioRef = useRef(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio && !isPlaylistEmpty) {
      audio.src = currentSong.url;
      audio.addEventListener("ended", onSongEnd);

      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }

      return () => {
        audio.removeEventListener("ended", onSongEnd);
      };
    }
  }, [currentSong, isPlaying, onSongEnd, isPlaylistEmpty]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className={styles.audioPlayer}>
      <h2>Now Playing</h2>
      {!isPlaylistEmpty ? (
        <>
          <p className={styles.songName}>{currentSong && currentSong.name}</p>
          <audio ref={audioRef} controls />
        </>
      ) : (
        <p className={styles.noSongMessage}>No songs in the playlist</p>
      )}
    </div>
  );
};

export default AudioPlayer;
