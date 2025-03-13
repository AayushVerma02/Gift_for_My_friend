import { useState } from "react";
import "./FlipBook.css"
const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 8;

  const handlePageClick = (index, isBack) => {
    setCurrentPage(isBack ? index : index + 1);
  };

  return (
    <div className="book" style={{ "--c": currentPage }}>
      {pages.map((page, index) => (
        <div className="page" key={index} style={{ "--i": index }}>
          <div className={`front ${page.cover ? "cover" : ""}`} onClick={() => handlePageClick(index, false)}>
            {page.frontContent}
          </div>
          <div className="back" onClick={() => handlePageClick(index, true)}>
            {page.backContent}
          </div>
        </div>
      ))}
    </div>
  );
};

const pages = [
  {
    cover: true,
    frontContent: (
      <>
        <h1 className="title">Happy Birthday, My Love! 🎂❤️</h1>
        <p className="subtitle">Rupesh</p>
      </>
    ),
    backContent: (
      <>
        <h2>Before You Begin...</h2>
        <video src="video.mp4" controls className="video" autoPlay loop/>
        <p>Anamika, i hope you remember our moments. ❤️😊</p>
      </>
    ),
  },
  {
    frontContent: (
      <>
        <h2>The Day You Were Born 🎉</h2>
        <p>
          On this day, the world became a better place because **you** were born.  
          Every moment since then, you've brought joy, love, and magic to everyone around you.  
        </p>
      </>
    ),
    backContent: <img src="./11.jpg" alt="Image 1" className="image" />,
  },
  {
    frontContent: (
      <>
        <h2>Your Beauty, My Queen 👑💖</h2>
        <p>
          Your smile is the **highlight of my day**, and your laughter is the sweetest melody.  
          You are truly one of a kind, and I’m lucky to have you in my life.  
        </p>
      </>
    ),
    backContent: <p>Your dedication, hard work, and passion stand out...</p>,
  },
  {
    frontContent: (
      <>
        <h2>Talking to You is My Favorite Habit 💕</h2>
        <p>
          Every conversation with you feels like a **beautiful dream** that I never want to wake up from.  
          You make my world brighter, and I cherish every moment we spend together.  
        </p>
      </>
    ),
    backContent: <img src="./22.jpg" alt="Image 2" className="image" />,
  },
  {
    frontContent: (
      <>
        <h2>A Birthday Wish from the Heart 🎈💖</h2>
        <p>
          I sometimes wish I could meet you in person right now, just to see your beautiful smile.  
          **May this year bring you endless happiness and love.**  
        </p>
      </>
    ),
    backContent: <p>You are an inspiration, and I'll always be here for you...</p>,
  },
  {
    frontContent: (
      <>
        <h2>Your Perfection 🌸</h2>
        <p>
          Can we talk about how **stunning** you look in any outfit?  
          Whether you’re dressed up or in casuals, you **shine like a star**.  
        </p>
      </>
    ),
    backContent: <p>Your confidence and vibe captivate everyone around you.</p>,
  },
  {
    frontContent: (
      <>
        <h2>My Final Birthday Wish For You 🎁💘</h2>
        <p>
          I just wanted to let you know how much **I appreciate and adore you**.  
          **Will you be mine forever?** 💕  
        </p>
      </>
    ),
    backContent: <p>Always stay with me ❤️</p>,
  },
  {
    frontContent: <img src="./44.png" alt="Image 3" className="image" />,
    backContent: (
      <>
        <h3>Cutest Queen 👸❤️</h3>
        <p>
          You are the most special person in my life, and I’m beyond grateful for you.  
          **Happy Birthday once again, Madam Ji! 🎂❤️**  
        </p>
        <p>Your's truly,<br /> Truly your's : Rupesh </p>
      </>
    ),
  },
];


export default FlipBook;
