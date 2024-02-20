import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import styles from "./FileUpload.module.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUpload = ({ onFileChange, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    onFileChange(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div className={styles.fileUpload}>
      {selectedFile ? (
        <>
          <div className={styles.selectedFileContainer}>
            <p>{selectedFile.name}</p>
          </div>
          <div className={styles.uploadButtonContainer}>
            <button className={styles.uploadButton} onClick={handleUpload}>
              Upload
            </button>
          </div>
        </>
      ) : (
        <div className={styles.fileInputContainer}>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Choose a Song
            <VisuallyHiddenInput
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
