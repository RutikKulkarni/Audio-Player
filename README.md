# Audio Player 

This project is a simple audio player application that allows users to upload audio files (e.g., mp3), store them using built-in browser APIs, and play them in a playlist. The application features a standard HTML audio player and provides a playlist view along with a "Now Playing" display.

## Project Links

- **Live Demo:** [Audio Player](https://audio-player-alpha-seven.vercel.app/)

## Features

- **Upload Audio Files:** Users can upload audio files, currently supporting mp3 format.
- **Storage:** The application utilizes built-in browser APIs to store and manage uploaded audio files.
- **Playlist and Now Playing View:** The application displays a playlist and a "Now Playing" view, allowing users to see the current playing audio and the list of uploaded audio files.
- **Playback Control:** Users can play any file from the playlist, and playback continues to the next file upon completion.
- **Persistent State:** When the page is reloaded, the application loads the last playing audio file and continues playing from the last position.

## Usage

1. **Upload Audio Files:**
   - Click on the "Choose a Song" button to select an audio file for upload.
   - Supported format: mp3.

2. **Playlist:**
   - The uploaded audio files will be displayed in the playlist section.
   - Click on any song in the playlist to start playing it.

3. **Now Playing:**
   - The "Now Playing" section displays the currently playing audio file.

4. **Playback Control:**
   - Use the standard HTML audio player controls to play, pause, and navigate through the audio.

5. **Persistent State:**
   - The application stores the playlist and the last playing audio file in the browser's local storage.
   - When the page is reloaded, the last playing audio file is loaded, and playback continues from the last position.

## Project Structure

- **components/:** Contains React components for FileUpload, Playlist, and AudioPlayer.
- **App.js:** The main application component that integrates the components and handles state and logic.
- **styles/:** Contains CSS styles for styling components.
- **public/:** Holds the HTML file and other static assets.
