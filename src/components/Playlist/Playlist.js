import React from "react";
import styles from "./Playlist.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const Playlist = ({ playlist, onPlay, onDelete }) => {
  return (
    <div className={styles.playlist}>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((song, index) => (
          <li key={index}>
            <span onClick={() => onPlay(index)}>{`${index + 1}. ${
              song.name
            }`}</span>
            <button
              onClick={() => onDelete(index)}
              className={styles.deleteButton}
            >
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
