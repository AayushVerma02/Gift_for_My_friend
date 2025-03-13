import React, { useState, useRef } from "react";
import First from "./first"; // Import the First component

const Background = () => {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.play().catch(() => {
        console.log("Autoplay blocked! Waiting for user interaction...");
      });
    }
    setEntered(true); // Show First.jsx after clicking
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/song.mp3" type="audio/mpeg" />
      </audio>

      {!entered ? (
        <div
          onClick={handleEnter}
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.1)", // Light transparency
            position: "fixed",
            top: 0,
            left: 0,
            backdropFilter: "blur(15px)", // Glassmorphic blur
            WebkitBackdropFilter: "blur(15px)", // Safari support
            transition: "opacity 1s ease-in-out",
            zIndex: 9999, // Ensure it's on top
          }}
        >
          <div
            style={{
              padding: "20px 50px",
              fontSize: "26px",
              fontWeight: "bold",
              color: "#fff",
              background: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
              borderRadius: "15px",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            Enter
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Background;