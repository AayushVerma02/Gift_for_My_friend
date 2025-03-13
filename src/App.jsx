import React, { useState } from "react";
import First from "./pages/first.jsx";
import Second from "./pages/second.jsx";
import BackgroundMusic from "./pages/Background.jsx";
const App = () => {
  const [book, setBook] = useState(false);

  return (
    <>
      <BackgroundMusic />
      {book ? <Second setBook={setBook} /> : <First setBook={setBook} />}
    </>
  );
};

export default App;