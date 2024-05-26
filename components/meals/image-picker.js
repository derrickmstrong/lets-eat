"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const [preview, setPreview] = useState(null); // Create a state variable to store the preview image
  const handlePreview = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (!file) {
      setPreview(null); // Reset the preview if no file is selected
      return; // If no file, return
    }
    if (file) {
      const reader = new FileReader(); // Create a new FileReader
      reader.onload = () => setPreview(reader.result); // Set the preview image
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const imageInput = useRef(); // Create a reference to the file input element
  const handlePicker = () => {
    imageInput.current.click(); // Trigger the file picker
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!preview && <p>No image selected</p>}
          {preview && (
            <Image
              src={preview}
              alt="Preview"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              required
              aria-required="true"
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handlePreview}
        />
        <button className={styles.button} type="button" onClick={handlePicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
